from repositories.reps import UserRepository
from services.user import UserService


def user_service_fabric():
    return UserService(UserRepository())
