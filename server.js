// JSON Server module
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db/db.json");
const middlewares = jsonServer.defaults();
const cors = require("cors");

// Restrict CORS to only allow requests from https://linhthusinh.vercel.app
const corsOptions = {
  origin: "https://linhthusinh.vercel.app",
  optionsSuccessStatus: 200, // Some legacy browsers choke on 204
};

server.use(cors(corsOptions)); // Apply the CORS middleware
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
  console.log("Backend Node Server Run Success");
});

// Export the Server API
module.exports = server;
