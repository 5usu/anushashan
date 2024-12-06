'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Tracking() {
  const [activity, setActivity] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Activity tracked:', activity)
    setActivity('')
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Tracking</h1>
      <Card>
        <CardHeader>
          <CardTitle>Track Your Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Enter your activity"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
            />
            <Button type="submit">Track Activity</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

