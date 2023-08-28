import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import StartupPage from './components/startupPage/StartupPage';
import InvestorPage from './components/investorPage/InvestorPage';

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/startup-page' element={<StartupPage />} />
                <Route exact path='/investor-page' element={<InvestorPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
