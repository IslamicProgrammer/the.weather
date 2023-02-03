import { useMutation } from 'react-query';

import * as Api from '../api';
import * as Types from '../types';

export default () => useMutation((data: Types.IApi.Request) => Api.getWeatherInfo(data.city));
