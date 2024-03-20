import os
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv('DATABASE_URL')
ACCESS_KEY = os.getenv('ACCESS_KEY')
REFRESH_KEY = os.getenv('REFRESH_KEY')
