import { adminHeaders } from '../../../constants/adminHeaders';
import { exampleAdData } from '../../../constants/exampleAdData';
import MatchingAdRowItem from './MatchingAdRowItem';

const AppliedHouses = () => {
  return (
    <div className="col-md-5 p-0 me-5 border border-2 border-dark rounded">
      <div className="text-center bg-orange p-2">
        <h4>Başvuru yapılan ev</h4>
      </div>
      <div className="bd-example-snippet bd-code-snippet">
        <div className="bd-example">
          <table className="table table-striped">
            <thead>
              <tr>
                {adminHeaders.appliedHousesHeader.map((item, index) => {
                  return (
                    <th scope="col" key={`userHeaderItem${index}`}>
                      {item}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {Object.keys(exampleAdData).map((item, index) => {
                return (
                  <MatchingAdRowItem
                    item={exampleAdData[item]}
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

export default AppliedHouses;
