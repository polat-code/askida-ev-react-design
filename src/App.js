import { pages } from './constants/pages';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
// import AdminSideBar from './layouts/AdminSideBar';

import { Route, Routes } from 'react-router-dom';

// pagelere göre(admin veya user) header,footer gelecek veya gelmeyecek
// admin oturum açmışsa adminPages gelecek

function App() {
  const pagesToBeShown = { ...pages.userPages, ...pages.otherPages };
  return (
    <div style={{ overflowX: 'hidden' }}>
      {/*-----------normal user pageleri için----------*/}
      {/* */}
      <Header />
      <Routes>
        {Object.keys(pagesToBeShown).map((page, index) => (
          <Route
            exact
            path={pagesToBeShown[page].path}
            element={pagesToBeShown[page].element}
            key={`otherPages${index}`}
          />
        ))}
      </Routes>
      <Footer />

      {/* ----admin pageleri için */}

      {/*
      <div className="row">
        <AdminSideBar />
        <Routes>
          {Object.keys(pages.adminPages).map((page, index) => (
            <Route
              exact
              path={pages.adminPages[page].path}
              element={pages.adminPages[page].element}
              key={`adminPage${index}`}
            />
          ))}
        </Routes>
      </div>
       */}
    </div>
  );
}

export default App;
