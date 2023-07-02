import axios from 'axios';

const baseAppUrl = 'http://localhost:8082/api';

export const sendContactInfo = (contactInfo) => {
  const response = axios
    .post(baseAppUrl + '/contact', {
      name: contactInfo.name,
      email: contactInfo.email,
      suggestion: contactInfo.suggestion
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  return response;
};

export const sendUserInfo = (userInfo) => {
  const response = axios
    .post(baseAppUrl + '/members/register', userInfo)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  return response;
};

export const getAllCities = () => {
  const response = axios
    .get(baseAppUrl + '/cities')
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  return response;
};

export const getDistrictsByCityId = (cityId) => {
  const response = axios
    .get(baseAppUrl + '/districts/city-id/' + cityId)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
  return response;
};

export const getAllHeating = () => {
  const response = axios
    .get(baseAppUrl + '/fuels')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
  return response;
};

export const getAllRooms = () => {
  const response = axios
    .get(baseAppUrl + '/rooms')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
  return response;
};

export const getAllAdverts = () => {
  const response = axios
    .get(baseAppUrl + '/adverts')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
  return response;
};
export const getAdvertById = (advertId) => {
  const response = axios
    .get(baseAppUrl + '/adverts/advert-id/' + advertId)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
  return response;
};
