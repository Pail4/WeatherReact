export const weatherNow = {
  cityName: "City",
  temperature: "",
  feelsLike: "",
  weather: "",
  weatherIcon: "src/img/search.svg",
  sunrise: "",
  sunset: "",
  isLiked: true,
  likedCities: [],
  get(createCity){
    try {
      let data = JSON.parse(localStorage.getItem("storage"));
      data.likedCities = data.likedCities.map( createCity );
      return data || this;
    } catch (error) {
      console.log(error);
      return this;
    }
  }
}