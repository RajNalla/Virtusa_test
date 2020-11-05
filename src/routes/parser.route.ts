
import * as express from 'express';
import { v1Parser, v2Parser } from '../controllers/parser.controller';
let router = express.Router();

router.post('/v1/parse', v1Parser);
router.post('/v2/parse', v2Parser);


export default router;
