import Menu from './components/menu/Menu';
import CreateListing from './pages/create-listing/CreateListing';
import Home from './pages/homepage/Home';
import Detail from './pages/listingdetail/Detail';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App () {


  return (
    <Router>
      <div>
        <Menu />
        <Routes>
          <Route exact path="/" element= {<Home/>} />
          <Route exact path="/detail/:id" element= {<Detail /> }/>
          <Route exact path="/create" element={<CreateListing />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
