document.addEventListener('DOMContentLoaded', () => {
  interface List {
    name: string;
    main: {
      temp: string;
      pressure: string;
      humidity: string;
    }
  }

  interface WeatherData {
    list: List[];
  }

  interface Position {
    coords: {
      latitude: number;
      longitude: number;
    }
  }

  function success(position: Position): void {
    getWeatherDataFromServer(position.coords.latitude, position.coords.longitude, '50');
    initMap(position.coords.latitude, position.coords.longitude);
  }

  function error(): void {
    console.warn('ERROR: happened something bad, try again. Could you please...');
  }

  function getWeatherDataFromServer(lat: number, lon: number, cnt: string): void {
    const APPID: string = 'd30f5843f04e9c5704ca3442d832670d';
    let url: string = 'http://api.openweathermap.org/data/2.5/find?lat=' + lat + '&lon=' + lon + '&cnt=' + cnt + '&&appid=' + APPID;

    fetch(url).then((response) => response.json())
        .then((json: WeatherData) => parseJSONintoHTML(json))
        .catch((ex: any) => {
          console.warn(`Something went wrong: ${ex} !!!`);
        });
  }

  function parseJSONintoHTML(data: WeatherData): void {
    let weatherTableBody = document.getElementById('weatherTableBody');

    for (let item of data.list) {

      let tr = document.createElement('TR');
      weatherTableBody.appendChild(tr);

      let td = document.createElement('TD');
      let td1 = document.createElement('TD');
      let td2 = document.createElement('TD');
      let td3 = document.createElement('TD');

      td.appendChild(document.createTextNode(item.name));
      tr.appendChild(td);

      td1.appendChild(document.createTextNode(item.main.temp));
      tr.appendChild(td1);

      td2.appendChild(document.createTextNode(item.main.pressure));
      tr.appendChild(td2);

      td3.appendChild(document.createTextNode(item.main.humidity));
      tr.appendChild(td3);
    }
  }

  function initMap(lat: number, lng: number): void {
    let currentPosition = {lat: lat, lng: lng};
    let map = new google.maps.Map(document.getElementById('googleMap'), {
      zoom: 4,
      center: currentPosition
    });

    new google.maps.Marker({
      position: currentPosition,
      map: map
    });
  }

  navigator.geolocation.getCurrentPosition(success, error);
});