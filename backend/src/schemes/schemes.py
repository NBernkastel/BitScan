from pydantic import BaseModel, EmailStr


class UserReg(BaseModel):
    username: str
    email: EmailStr
    password: str


class UserLog(BaseModel):
    login: str
    password: str
    finger_print: str
