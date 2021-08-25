<template>
  <div class="row border-1 p-2">
    <div class="col-3">{{ product.name }}</div>
    <div class="col-2"><strong class="text-danger">$ {{ parseFloat(product.price).toFixed(2) }}</strong></div>
    <div class="col-3"><span class="badge badge-info">Username</span></div>
    <div class="col-2">
      <router-link
        :to="{ name: 'ProductEdit', params: { id: product.id } }"
        class="btn btn-primary"
        title="Edit Product">
        <i class="fa fa-pencil"></i>
      </router-link>
      <button
        class="btn btn-danger ml-2"
        @click="deleteProductModal(product.id)"
        title="Delete Product">
        <i class="fa fa-trash"></i>
      </button>
    </div>
  </div>
</template>


<script>
export default {
  name: "ProductDetail",
  emit:['deleteProduct'],
  props: {
    product: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
  methods: {
    deleteProductModal(id) {
      this.$swal
        .fire({
          text: "Are you sure to delete the product ?",
          icon: "error",
          cancelButtonText: "Cancel",
          confirmButtonText: "Yes, Confirm Delete",
          showCancelButton: true,
        })
        .then((result) => {
          if (result["isConfirmed"]) {
            // Put delete logic
            this.$emit('deleteProduct', id)
          }
        });
    },
  },
};
</script>
