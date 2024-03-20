import pydantic_core

from database.models import User
from utils.auth import hash_password
from utils.repository import AbstractRepository


class AuthService:
    def __init__(self, repo: AbstractRepository):
        self.repo = repo

    async def add_new_session(self, session):
        # TODO остановился тут
        await self.repo.add_one({"finger_print": session})
