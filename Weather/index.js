let key = "3fe8402ba0ca7f86ce2d8197acbd6753"
let map = document.getElementById("gmap_canvas")
let container=document.getElementById("container")
async function getWeather(){
    
    try {
        let city=document.getElementById("city").value;
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
        let data = await res.json();
        console.log(data)
        appendData(data)
    } catch (error) {
        console.log(error)
    }
}

function appendData(data){
    container.innerHTML=null
    let name = document.createElement("p");
    name.innerText=`Name - ${data.name}`
    let temp = document.createElement("p");
    temp.innerText=`temp - ${data.main.temp} °C`
    let humidity = document.createElement("p");
    humidity.innerText=`humidity - ${data.main.humidity} %`
    let pressure = document.createElement("p");
    pressure.innerText=`pressure- ${data.main.pressure} hPa`
    let wind = document.createElement("p");
    wind.innerText=`wind- ${data.wind.speed}`

    container.append(name,temp,humidity,pressure,wind)

    map.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
}

