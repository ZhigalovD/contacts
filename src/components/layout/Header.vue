<template>
<div class="header">
  <div class="header__logo">
    <router-link to="/">ContactsApp</router-link>
  </div>
</div>
</template>

<script>
export default {
name: "Header"
}
</script>

<style lang="less">
  .header {
    background: #2c3e50;
    min-height: 50px;
    text-align: center;

    &__logo {
      line-height: 50px;
      color: #fff;
      font-weight: 600;

      a {
        color: #fff;
        text-decoration: none;

        &:hover {
          color: #919191;
        }
      }
    }
  }
</style>
