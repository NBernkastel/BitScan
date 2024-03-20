from typing import Annotated

from fastapi import APIRouter, Depends

from schemes.schemes import UserReg, UserLog
from services.user import UserService
from utils.dependens import user_service_fabric

auth_router = APIRouter(prefix='/auth', tags=['Auth'])


@auth_router.post('/login')
def login(user: UserLog):
    print(user)


@auth_router.post('/register')
async def register(user: UserReg, user_service: Annotated[UserService, Depends(user_service_fabric)]):
    await user_service.create_user(user)
    return "User created successfully"
