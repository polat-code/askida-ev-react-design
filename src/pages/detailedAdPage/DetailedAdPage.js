import { useEffect, useState } from 'react';
import home from '../../assets/images/home.jpg';
import Icon from '../../components/Icon';
import { applyToHouse, getAdvertById } from '../../helpers/api';
import { useParams } from 'react-router-dom';
import { showErrorNotification, showSuccessNotification } from '../../helpers/toast';

const DetailedAdPage = () => {
  const params = useParams();
  const [advert, setAdvert] = useState({});

  const getAdvertByIdFromDb = async () => {
    const advertDb = await getAdvertById(parseInt(params.id));
    setAdvert(advertDb);
  };

  const handleApply = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const res = await applyToHouse(user.memberId, parseInt(params.id));
    if (res.data.status === 'NOT_FOUND') showErrorNotification('Bu eve önceden başvuru yaptınız.');
    else if (res.data.status === 'OK')
      showSuccessNotification('Eve Başarılı Bir şekilde başvuru yaptınız.');
    else {
      showErrorNotification('Bir hata oluştu');
    }
  };

  useEffect(() => {
    getAdvertByIdFromDb();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 p-3">
          <img src={home} alt="home" className="w-100" />
          <div className="row pt-3 pb-3">
            <div className="col">
              <img src={home} alt="home" className="w-100" />
            </div>
            <div className="col">
              <img src={home} alt="home" className="w-100" />
            </div>
            <div className="col">
              <img src={home} alt="home" className="w-100" />
            </div>
          </div>
        </div>
        <div className="col-md-4 p-3">
          <div className="col">
            <h1>{advert.advertTitle}</h1>
          </div>
          <div className="col pb-3 d-flex align-items-center ">
            <Icon name="fa-location-dot" className="pe-2" size={22} />
            <span className="color-green">{advert.cityName}</span>
            <span> / </span>
            <span className="color-orange">{advert.districtName}</span>
            <span> / </span>
            <span>{advert.neighborhoodName}</span>
          </div>
          <div className="col pb-3">
            <div className="pb-2 d-flex align-items-center">
              <Icon name="fa-fire pe-2 " size={22} /> <b className="pe-2">Yakacak türü: </b>
              <span> {advert.fuelType}</span>
            </div>
            <div className="pb-2 d-flex align-items-center">
              <Icon name="fa-building pe-2" size={22} /> <b className="pe-2">Bina yaşı: </b>
              <span> {advert.ageOfDwelling}</span>
            </div>
            <div className="pb-2 d-flex align-items-center">
              <Icon name="fa-maximize pe-2" size={22} /> <b className="pe-2">m2: </b>
              <span> {advert.meterSquare}</span>
            </div>
          </div>
          <div className="col pb-3">
            <div className="row d-flex justify-content-center p-3">
              <button className="btn btn-block applyingButton" type="button" onClick={handleApply}>
                İlana Başvur
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4 p-3">
          <iframe
            width="100%"
            height="100%"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3130.4709448583726!2d26.63504835099455!3d38.31492377956493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bb905dc83c60ab%3A0x44ebb36b81795056!2sWeptile!5e0!3m2!1str!2str!4v1661769437063!5m2!1str!2str"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <hr />
      <div className="row pb-3">
        <div>
          <h3 className="color-orange">
            <u>İlan Bilgileri</u>
          </h3>
        </div>
        <div className="col pt-3 pb-3">
          <span>
            <strong>Oda Sayısı : </strong>
            {advert.roomType}
            <br />
            <strong>Açıklama : </strong>
            {advert.description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DetailedAdPage;
