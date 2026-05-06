import { Request, Response } from 'express'; export function createQuote(req:Request,res:Response){res.json({message:'Quote request received',data:req.body});}
