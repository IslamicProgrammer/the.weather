import { http } from 'services';

import * as Types from './types';

export const getWeatherInfo = (city: string): Promise<Types.IApi.Response> =>
  http.request
    .get('/', {
      params: {
        units: 'metric',
        q: city,
        appid: '22e7c1e12daaca8ff3d1d2d0a80ee812'
      }
    })
    .then(data => data?.data);
