import Header from './components/Header/Header'
import { useEffect, useState } from 'react'

import './App.css'
import CardsContainer from './components/CardsContainer/CardsContainer'
import Modal from './components/Modal/Modal'

function App() {
  const [searchMovie, setSearchMovie] = useState('')
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [movieList, setMovieList] = useState([])
  const [showMovieInfo, setShowMovieInfo] = useState(false)

  const fetchMovies = async () => {
    if (searchMovie === '') {
      return
    }
    const formatedString = searchMovie.split(' ').join('%20')
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=1194c9a41cc1a896a206e8570812ac58&language=en-US&query=${formatedString}&page=1&include_adult=false`,
    )
    const data = await response.json()

    setMovieList(data.results)
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchMovies()
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [searchMovie])

  return (
    <div className="App">
      <Header searchMovie={searchMovie} setSearchMovie={setSearchMovie} />
      {searchMovie !== '' && (
        <CardsContainer
          setSelectedMovie={setSelectedMovie}
          setShowMovieInfo={setShowMovieInfo}
          movieList={movieList}
        />
      )}
      {searchMovie === '' && (
        <h1 className="centered">Enter some movie title.</h1>
      )}
      {showMovieInfo && (
        <Modal movie={selectedMovie} onCancel={() => setShowMovieInfo(false)} />
      )}
    </div>
  )
}

export default App
