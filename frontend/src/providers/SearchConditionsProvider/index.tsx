// write a providr for search params

import { useState } from 'react'
import { SearchConditionsContext } from '../../contexts/SearchConditionsContext'
import { SearchConditionsType } from '../../types/SearchConditionsType'

interface SearchConditionsProviderProps {
  children: React.ReactNode
}

export const SearchConditionsProvider: React.FC<
  SearchConditionsProviderProps
> = ({ children }) => {
  const [searchConditions, setSearchConditions] =
    useState<SearchConditionsType>({
      interest: '',
      date: '',
      location: '',
    })

  const updateSearchConditions = (newParams: Partial<SearchConditionsType>) => {
    setSearchConditions((prevParams) => ({ ...prevParams, ...newParams }))
  }

  return (
    <SearchConditionsContext.Provider
      value={{ searchConditions, updateSearchConditions }}
    >
      {children}
    </SearchConditionsContext.Provider>
  )
}
