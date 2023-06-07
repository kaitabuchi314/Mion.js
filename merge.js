const fs = require('fs');

// Array of file paths to merge
const filesToMerge = ['mions.js', 'mioNetwork.js', 'modifier.js', 'modifierLayer.js'];

// Function to merge files
function mergeFiles() {
  const mergedContent = filesToMerge.map(filePath => fs.readFileSync(filePath, 'utf8')).join('\n');

  fs.writeFileSync('mion.js', mergedContent);
}

// Call the mergeFiles function
mergeFiles();
