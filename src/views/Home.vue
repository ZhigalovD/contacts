<template>
  <div class="home container">
    <div class="home__create">
      <router-link to="/create" class="home__create--button">+</router-link>
      Создать новый контакт
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home'
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
