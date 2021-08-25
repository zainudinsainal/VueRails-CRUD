<template>
  <div class="container">
    <h4 class="text-left mb-2">All Products</h4>
    <div class="">
      <div class="" v-if="!isLoading">
        <div class="row border-bottom border-top p-2 bg-light">
          <div class="col-3">Product Name</div>
          <div class="col-2">Product Price</div>
          <div class="col-3">Uploaded By</div>
          <div class="col-2">Actions</div>
        </div>
        <div v-for="(product, index) in products" :key="product.id">
          <product-detail :index="index" :product="product" />
        </div>
      </div>
      <div v-if="isLoading" class="text-center mt-5 mb-5">
        Loading Products...
        <div class="spinner-grow" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>

    <!-- Insert Pagination Part -->
    <v-pagination
      v-if="pagination"
      class="vertical-center mt-2 mb-5"
      v-model="pagination.page"
      :pages="pagination.last"
      :range-size="1"
      active-color="#DCEDFF"
      @update:modelValue="updateHandler"
    />
  </div>
</template>

<script>
import axios from "axios";
import ProductDetail from "../list/ProductDetail";
import VPagination from "@hennge/vue3-pagination";

export default {
  components: {
    ProductDetail,
    VPagination
  },
  data() {
    return {
      products: [],
      isLoading: false,
      pagination: null,
    };
  },
  mounted() {
    this.loadProducts();
  },
  methods: {
    async loadProducts() {
      this.isLoading = true;
      try {
        console.log('test')
        const data = await axios.get('/api/products.json', { params: this.$route.query });
        this.products = data.data.products;
        this.pagination = data.data.meta.pagination;
      } catch (err) {
        console.log('error', err);
      }
      this.isLoading = false;
    },
    deleteProductModal() {
      this.$swal.fire({
        // title: "Error!",
        text: "Are you sure to delete the product ?",
        icon: "error",
        cancelButtonText: "Cancel",
        confirmButtonText: "Yes, Confirm Delete",
        showCancelButton: true,
      });
    },
    updateHandler(page) {
      this.$route.query.page = page;
      this.loadProducts();
    }
  },
};
</script>
