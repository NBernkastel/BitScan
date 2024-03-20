from sqlalchemy import String, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column

from .db_config import Base


class User(Base):
    __tablename__ = "user_account"
    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    username: Mapped[str] = mapped_column(String(30), unique=True)
    email: Mapped[str] = mapped_column(String(120), unique=True)
    password: Mapped[str] = mapped_column(String(120))


class RefreshSessions(Base):
    __tablename__ = "refresh_sessions"
    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    user_id: Mapped[int] = mapped_column(ForeignKey('user_account.id'))
    refresh_token: Mapped[str] = mapped_column(String(400))
    finger_print: Mapped[str] = mapped_column(String(120))
