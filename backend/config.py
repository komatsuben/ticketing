import os
from dotenv import load_dotenv

# Load environment variables from .env
load_dotenv()

class Config:
    # Flask
    SECRET_KEY = os.getenv("SECRET_KEY", "dev_secret")

    # Database
    SQLALCHEMY_DATABASE_URI = os.getenv(
        "DATABASE_URL",
        "postgresql+psycopg2://user:password@localhost:5432/ticketdb"
    )
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # Midtrans
    MIDTRANS_SERVER_KEY_BASE64 = os.getenv("MIDTRANS_SERVER_KEY_BASE64")
    MIDTRANS_CLIENT_KEY = os.getenv("MIDTRANS_CLIENT_KEY")

    # SocketIO
    SOCKET_CORS_ALLOWED_ORIGINS = os.getenv("SOCKET_CORS_ALLOWED_ORIGINS", "*")
