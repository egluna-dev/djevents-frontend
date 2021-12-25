// import Link from 'next/link';
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import EventItem from '@/components/EventItem';

export default function EventsPage({ events }) {
  return (
    <Layout>
      <h1>Events</h1>
      {events.length === 0 && <h3>No Events to Show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  )
}

export async function getStaticProps() {
  const resp = await fetch(`${API_URL}/events?_sort=date:ASC`);
  const events = await resp.json();

  return {
    props: { events },
    revalidate: 1
  }
}

