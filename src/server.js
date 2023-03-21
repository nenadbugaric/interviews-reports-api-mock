const jsonServer = require('json-server');
const auth = require('json-server-auth');

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router('db/db.json');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

server.use('/api/candidates', jsonParser, function (req, res, next) {
  if (req.method === 'POST') {
    if (!req.body.avatar) {
      req.body.avatar = 'https://cdn.pixabay.com/photo/2016/08/31/11/54/icon-1633249_960_720.png';
    }
  }
  next();
});

//uncomment to turn on auth
// const rules = auth.rewriter({
//   '/api/users*': '/440/api/users$1',
//   '/api/companies*': '/660/api/companies$1',
//   '/api/candidates*': '/660/api/candidates$1',
//   '/api/reports*': '/660/api/reports$1',
// });

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.db = router.db;

//uncomment to turn on auth
// server.use(rules);
// server.use(auth);
server.use('/api', router);

server.listen(3333, () => console.log('Running on http://localhost:3333'));
