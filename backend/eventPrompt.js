import { askBingChat } from "./bing.js";
import { withExponentialBackoff } from './utils.js';

let options = { variant: 'Precise' }

async function getEvents(interest, location, date) {
  try {
    const promptString = `Please search for local and lesser-known ${interest} events occurring in ${location} on ${date}. I'm interested in events that might not be widely publicized or known to the general public. The response should be in a JSON format, containing an array of objects where each object represents a different event. Each object should include the following fields:
id: A unique identifier for the event (number).
dateTime: The date and time of the event (string in YYYY-MM-DD format).
title: The title or main attraction of the event (string).
location: The specific location where the event will take place (string).
description: A brief description of the event, highlighting its unique or local nature. (string).
Please ensure the information is accurate and reflects actual scheduled events.

This is the one example.
json
[
    {
        "id": 1,
        "dateTime": "2023-11-19",
        "title": "San Francisco 49ers vs Tampa Bay Buccaneers",
        "location": "Levi's Stadium, Santa Clara, CA",
        "description": "A thrilling football match between the San Francisco 49ers and the Tampa Bay Buccaneers. Experience the electrifying atmosphere of a live NFL game[^1^]."
    },
    {
        "id": 2,
        "dateTime": "2023-11-18",
        "title": "Golden State Warriors vs Oklahoma City Thunder",
        "location": "Chase Center, San Francisco, CA",
        "description": "Watch the Golden State Warriors take on the Oklahoma City Thunder in an exciting NBA basketball game[^1^]."
    },
    {
        "id": 3,
        "dateTime": "2023-11-20",
        "title": "Golden State Warriors vs Houston Rockets",
        "location": "Chase Center, San Francisco, CA",
        "description": "The Golden State Warriors face off against the Houston Rockets in this NBA basketball game[^1^]."
    }
]
`;

    console.log(`sending messsage: ${promptString}`)
    const response = await withExponentialBackoff({
      func: async () => {
        return await askBingChat(promptString, options)
      },
      maxRetries: 3,
      delay: 3000,
    })

    const { text, conversationOptions } = response ?? {}

    options = {
      ...conversationOptions,
      variant: 'Precise',
    }

    // response.text is the response from Bing
    console.log(text)
    return text;
  } catch (error) {
    console.log(error)
  }
}

export { getEvents };