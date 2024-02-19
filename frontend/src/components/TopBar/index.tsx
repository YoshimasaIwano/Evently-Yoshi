import { Link } from "react-router-dom"

export const TopBar: React.FC = () => {
  return (
    <>
      <Link to="/" className="text-left text-2xl mb-4 w-full">
        Home
      </Link>
      <hr className="mb-4 w-full" />
    </>
  )
}
