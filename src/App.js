// eslint-disable-next-line
import store from './redux/store';
import { Route, Routes } from "react-router-dom";
import DialogAddUsername from './Components/DialogAddUsername';
import Search from './Pages/Search.js'
import Wishlist from './Pages/Wishlist.js'



function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DialogAddUsername />} />
        <Route path="search" element={<Search />} />
        <Route path="wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
