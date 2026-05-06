import { services } from '../data/services';
import SectionHeader from './SectionHeader';
export default function ServicesPreview(){return <section className='container' style={{padding:'2rem 0'}}><SectionHeader title='Our Logistics Services'/><div className='grid grid-4'>{services.map(s=><article key={s.title} className='card' style={{padding:'1rem'}}><div style={{fontSize:'2rem'}}>{s.icon}</div><h3 style={{color:'var(--purple)'}}>{s.title}</h3><p className='muted'>{s.description}</p></article>)}</div></section>}
