import './index.scss';
import { AppFilter, AppInfo, MovieAddForm, MovieList, SearchPanel } from './components';

const movies = [
  {
    id: 0,
    name: "Game of Throne",
    viewers: 182,
    favourite: true,
    like: false,
  },
  {
    id: 1,
    name: "Garri Potter",
    viewers: 169,
    favourite: false,
    like: false,
  },
  {
    id: 2,
    name: "The Ring of Lords",
    viewers: 210,
    favourite: false,
    like: true,
  }
]

function App() {
  return (
    <div className='app font-monospace'>
			<div className='content'>
        <AppInfo />
        <div className='search-panel'>
					<SearchPanel />
					<AppFilter />
				</div>
        <MovieList movies={movies} />
        <MovieAddForm />
      </div>
    </div>
  );
}

export default App;
