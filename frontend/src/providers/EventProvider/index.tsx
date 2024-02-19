// write a providr for search params

import { useState } from 'react'
import { EventContext } from '../../contexts/EventContext'
import { EventType } from '../../types/EventType'

interface EventProviderProps {
  children: React.ReactNode
}

export const EventProvider: React.FC<EventProviderProps> = ({ children }) => {
  const [events, setEvents] = useState<EventType[]>([])

  const updateEvents = (events: EventType[]) => {
    setEvents(events)
  }

  return (
    <EventContext.Provider value={{ events, updateEvents }}>
      {children}
    </EventContext.Provider>
  )
}
