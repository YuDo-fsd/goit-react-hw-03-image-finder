import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34995439-5563962743166d9188b527df0';

export async function fetchPhoto(searchValue, numberPage = 1) {
  const config = {
    params: {
      key: API_KEY,
      q: searchValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: numberPage,
      per_page: 9,
    },
  };

  try {
    let { data } = await axios.get(`${BASE_URL}`, config);
    return data;
  } catch (error) {
    return error.message;
  }
}
