import React from 'react'
import { MovieListItem } from '../MovieListItem'

export const MovieList = ({movies}) => {
  return (
    <ul className='movie-list'>
        {
          movies.map(movie => (
            <MovieListItem key={movie.id} {...movie} />
          ))
        }
		</ul>
  )
}
