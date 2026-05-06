import { Router } from 'express';import { createQuote } from '../controllers/quote.controller.js'; const r=Router();r.post('/',createQuote);export default r;
