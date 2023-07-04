import { pages } from '../constants/pages';
import MenuItem from '../components/MenuItem';
import Icon from '../components/Icon';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const user = JSON.parse(window.localStorage.getItem('user'));
  let pagesToBeDisplayed = Object.values(pages.nonAuthPages);
  if (user) {
    pagesToBeDisplayed = user.role === 'USER' ? pages.userPages : pages.adminPages;
    console.log(user);
    if (user.status == 1)
      pagesToBeDisplayed = Object.values(pagesToBeDisplayed).filter(
        (obj) => obj !== pagesToBeDisplayed.shareAd
      );
    else
      pagesToBeDisplayed = Object.values(pagesToBeDisplayed).filter(
        (obj) => obj !== pagesToBeDisplayed.allAds
      );
  }

  console.log(pagesToBeDisplayed);

  const handleLogout = () => {
    window.localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="bg-green">
      <div className="container bg-green">
        <div className="row py-3 d-flex align-items-center">
          <div className="col-md-3">
            <b>
              <h3>LOGO HERE</h3>
            </b>
          </div>
          <div className="col-md-9 d-flex justify-content-end">
            <ul className="nav nav-pills">
              {pagesToBeDisplayed.map((page, index) => (
                <MenuItem item={page} classes="menuItem me-2 p-2" key={`menuItem${index}`} />
              ))}
              {user && (
                <li className="menuItem me-2 p-2 nav-item" onClick={handleLogout}>
                  <Icon name="fa-sign-out-alt" size={18} className="pe-2" /> Çıkış yap
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
