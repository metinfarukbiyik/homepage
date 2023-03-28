import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Main from './pages/Main'
import Page404 from './pages/404'

function App() {
  return (
    <div className='container'>
    <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route path='/*' element={<Page404 />} />
        </Routes>
        <Footer />
    </div>

  );
}

export default App;
