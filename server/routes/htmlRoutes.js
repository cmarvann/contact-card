const path = require('path');

// Get route
module.exports = function(app) {
app.get('/', function(req, res) {
 res.sendFile(path.join(__dirname, '../../client/index.html'));
  });
};

