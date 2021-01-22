<template>
  <div class="line-information" :data-id="info.id">
    <input
      name="nameInformation"
      type="text"
      v-model="info.nameInformation"
      :disabled="isDisabled"
    />
    <input
      name="valueInformation"
      type="text"
      v-model="info.valueInformation"
      :disabled="isDisabled"
    />
    <button
      @click="unDisabled"
      v-if="isDisabled"
      class="line-information__edit"
    >
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 383.947 383.947"
        style="enable-background: new 0 0 383.947 383.947"
        xml:space="preserve"
      >
        <g>
          <g>
            <g>
              <polygon
                points="0,303.947 0,383.947 80,383.947 316.053,147.893 236.053,67.893 			"
              />
              <path
                d="M377.707,56.053L327.893,6.24c-8.32-8.32-21.867-8.32-30.187,0l-39.04,39.04l80,80l39.04-39.04C386.027,77.92,386.027,64.373,377.707,56.053z"
              />
            </g>
          </g>
        </g>
      </svg>
    </button>
    <button @click="returnInformation" :disabled="isDisabledBack">
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        style="enable-background: new 0 0 512 512"
        xml:space="preserve"
      >
        <g>
          <g>
            <path
              d="M390.483,110.212c-44.454-44.454-103.558-68.936-166.426-68.936h-45.069V0L52.581,126.407l126.407,126.407v-41.276h45.069
			c74.554,0,135.208,60.654,135.208,135.208s-60.654,135.208-135.208,135.208V512c62.868,0,121.971-24.482,166.426-68.936
			c44.454-44.454,68.936-103.558,68.936-166.426S434.938,154.667,390.483,110.212z"
            />
          </g>
        </g>
      </svg>
    </button>
    <div class="line-information__buttons">
      <button @click="confirmationInformation" v-if="!isDisabled">✓</button>
      <button @click="cancelInformation" v-if="!isDisabled">✖</button>
      <button @click="deleteInformation" v-if="!isDisabled" class="crash">
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          style="enable-background: new 0 0 512 512"
          xml:space="preserve"
        >
          <g>
            <g>
              <path
                d="M406,60h-75V45c0-24.813-20.187-45-45-45h-60c-24.813,0-45,20.187-45,45v15h-75c-24.813,0-45,20.187-45,45v30
			c0,8.284,6.716,15,15,15h15v317c0,24.813,20.187,45,45,45h240c24.813,0,45-20.187,45-45V150h15c8.284,0,15-6.716,15-15v-30
			C451,80.187,430.813,60,406,60z M211,45c0-8.271,6.729-15,15-15h60c8.271,0,15,6.729,15,15v15h-90V45z M391,467
			c0,8.271-6.729,15-15,15H136c-8.271,0-15-6.729-15-15V150h270V467z M421,120H91v-15c0-8.271,6.729-15,15-15h300
			c8.271,0,15,6.729,15,15V120z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M256,211c-26.336,0-51.041,9.886-69.879,26.657V226c0-8.284-6.716-15-15-15s-15,6.716-15,15v60
			c0,0.053,0.007,0.105,0.008,0.158c0.086,8.257,6.867,14.842,14.992,14.842H226c8.284,0,15-6.716,15-15s-6.716-15-15-15h-30.014
			c13.925-18.52,36.023-30,60.014-30c41.355,0,75,33.645,75,75c0,41.355-33.645,75-75,75c-20.033,0-38.867-7.801-53.033-21.967
			c-5.857-5.858-15.355-5.858-21.213,0c-5.858,5.858-5.858,15.355,0,21.213C201.586,410.078,227.954,421,256,421
			c57.897,0,105-47.103,105-105C361,258.103,313.897,211,256,211z"
              />
            </g>
          </g>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "LineInformation",
  props: {
    info: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      isDisabled: true,
      isDisabledBack: true,
      initialName: "",
      initialValue: "",
    };
  },
  computed: mapGetters(["ADD_INFORMATION"]),
  methods: {
    ...mapMutations(["SHOW_POPUP", "SET_ARR", "SET_NAME_EVENT"]),
    confirmationInformation() {
      this.SET_NAME_EVENT({ name: "edit", text: "редактировать" });
      this.SHOW_POPUP(true);
      this.SET_ARR(this.info);
      this.isDisabled = true;
    },
    deleteInformation() {
      this.SET_NAME_EVENT({ name: "delete", text: "удалить" });
      this.SHOW_POPUP(true);
      this.SET_ARR(this.info);
      this.isDisabled = true;
    },
    cancelInformation() {
      this.info.nameInformation = this.initialName;
      this.info.valueInformation = this.initialValue;
      this.isDisabled = true;
    },
    unDisabled() {
      this.initialName = this.info.nameInformation;
      this.initialValue = this.info.valueInformation;
      this.isDisabled = false;
      this.isDisabledBack = false;
    },
    returnInformation() {
      this.info.nameInformation = this.initialName;
      this.info.valueInformation = this.initialValue;
    },
  },
};
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
    vertical-align: middle;

    svg {
      width: 12px;
      fill: #ffffff;
    }
  }

  .crash {
    vertical-align: middle;
    margin: 0;
    padding: 0;
    line-height: 38px;
    svg {
      width: 20px;
      fill: #ffffff;
    }
  }
}
</style>
