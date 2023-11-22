import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import FormsPage from './pages/FormsPage';
import CreateFormPage from './pages/CreateFormPage';
import ErrorPage from './pages/ErrorPage';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path='/login' element={<LoginPage />} ></Route>
          <Route path='/forms/:formId' element={<FormsPage />} ></Route>
          <Route path="/forms" element={<CreateFormPage />} ></Route>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='*' element={<ErrorPage />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
