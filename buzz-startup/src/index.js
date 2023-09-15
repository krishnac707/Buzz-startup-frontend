import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import StartupDashboardProvider from './context/StartupDashboard.context';
import BasicFormDashboardProvider from './context/BasicFormDashboard.context';
import PitchDashboardProvider from './context/PitchDashboard.context';
import TeamDashboardProvider from './context/TeamDashboard.context';
import DocumentDashboardProvider from './context/DocumentDashboard.context';
import InvesterAccountDashboardProvider from './context/InvestorAccountDashboard.context';
import GeneralDetailDashboardProvider from './context/GeneralDetailDashboard.context';
import KycFormDashboardProvider from './context/KycFormDashboard.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StartupDashboardProvider>
        <BasicFormDashboardProvider>
          <PitchDashboardProvider>
            <TeamDashboardProvider>
              <DocumentDashboardProvider>
                <InvesterAccountDashboardProvider>
                  <GeneralDetailDashboardProvider>
                    <KycFormDashboardProvider>
                      <App />
                    </KycFormDashboardProvider>
                  </GeneralDetailDashboardProvider>
                </InvesterAccountDashboardProvider>
              </DocumentDashboardProvider>
            </TeamDashboardProvider>
          </PitchDashboardProvider>
        </BasicFormDashboardProvider>
      </StartupDashboardProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
