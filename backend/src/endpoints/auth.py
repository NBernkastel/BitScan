from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm

from schemes.schemes import UserReg, UserLog
from services.user import UserService
from utils.auth import verify_password
from utils.dependens import user_service_fabric

auth_router = APIRouter(prefix='/auth', tags=['Auth'])


@app.post('/token')
def login(user: Annotated[OAuth2PasswordRequestForm, Depends()]):
    db_user = user_collection.find_one({"username": user.username})
    if db_user is None:
        raise HTTPException(status_code=401, detail="Incorrect username or password")
    if verify_password(db_user["password"].encode(), user.password):
        return Token(access_token=generate_token(db_user["username"]), token_type="bearer")
    else:
        raise HTTPException(status_code=401, detail="Incorrect username or password")


@auth_router.post('/register')
async def register(user: UserReg, user_service: Annotated[UserService, Depends(user_service_fabric)]):
    await user_service.create_user(user)
    return "User created successfully"
