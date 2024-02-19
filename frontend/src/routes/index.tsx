import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Interests } from '../features/search/pages/Interests'
import { Date } from '../features/search/pages/Date'
import { Location } from '../features/search/pages/Location'
// import { Query } from '../features/search/components/Query'
// import { AuthModal } from '../features/auth/components/AuthPopUp'
import { EventLists } from '../features/results/pages/EventLists'
import { EventDetail } from '../features/results/pages/EventDetail'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Interests />} />
      <Route path="/date" element={<Date />} />
      <Route path="/location" element={<Location />} />
      {/* <Route path="/query" element={<Query />} />
      <Route
        path="/authorize"
        element={<AuthModal show={true} onHide={() => {}} />}
      /> */}
      <Route path="/event-lists" element={<EventLists />} />
      <Route path="/event-detail/:eventId" element={<EventDetail />} />
    </Routes>
  )
}
