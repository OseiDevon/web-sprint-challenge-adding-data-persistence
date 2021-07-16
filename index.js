// start your server here
const server = require('./api/server.js');
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`\n== API running on ${PORT} ==\n`);
});
