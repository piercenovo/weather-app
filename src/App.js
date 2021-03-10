import { useState } from "react";
import "./App.css";

const api = {
    key: "f5469a7b6c2bb9104cf928fc3f4eeea5",
    base: "http://api.openweathermap.org/data/2.5/"
}


const App = () => {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({})

    const search = evt => {
        if (evt.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result)
                    setQuery('');
                    console.log(result);
                })
        }
    }

    const dateBuilder = (d) => {

        let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        let days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }

    return (
        <div className="app">
            <main className="app__container">
                <div className="search__box">
                    <input
                        type="text"
                        className="search__bar"
                        placeholder="Busca..."
                        onChange={e => setQuery(e.target.value)}
                        value={query}
                        onKeyPress={search}
                    />
                </div>
                {(typeof weather.main != "undefined") ? (
                    <div>
                        <div className="location__box">
                            <div className="location__name">{weather.name}, {weather.sys.country}</div>
                            <div className="location__date">{dateBuilder(new Date())}</div>
                        </div>

                        <div className="weather__box">
                            <div className="weather__temp">
                                {Math.round(weather.main.temp)}°c
                            </div>
                            <div className="weather__here">{weather.weather[0].main}</div>
                        </div>
                    </div>
                ) : ('')}
            </main>
        </div>
    )
}


export default App;