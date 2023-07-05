import { useEffect, useRef, useState } from 'react';
import noImage from '../assets/images/noImage.jpg';
import {
  getAllCities,
  getAllHeating,
  getAllRooms,
  getDistrictsByCityId,
  saveAdvert
} from '../helpers/api';
import {
  showErrorNotification,
  showSuccessNotification,
  showWarningNotification
} from '../helpers/toast';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

const ShareAd = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [heatings, setHeatings] = useState([]);
  const [imageUrl1, setImageUrl1] = useState(noImage);
  const [imageUrl2, setImageUrl2] = useState(noImage);
  const [imageUrl3, setImageUrl3] = useState(noImage);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedFuel, setSelectedFuel] = useState('');
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState('');
  const hiddenFileInput = useRef(null);
  const [neigbourhood, setSelectedNeigbourhood] = useState('');
  const [ageOfDwelling, setSelectedAgeOfDwelling] = useState(0);
  const [meterSquare, setSelectedMeterSquare] = useState(0);
  const [description, setSelectedDescription] = useState('');
  const [title, setSelectedTitle] = useState('');

  const getCities = async () => {
    try {
      const cities = await getAllCities();
      return cities;
    } catch {
      return [];
    }
  };
  const getDistricts = async () => {
    if (!selectedCity) return false;

    const districts = await getDistrictsByCityId(selectedCity);
    setDistricts(districts);
  };

  useEffect(() => {
    if (selectedCity) getDistricts();
  }, [selectedCity, setSelectedCity]);

  useEffect(() => {
    const allRooms = getAllRooms();
    allRooms
      .then((resp) => {
        setRooms(resp);
      })
      .catch((error) => {
        console.log(error);
      });

    const gettingHeatings = getAllHeating();
    gettingHeatings
      .then((resp) => {
        setHeatings(resp);
      })
      .catch((error) => {
        console.log(error);
      });

    const gettingCities = getCities();
    gettingCities
      .then((resp) => {
        setCities(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (event) => {
    if (!event.target.files) return;
    setImageUrl1(URL.createObjectURL(event.target.files[0]));
    setImageUrl2(URL.createObjectURL(event.target.files[1]));
    setImageUrl3(URL.createObjectURL(event.target.files[2]));
  };

  const handleApplication = async () => {
    const user = JSON.parse(window.localStorage.getItem('user'));
    const data = {};
    data.advertTitle = title;
    data.memberId = user.memberId;
    data.cityId = parseInt(selectedCity);
    data.districtId = parseInt(selectedDistrict);
    data.neigborhoodName = neigbourhood;
    data.fuelId = parseInt(selectedFuel);
    data.roomId = parseInt(selectedRoom);
    data.description = description;
    data.ageOfDwelling = parseInt(ageOfDwelling);
    data.meterSquare = parseInt(meterSquare);

    setIsSubmitting(true);
    const res = await saveAdvert(data);
    setIsSubmitting(false);

    if (res.status == 200) {
      showSuccessNotification('İlan Verildi');
      navigate('/');
    } else if (res.status == 406) {
      showWarningNotification('Lütfen İlk Önce Mailiniz Onaylayın!');
    } else {
      showErrorNotification('Bir hata oluştu!');
    }
  };
  return (
    <>
      <div className="bg-yellow p-4">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 bg-whitesmoke p-5 border border-2 rounded">
            <div className="col-md-4 border-2 border-bottom border-dark">
              <h4>İlan Ver</h4>
            </div>
            <form className="pt-2">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group pt-3">
                    <label htmlFor="city">İl</label>
                    <select
                      id="city"
                      className="form-control border border-secondary"
                      onChange={(e) => setSelectedCity(e.target.value)}
                      value={selectedCity}>
                      <option value="">İl</option>
                      {cities &&
                        cities.map((city) => {
                          return (
                            <option key={city.cityId} value={city.cityId}>
                              {city.cityName}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group pt-3">
                    <label htmlFor="district">İlçe</label>
                    <select
                      id="district"
                      className="form-control border border-secondary"
                      onChange={(e) => setSelectedDistrict(e.target.value)}
                      value={selectedDistrict}>
                      <option value="">İlçe</option>
                      {districts &&
                        districts.map((district) => {
                          return (
                            <option key={district.districtId} value={district.districtId}>
                              {district.districtName}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group pt-3">
                    <label htmlFor="neigbourhood">Mahalle</label>
                    <input
                      type="text"
                      className="form-control border border-secondary"
                      id="neigbourhood"
                      onChange={(e) => setSelectedNeigbourhood(e.target.value)}
                      value={neigbourhood}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group pt-3">
                    <label htmlFor="inputState">Isınma Türü</label>
                    <select
                      id="heating"
                      className="form-control border border-secondary"
                      onChange={(e) => setSelectedFuel(e.target.value)}
                      value={selectedFuel}>
                      <option value="">Isınma Türü</option>
                      {heatings &&
                        heatings.map((heat) => {
                          return (
                            <option key={heat.fuel_id} value={heat.fuel_id}>
                              {heat.fuelType}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group pt-3">
                    <label htmlFor="rooms">Oda Sayısı</label>
                    <select
                      id="rooms"
                      className="form-control border border-secondary"
                      onChange={(e) => setSelectedRoom(e.target.value)}
                      value={selectedRoom}>
                      <option value="">Oda Sayısı</option>
                      {rooms &&
                        rooms.map((room) => {
                          return (
                            <option key={room.roomId} value={room.roomId}>
                              {room.room_type}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group pt-3">
                    <label htmlFor="inputBuilding">Bina Yaşı</label>
                    <input
                      type="text"
                      className="form-control border border-secondary"
                      id="inputBuilding"
                      onChange={(e) => setSelectedAgeOfDwelling(e.target.value)}
                      value={ageOfDwelling}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group pt-3">
                    <label htmlFor="inputBuildingSize">m2</label>
                    <input
                      type="text"
                      className="form-control border border-secondary"
                      id="inutBuildingSize"
                      onChange={(e) => setSelectedMeterSquare(e.target.value)}
                      value={meterSquare}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group pt-3">
                    <label htmlFor="inputBuildingSize">İlan Başlığı</label>
                    <input
                      type="text"
                      className="form-control border border-secondary"
                      id="inutBuildingSize"
                      onChange={(e) => setSelectedTitle(e.target.value)}
                      value={title}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group pt-3">
                    <label htmlFor="inputExplanation">Açıklama</label>
                    <textarea
                      className="form-control border border-secondary"
                      id="inputExplanation"
                      placeholder="Açıklama"
                      onChange={(e) => setSelectedDescription(e.target.value)}
                      value={description}
                    />
                  </div>
                </div>
              </div>
              <hr />
              <div className="row p-3 d-flex align-items-center">
                <div className="col-md-3">
                  <div className="form-group">
                    <label
                      htmlFor="files"
                      className="btn submitBtn"
                      onClick={() => hiddenFileInput.current.click}>
                      Fotoğraf yükle
                    </label>
                    <input
                      multiple
                      className="d-none"
                      id="files"
                      type="file"
                      onChange={handleChange}
                      ref={hiddenFileInput}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group border border-secondary">
                    <img src={imageUrl1} alt="img" width={'100%'} />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group border border-secondary">
                    <img src={imageUrl2} alt="img" width={'100%'} />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group border border-secondary">
                    <img src={imageUrl3} alt="img" width={'100%'} />
                  </div>
                </div>
              </div>
              <hr />
              <div className="row p-3">
                <div className="col-md-3"></div>
                <div className="col-md-6 btn submitBtn btn-block mb-4">
                  <button
                    type="button"
                    className={classNames('btn submitBtn', { 'bg-secondary': isSubmitting })}
                    onClick={handleApplication}
                    disabled={isSubmitting}>
                    Gönder
                  </button>
                </div>
                <div className="col-md-3"></div>
              </div>
            </form>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </>
  );
};

export default ShareAd;
