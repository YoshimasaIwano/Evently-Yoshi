import { useContext } from 'react'
import { EventContext } from '../../contexts/EventContext'

export const useEvent = () => {
  return useContext(EventContext)
}
