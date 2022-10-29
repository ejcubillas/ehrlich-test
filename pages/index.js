import { useRef } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react';
import HomeStyles from '../styles/Home.module.css';
import { githubUserUrl } from '../utils/github-userUrl';

export default function Home(props) {
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
            <p>{props.user?.name}</p>
            <a href={props.user?.url} target="_blank">{props.user?.url}</a>
          </div>
          <input ref={inputRef} placeholder="City"/>
          <button onClick={handleSubmit}>Display Weather</button>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  const userUrl = await githubUserUrl(session.user?.image)

  return {
    props: {
      user: {
        ...session.user,
        url: userUrl
      }
    }
  }
  
}