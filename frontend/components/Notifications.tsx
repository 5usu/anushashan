'use client'

import { useState } from 'react'
import { Bell } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

const mockNotifications = [
  { id: 1, message: 'New activity tracked' },
  { id: 2, message: 'Weekly report available' },
  { id: 3, message: 'Goal achieved!' },
]

export default function Notifications() {
  const [notifications, setNotifications] = useState(mockNotifications)

  const clearNotifications = () => {
    setNotifications([])
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
          {notifications.length > 0 && (
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="text-sm font-semibold">Notifications</h4>
            <Button variant="ghost" size="sm" onClick={clearNotifications}>Clear all</Button>
          </div>
          {notifications.length > 0 ? (
            <ul className="space-y-2">
              {notifications.map((notification) => (
                <li key={notification.id} className="text-sm">{notification.message}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground">No new notifications</p>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}

