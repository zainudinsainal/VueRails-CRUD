<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h6>Add Product</h6>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="saveProduct">
          <div class="form-group row">
            <div class="col-6">
              <label>Product Name:</label>
              <input type="text" class="form-control" v-model="product.name" />
            </div>
            <div class="col-6">
              <label>Product Price:</label>
              <input type="number" class="form-control" v-model="product.price" />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-12">
              <label>Product Details:</label>
              <textarea class="form-control" v-model="product.description" />
            </div>
          </div>
          <div class="form-group">
            <router-link to="/products" class="btn btn-secondary mr-2"
              >Cancel</router-link
            >
            <input
              type="submit"
              class="btn btn-primary"
              value="Add Product"
              v-if="!isCreating"
            />
            <button class="btn btn-primary" type="button" disabled v-if="isCreating">
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Saving...
            </button>
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
      isCreating: false,
    };
  },
  created() {
    this.loadProduct();
  },
  methods: {
    async loadProduct() {
      try {
        const data = await axios.get('/api/products/new.json');
        this.product = data.data.product;
      } catch {
        console.log('error', err);
      }
    },
    async saveProduct() {
      this.isCreating = true
      try {
        const response = await axios.post('/api/products.json', { product: this.product })

        if (response.status === 200) {
          this.$swal.fire({
            text: "Success, Product has been added.",
            icon: "success",
          });
          this.$router.push({ name: "Products" });
        } else if (response.status === 422) {
          console.log('response', response)
        }
        this.isCreating = false
      } catch (err) {
        console.log('error', err);
      }
      this.isCreating = false
    }
  },
};
</script>
