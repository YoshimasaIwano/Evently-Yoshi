import { NavigateFunction } from 'react-router-dom'

interface Props {
  navigate: NavigateFunction
}

export const BackButton: React.FC<Props> = ({ navigate }) => {
  return (
    <button
      onClick={() => navigate(-1)}
      className="mt-4 px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
    >
      Back
    </button>
  )
}
