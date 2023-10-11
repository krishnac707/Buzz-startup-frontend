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
import FullReportDashboardProvider from './context/fullReportDashboard.context';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './context/Auth.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <StartupDashboardProvider>
          <BasicFormDashboardProvider>
            <PitchDashboardProvider>
              <TeamDashboardProvider>
                <DocumentDashboardProvider>
                  <InvesterAccountDashboardProvider>
                    <GeneralDetailDashboardProvider>
                      <KycFormDashboardProvider>
                        <FullReportDashboardProvider>
                          <Toaster
                            position="top-center"
                            reverseOrder={false}
                            gutter={8}
                            containerClassName=""
                            containerStyle={{}}
                            toastOptions={{
                              // Define default options
                              className: '',
                              duration: 4000,
                              style: {
                                background: '#363636',
                                color: '#fff',
                              },

                              // Default options for specific types
                              success: {
                                duration: 3000,
                                theme: {
                                  primary: 'green',
                                  secondary: 'black',
                                },
                              },
                              error: {
                                style: {
                                  background: 'red',
                                },
                              },
                            }}
                          />
                          <App />
                        </FullReportDashboardProvider>
                      </KycFormDashboardProvider>
                    </GeneralDetailDashboardProvider>
                  </InvesterAccountDashboardProvider>
                </DocumentDashboardProvider>
              </TeamDashboardProvider>
            </PitchDashboardProvider>
          </BasicFormDashboardProvider>
        </StartupDashboardProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
