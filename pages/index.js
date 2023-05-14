import { client } from '@/libs/client'
import styles from '@/styles/Home.module.scss'
import Link from 'next/link';


//SSG
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blogs: data.contents,
    }
  }
}

export default function Home({ blogs }) {

  return (
    <div className={styles.items}>
      {blogs.map((blog) => (
        <div key={blog.id} className={styles.container2}>
          <li>
            <Link href={`blog/${blog.id}`}>
              <p>{blog.title}</p>
            </Link>
          </li>
        </div>
      ))}
    </div>
  )
}
