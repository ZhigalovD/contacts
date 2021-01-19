import Vue from 'vue'
import Vuex from 'vuex'
import information from "@/store/modules/information";
import popup from "@/store/modules/popup";

Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        information,
        popup
    }
})
