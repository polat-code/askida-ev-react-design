import PropTypes from 'prop-types';

const UserRowItem = ({ item, rowNum }) => {
  return (
    <tr>
      <th scope="row">{rowNum}</th>
      <td>{item.ad}</td>
      <td>{item.soyad}</td>
      <td>{item.email}</td>
      <td>{item.telefon}</td>
      <td>{item.durum}</td>
      <td>{item.kullaniciTip}</td>
      <td>{item.adres}</td>
      <td>{item.rol}</td>
    </tr>
  );
};

UserRowItem.propTypes = {
  item: PropTypes.object,
  rowNum: PropTypes.number
};

UserRowItem.defaultProps = {};

export default UserRowItem;
