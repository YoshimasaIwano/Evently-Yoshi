import { Value } from 'react-calendar/dist/cjs/shared/types'

// This function takes a Value type which can be a Date, an array of Dates, or null,
// and returns a string or undefined.
export const formatDateToString = (date: Value): string | undefined => {
  if (Array.isArray(date)) {
    // Format range of dates
    return date.map((d) => d?.toISOString().split('T')[0]).join(' to ')
  } else if (date) {
    // Format single date
    return date.toISOString().split('T')[0]
  } else {
    // If the date is null, return undefined
    return undefined
  }
}

