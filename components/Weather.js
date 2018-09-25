import { defaultsDeep } from 'lodash';

var defaultWeather = {
    'main': {
        'temp': 0
    },
    'weather': [ {} ]
};

export default function Weather(state){
    var weather = defaultsDeep(state, defaultWeather);

    return `
        <div class="weather">
            This is the temperature at Spirit of Saint Louis Airport:  ${(weather.main.temp * (9 / 5) - 459.67).toFixed(1)}&deg;F
        </div>
    `;
}