from flask import Flask
from flask_socketio import SocketIO
from models import db
from config import Config

app = Flask(__name__)
app.config.from_object(Config)

db.init_app(app)
socketio = SocketIO(app, cors_allowed_origins=Config.SOCKET_CORS_ALLOWED_ORIGINS)

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    print("Run: uvicorn app:app --reload --host 0.0.0.0 --port 5000")
