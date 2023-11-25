const express = require('express');
const cors = require('cors');

const { config } = require('./config/config');
const routerApi = require('./routes');
const {
  logErrors,
  boomErrorHandler,
  errorHandler,
  ormErrorHandler,
} = require('./middlewares/error.handler');
const { checkApiKey } = require('./middlewares/auth.handler');

const port = config.port;
const app = express();

app.use(express.json());
app.use(cors());
require('./utils/auth');

// const whiteList = ['http://localhost:3000', 'https://my-app.com.ar'];
// const options = {
//   origin: (origin, callback) => {
//     if (whiteList.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('Unauthorized'));
//     }
//   },
// };
// app.use(cors(options));

app.get('/api/v1/health', checkApiKey, (req, res) => {
  res.send('Hola mi server en Express');
});

app.get('/api', (req, res) => {
  res.send('Hola mi server en Express');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(ormErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  if (config.isProd) {
    console.log(`Server ready -> ${config.backUrl}/api/health`);
  } else {
    console.log(`Server ready -> ${config.backUrl}:${port}/api/health`);
  }
});
