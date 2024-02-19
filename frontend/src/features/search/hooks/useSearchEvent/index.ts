import axios from 'axios'
import { useContext } from 'react'
import { SearchConditionsContext } from '../../../../contexts/SearchConditionsContext'
import { extractJson } from '../../../../utils/extractJson'

export const useSearchEvent = () => {
  const { searchConditions } = useContext(SearchConditionsContext)

  const handleSearchEvent = async () => {
    try {
      // Make sure to validate the searchConditions or set defaults before sending
      const response = await axios.post(
        'http://localhost:3001/search_events',
        searchConditions,
      )
      const events = extractJson(response.data)
      return events // or handle the data as needed
    } catch (error) {
      console.error('Error searching events', error)
      // Handle error properly - maybe set an error state?
    }
  }

  return { handleSearchEvent }
}
