// JSON Server module
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db/db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
// Add this before server.use(router)
server.use(
  // Add custom route here if needed
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);
server.use(router);
server.listen(4000, () => {
  console.log("Backend Node Sever Run Success");
});

// Export the Server API
module.exports = server;
