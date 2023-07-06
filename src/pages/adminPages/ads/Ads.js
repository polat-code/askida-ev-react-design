import { adminHeaders } from '../../../constants/adminHeaders';
import AdRowItem from './AdRowItem';
import { getAllAdverts } from '../../../helpers/api';
import { useEffect, useState } from 'react';

const Ads = () => {
  const [ads, setAdds] = useState([]);

  const getAllAdsFromDB = async () => {
    const ads = await getAllAdverts();
    setAdds(ads);
  };

  useEffect(() => {
    getAllAdsFromDB();
  }, []);

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
                {ads.map((item, index) => {
                  return <AdRowItem item={item} key={`adDataItem${index}`} rowNum={index + 1} />;
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
