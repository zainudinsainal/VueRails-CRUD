import { createStore } from 'vuex';
import product from './modules/Product';
import author from './modules/Author';

const store = createStore({
  modules: {
    author,
    product
  },
})

export default store;
