<template>
  <div class="info container">
    <div class="info__photo">
      <div class="info__photo-bg">
        <img src="@/assets/images/s1200.webp" alt="" />
      </div>
      <h1>{{ name }}</h1>
      <div class="info__avatar">
        <img src="@/assets/images/s1200.webp" alt="" />
      </div>
    </div>
    <div class="info__wrapper">
      <div class="info__required-fields">
        <div class="info__required-fields--inp">
          <input
            type="text"
            name="name"
            v-model="name"
            @change="changeMainInfo"
            @focus="isChoosedName = true"
            @blur="
              name.length > 0 ? (isChoosedName = true) : (isChoosedName = false)
            "
          />
          <label :class="{ active: isChoosedName }">name</label>
          <span>{{ errors.errorName }}</span>
        </div>
        <div class="info__required-fields--inp">
          <input
            type="number"
            name="phone"
            v-model="phone"
            @change="changeMainInfo"
            @focus="isChoosedPhone = true"
            @blur="
              phone.length > 0
                ? (isChoosedPhone = true)
                : (isChoosedPhone = false)
            "
          />
          <label :class="{ active: isChoosedPhone }">phone</label>
          <span>{{ errors.errorPhone }}</span>
        </div>
      </div>
      <div class="info__other">
        <input
          type="text"
          placeholder="Введите название"
          v-model="nameInformation"
        />
        <input
          type="text"
          placeholder="Введите значение"
          v-model="valueInformation"
        />
        <button class="button" @click="setOtherInfo">+</button>
        <span>{{ errors.errorNameInfo }}</span>
      </div>
    </div>
    <div class="info__item">
      <div class="info__item--title">Дополнительные поля</div>
      <line-information
        v-for="(info, i) in GET_OTHER_INFO"
        :key="i"
        :info="info"
      />
    </div>
    <div class="info__add">
      <router-link
        to="/"
        @click.native="saveContact"
        :class="{ disabled: isButtonSaveDisabled }"
        >Сохранить</router-link
      >
      <router-link to="/" @click.native="cancelPage">Отмена</router-link>
      <router-link to="/" @click.native="deleteContact">delete</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import LineInformation from "@/components/LineInformation";

export default {
  name: "Information",
  components: {
    LineInformation,
  },
  data() {
    return {
      errors: {},
      name: "",
      phone: "",
      idInformation: 0,
      nameInformation: "",
      valueInformation: "",
      isChoosedName: false,
      isChoosedPhone: false,
    };
  },
  computed: {
    ...mapGetters([
      "GET_OTHER_INFO",
      "GET_MAIN_INFO",
      "GET_ID_CONTACT",
      "GET_CONTACTS",
    ]),
    isButtonSaveDisabled() {
      return !this.name || !this.phone;
    },
  },
  created() {
    this.GET_STORE_CONTACTS();
    this.fetchData();
  },
  watch: {
    $route: "fetchData",
  },
  mounted() {
    this.inputEmpty()
  },
  methods: {
    ...mapMutations([
      "SET_MAIN_INFO",
      "SET_FULL_CONTACT",
      "SET_OTHER_INFO",
      "CLEAR_MAIN_INFO",
      "CLEAR_OTHER_INFO",
      "SET_INFORMATION_FROM_CONTACTS",
      "GET_STORE_CONTACTS",
      "DELETE_CONTACT",
    ]),
    inputEmpty() {
      if (this.name.length > 0) {
        this.isChoosedName = true
      }
      if (this.phone.length > 0) {
        this.isChoosedPhone = true
      }
    },
    setOtherInfo() {
      if (
        this.nameInformation.length >= 2 &&
        this.valueInformation.length >= 2
      ) {
        this.errors = {};
        this.SET_OTHER_INFO({
          id: this.idInformation++,
          nameInformation: this.nameInformation,
          valueInformation: this.valueInformation,
        });
        this.nameInformation = this.valueInformation = "";
      } else if (this.name.length < 3) {
        this.errors = { ...this.errors, errorNameInfo: "Поля не заполнены" };
      }
    },
    changeMainInfo() {
      if (this.name.length >= 3 && this.phone.length >= 5) {
        this.errors = {};
        this.SET_MAIN_INFO({
          name: this.name,
          phone: this.phone,
        });
      } else if (this.name.length < 3) {
        this.errors = { ...this.errors, errorName: "Укажите имя" };
      } else if (this.phone.length < 5) {
        this.errors = {};
        this.errors = { ...this.errors, errorPhone: "Укажите телефон" };
      }
    },
    saveContact() {
      this.SET_FULL_CONTACT({
        id_contact: this.GET_ID_CONTACT,
        main: this.GET_MAIN_INFO,
        other: this.GET_OTHER_INFO,
      });
      this.CLEAR_OTHER_INFO([]);
      this.CLEAR_MAIN_INFO({});
    },
    cancelPage() {
      this.CLEAR_OTHER_INFO([]);
      this.CLEAR_MAIN_INFO({});
    },
    fetchData() {
      this.GET_CONTACTS.forEach((el) => {
        if (el.id_contact === this.$route.query.contact_id) {
          this.SET_INFORMATION_FROM_CONTACTS(el.other);
          this.name = el.main.name;
          this.phone = el.main.phone;
          this.SET_MAIN_INFO({
            name: el.main.name,
            phone: el.main.phone,
          });
        }
      });
    },
    deleteContact() {
      this.DELETE_CONTACT({ id_contact: this.GET_ID_CONTACT });
    },
  },
};
</script>

