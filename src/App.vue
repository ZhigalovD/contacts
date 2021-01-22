<template>
  <div id="app">
    <Header />
    <router-view />
    <popup v-if="IS_SHOW_POPUP" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "@/components/layout/Header";
import Popup from "@/components/Popup";

export default {
  components: {
    Header,
    Popup,
  },
  computed: mapGetters(["IS_SHOW_POPUP"]),
};
</script>
