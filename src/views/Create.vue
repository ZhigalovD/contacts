<template>
  <div class="create container">
    <div class="create__wrapper">
      Add line information
      <form @submit.prevent="submit">
        <input type="text" placeholder="Enter the title" v-model="nameInformation">
        <input type="text" placeholder="enter information" v-model="valueInformation">
        <button class="create__wrapper--button" type="submit">+</button>
      </form>
    </div>
    <div class="create__information">
      <line-information v-for="(info, i) in validInformation" :key="i" :info="info"/>
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
      nameInformation: '',
      valueInformation: ''
    };
  },
  computed: mapGetters(["validInformation"]),
  methods: {
    ...mapMutations(['createInformation']),
    submit() {
      this.createInformation({
        id: this.validInformation.length,
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
}
</style>
