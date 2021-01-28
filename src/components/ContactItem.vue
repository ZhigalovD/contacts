<template>
  <div class="contact-item">
    <div class="contact-item__wrapper container">
      <div class="contact-item__avatar">
        <img src="@/assets/images/s1200.webp" alt="" />
      </div>
      <a :href="`tel:${contacts.main.phone}`" class="contact-item__main">
        <div class="contact-item__main--name">{{ contacts.main.name }}</div>
        <div class="contact-item__main--phone">{{ contacts.main.phone }}</div>
      </a>
      <div class="contact-item__info">
        <router-link
          @click.native="setIdContact"
          :to="{
            path: 'information',
            query: { contact_id: contacts.id_contact },
          }"
        >
          <img src="@/assets/images/svg/info.svg" alt="">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "ContactItem",
  props: {
    contacts: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    ...mapMutations(["SET_CONTACT_ID"]),
    setIdContact() {
      this.SET_CONTACT_ID(this.contacts.id_contact);
    },
  },
};
</script>

<style lang="less">
.contact-item {
  margin: 0 auto;
  border-bottom: 1px solid @line-color;
  transition: ease all 0.3s;

  &__avatar {
    width: 70px;
    height: 56px;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 70px;
      height: 56px;
      object-fit: cover;
    }
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 80px;
  }

  &__main {
    color: @light-color;
    width: 100%;
    cursor: pointer;
    text-decoration: none;
    text-align: left;
    font-weight: @font-weight-light;
    margin-left: 15px;

    &--name {
      font-size: @size-large;
      margin-bottom: 5px;
    }

    &--phone {
      font-size: @size-light;
    }
  }

  &__info {
    width: 34px;
    height: 30px;
    border: 1px solid @light-color;
    border-radius: 50%;
    padding: 0 6px;
    line-height: 30px;
  }
}
</style>
