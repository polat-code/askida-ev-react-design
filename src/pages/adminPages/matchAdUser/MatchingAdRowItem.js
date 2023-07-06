import PropTypes from 'prop-types';

const MatchingAdRowItem = ({ item, rowNum, setSelectedHouse }) => {
  return (
    <tr>
      <td>{rowNum}</td>
      <td>{item.ageOfDwelling}</td>
      <td>{item.meterSquare}</td>
      <td>{item.city}</td>
      <td>{item.district}</td>
      <td>
        <input
          type="radio"
          id="house"
          name="selectedHouse"
          value={item.advertId}
          onChange={(e) => setSelectedHouse(e.target.value)}
        />
      </td>
    </tr>
  );
};

MatchingAdRowItem.propTypes = {
  item: PropTypes.object,
  rowNum: PropTypes.number,
  setSelectedHouse: PropTypes.func
};

MatchingAdRowItem.defaultProps = {};

export default MatchingAdRowItem;
