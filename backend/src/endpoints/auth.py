from datetime import timedelta
from typing import Annotated

import jwt
from fastapi import APIRouter, Depends, HTTPException, Cookie
from fastapi.security import OAuth2PasswordRequestForm
from starlette import status

from schemes.schemes import UserReg, UserLog
from services.user import UserService
from utils.auth import verify_password, generate_token, verify_token
from utils.config import ACCESS_TOKEN_EXPIRE_MINUTES, REFRESH_TOKEN_EXPIRE_DAYS
from utils.dependens import user_service_fabric

auth_router = APIRouter(prefix='/auth', tags=['Auth'])


@auth_router.post("/token")
async def login_for_token(user_service: Annotated[UserService, Depends(user_service_fabric)],
                          form_data: OAuth2PasswordRequestForm = Depends(), ):
    user = await user_service.get_user_by_username(form_data.username)
    if not user and verify_password(user.password, form_data.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Неправильное имя пользователя или пароль",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    refresh_token_expires = timedelta(days=REFRESH_TOKEN_EXPIRE_DAYS)
    access_token = generate_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    refresh_token = generate_token(
        data={"sub": user.username}, expires_delta=refresh_token_expires
    )
    return {"access_token": access_token, "refresh_token": refresh_token, "token_type": "bearer"}


@auth_router.post("/refresh")
async def login_for_access_token(refresh_token: str = Cookie(None)):
    if not refresh_token:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Неверный токен",
            headers={"WWW-Authenticate": "Bearer"},
        )
    try:
        username = verify_token(refresh_token)
        access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
        access_token = generate_token(
            data={"sub": username}, expires_delta=access_token_expires
        )
    except jwt.PyJWTError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Неверный токен",
            headers={"WWW-Authenticate": "Bearer"},
        )
    return {"access_token": access_token, "token_type": "bearer"}


@auth_router.post('/register')
async def register(user: UserReg, user_service: Annotated[UserService, Depends(user_service_fabric)]):
    await user_service.create_user(user)
    return "User created successfully"
