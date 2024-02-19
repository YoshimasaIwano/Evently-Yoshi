import React, { useState } from 'react'
import Calendar from 'react-calendar'
import { MainContainer } from '../../../../components/MainContainer'
import { TopBar } from '../../../../components/TopBar'
import { BackButton } from '../../../../components/BackButton'
import { NextButton } from '../../../../components/NextButton'
import { Value } from 'react-calendar/dist/cjs/shared/types'
import { useNavigate } from 'react-router-dom'
import { useSearchConditions } from '../../../../hooks/useSearchConditions'
import { formatDateToString } from '../../utils/formatDateToString'

export const DateContainer: React.FC = () => {
  const navigate = useNavigate()
  // Update the useState to handle both single and range of dates
  const [date, setDate] = useState<Value>()
  const { updateSearchConditions } = useSearchConditions() // Get the function to update the search params

  const handleDateChange = (value: Value) => {
    setDate(value)

    const formattedDate = formatDateToString(value) // Use the utility function to format the date
    updateSearchConditions({ date: formattedDate })
  }

  return (
    <MainContainer>
      <TopBar />
      <div className="flex flex-col items-center w-full mt-10">
        <div className="text-center text-2xl font-normal tracking-normal leading-normal mb-4">
          When do you want to go?
        </div>
        <div className="flex-grow bg-white rounded-lg p-4">
          <Calendar
            selectRange={true}
            onChange={handleDateChange}
            value={date}
          />
        </div>
      </div>
      <div className="flex justify-between items-center w-full">
        <BackButton navigate={navigate} />
        <NextButton to={'/location'} />
      </div>
    </MainContainer>
  )
}
