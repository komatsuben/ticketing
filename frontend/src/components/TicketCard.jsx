"use client"
import React from "react"

export function TicketCard({ seat, onSelect }) {
  const getStatusColor = () => {
    switch (seat.status) {
      case "available":
        return "bg-green-500 hover:bg-green-600 cursor-pointer"
      case "pending":
        return "bg-yellow-500 cursor-not-allowed"
      case "taken":
        return "bg-red-500 cursor-not-allowed"
      default:
        return "bg-gray-300"
    }
  }

  const handleClick = () => {
    if (seat.status === "available") {
      onSelect(seat.id)
    }
  }

  return (
    <div
      className={`
        w-10 h-10 rounded-lg flex items-center justify-center
        text-white text-xs font-semibold transition-colors duration-200
        ${getStatusColor()}
        mx-1 // This adds 4px margin on left and right (total 8px gap between cards)
      `}
      onClick={handleClick}
      title={`Seat ${seat.id} - ${seat.status}`}
    >
      {seat.id}
    </div>
  )
}