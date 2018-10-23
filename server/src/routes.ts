import * as express from 'express';
import * as  buildStore from  'json-fs-store';
const router = express.Router();
const store = buildStore('./db');

export default router.get('/get-all', (req: express.Request, res: express.Response)=>{
  store.list((err: Error, objects: Array<Object>)=>{
    if (err){
      res.json({
        status:'not-ok',
        data: err
      });
    } else {
      res.json({
        status:'ok',
        data: objects
      });
    }
  });
});
router.get('/get/:id([0-9]+)', (req: any, res:any)=>{
  // not a good idea? Passing ids directly to a function? The regex does at least some minor checking
  // So this is not open to SQL injection and acepts only numbers
  // you never should do this if you are on a publicly available server.
  // use better validation packages like
  // https://www.npmjs.com/package/express-validator
  // or validate your regex
  // https://www.npmjs.com/package/safe-regex
  // But for the sake of being simple…
  store.load(req.params.id, (err: Error, object: object)=>{
    if (err){
      res.json({
        status:'not-ok',
        data: 'no object with that id available'
      });
    } else {
      res.json({
        status:'ok',
        data: object
      });
    }
  });
});

router.get('/', (req: any, res:any)=>{
  res.json({status:'ok',data:null});
});

router.post('/add', (req: any, res: any)=>{
  console.log('add body', req.body);
  store.add(req.body, (err: Error) => {
    if (err) {
      console.error(err);
    }
  });
  res.json({
    status: 'ok',
    data: req.body
  });
});

module.exports = router;
