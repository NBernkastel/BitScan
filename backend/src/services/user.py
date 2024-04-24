from database.models import User
from utils.auth import hash_password
from utils.repository import AbstractRepository


class UserService:
    def __init__(self, repo: AbstractRepository):
        self.repo = repo

    async def create_user(self, user):
        user = {
            "username": user.username,
            "email": user.email,
            "password": hash_password(user.password)
        }
        return await self.repo.add_one(user)

    async def get_user_by_username(self, username):
        return await self.repo.get_one(User.username == username)
