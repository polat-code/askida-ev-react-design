// geldiği page route a göre active yapacağız

import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

// linklerle bağlarız
const LoginRegisterDirection = () => {
  const location = useLocation();
  return (
    <ul className="nav nav-justified mb-3 rounded loginRegisterDirectionTab ">
      <li className="nav-item ">
        <Link
          className={classNames('nav-link loginRegisterDirection bg-light text-dark', {
            active: location.pathname === '/login'
          })}
          to="/login"
          role="tab">
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={classNames('nav-link loginRegisterDirection bg-light text-dark', {
            active: location.pathname === '/signup'
          })}
          to="/signup"
          role="tab">
          Register
        </Link>
      </li>
    </ul>
  );
};
export default LoginRegisterDirection;
