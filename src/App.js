import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './component/MovieList';

// import {Container} from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      {/* <Container> */}
        <h1>FILMS</h1>
          
         <MovieList/>
        
    {/* </Container> */}
    </div>
  );
}

export default App;
