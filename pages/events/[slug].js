import Layout from '@/components/Layout';
import EventMap from '@/components/EventMap';
import { API_URL } from '@/config/index';
import styles from '@/styles/Event.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import Image from 'next/image';
// import { FaPencilAlt, FaTimes } from 'react-icons/fa';

export default function EventPage({ evt }) {
    return (
        <Layout>
            <div className={styles.event}>
                {/* <div className={styles.controls}>
                    <Link href={`/events/edit/${evt.id}`}>
                        <a href='#!'><FaPencilAlt /> Edit Event</a>
                    </Link>
                    <a href="#!" className={styles.delete} onClick={deleteEvent}>
                        <FaTimes /> Delete Event
                    </a>
                </div> */}
                <span>
                    {new Date(evt.date).toLocaleDateString('en-US')} at {evt.time}
                </span>
                <h1>{evt.name}</h1>
                <ToastContainer />
                {evt.image && (
                    <div className={styles.image}>
                        <Image src={evt.image.formats.large.url} width={960} height={600} />
                    </div>
                )}

                <h3>Performers: </h3>
                <p>{evt.performers}</p>
                <h3>Description:</h3>
                <p>{evt.description}</p>
                <h3>Venue: &nbsp;{evt.venue}</h3>
                <p>{evt.address}</p>

                <EventMap evt={evt}/>

                <Link href='/events'>
                    <a href="#" className={styles.back}></a>
                </Link>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const res = await fetch(`${API_URL}/events`);
    const events = await res.json();

    const paths = events.map(evt => ({
        params: {slug: evt.slug}
    }));

    return {
        paths,
        fallback: true
    }
}


export async function getStaticProps({ params : { slug }}) {
    const res = await fetch(`${API_URL}/events?slug=${slug}`);
    const events = await res.json();
    
    return {
        props: {
            evt: events[0]
        },
        revalidate: 1
    }
}

// export async function getServerSideProps({ query : { slug }}) {
//     const res = await fetch(`${API_URL}/events/${slug}`)
//     const events = await res.json()

//     return {
//         props: {
//             evt: events[0]
//         }
//     }
// }