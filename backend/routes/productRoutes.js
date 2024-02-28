import express from 'express';
const router = express.Router();
import { getProducts, getProductById } from '../controllers/productControllers.js';

router.route('/').get(getProducts); // GET
router.route('/:id').get(getProductById); // GET by ID
export default router;
