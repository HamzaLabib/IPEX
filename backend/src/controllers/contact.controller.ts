import { Request, Response } from 'express'; export function createContact(req:Request,res:Response){res.json({message:'Contact message received',data:req.body});}
