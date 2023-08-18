import './App.css';

import { BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SingUp />} />
        </Routes>
        <Login />
      </BrowserRouter>
    </div>
  );
}

export default App;
