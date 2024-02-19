import React, { useState } from 'react'
import { MainContainer } from '../../../../components/MainContainer'
import { TopBar } from '../../../../components/TopBar'
import { BackButton } from '../../../../components/BackButton'
import { useNavigate } from 'react-router-dom'

interface Props {}

export const Query: React.FC<Props> = () => {
  const navigate = useNavigate()
  const [query, setQuery] = useState('') // State to manage the value of the text box

  const handleSearch = () => {
    // Handle search logic here
  }

  return (
    <MainContainer>
      <TopBar />
      <div className="flex flex-col items-center w-full mt-10">
        <div className="text-center text-2xl font-normal tracking-normal leading-normal mb-4">
          Search for events by entering keywords below
        </div>
        <div className="w-80 rounded-lg text-center">
          <input
            type="text"
            className="your-input-styles py-2 px-4"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter event keywords..."
          />
        </div>
        <button
          className="bg-yellow-500 text-white px-4 py-1 mt-4 rounded"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <BackButton navigate={navigate}/>
    </MainContainer>
  )
}
