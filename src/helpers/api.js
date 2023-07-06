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

export const validateUser = (credentials) => {
  const response = axios
    .post(baseAppUrl + '/auth/user', credentials)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  return response;
};

export const getNumberOfMemberFromDB = () => {
  const response = axios
    .get(baseAppUrl + '/members/number-of-member')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
  return response;
};

export const getNumberOfAdvertFromDB = () => {
  const response = axios
    .get(baseAppUrl + '/adverts/number-of-advert')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
  return response;
};

export const saveAdvert = (credentials) => {
  const response = axios
    .post(baseAppUrl + '/adverts', credentials)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  return response;
};

export const getAllMembers = () => {
  const response = axios
    .get(baseAppUrl + '/members')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
  return response;
};
export const applyToHouse = (memberId, advertId) => {
  const response = axios
    .post(baseAppUrl + '/applies/member-id/' + memberId + '/advert-id/' + advertId, {})
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  return response;
};

export const getAllAppliedHouses = () => {
  const response = axios
    .get(baseAppUrl + '/applies/homes')
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  return response;
};

export const bringFilteredUsers = (selectedId) => {
  const response = axios
    .get(baseAppUrl + '/applies/homes/advert/' + selectedId)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  return response;
};

export const matchUserHome = (selectedUser, selectedHouse) => {
  const response = axios
    .get(baseAppUrl + '/applies/member/' + selectedUser + '/advert/' + selectedHouse)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  return response;
};
