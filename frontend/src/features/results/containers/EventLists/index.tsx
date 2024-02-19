import React from 'react'
import { MainContainer } from '../../../../components/MainContainer'
import { TopBar } from '../../../../components/TopBar'
import { Link } from 'react-router-dom'
import { useEvent } from '../../../../hooks/useEvent'
import { EventType } from '../../../../types/EventType'


export const EventListsContainer: React.FC = () => {
  const { events } = useEvent()

  if (!Array.isArray(events)) {
    return (
      <MainContainer>
        <TopBar />
        <p>Loading events or no events found...</p>
      </MainContainer>
    )
  }

  return (
    <MainContainer>
      <TopBar />
      {events.length === 0 ? (
        <p>No events Found</p>
      ) : (
        events.map((event: EventType, index: number) => (
          <Link
            to={`/event-detail/${event.id}`}
            key={event.id}
            className="block"
          >
            <div
              key={index}
              className="mb-2 rounded-lg bg-yellow-300 bg-opacity-50"
            >
              <p className="text-sm font-semibold text-red-400 px-2 py-1">
                {event.dateTime}
              </p>
              <p className="font-bold px-2">{event.title}</p>
              <p className="text-sm text-gray-600 px-2 py-1">
                {event.location}
              </p>
            </div>
          </Link>
        ))
      )}
    </MainContainer>
  )
}
