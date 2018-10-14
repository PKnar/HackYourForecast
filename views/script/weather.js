// let imagePhoto = {
//   thunder:
//     "https://s-media-cache-ak0.pinimg.com/originals/2e/43/73/2e4373184057ab029b5ca15aca484b09.jpg",
//   rainy: "https://i.ytimg.com/vi/q76bMs-NwRk/maxresdefault.jpg",
//   cloudy:
//     "https://static1.squarespace.com/static/57523357c2ea515ccf6c1adb/58dcea75bebafb06e997da9c/58dcece61e5b6cf38585d46b/1490873606398/mostly+cloudy.jpg",
//   snow:
//     "https://static.bhphotovideo.com/explora/sites/default/files/Correct.jpg",
//   clear:
//     "https://mota.ru/upload/wallpapers/2010/05/14/08/01/22099/mota_ru_0051405-2560x1600.jpg",
//   drizzle:
//     "https://s-media-cache-ak0.pinimg.com/736x/e4/43/f5/e443f59b4f03dd487d090a279c2f08ab--rain-drops-water-drops.jpg",
//   haze: "https://ak3.picdn.net/shutterstock/videos/3578564/thumb/1.jpg",
//   tornado: "https://i.ytimg.com/vi/5QnsRXUbsK4/maxresdefault.jpg",
//   cold: "https://static.pexels.com/photos/374/snow-dawn-sunset-winter.jpg",
//   windy: "https://ak9.picdn.net/shutterstock/videos/4337360/thumb/1.jpg",
//   hail:
//     "https://s-media-cache-ak0.pinimg.com/236x/7c/60/3d/7c603d9183ff32c92330780a2ebdcfca--rainy-weather-rainy-days.jpg",
//   sunny: "https://i.ytimg.com/vi/rG9fev-m0ag/maxresdefault.jpg"
// };

const bg = window.document.getElementsByTagName("select");

function changeContainerBgColor(temp) {
  var color = "rgba(244,244,244,0.4)";

  if (temp > -10 && temp <= 0) {
    color = "rgba(50,97,214, 0.4)";
  } else if (temp > 1 && temp <= 15) {
    color = "rgba(244,244,244, 0.4)";
  } else if (temp > 16 && temp <= 25) {
    color = "rgba(244,204,0, 0.4)";
  } else if (temp > 26) {
    color = "rgba(216,128,48, 0.4)";
  }
  bg.style.backgroundColor = url(color);
}

exports.module = {
  changeContainerBgColor
};
