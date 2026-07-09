import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router";

import './index.css'
import RootLayout from './layouts/RootLayout.tsx';
import Home from './pages/homepage/Home.tsx';
import About from './pages/about/About.tsx';
import Projects from './pages/projects/Projects.tsx';
import Contact from './pages/contact/Contact.tsx';
import NotFound from './pages/notFound/NotFound.tsx';
import LegalNotice from './pages/legal-notice/LegalNotice.tsx';
import PrivacyPolicy from './pages/privacy-policy/PrivacyPolicy.tsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "home", element: <Home /> },
            { path: "about", element: <About /> },
            { path: "projects", element: <Projects /> },
            { path: "contact", element: <Contact /> },

            { path: 'legal-notice', element: <LegalNotice /> },
            { path: 'privacy-policy', element: <PrivacyPolicy /> },

            { path: "*", element: <NotFound />}
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}