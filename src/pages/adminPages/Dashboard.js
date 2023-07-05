import { useEffect, useState } from 'react';
import { getNumberOfAdvertFromDB, getNumberOfMemberFromDB } from '../../helpers/api';

const Dashboard = () => {
  const [numberOfMember, setNumberOfMember] = useState(0);
  const [numberOfAdvert, setNumberOfAdvert] = useState(0);

  const getItemsCount = async () => {
    const numbOfMember = await getNumberOfMemberFromDB();
    const numbOfAdvert = await getNumberOfAdvertFromDB();
    setNumberOfMember(numbOfMember);
    setNumberOfAdvert(numbOfAdvert);
  };

  useEffect(() => {
    getItemsCount();
  }, []);

  return (
    <div className="col">
      <div className="row p-3">
        <div className="col md-3">
          <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg bg-green">
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Üye Sayısı</h3>
              <h2>{numberOfMember}</h2>
            </div>
          </div>
        </div>
        <div className="col md-3">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg bg-orange"
            style={{ backgroundColor: 'black' }}>
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1 ">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">İlan Sayısı</h3>
              <h2>{numberOfAdvert}</h2>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default Dashboard;
