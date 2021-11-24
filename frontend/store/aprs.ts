import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { APR } from '@/models'
import { $axios } from '@/utils/nuxt-instance'

interface Show {
  id: APR['id']
}

@Module({ name: 'aprs', stateFactory: true, namespaced: true })
export default class APRs extends VuexModule {
  private aprs = [] as APR[]
  private apr = {} as APR

  public get $all() {
    return this.aprs
  }

  public get $single() {
    return this.apr
  }

  @Mutation
  private SET_SINGLE(apr: APR) {
    this.apr = apr
  }

  @Mutation
  private SET_ALL(aprs: APR[]) {
    this.aprs = aprs
  }

  @Action
  public async index() {
    const aprs = await $axios.$get('/aprs')
    this.context.commit('SET_ALL', aprs)
  }

  @Action
  public async show({ id }: Show) {
    const book = await $axios.$get(`/apr/${id}`)
    this.context.commit('SET_SINGLE', book)
  }

}
