import { createContext } from 'react'

import { SearchConditionsType } from '../../types/SearchConditionsType'

// Extend the SearchConditionsType to include the update function
interface SearchConditionsContextType {
  searchConditions: SearchConditionsType
  updateSearchConditions: (newParams: Partial<SearchConditionsType>) => void
}

// Set the initial context value accordingly
export const SearchConditionsContext = createContext<SearchConditionsContextType>({
  searchConditions: { interest: '', date: '', location: '' },
  updateSearchConditions: () => {},
})
