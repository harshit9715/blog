import Head from 'next/head'
import { useState } from 'react';

import Layout, { siteTitle, name } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import workData from '../../public/assets/workData.json';

export default function WorkLife() {
    const [showDetail, setShowDetail] = useState(false);
    
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            
            {/* Hero */}
            <section className={utilStyles.hero}>
                <h1 className={utilStyles.heroTitle}>
                    <span className="gradient-text">Project Portfolio</span>
                </h1>
                <p className={utilStyles.heroDescription}>
                    Freelance engagements and client projects. From Fortune-500 omnichannel infrastructure to startup cloud modernization — selected work spanning 7+ years of serverless architecture.
                </p>
                <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <a href="https://www.linkedin.com/in/harshit9715/" target="_blank" rel="noopener noreferrer" className={utilStyles.buttonPrimary + ' ' + utilStyles.button}>
                        LinkedIn
                    </a>
                    <a href="https://www.credly.com/users/harshit9715" target="_blank" rel="noopener noreferrer" className={utilStyles.button}>
                        View Certifications
                    </a>
                    <a href="https://github.com/harshit9715" target="_blank" rel="noopener noreferrer" className={utilStyles.button}>
                        GitHub
                    </a>
                </div>
            </section>
            
            {/* Toggle */}
            <section className={utilStyles.section}>
                <label className={utilStyles.switchLabel}>
                    <span>Show detailed descriptions</span>
                    <label className={utilStyles.life__detail_switch}>
                        <input id="detail" type="checkbox" onChange={() => { setShowDetail(!showDetail) }} />
                        <span className={utilStyles.life__slider_round}></span>
                    </label>
                </label>
                
                {/* Projects */}
                <div className={utilStyles.projectList}>
                    {workData.map((item, index) => (
                        <div key={index} className={utilStyles.projectCard}>
                            <div className={utilStyles.projectNumber}>
                                {String(index + 1).padStart(2, '0')} / Featured
                            </div>
                            <h3 className={utilStyles.projectTitle}>{item.title}</h3>
                            <p className={utilStyles.projectSubtitle}>{item.subTitle}</p>
                            <div className={utilStyles.projectDate}>{item.date}</div>
                            
                            {showDetail && (
                                <p className={utilStyles.projectDescription}>{item.description}</p>
                            )}
                            
                            {item.refs && item.refs.length > 0 && (
                                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                    {item.refs.map((ref, ix) => (
                                        <a
                                            key={ix}
                                            href={ref.url}
                                            target={ref.url.startsWith('/') ? "_self" : "_blank"}
                                            rel={ref.url.startsWith('/') ? "" : "noopener noreferrer"}
                                            className={utilStyles.button}
                                        >
                                            {ref.name}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    )
}