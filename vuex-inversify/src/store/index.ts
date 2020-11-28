import { createStore } from "vuex";
import container from "@/store/container";
import {Actions} from "@/store/actions";

export default createStore({
  state: {},
  mutations: {},
  actions: container.resolve<Actions>(Actions).actions(),
  modules: {}
});
