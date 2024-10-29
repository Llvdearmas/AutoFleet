import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Login from './Login/Login.js';
import Sidebar from './components/Sidebar.js';


import { AuthProvider } from './settings/AuthContext.js';
import RequireAuth from './settings/RequireAuth.js';
import ProtectedRoute from './settings/ProtectedRoute.js';

import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import Dashboard from './admin/Dashboard.js';

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/"  >
      <Route index element={<Login />}></Route>
      <Route path = "login" element={<Login />}></Route>
      <Route
        path="dashboard"
        element={
          <RequireAuth>
              <div className='web-container'>
                <Sidebar/>
                <Dashboard/>
              </div>
          </RequireAuth>
        }
      />
    </Route>
  )
)

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;