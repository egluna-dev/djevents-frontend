// import Link from 'next/link';
import Layout from '@/components/Layout';
import Pagination from '@/components/Pagination';
import { API_URL, PER_PAGE } from '@/config/index';
import EventItem from '@/components/EventItem';

export default function EventsPage({ events, page, total }) {
  return (
    <Layout>
      <h1>Events</h1>
      {events.length === 0 && <h3>No Events to Show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

      <Pagination page={page} total={total}/>
    </Layout>
  )
}

export async function getServerSideProps({query: {page = 1}}) {
  // Calculate start page
  const start = +page === 1 ? 0 : (+page - 1 ) * PER_PAGE;

  // Fetch total/count
  const totalResp = await fetch(`${API_URL}/events/count`);
  const total = await totalResp.json();

  // Fetch events
  const eventResp = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`);
  const events = await eventResp.json();

  return {
    props: { events, page: +page, total }
  }
}

