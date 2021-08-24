import { createStore } from 'vuex';
import author from './modules/Author';

const store = createStore({
  modules: {
    author
  },
})

export default store;
