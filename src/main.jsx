import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './pages/routes/Routes'
import {
  RouterProvider,
} from "react-router-dom";
import Authproviders from './providers/Authproviders';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authproviders>
    <RouterProvider router={router} />
    </Authproviders>
  </StrictMode>,
)
