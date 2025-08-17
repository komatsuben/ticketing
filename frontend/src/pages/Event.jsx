"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Clock } from "lucide-react"

export default function EventPage() {
  const [ticketCategories, setTicketCategories] = useState([
    { name: "Regular", price: 50, quantity: 0 },
    { name: "VIP", price: 120, quantity: 0 },
    { name: "VVIP", price: 250, quantity: 0 },
  ])

  const updateQuantity = (index, quantity) => {
    const newCategories = [...ticketCategories]
    newCategories[index].quantity = Math.max(0, quantity)
    setTicketCategories(newCategories)
  }

  const getTotalTickets = () => {
    return ticketCategories.reduce((sum, category) => sum + category.quantity, 0)
  }

  const getTotalPrice = () => {
    return ticketCategories.reduce((sum, category) => sum + category.price * category.quantity, 0)
  }

  const handleProceed = () => {
    if (getTotalTickets() > 0) {
      // Navigate to seat selection page
      window.location.href = "/"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Event Cover */}
          <div className="order-1 lg:order-1">
            <div className="aspect-video bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/concert-stage-lights-crowd.png"
                alt="Summer Music Festival"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Event Details */}
          <div className="order-2 lg:order-2 space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Summer Music Festival 2024</h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                Join us for an unforgettable night of music featuring top artists from around the world. Experience
                incredible performances, amazing sound quality, and an electric atmosphere that will keep you dancing
                all night long.
              </p>
            </div>

            {/* Event Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-700">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span className="font-medium">Saturday, July 15, 2024</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="font-medium">7:00 PM - 11:00 PM</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="font-medium">Madison Square Garden, New York</span>
              </div>
            </div>

            {/* Ticket Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Select Tickets</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {ticketCategories.map((category, index) => (
                  <div key={category.name} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold text-gray-900">{category.name}</h3>
                      <p className="text-2xl font-bold text-blue-600">${category.price}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(index, category.quantity - 1)}
                        disabled={category.quantity === 0}
                      >
                        -
                      </Button>
                      <Input
                        type="number"
                        value={category.quantity}
                        onChange={(e) => updateQuantity(index, Number.parseInt(e.target.value) || 0)}
                        className="w-16 text-center"
                        min="0"
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(index, category.quantity + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                ))}

                {/* Summary */}
                {getTotalTickets() > 0 && (
                  <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Total Tickets:</span>
                      <span className="font-bold">{getTotalTickets()}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-medium">Total Price:</span>
                      <span className="text-2xl font-bold text-blue-600">${getTotalPrice()}</span>
                    </div>
                  </div>
                )}

                <Button
                  onClick={handleProceed}
                  disabled={getTotalTickets() === 0}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
                >
                  Proceed to Seat Selection
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
