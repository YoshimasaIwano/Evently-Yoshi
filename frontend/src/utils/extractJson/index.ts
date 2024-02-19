import { EventType } from "../../types/EventType"
import { camelCaseKeys } from "../camelCaseKeys"

export const extractJson = (inputString: string): EventType[] | null => {
  // Attempt to find the JSON part in the input string
  const jsonMatch = inputString.match(
    /(?<=```json\s)\[\s*\{.*?\}\s*\](?=\s*```)/s,
  )
  if (!jsonMatch) return null

  try {
    // Parse the JSON data
    const events: Array<any> = JSON.parse(jsonMatch[0])

    // Process and return the extracted data
    return events.map((event) => camelCaseKeys(event))
  } catch (error) {
    console.error('Error parsing JSON data:', error)
    return null
  }
}
