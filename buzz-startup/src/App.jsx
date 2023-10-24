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
import { ErrorPage } from './components/ErrorPage';
import StartupMainDashboard from './components/startup-account-dashboard/StartupMainDashboard';
import MyPitchDeck from './components/my-pitch-deck/MyPitchDeck';
import FinancialModalling from './components/financial-modalling/FinancialModalling';
import InvestorMainForm from './components/investor-form/investorMainForm/InvestorMainForm';
import InvestorHome from './components/investor-inside/investor-home/InvestorHome';
import InvestorAccount from './components/investor-inside/investor-account/InvestorAccount';
import MyInnovation from './components/my-innovation/MyInnovation';
import FullReport from './components/full-report/FullReport';
import AboutUs from './components/about-us/AboutUs';
import ContactUs from './components/contact-us/ContactUs';
import PortfolioComponent from './components/portfolio-component/PortfolioComponent';

function App() {
    if (process.env.REACT_APP_ENV === 'development') {
        console.log('This will only log in development mode.');
    }
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
                <Route exact path='/startup-main-form-dashboard' element={<StartupMainDashboard />} />
                <Route exact path='*' element={<ErrorPage />} />
                <Route exact path='/pitch-deck' element={<MyPitchDeck />} />
                <Route exact path='/investor-form-account' element={<InvestorMainForm />} />
                <Route exact path='/financial-modelling' element={<FinancialModalling />} />
                <Route exact path='/investor/home' element={<InvestorHome />} />
                <Route exact path='/investor/account' element={<InvestorAccount />} />
                <Route exact path='/my-innovation' element={<MyInnovation />} />
                <Route exact path='/full-report' element={<FullReport />} />
                <Route exact path='/about-us' element={<AboutUs />} />
                <Route exact path='/contact-us' element={<ContactUs />} />
                <Route exact path='/portfolio' element={<PortfolioComponent />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
