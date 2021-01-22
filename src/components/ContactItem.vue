<template>
  <div class="contact-item">
    <div class="contact-item__wrapper">
        <div>{{ contacts.name }}</div>
        <div>{{ contacts.phone }}</div>
      <div class="contact-item__button">
        <router-link class="button" @click.native="setId" :to="{ path: 'information', query: {contact_id: contacts.id_user} }">
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
        </router-link>
        <button @click="deleteContact" class="button">
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<g>
	<g>
		<path d="M406,60h-75V45c0-24.813-20.187-45-45-45h-60c-24.813,0-45,20.187-45,45v15h-75c-24.813,0-45,20.187-45,45v30
			c0,8.284,6.716,15,15,15h15v317c0,24.813,20.187,45,45,45h240c24.813,0,45-20.187,45-45V150h15c8.284,0,15-6.716,15-15v-30
			C451,80.187,430.813,60,406,60z M211,45c0-8.271,6.729-15,15-15h60c8.271,0,15,6.729,15,15v15h-90V45z M391,467
			c0,8.271-6.729,15-15,15H136c-8.271,0-15-6.729-15-15V150h270V467z M421,120H91v-15c0-8.271,6.729-15,15-15h300
			c8.271,0,15,6.729,15,15V120z"/>
	</g>
</g>
            <g>
	<g>
		<path d="M256,211c-26.336,0-51.041,9.886-69.879,26.657V226c0-8.284-6.716-15-15-15s-15,6.716-15,15v60
			c0,0.053,0.007,0.105,0.008,0.158c0.086,8.257,6.867,14.842,14.992,14.842H226c8.284,0,15-6.716,15-15s-6.716-15-15-15h-30.014
			c13.925-18.52,36.023-30,60.014-30c41.355,0,75,33.645,75,75c0,41.355-33.645,75-75,75c-20.033,0-38.867-7.801-53.033-21.967
			c-5.857-5.858-15.355-5.858-21.213,0c-5.858,5.858-5.858,15.355,0,21.213C201.586,410.078,227.954,421,256,421
			c57.897,0,105-47.103,105-105C361,258.103,313.897,211,256,211z"/>
	</g>
</g>
</svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
export default {
  name: "ContactItem",
  props: {
    contacts: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    ...mapGetters(['GET_CONTACTS'])
  },
  methods: {
    ...mapMutations(['SET_ID', 'DELETE_CONTACT']),
    setId() {
      this.SET_ID({id_user: this.contacts.id_user})
    },
    deleteContact() {
      this.DELETE_CONTACT({id_user: this.contacts.id_user})
    }
  }
}
</script>

<style lang="less">
.contact-item {
  margin-top: 30px;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__button {
    .button {
      display: inline-block;
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
      line-height: 31px;
    }
    svg {
      width: 12px;
      fill: #ffffff;
    }
  }
}
</style>
