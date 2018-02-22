const express = require('express');
const path = require('path');

const app = express()
const PORT = process.env.PORT || 5000;


  app.get('/api', function (req, res) {
      console.log('here')
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Hello from the custom server!"}');
  });


  app.use(express.static(path.resolve(__dirname, '../personal-website-frontend/build')));



  //All remaining requests return the React app, so it can handle routing.
  app.get('*', function(request, response) {
      console.log("shouldn\'t be here")
    response.sendFile(path.resolve(__dirname, '../personal-website-frontend/build', 'index.html'));
  });

  app.listen(PORT, function(){
      console.log('listening on port '+ PORT);
  })

