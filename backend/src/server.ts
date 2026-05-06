import express from 'express';import cors from 'cors';import { env } from './config/env.js';
import paymentRoutes from './routes/payment.routes.js';import quoteRoutes from './routes/quote.routes.js';import contactRoutes from './routes/contact.routes.js';import trackingRoutes from './routes/tracking.routes.js';
const app=express();app.use(cors());app.use(express.json());
app.get('/api/health',(_req,res)=>res.json({status:'ok'}));
app.use('/api/payments',paymentRoutes);app.use('/api/quotes',quoteRoutes);app.use('/api/contact',contactRoutes);app.use('/api/tracking',trackingRoutes);
app.listen(env.port,()=>console.log(`API running on ${env.port}`));
