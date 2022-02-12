import React, {useState} from 'react'
import Movie from './Movie.js'


export default function Main() {

  const [query, setQuery] = useState('')

  const [movies, setMovies] = useState([])

  const handleSearch = async (e) => {
      e.preventDefault()

      const url = `https://api.themoviedb.org/3/search/movie?api_key=f687ad6303cfc5bc6e5badbaaa5735ac&language=en-US&query=${query}&page=1&include_adult=false`

      try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data.results)
        setMovies(data.results)
      } catch(err){
        console.error(err)
      }
  }

  return (
    <main className='main'>
      <h1 className='title'>Search Movie</h1>
      <form 
        onSubmit={handleSearch}
        className='form'
      >
        <label 
          htmlFor='query'
          className='label'
        >Movie Name</label>
        <input 
          className='input'
          placeholder='i.e Godzilla'
          value={query}
          onChange={(e)=> setQuery(e.target.value)}
        />
        <button
          className='btn'
          type='submit'>Search</button>
      </form>

      <div>
          { movies.length > 0 && 
            movies.filter(movie => movie.poster_path).map(
              movie => <Movie 
                key={movie.id}
                path={movie.poster_path}
                title={movie.title}
                overview={movie.overview}
                releaseDate={movie.release_date}
                stars={movie.vote_average}
              />)
          }
      </div>
    </main>
  )
}