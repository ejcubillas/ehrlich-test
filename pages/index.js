import Head from 'next/head'
import HomeStyles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Weater Forecast</title>
        <meta name="description" content="Weather Forecast" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <div className={HomeStyles.container}>
          <div className={HomeStyles.github}>
            <p>Ernest Jay Cubillas</p>
            <p>https://github.com/ejcubillas</p>
          </div>
          <input placeholder="Search place..."/>
          <button>Search</button>
        </div>
        
      </div>
    </div>
  )
}
