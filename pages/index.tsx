import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | RTPM: Real Time Project Management">
    <h1>Welcome to RTPM</h1>
    <p>
      <Link href="/tasks">
        <a>See All Tasks</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
