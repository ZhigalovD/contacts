<template>
  <div class="header">
    <div class="header__wrapper container">
      <div class="header__logo">
        <router-link to="/"
          ><img src="@/assets/images/logo.png" alt=""
        /></router-link>
      </div>
      <div class="header__active-elements">
        <router-link to="/"
          ><img src="@/assets/images/svg/loupe.svg" alt=""
        /></router-link>
        <router-link to="/information" @click.native="createContact"
          ><img src="@/assets/images/svg/add-user.svg" alt=""
        /></router-link>
        <router-link to="/"
          ><img src="@/assets/images/svg/icon-contacts.svg" alt=""
        /></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { uuid } from "vue-uuid";

export default {
  name: "Header",
  methods: {
    ...mapMutations(["SET_CONTACT_ID"]),
    createContact() {
      this.SET_CONTACT_ID(uuid.v1());
    },
  },
};
</script>

<style lang="less">
.header {
  background: @main-color;
  text-align: center;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 10;

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 50px;
  }

  &__logo {
    width: 30px;

    a {
      color: @light-color;
      text-decoration: none;
    }
  }

  &__active-elements {
    display: flex;
    padding: 0;
    list-style: none;
    a {
      margin: 0 15px;
      &:nth-of-type(3) {
        margin-right: 0;
      }
      img {
        width: 20px;
      }
    }
  }
}
</style>
