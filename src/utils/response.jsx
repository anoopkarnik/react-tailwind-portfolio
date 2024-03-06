export function convertResponseToArray(response) {
    // Regex to find JSON objects in the response string
    const regex = /{.*?}/gs;
    
    const objects = [];
    let match;
    
    while ((match = regex.exec(response)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (match.index === regex.lastIndex) {
        regex.lastIndex++;
      }
      
      // Parse each JSON string into an object
      try {
        const obj = JSON.parse(match[0]);
        objects.push(obj);
      } catch (e) {
        console.error("Error parsing JSON:", e);
      }
    }
    
    return objects;
  }