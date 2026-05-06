import { Router } from 'express';import { createContact } from '../controllers/contact.controller.js'; const r=Router();r.post('/',createContact);export default r;
