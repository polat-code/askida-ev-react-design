import PropTypes from 'prop-types';

const MatchingUserRowItem = ({ item, rowNum }) => {
  return (
    <tr>
      <td>{rowNum}</td>
      <td>{item.ad}</td>
      <td>{item.soyad}</td>
      <td>{item.email}</td>
      <td>{item.telefon}</td>
    </tr>
  );
};

MatchingUserRowItem.propTypes = {
  item: PropTypes.object,
  rowNum: PropTypes.number
};

MatchingUserRowItem.defaultProps = {};
export default MatchingUserRowItem;
