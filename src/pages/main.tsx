/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { FC, useEffect, useState } from 'react';
import cs from 'classnames';
import { Constants, Hooks } from 'modules/main';

import { Loading } from 'components';

import { Search } from 'assets/icon';
import defaultBg from 'assets/images/bg1.webp';
import clouds from 'assets/images/clouds.jpg';
import rainy from 'assets/images/rainy.jpg';
import snow from 'assets/images/snow.jpg';
import sunny from 'assets/images/sunny.jpg';
import thunderstorm from 'assets/images/thunderstorm.jpg';

import cls from './main.module.scss';

const Main: FC = () => {
  const backgrounds = {
    Snow: snow,
    Rain: rainy,
    Sunny: sunny,
    Thunderstorm: thunderstorm,
    Clouds: clouds,
    default: defaultBg
  };

  const [city, setCity] = useState('Tashkent');

  const { data, isLoading, isError, mutate } = Hooks.useCitySearch();

  const handleSearch = () => {
    mutate(
      { city },
      {
        onError: () => {
          console.log('Error has occurred!');
        }
      }
    );
  };

  useEffect(() => {
    handleSearch();
  }, []);

  // if (isError) return <Error />;

  return (
    <div
      style={{
        background: backgrounds[data?.weather?.[0]?.main as keyof typeof backgrounds]
          ? `url(${backgrounds[data?.weather?.[0]?.main as keyof typeof backgrounds]}`
          : `url(${backgrounds.default}`
      }}
      className={cls.wrapper}
    >
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className={cls.left}>
            <h3>the.weather</h3>
            <div className={cls.info}>
              <h4 className={cls.celsius}>{data?.main?.temp}°</h4>
              <div className={cls.location}>
                <p className={cls.title}>{data?.name}</p>
                <p className={cls.time}>{new Date(data?.dt as any).toUTCString()}</p>
              </div>
              <div className={cls.icons}>
                <img src={`http://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@2x.png`} alt="" />
                <p>{data?.weather?.[0]?.description?.toUpperCase()}</p>
              </div>
            </div>
          </div>
          <div className={cls.right}>
            <div className={cls.header}>
              <input value={city} onChange={e => setCity(e.target.value)} placeholder="Another location" type="text" />
              <button onClick={handleSearch}>
                <Search />
              </button>
            </div>
            <div className={cls.content}>
              <ul className={cls['other-locations']}>
                {Constants.UZBEKISTAN_CITIES.map(item => (
                  <li className={cs(city === item && cls.selected)} onClick={() => setCity(item)} key={item}>
                    {item}
                  </li>
                ))}
              </ul>
              <div className={cls.divider} />
              <div className={cls.details}>
                <h5>Weather details</h5>
                <ul>
                  <li>
                    <span>Cloudy</span>
                    <span>{data?.clouds?.all}%</span>
                  </li>
                  <li>
                    <span>Wind speed</span>
                    <span>{data?.wind?.speed} km/s</span>
                  </li>
                  <li>
                    <span>Wind deg</span>
                    <span>{data?.wind?.deg}</span>
                  </li>
                  <li>
                    <span>Max temperature</span>
                    <span>{data?.main?.temp_max}°</span>
                  </li>
                  <li>
                    <span>Min temperature</span>
                    <span>{data?.main?.temp_min}°</span>
                  </li>
                </ul>
                <div className={cls.divider} />
              </div>
            </div>

            <div className={cls.divider} />
          </div>
        </>
      )}
    </div>
  );
};

export default Main;
