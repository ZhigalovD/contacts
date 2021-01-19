<template>
  <div class="line-information" :data-id="info.id">
    <input name="nameInformation" type="text" v-model="info.nameInformation" :disabled="isDisabled">
    <input name="valueInformation" type="text" v-model="info.valueInformation" :disabled="isDisabled">
    <button @click="unDisabled" v-if="isDisabled" class="line-information__edit">
      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
           x="0px" y="0px"
           viewBox="0 0 383.947 383.947" style="enable-background:new 0 0 383.947 383.947;" xml:space="preserve">
        <g>
          <g>
            <g>
              <polygon points="0,303.947 0,383.947 80,383.947 316.053,147.893 236.053,67.893 			"/>
              <path d="M377.707,56.053L327.893,6.24c-8.32-8.32-21.867-8.32-30.187,0l-39.04,39.04l80,80l39.04-39.04C386.027,77.92,386.027,64.373,377.707,56.053z"/>
            </g>
          </g>
        </g>
      </svg>
    </button>
    <button @click="backValue">B</button>
    <div class="line-information__buttons">
      <button @click="confirmationInformation" v-if="!isDisabled">S</button>
      <button @click="cancelInformation" v-if="!isDisabled">C</button>
      <button @click="deleteInformation" v-if="!isDisabled">D</button>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex"

export default {
  name: "LineInformation",
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      isDisabled: true,
      initialName: '',
      initialValue: ''
    }
  },
  computed: mapGetters(["ADD_INFORMATION"]),
  methods: {
    ...mapMutations(['SHOW_POPUP', 'SET_ARR', 'SET_NAME_EVENT']),
    confirmationInformation() {
      this.SET_NAME_EVENT({name: 'edit', text: 'редактировать'})
      this.SHOW_POPUP(true)
      this.SET_ARR(this.info)
      this.isDisabled = true
    },
    deleteInformation() {
      this.SET_NAME_EVENT({name: 'delete', text: 'удалить'})
      this.SHOW_POPUP(true)
      this.SET_ARR(this.info)
      this.isDisabled = true
    },
    cancelInformation() {
      this.info.nameInformation = this.initialName
      this.info.valueInformation = this.initialValue
      this.isDisabled = true
    },
    unDisabled() {
      this.initialName = this.info.nameInformation
      this.initialValue = this.info.valueInformation
      this.isDisabled = false
    },
    backValue(){
      this.info.nameInformation = this.initialName
      this.info.valueInformation = this.initialValue
    }
  }
}
</script>

<style lang="less">
.line-information {
  margin: 15px 0;

  input {
    display: inline-block;
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

  &__buttons {
    margin-top: 10px;
  }

  &__edit {
    svg {
      width: 12px;
      fill: #ffffff;
    }
  }

  button {
    width: 31px;
    height: 31px;
    text-align: center;
    cursor: pointer;
    background: #2c3e50;
    color: #ffffff;
    border: none;
    outline: none;
    border-radius: 3px;
    margin-right: 10px;
  }
}
</style>
