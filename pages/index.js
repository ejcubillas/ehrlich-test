import { useRef } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import HomeStyles from '../styles/Home.module.css';

export default function Home() {
  const router =  useRouter();
  const inputRef = useRef(null);

  const handleSubmit = () => {
    if (inputRef.current.value) {
      router.push(`/weather/${inputRef.current.value}`);
    } 
  }

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
          <input ref={inputRef} placeholder="City"/>
          <button onClick={handleSubmit}>Display Weather</button>
        </div>
      </div>
    </div>
  )
}
