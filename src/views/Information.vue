<template>
  <div class="create container">
    <div class="create__wrapper">
      <div class="create__title">Добавление информации контакта</div>
      <form @submit.prevent="submit">
        <input type="text" placeholder="Введите название" v-model="nameInformation">
        <input type="text" placeholder="Введите значение" v-model="valueInformation">
        <button class="create__wrapper--button" type="submit">+</button>
      </form>
      <div class="create__required-fields">
        <div class="create__required-fields--title">Обязательные поля</div>
        <div class="create__required-fields--inp">
          <input type="text" placeholder="Имя" disabled>
          <input type="text" placeholder="Введите значение" v-model="name">
          <button class="create__required-fields--button">+</button>
        </div>
        <div class="create__required-fields--inp">
          <input type="text" placeholder="Номер телефона" disabled>
          <input type="text" placeholder="Введите значение" v-model="phone">
          <button class="create__required-fields--button">+</button>
        </div>
      </div>
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
  name: "Information",
  components: {
    LineInformation
  },
  data() {
    return {
      name: '',
      phone: '',
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

      &:disabled {
        background: none;
        border: 1px solid rgba(44, 62, 80, 0.1);
      }
    }
  }

  &__required-fields {
    margin: 15px 0;

    &--title {
      margin: 10px 0;
    }

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

    &--inp {
      margin-bottom: 10px;
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
