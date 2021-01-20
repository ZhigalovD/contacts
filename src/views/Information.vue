<template>
  <div class="create container">
    <div class="create__wrapper">
      <div class="create__title">Добавление информации контакта
        <div>Пример: "e-mail" "contactapp@mail.ru"</div>
      </div>
      <form @submit.prevent="submit">
        <input type="text" placeholder="Введите название" v-model="nameInformation">
        <input type="text" placeholder="Введите значение" v-model="valueInformation">
        <button class="create__wrapper--button" type="submit">+</button>
      </form>
      <div class="create__required-fields">
        <div class="create__required-fields--title">Обязательные поля</div>
        <div class="create__required-fields--inp">
          <input type="text" placeholder="Имя" disabled>
          <input type="text" name="name" placeholder="Введите значение" v-model="name"
                 :disabled="isInputRequiredDisabled">
        </div>
        <div class="create__required-fields--inp">
          <input type="text" placeholder="Номер телефона" disabled>
          <input type="text" name="phone" placeholder="Введите значение" v-model="phone"
                 :disabled="isInputRequiredDisabled">
          <button class="create__required-fields--button" @click="setRequiredFields"
                  :disabled="isButtonRequiredDisabled" v-if="isShowButtonRequired">✓
          </button>
          <button class="create__required-fields--button" @click="editRequiredFields" v-if="isShowButtonEdit">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                 x="0px" y="0px"
                 viewBox="0 0 383.947 383.947" style="enable-background:new 0 0 383.947 383.947;" xml:space="preserve">
        <g>
          <g>
            <g>
              <polygon points="0,303.947 0,383.947 80,383.947 316.053,147.893 236.053,67.893 			"/>
              <path
                  d="M377.707,56.053L327.893,6.24c-8.32-8.32-21.867-8.32-30.187,0l-39.04,39.04l80,80l39.04-39.04C386.027,77.92,386.027,64.373,377.707,56.053z"/>
            </g>
          </g>
        </g>
      </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="create__information">
      <div class="create__information--title">Дополнительные поля</div>
      <line-information v-for="(info, i) in ADD_INFORMATION" :key="i" :info="info"/>
    </div>
    <div class="create__add">
      <router-link to="/" @click.native="saveContact" :class="{ disabled: isButtonSaveDisabled }">Сохранить</router-link>
      <router-link to="/" @click.native="cancelPage">Отмена</router-link>
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
      valueInformation: '',
      isInputRequiredDisabled: false,
      isButtonSaveDisabled: true,
      isShowButtonRequired: true,
      isShowButtonEdit: false
    };
  },
  computed: {
    ...mapGetters(['ADD_INFORMATION', 'GET_REQUIRE_FIELDS']),
    isButtonRequiredDisabled() {
      return !this.name || !this.phone
    },
    Contacts() {
      return {...this.GET_REQUIRE_FIELDS, ...this.ADD_INFORMATION}
    }
  },
  methods: {
    ...mapMutations(['CREATE_INFORMATION', 'SET_REQUIRE_FIELDS', 'SET_ALL_CONTACTS', 'DEFAULT_INFO', 'DEFAULT_REQUIRE_FIELDS']),
    submit() {
      this.CREATE_INFORMATION({
        id: this.idInformation++,
        nameInformation: this.nameInformation,
        valueInformation: this.valueInformation
      });
      this.nameInformation = this.valueInformation = ''
    },
    setRequiredFields() {
      this.SET_REQUIRE_FIELDS({
        id_user: this._uid,
        name: this.name,
        phone: this.phone
      })
      this.isButtonSaveDisabled = false
      this.isInputRequiredDisabled = true
      this.isShowButtonRequired = false
      this.isShowButtonEdit = true
    },
    editRequiredFields() {
      this.SET_REQUIRE_FIELDS({
        name: this.name,
        phone: this.phone
      })
      this.isButtonSaveDisabled = false
      this.isInputRequiredDisabled = false
      this.isShowButtonRequired = true
      this.isShowButtonEdit = false
    },
    cancelPage() {
      this.DEFAULT_INFO([])
      this.DEFAULT_REQUIRE_FIELDS({})
    },
    saveContact() {
      this.DEFAULT_INFO([])
      this.DEFAULT_REQUIRE_FIELDS({})
      this.SET_ALL_CONTACTS(this.Contacts)
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
      font-size: @size-main;
      width: 31px;
      height: 31px;
      text-decoration: none;
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
      width: 31px;
      height: 31px;
      text-decoration: none;
      font-size: @size-main;
      background: #2c3e50;
      color: #ffffff;
      padding: 4px 10px;
      cursor: pointer;
      border: none;
      outline: none;
      vertical-align: middle;
      border-radius: 3px;

      &:disabled {
        opacity: 0.5;
      }

      svg {
        width: 12px;
        fill: #ffffff;
      }
    }

    &--inp {
      margin-bottom: 10px;
    }
  }

  &__information {
    margin: 20px 0;
    color: #2c3e50;

    &--title {
      margin: 10px 0;
    }
  }

  &__title {
    font-size: @size-big;
    margin-bottom: 10px;

    div {
      font-size: @size-light;
    }
  }

  &__add {
    a {
      text-decoration: none;
      background: #2c3e50;
      color: #ffffff;
      padding: 10px 15px;
      cursor: pointer;
      border: none;
      outline: none;
      vertical-align: middle;
      border-radius: 3px;
      margin: 0 5px;


      &.disabled {
        pointer-events: none;
        opacity: 0.5;
      }
    }
  }
}
</style>
