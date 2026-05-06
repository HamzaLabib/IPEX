import { Router } from 'express';import { getTracking } from '../controllers/tracking.controller.js'; const r=Router();r.get('/:trackingNumber',getTracking);export default r;
