import { useEffect, useState } from 'react';
import HomeAd from './HomeAd';
import { getAllAdverts } from '../../helpers/api';

const HomeAds = () => {
  const [adverts, setAdverts] = useState([]);

  const getAllAdvertsFromDB = async () => {
    const adverts = await getAllAdverts();
    setAdverts(adverts);
  };

  useEffect(() => {
    getAllAdvertsFromDB();
  }, []);

  return (
    <section>
      <div className="album py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {adverts &&
              adverts.map((advert) => {
                return (
                  <HomeAd
                    key={advert.advertId}
                    description={advert.description}
                    advertTitle={advert.advertTitle}
                    advertId={advert.advertId}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeAds;
