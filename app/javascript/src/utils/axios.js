//
// wrapper around axios to include Rails CSRF token
//
import axios from 'axios';

const token = document.querySelector('[name="csrf-token"]') || { content: 'no-csrf-token' };
const instance = axios.create({
  headers: {
    common: {
      'X-CSRF-Token': token.content
    }
  }
});

export default instance;
