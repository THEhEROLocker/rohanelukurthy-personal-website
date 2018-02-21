const express = require('express');
const path = require('path');

const app = express()
const PORT = process.env.PORT || 5000;

  app.use(express.static(path.resolve(__dirname, '../personal-website-frontend/build')));

  app.get('/api', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Hello from the custom server!"}');
  });

  // All remaining requests return the React app, so it can handle routing.
  app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../personal-website-frontend/build', 'index.html'));
  });

  app.listen(PORT, function(){
      console.log('listening on port '+ PORT);
  })

