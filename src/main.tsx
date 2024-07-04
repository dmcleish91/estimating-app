import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './components/page/Login';
import { AuthProvider } from './lib/auth.context';
import QouteForm from './components/page/create/QouteForm';
import ClientForm from './components/page/create/ClientForm';
import { MainDashboard } from './components/page/MainDashboard';
import GeneralSettings from './components/page/settings/GeneralSettings';
import SecuritySettings from './components/page/settings/SecuritySettings';
import IntegrationSettings from './components/page/settings/IntegrationSettings';
import OrganizationSettings from './components/page/settings/OrganizationSettings';
import AdvancedSettings from './components/page/settings/AdvancedSettings';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<MainDashboard />} />
      <Route path='login' element={<Login />} />

      <Route path='create'>
        <Route path='proposal' element={<QouteForm />} />
        <Route path='client' element={<ClientForm />} />
      </Route>

      <Route path='settings'>
        <Route index element={<GeneralSettings />} />
        <Route path='security' element={<SecuritySettings />} />
        <Route path='integration' element={<IntegrationSettings />} />
        <Route path='organization' element={<OrganizationSettings />} />
        <Route path='advanced' element={<AdvancedSettings />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
