import { values } from '../data/testimonials';
import SectionHeader from './SectionHeader';
export default function ValueCards(){return <section className='container' style={{paddingBottom:'2rem'}}><SectionHeader title='Why Businesses Choose IPEX'/><div className='grid grid-3'>{values.map(v=><article key={v.title} className='card' style={{padding:'1rem'}}><div style={{fontSize:'2rem'}}>{v.icon}</div><h3 style={{color:'var(--purple)'}}>{v.title}</h3><p className='muted'>{v.description}</p></article>)}</div></section>}
