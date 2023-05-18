import React from 'react'
import { MovieListItem } from '../MovieListItem'

export const MovieList = () => {
  return (
    <ul className='movie-list'>
				<MovieListItem />
        <MovieListItem />
        <MovieListItem />
		</ul>
  )
}
