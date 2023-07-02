import { adminHeaders } from '../../../constants/adminHeaders';
import { exampleUserData } from '../../../constants/exampleUserData';
import MatchingUserRowItem from './MatchingUserRowItem';

const Applicants = () => {
  return (
    <div className="col-md-5 p-0 me-5 border border-2 border-dark rounded">
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
              {Object.keys(exampleUserData).map((item, index) => {
                return (
                  <MatchingUserRowItem
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

export default Applicants;
