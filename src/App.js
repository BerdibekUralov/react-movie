import './index.scss';
import { AppFilter, AppInfo, MovieAddForm, MovieList, SearchPanel } from './components';

function App() {
  return (
    <div className='app font-monospace'>
			<div className='content'>
        <AppInfo />
        <div className='search-panel'>
					<SearchPanel />
					<AppFilter />
				</div>
        <MovieList />
        <MovieAddForm />
      </div>
    </div>
  );
}

export default App;
