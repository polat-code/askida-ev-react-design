import colors from '../constants/colors';
import settings from '../helpers/settings';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Icon = ({ family, className, name, onClick, size, color }) => {
  return (
    <i
      className={classNames('', family, name, className)}
      onClick={onClick}
      style={{ fontSize: size, color: color }}
    />
  );
};

Icon.propTypes = {
  family: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func
};

Icon.defaultProps = {
  family: settings.ICON_FAMILY,
  size: settings.ICON_SIZE,
  color: colors.ICON_COLOR_LIGHT
};

export default Icon;
