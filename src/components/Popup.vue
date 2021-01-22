<template>
  <div class="popup">
    <div class="popup__bg"></div>
    <div class="popup__wrapper">
      <div class="popup__title">
        Вы точно хотите {{ GET_NAME_EVENT.text }} это поле?
      </div>
      <button @click="confirmation">Да</button>
      <button @click="notConfirm">Нет</button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "Popup",
  computed: mapGetters(["GET_ARR", "GET_NAME_EVENT"]),
  methods: {
    ...mapMutations(["UPDATE_INFORMATION", "DELETE_INFORMATION", "SHOW_POPUP"]),
    confirmation() {
      if (this.GET_NAME_EVENT.name === "edit") {
        this.UPDATE_INFORMATION({
          id: this.GET_ARR.id,
          nameInformation: this.GET_ARR.nameInformation,
          valueInformation: this.GET_ARR.valueInformation,
        });
      } else {
        this.DELETE_INFORMATION({
          id: this.GET_ARR.id,
        });
      }
      this.SHOW_POPUP(false);
    },
    notConfirm() {
      this.SHOW_POPUP(false);
    },
  },
};
</script>

<style lang="less">
.popup {
  &__bg {
    background: #000000;
    opacity: 0.5;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  &__wrapper {
    position: fixed;
    display: inline-block;
    background: #ffffff;
    transform: translate(50%, 50%);
    right: 50%;
    bottom: 50%;
    max-width: 500px;
    width: 100%;
    padding: 40px;
    text-align: center;

    button {
      margin: 15px 10px;
      width: 100%;
      max-width: 70px;
      height: 31px;
      text-align: center;
      cursor: pointer;
      background: #2c3e50;
      color: #ffffff;
      border: none;
      outline: none;
      border-radius: 3px;
      box-shadow: none;
    }
  }
}
</style>
