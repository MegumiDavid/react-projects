import './style/main.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' ;
import Quote from './pages/Quote';
import QuoteList from './pages/QuoteList';
import Error from './pages/Error';
import Nav from './components/Nav';
import Atr from './components/Atr';

function App(): JSX.Element {

  return (
    <Router>
      <Nav />
        <Routes>
          <Route path="/" element={<Quote />} />
          <Route path="/:author" element={<QuoteList />} />
          <Route path="*" element={<Error />} />
        </Routes>
      <Atr />
    </Router>
  )
}

export default App
