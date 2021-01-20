<template>
  <div class="home container">
    <div class="home__create">
      <router-link to="/information" class="home__create--button">+</router-link>
      Создать новый контакт
    </div>
    <div class="home__items">
      <router-link to="/information">
        <contact-item v-for="(contact, i) in GET_CONTACTS" :key="i" :contacts="contact"/>
      </router-link>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
import ContactItem from "@/components/ContactItem";

export default {
  name: 'Home',
  components: {
    ContactItem
  },
  computed: mapGetters(['GET_CONTACTS']),
  methods: {}
}
</script>

<style lang="less">
.home {
  padding: 50px 0;

  &__create {
    color: #2c3e50;

    &--button {
      text-decoration: none;
      font-size: @size-big;
      font-weight: 600;
      background: #2c3e50;
      color: #ffffff;
      padding: 10px 15px;
    }
  }
}
</style>
