import {inject, injectable} from "inversify";
import {ApiService} from "@/services/api.service";
import {ActionContext, ActionTree, DispatchOptions} from "vuex";
import {RootState, State} from "@/store/state";


type TestInstanceActionContext = {
    dispatch<K extends keyof Actions>(
        actionType: K,
        payload: Parameters<Actions[K]>[1],
        options?: DispatchOptions,
    ): ReturnType<Actions[K]>;
} & Omit<ActionContext<State, RootState>, 'dispatch'>;

abstract class ActionsFactory {
    actions() {
        return this as ActionTree<State, RootState> & this;
    }
}

@injectable()
export class Actions extends ActionsFactory {
    constructor(@inject(ApiService) private a: ApiService) {
        super();
    }

    async action1({ dispatch }: TestInstanceActionContext) {
        dispatch('action2', 1)
    }

    async action2(_: TestInstanceActionContext, payload: number) {
    }
}
