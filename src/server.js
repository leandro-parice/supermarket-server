import Fastify from 'fastify';

const fastify = Fastify({
  logger: true
});

fastify.get('/', function (request, reply) {
  reply.send('Hello world! ✔')
});

fastify.get('/test', function (request, reply) {
  reply.send('Hello test! 😎')
});

fastify.listen({ port: 3000, host: '0.0.0.0' }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});