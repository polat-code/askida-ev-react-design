import { pages } from '../constants/pages';
import MenuItem from '../components/MenuItem';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/Icon';

const AdminSideBar = () => {
  const navigate = useNavigate();
  let pagesToBeDisplayed = Object.values(pages.adminPages);

  const handleLogout = () => {
    window.localStorage.removeItem('user');
    navigate('/');
    navigate(0);
  };

  return (
    <div className="col-md-2 bg-dark">
      <div className="position-sticky min-vh-100">
        <div className="list-group list-group-flush pt-2">
          {pagesToBeDisplayed.map((page, index) => (
            <MenuItem
              item={page}
              classes="list-group-item sideBarItem bg-dark list-group-item-action pt-3 ripple"
              key={`sideBar${index}`}
            />
          ))}
          <li
            onClick={handleLogout}
            className="nav-item list-group-item sideBarItem bg-dark list-group-item-action pt-3 ripple">
            <Icon name="fa-sign-out" size={18} className="pe-2" />
            Çıkış Yap
          </li>
        </div>
      </div>
    </div>
  );
};

export default AdminSideBar;
