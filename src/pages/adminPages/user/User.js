import { exampleUserData } from '../../../constants/exampleUserData';
import { adminHeaders } from '../../../constants/adminHeaders';
import UserRowItem from './UserRowItem';

const User = () => {
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
              {Object.keys(exampleUserData).map((item, index) => {
                return (
                  <UserRowItem
                    item={exampleUserData[item]}
                    key={`userDataItem${index}`}
                    rowNum={index + 1}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default User;
