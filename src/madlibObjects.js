const madlibs = [
  "He was a [1adjective] boy from [2noun].",
  "She wore a [1color] dress and carried a [2adjective] umbrella.",
  "In the [1noun], there was a [2adjective] [3animal].",
  "They found a [1noun] filled with [2color] [3noun].",
  "Once upon a time, there was a [1adjective] [2noun] who lived in a [3place].",
  "They discovered a [1adjective] [2noun] on their [3adjective] journey.",
  "The [1adjective] [2noun] sang a [3color] song.",
  "A [1adjective] [2noun] flew across the [3place] with a [4adjective] [5noun].",
  "She picked a [1color] [2noun] from the [3adjective] garden.",
  "In the [1place], there was a [2adjective] [3noun] with a [4color] tail."
];



  
  // Function to extract words from a Mad Lib and return an array of words
  function extractWords(madLib) {
    const wordRegex = /\[(.*?)\]/g; // Regular expression to match words inside square brackets
    const matches = madLib.match(wordRegex);
    if (!matches) return [];
  
    // Extract words from matches
    const arrayOfWordTypes = matches.map(match => match.slice(1, -1)); // Remove square brackets
    const objectOfWordTypes = {}
    for(let word of arrayOfWordTypes) {
      objectOfWordTypes[word] = ""
    }
    
    return objectOfWordTypes
  }

  
  // Create an array of objects with "story" and "words" properties
  const madlibObjects = madlibs.map(madlib => ({
    story: madlib,
    inputWordTypes: extractWords(madlib)
  }));
  



export default madlibObjects