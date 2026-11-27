function getWeather() {

    const city = document.getElementById("city").value.trim();

    const result = document.getElementById("result");

    if(city === ""){
        result.innerHTML =
        "<p style='color:red'>Please enter a city name.</p>";
        return;
    }

    const temperature = Math.floor(Math.random() * 15) + 20;
    const humidity = Math.floor(Math.random() * 40) + 50;

    result.innerHTML = `
        <h3>${city}</h3>
        <p>🌡 Temperature: ${temperature}°C</p>
        <p>💧 Humidity: ${humidity}%</p>
        <p>☁ Status: Partly Cloudy</p>
    `;
}