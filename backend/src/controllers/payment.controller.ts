import { Request, Response } from 'express';import Stripe from 'stripe';import { env } from '../config/env.js';
export async function createCheckoutSession(req:Request,res:Response){const {invoiceNumber,customerName,email,amount,paymentMethod}=req.body;const numeric=Number(amount);if(!invoiceNumber||!customerName||!email||!paymentMethod||!numeric||numeric<=0)return res.status(400).json({message:'Invalid payment payload'});
if(!env.stripeSecretKey||env.stripeSecretKey.includes('replace_me'))return res.json({mock:true,reference:'IPEX-PAY-2025-0001',amount:numeric,invoiceNumber,email});
const stripe=new Stripe(env.stripeSecretKey);
const session=await stripe.checkout.sessions.create({mode:'payment',success_url:`${env.clientUrl}/payment-success?reference={CHECKOUT_SESSION_ID}&amount=${numeric}&invoice=${invoiceNumber}&email=${email}`,cancel_url:`${env.clientUrl}/payment-cancel`,customer_email:email,line_items:[{quantity:1,price_data:{currency:'cad',unit_amount:Math.round(numeric*100),product_data:{name:`Invoice ${invoiceNumber}`}}}]});
res.json({checkoutUrl:session.url});}
