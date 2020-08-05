const URL_BACKEND_DEFAULT = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://brflix.herokuapp.com';

export default {
  URL_BACKEND_DEFAULT,
};
