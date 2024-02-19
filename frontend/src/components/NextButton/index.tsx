import { useNavigate } from 'react-router-dom'

interface Props {
  to: string 
  disabled?: boolean 
}

export const NextButton: React.FC<Props> = ({ to, disabled }) => {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate(to)}
      className="mt-4 px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
      disabled={disabled}
    >
      Next
    </button>
  )
}
