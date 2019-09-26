let argument = process.argv.slice(2)


const request = require('request');
const fs = require('fs');

request(argument[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

  let htmlCode = body
  // write to a new file named index.html
  fs.writeFile(argument[1], htmlCode, (err) => {
    // throws an error, you could also catch it here

    if (err) {
      throw err;
    } else {
      fs.stats(argument[1], (err, stats) => {
        if (err) throw err;
        console.log(`Downloaded and saved ${stats.size} bytes to ${argument[1]}`)
      });
      console.log(`Downloaded and saved ${Buffer.byteLength(htmlCode, 'utf-8')} bytes to ${argument[1]}`);
    }
    // success case, the file was saved

  
  });
});