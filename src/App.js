import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyle';
import Hero from './Partials/Hero';
import Navbar from './Partials/Navbar'
function App() {
  return (
    <Router>
      <GlobalStyle />
     
      <Hero />
    </Router>
  );
}

export default App;
