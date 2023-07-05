import { pages } from './constants/pages';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import 'react-toastify/dist/ReactToastify.css';
import AdminSideBar from './layouts/AdminSideBar';

import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// pagelere göre(admin veya user) header,footer gelecek veya gelmeyecek
// admin oturum açmışsa adminPages gelecek

function App() {
  const user = JSON.parse(window.localStorage.getItem('user'));
  let pagesToBeDisplayed = { ...pages.nonAuthPages, ...pages.otherPages };
  if (user)
    pagesToBeDisplayed =
      user.role === 'USER' ? { ...pages.userPages, ...pages.otherPages } : pages.adminPages;

  return (
    <div style={{ overflowX: 'hidden' }}>
      {/*-----------normal user pageleri için----------*/}
      {(!user || user?.role !== 'ADMIN') && (
        <>
          <Header />
          <ToastContainer />
          <Routes>
            {Object.keys(pagesToBeDisplayed).map((page, index) => (
              <Route
                exact
                path={pagesToBeDisplayed[page].path}
                element={pagesToBeDisplayed[page].element}
                key={`pages${index}`}
              />
            ))}
          </Routes>
          <Footer />
        </>
      )}
      {/* ----admin pageleri için */}

      {/**/}
      {user && user.role === 'ADMIN' && (
        <div className="row">
          <ToastContainer />
          <AdminSideBar />
          <Routes>
            {Object.keys(pagesToBeDisplayed).map((page, index) => (
              <Route
                exact
                path={pagesToBeDisplayed[page].path}
                element={pagesToBeDisplayed[page].element}
                key={`adminPage${index}`}
              />
            ))}
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
