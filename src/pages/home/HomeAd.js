import { Link } from 'react-router-dom';
import { applyToHouse } from '../../helpers/api';
import { showErrorNotification, showSuccessNotification } from '../../helpers/toast';

const HomeAd = (prop) => {
  let { description, advertTitle, advertId } = prop;

  const handleApply = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const res = await applyToHouse(user.memberId, advertId);
    if (res.data.status === 'NOT_FOUND') showErrorNotification('Bu eve önceden başvuru yaptınız.');
    else if (res.data.status === 'OK')
      showSuccessNotification('Eve Başarılı Bir şekilde başvuru yaptınız.');
    else {
      showErrorNotification('Bir hata oluştu');
    }
  };

  return (
    <div className="col">
      <div className="card shadow-sm">
        <svg
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false">
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#55595c" />
          <text x="50%" y="50%" fill="#eceeef" dy=".3em">
            Thumbnail
          </text>
        </svg>

        <div className="card-body border border-secondary">
          <h2>{advertTitle}</h2>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <Link to={`/detailedAd/${advertId}`}>
                <button type="button" className="btn btn-sm btn-outline-secondary">
                  Detay
                </button>
              </Link>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={handleApply}>
                İlana Başvur
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAd;
