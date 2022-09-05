async function loadData(){
  try {
    let response = await fetch("https://api.openweathermap.org/data/2.5/weather?id=524901&units=metric&appid=96dffe7fd042dca7badf6ff1cd796eff");
    let data = await response.json();

    let resultNode = document.createElement('div');
    resultNode.classList.add('weather');
    let cityNode = document.createElement('h1');
    cityNode.classList.add('weather__city');
    cityNode.textContent =  data.name;
    resultNode.append(cityNode);

    let imgNode = document.createElement('img');
    imgNode.classList.add('weather__img');
    console.log(data.weather[0].icon)
    imgNode.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png` ;
    resultNode.prepend(imgNode);

    let tempNode = document.createElement('h3');
    tempNode.classList.add('weather__temp');
    tempNode.innerHTML ="Сейчас " + Math.round(data.main.temp) + '&#176';
    resultNode.append(tempNode);

    let tempfeelsNode = document.createElement('h3');
    tempfeelsNode.classList.add('weather__tempfeels');
    tempfeelsNode.innerHTML ="Ощущается как " + Math.round(data.main.feels_like) + '&#176';
    resultNode.append(tempfeelsNode);

    let humidityeNode = document.createElement('h3');
    humidityeNode.classList.add('weather__humidity');
    humidityeNode.innerHTML ="Влажность " + Math.round(data.main.humidity) + ' %';
    resultNode.append(humidityeNode);

    let windeNode = document.createElement('h3');
    windeNode.classList.add('weather__wind');
    windeNode.innerHTML ="Скорость ветра " + data.wind.speed + ' м/с';
    resultNode.append(windeNode);

    document.body.append(resultNode);
    } 
    catch(err){
    alert(err);
  }
}
loadData();
