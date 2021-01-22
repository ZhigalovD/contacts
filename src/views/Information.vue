<template>
  <div class="create container">
    <div class="create__wrapper">
      <div class="create__title">
        Добавление информации контакта
        <div>Пример: "e-mail" "contactapp@mail.ru"</div>
      </div>
      <form @submit.prevent="submit">
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
        <button class="create__wrapper--button" type="submit">+</button>
      </form>
      <div class="create__required-fields">
        <div class="create__required-fields--title">Обязательные поля</div>
        <div class="create__required-fields--inp">
          <input type="text" placeholder="Имя" disabled />
          <input
            type="text"
            name="name"
            placeholder="Введите значение"
            v-model="name"
            @change="dataChange"
          />
        </div>
        <div class="create__required-fields--inp">
          <input type="text" placeholder="Номер телефона" disabled />
          <input
            type="text"
            name="phone"
            placeholder="Введите значение"
            v-model="phone"
            @change="dataChange"
          />
        </div>
      </div>
    </div>
    <div class="create__information">
      <div class="create__information--title">Дополнительные поля</div>
      <line-information
        v-for="(info, i) in ADD_INFORMATION"
        :key="i"
        :info="info"
      />
    </div>
    <div class="create__add">
      <router-link
        to="/"
        @click.native="saveContact"
        :class="{ disabled: isButtonSaveDisabled }"
        >Сохранить</router-link
      >
      <router-link to="/" @click.native="cancelPage">Отмена</router-link>
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
      name: "",
      phone: "",
      idInformation: 0,
      nameInformation: "",
      valueInformation: "",
    };
  },
  computed: {
    ...mapGetters([
      "ADD_INFORMATION",
      "GET_REQUIRE_FIELDS",
      "GET_CONTACTS",
      "GET_ID",
    ]),
    Contacts() {
      return {
        ...this.GET_ID,
        ...this.GET_REQUIRE_FIELDS,
        ...[this.ADD_INFORMATION],
      };
    },
    isButtonSaveDisabled() {
      return !this.name || !this.phone;
    },
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData",
  },
  methods: {
    ...mapMutations([
      "SET_INFORMATION",
      "SET_REQUIRE_FIELDS",
      "SET_ALL_CONTACTS",
      "DEFAULT_INFO",
      "DEFAULT_REQUIRE_FIELDS",
      "SET_INFORMATION_FROM_CONTACTS",
    ]),
    submit() {
      this.SET_INFORMATION({
        id: this.idInformation++,
        nameInformation: this.nameInformation,
        valueInformation: this.valueInformation,
      });
      this.nameInformation = this.valueInformation = "";
    },
    cancelPage() {
      this.DEFAULT_INFO([]);
      this.DEFAULT_REQUIRE_FIELDS({});
    },
    dataChange() {
      this.SET_REQUIRE_FIELDS({
        name: this.name,
        phone: this.phone,
      });
    },
    saveContact() {
      this.SET_ALL_CONTACTS(this.Contacts);
      this.DEFAULT_INFO([]);
      this.DEFAULT_REQUIRE_FIELDS({});
    },
    fetchData() {
      this.GET_CONTACTS.forEach((el) => {
        if (el.id_user === this.$route.query.contact_id) {
          this.SET_INFORMATION_FROM_CONTACTS(el[0]);
          this.name = el.name;
          this.phone = el.phone;
          this.SET_REQUIRE_FIELDS({
            id_user: el.id_user,
            name: el.name,
            phone: el.phone,
          });
        }
      });
    },
  },
};
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
