<template>
  <div class="home">
    <div class="p-4">
      <div class="row">
        <div class="col-md-2">
          <router-link to="/products" class="btn btn-primary p-4 dashboard-widget">
            All Products
            <span class="badge badge-success" v-if="totalCount">
              {{ totalCount }}
            </span>
          </router-link>
        </div>
        <div class="col-md-2">
          <router-link to="/products/create" class="btn btn-primary p-4 dashboard-widget">
            Create New Product <i class="fa fa-plus-circle"></i>
          </router-link>
        </div>
      </div>
    </div>
    <div>
      <product-list
        @totalProduct="totalProduct"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from '../components/products/ProductList.vue';

export default {
  name: 'Home',
  components: { ProductList },
  data() {
    return {
      totalCount: null
    };
  },
  methods: {
    totalProduct(count) {
      this.totalCount = count;
    }
  }
}
</script>
