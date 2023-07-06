import { useEffect, useState } from 'react';
import Applicants from './Applicants';
import AppliedHouses from './AppliedHouses';
import { bringFilteredUsers, getAllAppliedHouses, matchUserHome } from '../../../helpers/api';
import { showErrorNotification, showSuccessNotification } from '../../../helpers/toast';
const MatchAdUser = () => {
  const [selectedUser, setSelectedUser] = useState({});
  const [selectedHouse, setSelectedHouse] = useState('');
  const [appliedHouses, setAppliedHouses] = useState([]);
  const [usersThatAppliedToHome, setUsersThatAppliedToHome] = useState([]);

  const bringAllAppliedHouses = async () => {
    const res = await getAllAppliedHouses();
    setAppliedHouses(res.data);
  };

  const bringUsersAccordingToSelectedHouse = async () => {
    const res = await bringFilteredUsers(selectedHouse);
    setUsersThatAppliedToHome(res.data);
  };

  const handleMatch = async () => {
    //console.log(selectedHouse, selectedUser);
    const res = await matchUserHome(selectedUser, selectedHouse);
    if (res.data.httpStatus === 'OK') {
      showSuccessNotification('Eşleştirme Başarılı');
      bringAllAppliedHouses();
    } else {
      showErrorNotification('Eşleştirmede Bir problem oluştu.');
    }
    //console.log(res);
  };

  useEffect(() => {
    bringAllAppliedHouses();
  }, []);

  useEffect(() => {
    bringUsersAccordingToSelectedHouse();
  }, [selectedHouse, setSelectedHouse]);

  return (
    <div className="col">
      <div className="row p-3">
        <AppliedHouses setSelectedHouse={setSelectedHouse} data={appliedHouses} />
        <Applicants setSelectedUser={setSelectedUser} data={usersThatAppliedToHome} />
      </div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-6 text-center">
          <button type="button" className="btn submitBtn btn-block mb-4" onClick={handleMatch}>
            Evi üyeye sahiplendir
          </button>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default MatchAdUser;
