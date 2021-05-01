import Head from 'next/head'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import { Scrollbars } from 'rc-scrollbars';

import Layout, { siteTitle, name } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import workData from '../../public/assets/workData.json';
export default function WorkLife() {

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
                <VerticalTimeline>
                    {workData.map((item, index) => (
                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--work"
                            dateClassName={utilStyles.timeline_date_fix}
                            contentStyle={{ background: colors()[index % 3] }}
                            contentArrowStyle={{ borderRight: `7px solid  ${colors()[index % 3]}` }}
                            date={item.date}
                            iconStyle={{ background: colors()[index % 3], color: '#fff' }}
                            icon={<div />}
                        >
                            <h3 className="vertical-timeline-element-title">{item.title}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{item.subTitle}</h4>
                            {
                                ((item.description.length === 1) ?
                                    (<p>{item.description}</p>) :
                                    (<ul>
                                        {item.description.map((l_item, ix) => (<li key={ix}>{l_item}</li>))}
                                    </ul>))
                            }
                            {
                                // item.refs.map((ref, ix) => (<a key={ix} href={ref.url}>{ref.name}</a>))
                                item.refs.map((ref, ix) => (
                                    <button
                                        onClick={() => { window.open(ref.url, "_blank") }}
                                        className={utilStyles.pushable}>
                                        <span className={utilStyles.shadow}></span>
                                        <span className={utilStyles.edge} style={{ background: colors(0.1)[index % 3] }}></span>
                                        <span className={utilStyles.front} style={{ background: colors(0.7)[index % 3] }}>{ref.name}</span>
                                    </button>

                                ))
                            }
                        </VerticalTimelineElement>
                    ))}
                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        icon={<div />}
                    />
                </VerticalTimeline>
            {/* </Scrollbars> */}
        </Layout>
    )
}