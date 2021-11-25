import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({ name: 'geral', stateFactory: true, namespaced: true })
export default class Geral extends VuexModule {
  
  private view = "MakeApr" as string

  public get $view() {
    return this.view
  }

  @Mutation
  private SET_VIEW(view: string) {
    this.view = view
  }


  @Action
  public index(view: string) {
    this.context.commit('SET_VIEW', view)
  }

}
