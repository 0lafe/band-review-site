const helperFetch = async (url) => {
    try{
        const response = await fetch(url)
        if (!response.ok) {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw(error)
        }
        const parsedJson = await response.json()
        return parsedJson
      } catch(err) {
        console.error(`Error in fetch: ${err.message}`)
      }
}

export default helperFetch