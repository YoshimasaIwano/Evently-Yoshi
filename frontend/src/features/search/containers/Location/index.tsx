import React, { useState } from 'react'
import Select from 'react-select'
import { useLocation } from '../../hooks/useLocation'
import { MainContainer } from '../../../../components/MainContainer'
import { TopBar } from '../../../../components/TopBar'
import { BackButton } from '../../../../components/BackButton'
import { useNavigate } from 'react-router-dom'
import { useSearchConditions } from '../../../../hooks/useSearchConditions'
import { useSearchEvent } from '../../hooks/useSearchEvent'
import { SearchButton } from '../../../../components/SearchButton'
import { useEvent } from '../../../../hooks/useEvent'
import { CircleLoader } from 'react-spinners'
import { useSnackbar } from 'notistack'

export const LocationContainer: React.FC = () => {
  const navigate = useNavigate()
  const { searchConditions, updateSearchConditions } = useSearchConditions() // Destructuring updateSearchConditions from the context
  const { updateEvents } = useEvent() // Destructuring updateEvents from the context
  const { handleSearchEvent } = useSearchEvent() // Get the function from the hook
  const { enqueueSnackbar } = useSnackbar()
  const [isLoading, setIsLoading] = useState(false)

  // Function to handle location change
  const handleLocationChange = (
    selectedOption: { value: string; label: string } | null,
  ) => {
    if (selectedOption) {
      updateSearchConditions({ location: selectedOption.value })
    }
  }

  const { city, state, country } = useLocation()
  const isLocationDefined = city && state && country

  const locationOptions = isLocationDefined
    ? [
        {
          value: `${city}, ${state}, ${country}`,
          label: `${city}, ${state}, ${country}`,
        },
      ]
    : []

  const onNextClick = () => {
    // Check if 'interest' is not present, navigate to "/"
    if (!searchConditions.interest) {
      enqueueSnackbar('Please select an interest.', {
        variant: 'info',
      })
      navigate('/')
      return // Prevent further execution
    }

    // Check if 'date' is not present, navigate to "/date"
    if (!searchConditions.date) {
      enqueueSnackbar('Please select a date', {
        variant: 'info',
      })
      navigate('/date')
      return // Prevent further execution
    }
    setIsLoading(true) // Start loading
    handleSearchEvent()
      .then((data) => {
        // Process the data
        if (data) {
          updateEvents(data)
        } else {
          enqueueSnackbar('No events found for your search criteria.', {
            variant: 'info',
          })
        }
        setIsLoading(false) // Stop loading
        navigate('/event-lists')
      })
      .catch(() => {
        enqueueSnackbar('An error occurred while fetching events.', {
          variant: 'error',
        })
        setIsLoading(false) // Stop loading in case of an error
      })
  }

  return (
    <MainContainer>
      <TopBar />
      {isLoading ? (
        <div className="flex flex-col items-center justify-center h-full">
          <CircleLoader color="#123abc" loading={isLoading} />
          <div className="text-lg mt-3">Searching...</div>
        </div>
      ) : (
        <>
          <div className="flex flex-col items-center w-full mt-10">
            <div className="text-center text-2xl font-normal tracking-normal leading-normal mb-4">
              Where do you want to go?
            </div>
            <div className="w-80 rounded-lg">
              <Select
                options={locationOptions}
                isSearchable
                placeholder="Select or type a location"
                onChange={handleLocationChange}
              />
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <BackButton navigate={navigate} />
            <SearchButton onClick={onNextClick} />
          </div>
        </>
      )}
    </MainContainer>
  )
}
