<template>
  <div class="create container">
    <div class="create__wrapper">
      <div class="create__title">Добавление информации контакта</div>
      <form @submit.prevent="submit">
        <input type="text" placeholder="Введите название" v-model="nameInformation">
        <input type="text" placeholder="Введите значение" v-model="valueInformation">
        <button class="create__wrapper--button" type="submit">+</button>
      </form>
    </div>
    <div class="create__information">
      <line-information v-for="(info, i) in ADD_INFORMATION" :key="i" :info="info"/>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex"
import LineInformation from "@/components/LineInformation";

export default {
  name: "Create",
  components: {
    LineInformation
  },
  data() {
    return {
      idInformation: 0,
      nameInformation: '',
      valueInformation: ''
    };
  },
  computed: mapGetters(["ADD_INFORMATION"]),
  methods: {
    ...mapMutations(['CREATE_INFORMATION']),
    submit() {
      this.CREATE_INFORMATION({
        id: this.idInformation++,
        nameInformation: this.nameInformation,
        valueInformation: this.valueInformation
      });
      this.nameInformation = this.valueInformation = ''
    }
  }
}
</script>

<style lang="less">
.create {
  padding: 50px 0;

  &__wrapper {
    color: #2c3e50;

    &--button {
      text-decoration: none;
      font-size: @size-big;
      font-weight: 600;
      background: #2c3e50;
      color: #ffffff;
      padding: 4px 10px;
      cursor: pointer;
      border: none;
      outline: none;
      vertical-align: middle;
      border-radius: 3px;
    }

    input {
      max-width: 200px;
      width: 100%;
      padding: 0 20px;
      margin-right: 10px;
      height: 31px;
      vertical-align: middle;
      border-radius: 3px;
      border: 1px solid #2c3e50;
    }
  }

  &__information {
    margin: 20px 0;
  }

  &__title {
    font-size: @size-big;
    margin-bottom: 10px;
  }
}
</style>