<style lang="less">
.info {
  padding: 50px 0;
  background: @bg-info-color;

  &.container {
    padding-left: 0;
    padding-right: 0;
  }

  &__wrapper {
    padding: 5px 15px;
    background: @light-color;
    text-align: left;

    &--button {
      font-size: @size-main;
      width: 31px;
      height: 31px;
      text-decoration: none;
      background: @main-color;
      color: @light-color;
      cursor: pointer;
      border: none;
      outline: none;
      vertical-align: middle;
      border-radius: 3px;
      transition: ease all 0.3s;
      opacity: 0.5;

      &:hover {
        opacity: 1;
      }
    }
  }

  &__required-fields {
    margin: 15px 0;

    label {
      position: absolute;
      left: 3px;
      top: 0;
      font-size: @size-main;
      transition: ease all 0.3s;

      &.active {
        top: initial;
        bottom: 3px;
        font-size: @size-light;
      }
    }

    &--inp {
      margin-bottom: 15px;
      position: relative;
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }

      span {
        display: block;
        font-size: 12px;
        color: red;
        margin-top: 0;
        position: absolute;
      }
    }
  }

  &__item {
    margin: 20px 0;

    &--title {
      margin: 10px 0;
    }
  }

  &__add {
    a {
      text-decoration: none;
      background: @main-color;
      color: @light-color;
      padding: 10px 15px;
      cursor: pointer;
      border: none;
      outline: none;
      vertical-align: middle;
      border-radius: 3px;
      margin: 0 5px;
      transition: ease all 0.3s;
      opacity: 0.5;

      &:hover {
        opacity: 1;
      }

      &.disabled {
        pointer-events: none;
        opacity: 0.3;
      }
    }
  }
  &__other {
    position: relative;
    margin-bottom: 20px;
    span {
      display: block;
      font-size: 12px;
      color: red;
      margin-top: 5px;
      position: absolute;
    }
  }

  &__photo {
    position: relative;
    overflow: hidden;
    margin-bottom: 15px;

    h1 {
      position: absolute;
      left: 118px;
      bottom: 23%;
      color: @light-color;
      font-weight: @font-weight-regular;
      font-size: @size-big;
    }

    &-bg {
      width: 100%;
      filter: blur(7px);

      img {
        object-fit: cover;
        height: 100px;
        object-position: center 50%;
      }
    }
  }

  &__avatar {
    width: 80px;
    height: 80px;
    overflow: hidden;
    border-radius: 50%;
    margin-left: 28px;
    margin-top: -64px;
    position: relative;
    img {
      width: 80px;
      height: 80px;
      object-fit: cover;
    }
  }
}
</style>
