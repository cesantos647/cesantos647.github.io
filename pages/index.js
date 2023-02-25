import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
//import '../styles/globals.css'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Christian Santos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          My Name Is <a href="https://linkedin.com/in/cesantos647/">Christian Santos</a>
        </h1>

        <p className={styles.description}>
          Working as a <code>Software Engineer - Data Analytics</code>
        </p>

        <div className={styles.grid}>
          <Link href="/about/me" className={styles.card}>
            <h3>About Me &rarr;</h3>
            <p>Not sure what I should put here, but I might want to do something since it feels wierd to only have 2 things</p>
          </Link>

          <Link href="/about/resume/" className={styles.card}>
            <h3>My Resume &rarr;</h3>
            <p>My professional work experience: Past, Present, Future(?)</p>
          </Link>

          <Link href="/about/portfolio/" className={styles.card}>
            <h3>Portfolio &rarr;</h3>
            <p>Discover what I like to create outside of work</p>
          </Link>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Github / Linkedin &rarr;</h3>
            <p>
              I feel like this would be goot to embed somewhere, but I don't have to put it front and center
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}, Might want to put icons for all my stuff here and not put them at the very top
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

    </div>
  )
}
