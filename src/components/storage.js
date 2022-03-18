export const weatherNow = {
  cityName: "Perm",
  temperature : "12",
  feelsLike: "13",
  weather: "cloud",
  weatherIcon: "",
  sunrise: "8:00",
  sunset: "19:30",
  isLiked: true,
  push() { localStorage.setItem("currentTimeData", JSON.stringify(this)) },
  get() {
      let data = JSON.parse( localStorage.getItem("currentTimeData") );
      for (const key in data) {
          this[key] = data[key];
      }
  }
}

export const weatherForecast = {};