import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyle';
import Hero from './Partials/Hero';
import Products from './Partials/Products';
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products />
    </Router>
  );
}

export default App;
