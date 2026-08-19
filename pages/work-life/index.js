import Head from 'next/head'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import { Scrollbars } from 'rc-scrollbars';

import Layout, { siteTitle, name } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import workData from '../../public/assets/workData.json';
import { useState } from 'react';
export default function WorkLife() {
    const [showDetail, setShowDetail] = useState(false);
    const colors = (op = 1) => [`rgba(37, 99, 235, ${op})`, `rgba(16, 185, 129, ${op})`, `rgba(139, 92, 246, ${op})`]
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.section}>
                <div className={utilStyles.headingMd}>
                    <p>Hello, I'm <b>{name}</b>, a Freelance Cloud Solutions Architect and Fractional CTO based in Hyderabad, India.</p>
                    <p style={{ marginTop: '1rem' }}>With 7+ years of experience designing serverless, event-driven architectures for enterprise clients. Below is my freelance project portfolio featuring engagements with Fortune-500 brands and startups.</p>
                    <p style={{ marginTop: '1rem' }}>Contact me on <a href='https://www.linkedin.com/in/harshit9715/'><span>LinkedIn</span></a> or view my <a href='https://www.credly.com/users/harshit9715' target='_blank' rel='noopener noreferrer'><span>Certifications</span></a></p>
                </div>
            </section>
            
            <section className={utilStyles.section}>
                <div className={utilStyles.switchLabel}>
                    <label htmlFor="detail">Show detailed descriptions</label>
                    <label className={utilStyles.life__detail_switch}>
                        <input id="detail" type="checkbox" onChange={() => { setShowDetail(!showDetail) }} />
                        <span className={utilStyles.life__slider_round}></span>
                    </label>
                </div>
                
                <VerticalTimeline lineColor="var(--color-border)">
                    {workData.map((item, index) => (
                        <VerticalTimelineElement
                            key={index}
                            dateClassName={utilStyles.timeline_date_fix}
                            contentStyle={{ 
                                background: 'var(--color-bg-secondary)', 
                                marginLeft: '0', 
                                color: 'var(--color-text)',
                                boxShadow: 'var(--shadow-md)',
                                borderLeft: `4px solid ${colors()[index % 3]}`
                            }}
                            contentArrowStyle={{ borderRight: `7px solid var(--color-bg-secondary)` }}
                            date={item.date}
                            iconStyle={{ background: colors()[index % 3], color: '#fff', boxShadow: 'var(--shadow-md)' }}
                            icon={<div />}
                        >
                            <h3 className="vertical-timeline-element-title" style={{ fontWeight: '700', fontSize: '1.25rem' }}>{item.title}</h3>
                            <h4 className="vertical-timeline-element-subtitle" style={{ color: 'var(--color-text-light)', marginTop: '0.5rem' }}>{item.subTitle}</h4>
                            { showDetail && (<p style={{ marginTop: '1rem', lineHeight: '1.6' }}>{item.description}</p>)}
                            <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {
                                item.refs.map((ref, ix) => (
                                    <button
                                        key={ix}
                                        onClick={() => { window.open(ref.url, ref.url.startsWith('/') ? "_self" : "_blank") }}
                                        className={utilStyles.modernButton}
                                        style={{ 
                                            background: colors()[index % 3],
                                            color: 'white'
                                        }}>
                                        {ref.name}
                                    </button>
                                ))
                            }
                            </div>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </section>
        </Layout>
    )
}