import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from './Icon';

const MenuItem = ({ item, classes, footer }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <Link to={item.path} className={classNames(classes, { active: currentPath === item.path })}>
      <li className="nav-item">
        {!footer ? <Icon name={item.icon} size={18} className="pe-2" /> : null}
        {item.title}
      </li>
    </Link>
  );
};

MenuItem.propTypes = {
  item: PropTypes.object,
  classes: PropTypes.string,
  footer: PropTypes.bool
};

MenuItem.defaultProps = {};
export default MenuItem;
