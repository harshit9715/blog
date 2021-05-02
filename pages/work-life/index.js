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
    const colors = (op = 1) => [`rgba(16, 204, 82, ${op})`, `rgba(233, 30, 99, ${op})`, `rgba(33, 150, 243, ${op})`]
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Hello, I'm <b>{name}</b>. I'm a software engineer and full stack web developer from Hyderabad, India. You can contact me on{' '}
                    <a href='https://www.linkedin.com/in/harshit9715/'><span>LinkedIn</span></a></p>
            </section>
            {/* <Scrollbars style={{ height: 600 }}> */}
            <label>Detailed? </label>
            <label className={utilStyles.life__detail_switch}>
                <input type="checkbox" onClick={() => { setShowDetail(!showDetail) }} />
                <span className={utilStyles.life__slider_round}></span>
            </label>
            <VerticalTimeline>
                {workData.map((item, index) => (
                    <VerticalTimelineElement
                        key={index}
                        // className="vertical-timeline-element--work"
                        dateClassName={utilStyles.timeline_date_fix}
                        contentStyle={{ background: colors()[index % 3], marginLeft: '0' }}
                        contentArrowStyle={{ borderRight: `7px solid  ${colors()[index % 3]}` }}
                        date={item.date}
                        iconStyle={{ background: colors()[index % 3], color: '#fff' }}
                        icon={<div />}
                    >
                        <h3 className="vertical-timeline-element-title">{item.title}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{item.subTitle}</h4>
                        { showDetail && (<p>{item.description}</p>)}
                        {
                            // item.refs.map((ref, ix) => (<a key={ix} href={ref.url}>{ref.name}</a>))
                            item.refs.map((ref, ix) => (
                                <button
                                    key={ix}
                                    onClick={() => { window.open(ref.url, ref.url.startsWith('/') ? "_self" : "_blank") }}
                                    className={utilStyles.pushable}>
                                    <span className={utilStyles.shadow}></span>
                                    <span className={utilStyles.edge} style={{ background: colors(0.1)[index % 3] }}></span>
                                    <span className={utilStyles.front} style={{ background: colors(0.7)[index % 3] }}>{ref.name}</span>
                                </button>
                            ))
                        }
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
            {/* </Scrollbars> */}
        </Layout>
    )
}