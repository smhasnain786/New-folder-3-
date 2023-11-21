const fs = require('fs');
const axios = require('axios');

const filePath = './uploads1/screenshot.png'; // Replace this with your local file path
const remoteServerURL = 'https://syedforum.000webhostapp.com/img/'; // Replace this with the remote server's upload endpoint

// Read the file as a stream
const fileStream = fs.createReadStream(filePath);

// Prepare the form data
const formData = new FormData();
formData.append('file', fileStream);

// Send the file to the remote server using axios
axios.post(remoteServerURL, formData, {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
})
  .then(response => {
    console.log('File uploaded:', response.data);
  })
  .catch(error => {
    console.error('Error uploading file:', error);
  });
