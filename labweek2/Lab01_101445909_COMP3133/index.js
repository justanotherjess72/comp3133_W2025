const fs = require('fs');
const csv = require('csv-parser');

// Paths for files
const csvFilePath = 'input_countries.csv';
const canadaFilePath = 'canada.txt';
const usaFilePath = 'usa.txt';

// Delete the output files if they exist already
if (fs.existsSync(canadaFilePath)) {
  fs.unlinkSync(canadaFilePath);
}

if (fs.existsSync(usaFilePath)) {
  fs.unlinkSync(usaFilePath);
}

// Initialize arrays to hold filtered data
let canadaData = [];
let usaData = [];

// Read and filter data from the CSV file
fs.createReadStream(csvFilePath)
  .pipe(csv()) // Using csv-parser to parse the CSV file
  .on('data', (row) => {
    // Check the country name and add the data to the corresponding array
    if (row.country.toLowerCase() === 'canada') {
      canadaData.push(row);
    } else if (row.country.toLowerCase() === 'united states') {
      usaData.push(row);
    }
  })
  .on('end', () => {
    // Write Canada data to the canada.txt file
    if (canadaData.length > 0) {
      const canadaHeader = 'country,year,population\n';
      const canadaContent = canadaData.map(row => `${row.country},${row.year},${row.population}`).join('\n');
      fs.writeFileSync(canadaFilePath, canadaHeader + canadaContent);
      console.log('Canada data written to canada.txt');
    }

    // Write USA data to the usa.txt file
    if (usaData.length > 0) {
      const usaHeader = 'country,year,population\n';
      const usaContent = usaData.map(row => `${row.country},${row.year},${row.population}`).join('\n');
      fs.writeFileSync(usaFilePath, usaHeader + usaContent);
      console.log('USA data written to usa.txt');
    }
  });
