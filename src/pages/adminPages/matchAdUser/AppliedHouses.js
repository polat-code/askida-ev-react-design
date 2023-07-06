import { adminHeaders } from '../../../constants/adminHeaders';
import MatchingAdRowItem from './MatchingAdRowItem';
import PropTypes from 'prop-types';

const AppliedHouses = ({ setSelectedHouse, data }) => {
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
              {data?.map((item, index) => {
                return (
                  <MatchingAdRowItem
                    item={item}
                    key={`userDataItem${index}`}
                    rowNum={index + 1}
                    setSelectedHouse={setSelectedHouse}
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

AppliedHouses.propTypes = {
  setSelectedHouse: PropTypes.func,
  data: PropTypes.array
};

AppliedHouses.defaultProps = {};

export default AppliedHouses;
