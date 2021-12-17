import Link from 'next/link';
import Layout from '@/components/Layout';

export default function AboutPage() {
    return (
        <Layout title='About DJ Events'>
            <h1>About Page</h1>
            <p>This is an app to find the latest dj and music events in your city.</p>
            <p>Version: 1.0.0</p>
            <Link href='/'>Home</Link>
        </Layout>
    )
}

