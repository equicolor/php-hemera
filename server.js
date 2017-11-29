const nats = require('nats').connect();
const Hemera = require('nats-hemera');
const hemeraNatsStreaming = require('hemera-nats-streaming');
const hemeraJoi = require('hemera-joi');
const hemeraWeb = require('hemera-web');
const hemera = new Hemera(nats, {
    logLevel: 'info'
});
hemera.use(hemeraJoi);
hemera.use(hemeraNatsStreaming, {
    clusterId: 'test-cluster',
    clientId: 'yii2',
    opts: {} // object with NATS/STAN options
});
hemera.use(hemeraWeb, {
    port: 3999,
    host: '127.0.0.1',
    // pattern: {
    //     topic: 'math'
    // }
});


// hemera.ready(function () {

//     hemera.add({
//         topic: 'math',
//         cmd: 'add'
//     }, function (resp, cb) {
//         console.log('request', resp);
//         cb(null, resp.a + resp.b);
//     });

//     // hemera.act({
//     //     topic: 'math',
//     //     cmd: 'add',
//     //     a: 1,
//     //     b: 2
//     // }, function (err, resp) {

//     //     console.log('Result', resp);
//     // });

//     // hemera.act(
//     //     {
//     //       topic: 'nats-streaming',
//     //       cmd: 'subscribe',
//     //       subject: 'orderCreated',
//     //       options: {
//     //         setAckWait: 10000,
//     //         setDeliverAllAvailable: true,
//     //         setDurableName: 'orderCreated'
//     //       }
//     //     },
//     //     function(err, resp) {
//     //       this.log.info(resp, 'ACK');
//     //     }
//     //   );
    
//     //   /**
//     //    * Add listener for nats-streaming-events
//     //    */
//     //   hemera.add(
//     //     {
//     //       topic: 'nats-streaming.orderCreated'
//     //     },
//     //     function(req, reply) {
//     //       this.log.info(req, 'RECEIVED');
//     //       // ACK Message, if you pass an error the message is redelivered every 10 seconds
//     //       reply(/* new Error('test') */);
//     //     }
//     //   );
    

// });