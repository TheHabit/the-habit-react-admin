import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import ReqeustsPage from './pages/ReqeustPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ChallengePage from './pages/ChallengePage';
import DashboardAppPage from './pages/DashboardAppPage';
import DetailTestPage from './pages/DetailTestPage';
import ChallengeDetailPage from './pages/ChallengeDetailPage';
import RequestDetailPage from './pages/RequestDetailPage';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'challenge', element: <ChallengePage /> },
        { path: 'challenge/:id', element: <ChallengeDetailPage /> },
        { path: 'requests', element: <ReqeustsPage /> },
        { path: 'requests/:id', element: <RequestDetailPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },

  ]);

  return routes;
}
