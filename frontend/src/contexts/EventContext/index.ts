import { createContext } from 'react'

import { EventType } from '../../types/EventType'

interface EventContextType {
  events: EventType[]
  updateEvents: (newEvents: EventType[]) => void
}

// Set the initial context value accordingly
export const EventContext = createContext<EventContextType>({
  events: [],
  updateEvents: () => {},
})
