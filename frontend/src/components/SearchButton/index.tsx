interface Props {
    onClick: () => void
  disabled?: boolean
}

export const SearchButton: React.FC<Props> = ({ onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      className="mt-4 px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
      disabled={disabled}
    >
      Search
    </button>
  )
}
