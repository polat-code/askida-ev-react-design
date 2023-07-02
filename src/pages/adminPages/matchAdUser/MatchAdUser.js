import Applicants from './Applicants';
import AppliedHouses from './AppliedHouses';

const MatchAdUser = () => {
  return (
    <div className="col">
      <div className="row p-3">
        <Applicants />
        <AppliedHouses />
      </div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-6 text-center">
          <button className="btn submitBtn btn-block mb-4">Evi üyeye sahiplendir</button>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default MatchAdUser;
