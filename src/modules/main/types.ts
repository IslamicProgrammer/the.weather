export namespace IApi {
  export interface Request {
    city: string;
  }
  export interface Response {
    coord: {
      lon: number;
      lat: number;
    };
    weather: [
      {
        id: number;
        main: string;
        description: string;
        icon: string;
      },
      {
        id: number;
        main: string;
        description: string;
        icon: string;
      }
    ];
    base: string;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
    };
    visibility: number;
    wind: {
      speed: number;
      deg: number;
    };
    rain: { [key: string]: number };
    clouds: { [key: string]: number };
    dt: number;
    id: number;
    name: string;
  }
  export interface Error {}
}
