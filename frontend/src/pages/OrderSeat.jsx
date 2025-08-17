"use client"

import { useState } from "react"
import { TicketGrid } from "../components/TicketGrid"

const generateSeats = () => {
const seats = []

for (let row = 1; row <= 25; row++) {
    for (let col = 1; col <= 20; col++) {
    const seatId = `${String.fromCharCode(64 + row)}${col}`
    // Randomly assign status with higher probability for available seats
    const randomStatus = Math.random()
    let status

    if (randomStatus < 0.7) status = "available"
    else if (randomStatus < 0.85) status = "pending"
    else status = "taken"

    seats.push({
        id: seatId,
        status,
    })
    }
}

return seats
}

export default function OrderSeat() {
const [seats, setSeats] = useState(generateSeats())
const [selectedSeats, setSelectedSeats] = useState([])

const handleSeatSelect = (seatId) => {
    setSelectedSeats((prev) => {
    if (prev.includes(seatId)) {
        return prev.filter((id) => id !== seatId)
    } else {
        return [...prev, seatId]
    }
    })

    // Update seat status to pending when selected
    setSeats((prev) =>
    prev.map((seat) =>
        seat.id === seatId
        ? { ...seat, status: seat.status === "available" ? "pending" : "available" }
        : seat,
    ),
    )
}

return (
    <main className="min-h-screen bg-background">
    <div className="container mx-auto py-8">
        <TicketGrid seats={seats} onSelect={handleSeatSelect} rows={25} columns={20} />

        {selectedSeats.length > 0 && (
        <div className="mt-6 p-4 bg-card rounded-lg border">
            <h3 className="font-semibold mb-2">Selected Seats:</h3>
            <p className="text-muted-foreground">
            {selectedSeats.join(", ")} ({selectedSeats.length} seat
            {selectedSeats.length !== 1 ? "s" : ""})
            </p>
        </div>
        )}
    </div>
    </main>
)
}
