import { adminHeaders } from '../../../constants/adminHeaders';
import MatchingUserRowItem from './MatchingUserRowItem';
import PropTypes from 'prop-types';

const Applicants = ({ setSelectedUser, data }) => {
  return (
    <div className="col-md-6 p-0 me-5 border border-2 border-dark rounded">
      <div className="text-center bg-green p-2">
        <h4>Başvuru yapan üye bilgileri</h4>
      </div>
      <div className="bd-example-snippet bd-code-snippet">
        <div className="bd-example">
          <table className="table table-striped">
            <thead>
              <tr>
                {adminHeaders.applicantsHeader.map((item, index) => {
                  return (
                    <th scope="col" key={`userHeaderItem${index}`}>
                      {item}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => {
                return (
                  <MatchingUserRowItem
                    item={item}
                    key={`userDataItem${index}`}
                    rowNum={index + 1}
                    setSelectedUser={setSelectedUser}
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

Applicants.propTypes = {
  setSelectedUser: PropTypes.func,
  data: PropTypes.any
};

Applicants.defaultProps = {};

export default Applicants;
