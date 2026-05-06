import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
const links=[['/','Home'],['/about','About Us'],['/services','Services'],['/tracking','Tracking'],['/quote','Get Quote'],['/pay-online','Pay Online'],['/contact','Contact Us']];
export default function Header(){const [open,setOpen]=useState(false);return <header><div className='container nav'><Link className='logo' to='/'>IPEX</Link><button className='hamb btn btn-purple' onClick={()=>setOpen(!open)}>☰</button><nav className={`menu ${open?'open':''}`}>{links.map(([to,label])=><NavLink key={to} to={to}>{label}</NavLink>)}<Link to='/contact' className='btn btn-green'>Contact Us</Link></nav></div></header>}
