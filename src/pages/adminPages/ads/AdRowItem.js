import PropTypes from 'prop-types';

const AdRowItem = ({ item, rowNum }) => {
  return (
    <tr>
      <th scope="row">{rowNum}</th>
      <td>{item.cityName}</td>
      <td>{item.districtName}</td>
      <td>{item.neighborhoodName}</td>
      <td>{item.fuelType}</td>
      <td>{item.ageOfDwelling}</td>
      <td>{item.meterSquare}</td>
      <td>{item.memberName}</td>
    </tr>
  );
};
AdRowItem.propTypes = {
  item: PropTypes.object,
  rowNum: PropTypes.number
};

AdRowItem.defaultProps = {};

export default AdRowItem;
