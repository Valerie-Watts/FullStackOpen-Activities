import { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState(null)
  const apiKey = 'ed9cd2aec7d24369535a28c0ff84d91c'

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}&units=metric`)
      .then(response => setWeather(response.data))
  }, [capital])

  if (!weather) return null

  return (
    <div>
      <h3>Weather in {capital}</h3>
      <p>temperature {weather.main.temp} Celsius</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
      />
      <p>wind {weather.wind.speed} m/s</p>
    </div>
  )
}

const CountryDetail = ({ country }) => (
  <div>
    <h2>{country.name.common}</h2>
    <p>Capital {country.capital[0]}</p>
    <p>Area {country.area}</p>
    <h3>Languages:</h3>
    <ul>
      {Object.values(country.languages).map(lang => (
        <li key={lang}>{lang}</li>
      ))}
    </ul>
    <img src={country.flags.png} alt={`flag of ${country.name.common}`} width="150" />
    <Weather capital={country.capital[0]} />
  </div>
)

const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => setCountries(response.data))
  }, [])

  const filtered = countries.filter(c =>
    c.name.common.toLowerCase().includes(search.toLowerCase())
  )

  const handleSearch = (e) => {
    setSearch(e.target.value)
    setSelected(null)
  }

  const renderResult = () => {
    if (search === '') return null
    if (selected) return <CountryDetail country={selected} />
    if (filtered.length > 10) return <p>Too many matches, specify another filter</p>
    if (filtered.length === 1) return <CountryDetail country={filtered[0]} />
    return (
      <ul>
        {filtered.map(c => (
          <li key={c.cca3}>
            {c.name.common}
            <button onClick={() => setSelected(c)}>show</button>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div>
      <div>find countries <input value={search} onChange={handleSearch} /></div>
      {renderResult()}
    </div>
  )
}

export default App