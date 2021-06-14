import MovieList from "./components/MovieList";
import Watched from "./components/Watched";
import { MainDiv, SubDiv } from "./styles";

function App() {
  return (
    <MainDiv>
      <SubDiv>
        <MovieList />
      </SubDiv>
      <SubDiv>
        <Watched />
      </SubDiv>
    </MainDiv>
  );
}

export default App;
