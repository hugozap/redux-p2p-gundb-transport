# GunDB transport for [redux-p2p-middleware](https://github.com/hugozap/redux-p2p-middleware)

Use with [redux-p2p-middleware](https://github.com/hugozap/redux-p2p-middleware)

GunDB offers offline-first replication capabilities. Use this module to replicate redux actions using GunDB. See [redux-p2p-middleware](https://github.com/hugozap/redux-p2p-middleware) for additional transports.

# Install

```
yarn add redux-p2p-gundb-transport
```

# Usage

```javascript
var replicateActions =  require('redux-p2p-middleware')
var GunDbTransport = require('redux-p2p-gundb-transport/browser')
// For Node use 'redux-p2p-gundb-transport/node'

...
const transport = new GunDbTransport('Gun server URL')
const actionsToReplicate = ['DRAW_LINE','DRAW_RECT','DRAW_OVAL']
const replicator = replicateActions(actionsToReplicate, transport)
const store = createStore(myRootReducer, applyMiddleware(replicator))


```

# Api

GunDbTransport(opts)

opts can be a string with the url of the gundb server.

For additional options see [https://gun.eco/docs/API#gun](https://gun.eco/docs/API#gun)

# Setup a Gun Server

A gun server adds persistence (files, S3, etc) and distributes changes among peers.

[Example for express](https://github.com/amark/gun/blob/master/examples/express.js)


