import PropTypes from 'prop-types';

const UserRowItem = ({ item, rowNum }) => {
  return (
    <tr>
      <th scope="row">{rowNum}</th>
      <td>{item.memberName}</td>
      <td>{item.memberSurname}</td>
      <td>{item.memberMail}</td>
      <td>{item.memberPhone}</td>
      <td>{item.isActivate === 1 ? 'Aktif' : 'Pasif'}</td>
      <td>{item.status === 'Applicant' ? 'Başvuru Yapan' : 'İlanı Veren'}</td>
      <td>{item.memberAddress}</td>
      <td>{item.role}</td>
    </tr>
  );
};

UserRowItem.propTypes = {
  item: PropTypes.object,
  rowNum: PropTypes.number
};

UserRowItem.defaultProps = {};

export default UserRowItem;
