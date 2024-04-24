from datetime import datetime, timedelta
from typing import Optional

import bcrypt
import jwt
from fastapi import HTTPException
from jwt import encode, decode

from utils.config import SECRET_KEY, ALGORITHM


def auth_user(token: str):
    try:
        username = verify_token(token)
    except jwt.PyJWTError:
        raise HTTPException(status_code=401, detail="wrong token")
    return username


def hash_password(password):
    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), salt)

    return hashed_password.decode('utf-8')


def verify_password(hashed_password, input_password):
    return bcrypt.checkpw(input_password.encode('utf-8'), hashed_password)


def generate_token(data: dict, expires_delta: Optional[timedelta] = None) -> str:
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


def verify_token(token: str) -> jwt.PyJWTError or str:
    try:
        payload = decode(token, SECRET_KEY, algorithms=['HS256'])
        if payload['exp'] < datetime.utcnow().timestamp():
            raise jwt.ExpiredSignatureError("token expired")

    except (jwt.DecodeError, jwt.ExpiredSignatureError):
        raise jwt.PyJWTError

    return payload['username']