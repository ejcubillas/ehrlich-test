import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react';
import { dateFormat } from '../../utils/date-format';
import WeatherStyles from '../../styles/Weather.module.css';

const Weather = (props) => {
  const router = useRouter();
  const { data, error } = props;

  const displayTable = () => {
    return (
      <>
        <div className={WeatherStyles.fullTable}>
          <table>
            <thead>
              <tr>
                <th colSpan="6">Date</th>
              </tr>
              <tr>
                <th>(mm/dd/yyyy)</th>
                <th>Temp (F)</th>
                <th>Description</th>
                <th>Main</th>
                <th>Pressure</th>
                <th>Humidity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{dateFormat(data.dt)}</td>
                <td>{data.main?.temp}</td>
                <td>{data.weather[0]?.description}</td>
                <td>{data.weather[0]?.main}</td>
                <td>{data.main?.pressure}</td>
                <td>{data.main?.humidity}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={WeatherStyles.mobileTable}>
          <table>
            <thead>
              <tr>
                <th>Date (mm/dd/yyyy)</th>
                <th>Temp (F)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{dateFormat(data.dt)}</td>
                <td>{data.main?.temp}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    )
  }

  return (
    <div className="container">
      {
        !error
          ? displayTable()
          : <p>{data.message}</p>
      }

      <div className={WeatherStyles.actions}>
        <button onClick={() => router.back()}>Back</button>
      </div>
      
   </div>
  )
}

export default Weather;


export async function getServerSideProps(context) {
  const session = await getSession(context);
  const { city } = context.params;
  
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }
  
  const res = await fetch(`${process.env.WEATHER_API}?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=imperial`);
  const data = await res.json();
  return {
    props: {
      data,
      error: data.cod != 200 ? true : false
    },
  }
  
}