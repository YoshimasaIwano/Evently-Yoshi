import { useQuery } from 'react-query'

interface LocationData {
  data: {
    city: string
    state: string
    country: string
  }
}

async function fetchLocation(): Promise<LocationData> {
  const res = await fetch(`/api/ip/?ip=71.202.100.62
&token=${process.env.REACT_APP_TIMEZONE_API_KEY}`)

  if (!res.ok) {
    throw new Error('Network response was not ok')
  }

  return res.json()
}

export function useLocation() {
  const { data, isLoading, error } = useQuery<LocationData, Error>(
    'location',
    fetchLocation,
  )

  return {
    city: data?.data.city,
    state: data?.data.state,
    country: data?.data.country,
    isLoading,
    error,
  }
}
