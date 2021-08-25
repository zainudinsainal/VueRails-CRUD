<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h6>Add Product</h6>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="saveProduct">
          <div v-if="isLoading">
            <div class="text-center">
              <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <br />
              Loading Product Details
            </div>
          </div>
          <div v-if="product !== null && !isLoading">
            <div class="form-group row">
              <div class="col-6" :class="{invalid: product.errors && product.errors.name}">
                <label>Product Name:</label>
                <input type="text" class="form-control" v-model="product.name" />
                <span class='invalid' v-if="product.errors">{{product.errors.name}}</span>
              </div>
              <div class="col-6" :class="{invalid: product.errors && product.errors.price}">
                <label>Product Price:</label>
                <input type="number" class="form-control" v-model="product.price" />
                <span class='invalid' v-if="product.errors">{{product.errors.price}}</span>
              </div>
            </div>

            <div class="form-group row">
              <div class="col-12">
                <label>Product Details:</label>
                <textarea class="form-control" v-model="product.description" />
                <span class='error' v-if="product.errors">{{product.errors.description}}</span>
              </div>
            </div>
            <div class="form-group">
              <router-link to="/products" class="btn btn-secondary mr-2"
                >Cancel</router-link
              >
              <input
                type="submit"
                class="btn btn-primary"
                value="Update Product"
                v-if="!isUpdating"
              />
              <button class="btn btn-primary" type="button" disabled v-if="isUpdating">
                <span
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                Saving...
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      product: {},
      isLoading: true,
      isUpdating: false,
    };
  },
  created() {
    this.loadProduct();
  },
  methods: {
    async loadProduct() {
      try {
        const data = await axios.get(`/api/products/${this.$route.params.id}/edit.json`);
        this.product = data.data.product;
      } catch (err) {
        console.log('error', err);
      }
      this.isLoading = false
    },
    async saveProduct() {
      this.isUpdating = true
      try {
        await axios.patch(`/api/products/${this.$route.params.id}.json`, { product: this.product })
        this.$swal.fire({
          text: "Success, Product has been updated.",
          icon: "success",
          position: "top-end",
          timer: 1000,
        });
        this.$router.push({ name: "Products" });
        this.isUpdating = false
      } catch (err) {
        const errors = err.response.data.product.errors;
        for (const key in errors) {
          errors[key] = errors[key].join(', ');
        }
        this.product.errors = errors;
      }
      this.isUpdating = false
    }
  },
};
</script>

<style scoped>
.invalid span {
  color: #d9534f;
}
.invalid input,
.invalid textarea {
  border: 1px solid #d9534f;
}
</style>
