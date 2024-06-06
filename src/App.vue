<script>
import PageHeader from './components/PageHeader.vue';
import AppJumbo from './components/AppJumbo.vue';
import AppServices from './components/AppServices.vue'
import PageMain from './components/PageMain.vue';
import PageFooter from './components/PageFooter.vue';
import store from './data/store.js';
export default {
  name: "App",
  components: {
    PageHeader,
    PageMain,
    PageFooter,
    AppJumbo,
    AppServices,
    store

  },

  data() {
    return {
      store

    }

  },

  methods: {


  },

}
</script>

<template>
  <PageHeader />
  <AppJumbo />
  <AppServices />
  <PageMain />
  <PageFooter />
</template>



<style scoped></style>