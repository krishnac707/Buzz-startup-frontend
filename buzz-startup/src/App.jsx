import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import StartupPage from './components/startupPage/StartupPage';
import InvestorPage from './components/investorPage/InvestorPage';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import StartupMainForm from './components/forms/startupForm/StartupMainForm';
import OverviewProfile from './components/overview-profile/OverviewProfile';

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route exact path='/register' element={<Signup />} />
                <Route exact path='/' element={<Home />} />
                <Route exact path='/startup-page' element={<StartupPage />} />
                <Route exact path='/investor-page' element={<InvestorPage />} />
                <Route exact path='/start-up-account' element={<StartupMainForm />} />
                <Route exact path='/overview-profile' element={<OverviewProfile />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
