<template>
  <div class="contact-item">
    <div class="contact-item__wrapper">
      <div>{{ contacts.name }}</div>
      <div>{{ contacts.phone }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactItem",
  props: {
    contacts: {
      type: Object,
      default: () => ({})
    }
  },
}
</script>

<style lang="less">
.contact-item {
  margin-top: 30px;
  &__wrapper {
    display: flex;
    justify-content: space-between;
    margin: 15px;
  }
}
</style>
