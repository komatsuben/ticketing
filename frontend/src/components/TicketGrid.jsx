"use client"

import React from "react"
import { TicketCard } from "./TicketCard"

export function TicketGrid({ seats, onSelect, rows = 25, columns = 20 }) {
return (
    <div className="p-6 bg-background">
    <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Select Your Seat</h2>
        <div className="flex items-center gap-6 text-sm">
        <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <span>Available</span>
        </div>
        <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-500 rounded"></div>
            <span>Pending</span>
        </div>
        <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-500 rounded"></div>
            <span>Taken</span>
        </div>
        </div>
    </div>

    <div className="mb-8 flex justify-center">
        <div className="bg-gray-800 text-white px-12 py-4 rounded-lg text-xl font-semibold">STAGE</div>
    </div>

    <div
        className="grid gap-1 justify-center max-w-6xl mx-auto"
        style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
        }}
    >
        {seats.map((seat) => (
        <TicketCard key={seat.id} seat={seat} onSelect={onSelect} />
        ))}
    </div>
    </div>
)
}
