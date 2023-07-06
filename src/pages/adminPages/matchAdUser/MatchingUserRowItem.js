import PropTypes from 'prop-types';

const MatchingUserRowItem = ({ item, rowNum, setSelectedUser }) => {
  return (
    <tr>
      <td>{rowNum}</td>
      <td>{item.memberName}</td>
      <td>{item.memberSurname}</td>
      <td>{item.memberMail}</td>
      <td>{item.memberPhone}</td>
      <td>
        <input
          type="radio"
          id="selectUser"
          name="user"
          value={item.memberId}
          onChange={(e) => setSelectedUser(e.target.value)}
        />
      </td>
    </tr>
  );
};

MatchingUserRowItem.propTypes = {
  item: PropTypes.object,
  rowNum: PropTypes.number,
  setSelectedUser: PropTypes.func
};

MatchingUserRowItem.defaultProps = {};
export default MatchingUserRowItem;
