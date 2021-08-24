<template>
  <div class="container">
    <h4 class="text-left mb-2">All Products</h4>
    <div class="">
      <div class="" v-if="!isLoading">
        <table class="table table-hover">
          <thead>
            <tr>
              <td>Sl</td>
              <td>Product Name</td>
              <td>Product Price</td>
              <td>Uploaded By</td>
              <td>Actions</td>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(product, index) in products" :key="product.id">
              <product-detail :index="index" :product="product" />
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="isLoading" class="text-center mt-5 mb-5">
        Loading Products...
        <div class="spinner-grow" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ProductDetail from "../list/ProductDetail";

export default {
  components: {
    ProductDetail,
  },
  data() {
    return {
      products: [],
      isLoading: false,
    };
  },
  mounted() {
    this.loadProducts();
  },
  methods: {
    async loadProducts() {
      this.isLoading = true;
      try {
        const data = await axios.get('/api/products.json');
        this.products = data.data.products;
      } catch (err) {
        console.log('error', err);
      }
      this.isLoading = false
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
  },
};
</script>
