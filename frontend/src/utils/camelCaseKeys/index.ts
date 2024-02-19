// Helper function to convert snake_case to camelCase
const toCamelCase = (str: string): string => {
  return str.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace('-', '').replace('_', '')
  })
}

// Function to camelCase the keys of an object
export const camelCaseKeys = (obj: any): any => {
  let newObj: { [key: string]: any } = {}
  for (let d in obj) {
    if (obj.hasOwnProperty(d)) {
      newObj[toCamelCase(d)] = obj[d]
    }
  }
  return newObj
}
