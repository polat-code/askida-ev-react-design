import PropTypes from 'prop-types';

const MatchingAdRowItem = ({ item, rowNum }) => {
  return (
    <tr>
      <td>{rowNum}</td>
      <td>{item.binaYas}</td>
      <td>{item.m2}</td>
      <td>{item.il}</td>
      <td>{item.ilce}</td>
    </tr>
  );
};

MatchingAdRowItem.propTypes = {
  item: PropTypes.object,
  rowNum: PropTypes.number
};

MatchingAdRowItem.defaultProps = {};

export default MatchingAdRowItem;
