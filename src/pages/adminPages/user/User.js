import { adminHeaders } from '../../../constants/adminHeaders';
import UserRowItem from './UserRowItem';
import { useEffect, useState } from 'react';
import { getAllMembers } from '../../../helpers/api';

const User = () => {
  const [members, setMembers] = useState([]);

  const getAllMembersFromDB = async () => {
    const members = await getAllMembers();
    setMembers(members);
  };
  useEffect(() => {
    getAllMembersFromDB();
  }, []);

  return (
    <div className="col">
      <div className="bd-example-snippet bd-code-snippet">
        <div className="bd-example">
          <table className="table table-striped">
            <thead>
              <tr className="color-green">
                {adminHeaders.usersHeader.map((item, index) => {
                  return (
                    <th scope="col" key={`userHeaderItem${index}`}>
                      {item}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {members.map((item, index) => {
                return <UserRowItem item={item} key={`userDataItem${index}`} rowNum={index + 1} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default User;
