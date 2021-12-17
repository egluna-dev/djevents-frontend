// import Link from 'next/link';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import EventItem from '@/components/EventItem';
import Link from 'next/link';

export default function HomePage({ events }) {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No Events to Show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

      {events.length > 0 && (
        <Link href='/events'>
          
        </Link>
      )}
    </Layout>
  )
}

export async function getStaticProps() {
  const resp = await fetch(`${API_URL}/api/events`);
  const events = await resp.json();

  return {
    props: { events: events.slice(0,3) },
    revalidate: 1
  }
}
