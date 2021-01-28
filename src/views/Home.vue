<template>
  <div class="home">
    <div class="home__items">
      <contact-item
        v-for="(contact, i) in GET_CONTACTS"
        :key="i"
        :contacts="contact"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import ContactItem from "@/components/ContactItem";
import { uuid } from "vue-uuid";

export default {
  name: "Home",
  components: {
    ContactItem,
  },
  computed: mapGetters(["GET_CONTACTS"]),
  created() {
    this.GET_STORE_CONTACTS();
  },
  methods: {
    ...mapMutations(["SET_CONTACT_ID", "GET_STORE_CONTACTS"]),
    createContact() {
      this.SET_CONTACT_ID(uuid.v1());
    },
  },
};
</script>

<style lang="less">
.home {
  padding-top: 50px;
}
</style>
