import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from './pages/auth/AuthLayout';
import SignupPage from './pages/auth/SignupPage';
import Root from './pages/Root';
import LoginPage from './pages/auth/LoginPage';
import Main from './pages/Main';
import ProtectedRouter from './components/atom/ProtectedRouter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRouter>
            <Main />
          </ProtectedRouter>
        ),
      },
      {
        path: '/auth',
        element: <AuthLayout />,
        children: [
          {
            path: 'signup',
            element: <SignupPage />,
          },
          {
            path: 'login',
            element: <LoginPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
