import React, { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Spinner from './UI/Spinner';
import NightingaleChart from './UI/Charts/Nightingale';
import RadialChart from './Features/Driver/Components/Graphs/DriverRadialChart';
import { Toaster } from 'react-hot-toast';

const AppLayout = React.lazy(() => import('./UI/AppLayout'));
const Login = React.lazy(() => import('./Pages/LoginPage'));
const UserManagement = React.lazy(() => import('./Pages/UserManagement'));
const Dashboard = React.lazy(() => import('./Pages/Dashboard'));
const Verification = React.lazy(() => import('./Pages/Verification'));
const OnboardedDrivers = React.lazy(() => import('./Pages/OnboardedDrivers'));
const BusinessInsights = React.lazy(() => import('./Pages/BusinessInsights'));
const PageNotFound = React.lazy(() => import('./Pages/PageNotFound'));
const AIMLModels = React.lazy(() => import('./Pages/AIMLModels'));
const MLFormPage = React.lazy(() => import('./Pages/MLFormPage'));
const Testing = React.lazy(() => import('../Testing'));
const RiskVerification = React.lazy(() => import('./Pages/RiskVerification'));
const VehicleVerification = React.lazy(() =>
  import('./Pages/VehicleVerification')
);
const CreditVerification = React.lazy(() =>
  import('./Pages/CreditVerification')
);
const MyProfile = React.lazy(() => import('./Pages/MyProfile'));
const Signup = React.lazy(() => import('./Pages/SignupPage'));
const Driver = React.lazy(() => import('./Pages/Driver'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="dashboard" />} />

              <Route path="dashboard" element={<Dashboard />} />
              <Route path="verification" element={<Verification />} />
              <Route path="onboardedDrivers" element={<OnboardedDrivers />} />
              <Route path="businessInsights" element={<BusinessInsights />} />
              <Route path="AI-ML-models" element={<AIMLModels />} />
            </Route>
            <Route path="/riskVerification" element={<RiskVerification />} />
            <Route
              path="/vehicleVerification"
              element={<VehicleVerification />}
            />
            <Route
              path="/creditVerification"
              element={<CreditVerification />}
            />
            <Route path="/ML-form/:formName" element={<MLFormPage />} />
            <Route path="/driver/:id" element={<Driver />} />

            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="userManagement" element={<UserManagement />} />
            <Route path="testing" element={<Testing />} />
            <Route path="myProfile" element={<MyProfile />} />
            <Route path="radial" element={<RadialChart />} />
            <Route path="night" element={<NightingaleChart />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={12} // Default is 8
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'var(--color-gray-1)',
            color: 'var(--color-gray-700)',
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
          },
        }}
      />
    </>
  );
}

export default App;
