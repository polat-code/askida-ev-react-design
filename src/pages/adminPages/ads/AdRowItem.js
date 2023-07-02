import PropTypes from 'prop-types';

const AdRowItem = ({ item, rowNum }) => {
  return (
    <tr>
      <th scope="row">{rowNum}</th>
      <td>{item.il}</td>
      <td>{item.ilce}</td>
      <td>{item.mahalle}</td>
      <td>{item.yakacak}</td>
      <td>{item.binaYas}</td>
      <td>{item.m2}</td>
      <td>{item.ilaniVeren}</td>
      <td>{item.mediaIds}</td>
    </tr>
  );
};
AdRowItem.propTypes = {
  item: PropTypes.object,
  rowNum: PropTypes.number
};

AdRowItem.defaultProps = {};

export default AdRowItem;
