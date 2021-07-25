const path = require("path");
const admin = require('firebase-admin');

// Require the fastify framework and instantiate it
const fastify = require("fastify")({
  // set this to true for detailed logging:
  logger: false
});

fastify.get("/", async function(request, reply) {
  reply.send(JSON.stringify({
    response: "Hello"
  }));
});
