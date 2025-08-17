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
        <div className="bg-gray-800 text-white px-25 py-4 rounded-lg text-xl font-semibold">STAGE</div>
      </div>
      
      {/* Fixed grid container with horizontal overflow on mobile */}
      <div className="overflow-x-auto pb-4">
        <div 
          className="grid gap-2 mx-auto"
          style={{
            gridTemplateColumns: `repeat(${columns}, minmax(40px, 1fr))`,
            gridTemplateRows: `repeat(${rows}, minmax(40px, 1fr))`,
            width: `${columns * 48}px`, // 40px + 8px gap
          }}
        >
          {seats.map((seat) => (
            <TicketCard key={seat.id} seat={seat} onSelect={onSelect} />
          ))}
        </div>
      </div>
    </div>
  )
}