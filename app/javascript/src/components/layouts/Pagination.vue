<template>
  <div class='vertical-center mt-2 mb-5' v-if="pagination.next || pagination.prev">
    <nav aria-label="Page navigation">
      <ul class="pagination">
        <li class="page-item">
          <router-link :to="{path: $route.path, query: {page: pagination.prev}}" v-if='pagination.prev' class="page-link">
            <span>&laquo;</span>
          </router-link>
        </li>

        <li v-for="page in pagination.pages" :key="page" class="page-item" :class="[pagination.page == page ? 'active' : '']">
          <router-link class="page-link" :to="{path: $route.path, query: {page: page}}">{{ page }}</router-link>

        </li>

        <li class="page-item">
          <router-link :to="{ path: $route.path, query: { page: pagination.next } }"  v-if='pagination.next' class="page-link">
            <span>&raquo;</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
  <span>{{pagination}}</span>
</template>

<script>
export default {
  props: ['pagination'],

  watch: {
    '$route.query'() {
      // this.$store.dispatch(this.$props.pagination.callback, this.$route.query)
    }
  }
}
</script>
