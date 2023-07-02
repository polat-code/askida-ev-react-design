import { exampleAdData } from '../../../constants/exampleAdData';
import { adminHeaders } from '../../../constants/adminHeaders';
import AdRowItem from './AdRowItem';

const Ads = () => {
  return (
    <div className="col">
      <div className="col">
        <div className="bd-example-snippet bd-code-snippet">
          <div className="bd-example">
            <table className="table table-striped">
              <thead>
                <tr className="color-orange">
                  {adminHeaders.adsHeader.map((item, index) => {
                    return (
                      <th scope="col" key={`adsHeaderItem${index}`}>
                        {item}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {Object.keys(exampleAdData).map((item, index) => {
                  return (
                    <AdRowItem
                      item={exampleAdData[item]}
                      key={`adDataItem${index}`}
                      rowNum={index + 1}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ads;
