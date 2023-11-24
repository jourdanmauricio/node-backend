const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const {
  logErrors,
  boomErrorHandler,
  errorHandler,
  ormErrorHandler,
} = require('./middlewares/error.handler');

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());

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

app.get('/api', (req, res) => {
  res.send('Hola mi server en Express');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(ormErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Server ready -> http://localhost:' + port + '/api/');
});
