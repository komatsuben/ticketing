from app import app, db
from models import Event, Ticket

def seed():
    with app.app_context():
        # Clear existing data
        db.drop_all()
        db.create_all()

        # Create event
        event = Event(
            name="Talkshow Example",
            description="Student-organized talkshow with Midtrans integration",
            date="2025-09-01",
            total_tickets=500
        )
        db.session.add(event)
        db.session.commit()

        # Create tickets
        tickets = [
            Ticket(event_id=event.id, status="available")
            for _ in range(500)
        ]
        db.session.bulk_save_objects(tickets)
        db.session.commit()

        print("✅ Database seeded with 1 event and 500 tickets.")

if __name__ == "__main__":
    seed()
