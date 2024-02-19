import React from 'react'
import { MainContainer } from '../../../../components/MainContainer'
import { TopBar } from '../../../../components/TopBar'
import { useNavigate } from 'react-router-dom'
import { useSearchConditions } from '../../../../hooks/useSearchConditions'

const interests = ['Sports', 'Concerts', 'Adventure', 'Outdoor']

export const InterestsContainer: React.FC = () => {
  const navigate = useNavigate()
  const { updateSearchConditions } = useSearchConditions() // Make sure to destructure correctly

  const handleInterestClick = (interest: string) => {
    // Call updateSearchConditions with the new interest
    updateSearchConditions({ interest: interest })

    // Navigate to the next page
    navigate('/date')
  }
  return (
    <MainContainer>
      <TopBar />
      <div className="flex flex-col items-center w-full mt-10">
        <div className="text-center text-2xl mb-8">
          What are your interests?
        </div>

        <div className="grid grid-cols-2 gap-4">
          {interests.map((interest) => (
            <button
              key={interest} // It's important to provide a unique key for each item in a list
              onClick={() => handleInterestClick(interest)}
              className="bg-yellow-300 bg-opacity-50 p-8 rounded-lg text-center"
            >
              {interest}
            </button>
          ))}
        </div>
      </div>
    </MainContainer>
  )
}
