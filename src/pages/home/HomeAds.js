import { useEffect, useState } from 'react';
import HomeAd from './HomeAd';
import { getAllAdverts } from '../../helpers/api';

const HomeAds = () => {
  const [adverts, setAdverts] = useState([]);

  const getAllAdvertsFromDB = async () => {
    const adverts = await getAllAdverts();
    setAdverts(adverts);
    /*
    adverts
      .then((resp) => {
        setAdverts(resp);
      })
      .catch((error) => {
        console.log(error);
      });
      */
  };

  useEffect(() => {
    getAllAdvertsFromDB();
  }, []);

  return (
    <section>
      <div className="album py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {/* burası map olcak datalar çekildikten sonra */}
            {adverts &&
              adverts.map((advert) => {
                return (
                  <HomeAd
                    key={advert.advertId}
                    description={advert.description}
                    advertTitle={advert.advertTitle}
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
