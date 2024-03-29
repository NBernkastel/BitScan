from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from utils.config import DATABASE_URL

Base = declarative_base()
engine = create_async_engine(
    "postgresql+asyncpg://postgres:root@127.0.0.1:5432/postgres", future=True
)

async_session_maker = async_sessionmaker(engine, expire_on_commit=False)


async def get_async_session():
    async with async_session_maker() as session:
        yield session
