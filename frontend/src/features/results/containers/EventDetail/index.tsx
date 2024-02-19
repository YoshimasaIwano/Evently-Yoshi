import React from 'react'
import { MainContainer } from '../../../../components/MainContainer'
import { TopBar } from '../../../../components/TopBar'
import { useNavigate, useParams } from 'react-router-dom'
import { BackButton } from '../../../../components/BackButton'
import { useEvent } from '../../../../hooks/useEvent'

export const EventDetailContainer: React.FC = () => {
  const navigate = useNavigate()
  const { eventId } = useParams<{ eventId: string }>()
  const { events } = useEvent()
  const event = events.find((event) => event.id === Number(eventId)) // Assuming `events` is available here or fetched based on `eventId`

  if (!event) {
    return <div>Event not found</div>
  }

  return (
    <MainContainer>
      <TopBar />
      <div className="mt-2 px-2 py-2 rounded-lg bg-yellow-300 bg-opacity-50 ">
        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
        <p className="text-sm font-semibold mb-2 font-semibold text-red-400">
          {event.dateTime}
        </p>
        <p className="text-sm text-gray-600 mb-4">{event.location}</p>
        <p className="text-sm">{event.description}</p>
      </div>
      <BackButton navigate={navigate} />
    </MainContainer>
  )
}
