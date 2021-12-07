import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { APR, Risk } from '@/models'
import { $axios } from '@/utils/nuxt-instance'


@Module({ name: 'aprs', stateFactory: true, namespaced: true })
export default class APRs extends VuexModule {
  private aprs = [] as APR[]
  private apr = {
    local: '',
    equip: '',
    description: '',
    epis: ''
  } as APR

  private risks = [] as Risk[]

  private globalRis = [] as Risk[]

  public get $all() {
    return this.aprs
  }

  public get $single() {
    return this.apr
  }

  public get $risks() {
    return this.risks
  }

  public get $globalRisks() {
    return this.globalRis
  }

  @Mutation
  private SET_SINGLE(apr: APR) {
    this.apr = apr
  }

  @Mutation
  private SET_ALL(aprs: APR[]) {
    this.aprs = aprs
  }

  @Mutation
  private SET_RISKS(risks: Risk[]) {
    this.risks = risks
  }

  @Mutation
  private SET_GLOBALRISKS(globalRisks: Risk[]) {
    this.globalRis = globalRisks
  }

  @Action
  public async index() {
    const aprs = await $axios.$get('/aprs')
    this.context.commit('SET_ALL', aprs)
  }

  @Action
  public setApr(apr: APR) {
    this.context.commit('SET_SINGLE', apr)
  }

  @Action
  public async fetchGlobalRisks() {
    const risks = await $axios.$get('/risks')
    this.context.commit('SET_GLOBALRISKS', risks)
  }

  @Action
  public addRisks(risk: Risk) {
    this.context.commit('SET_RISKS', risk)
  }

  @Action
  public async enviarAPR(newAPR: APR) {
    await $axios.$post('/newapr', newAPR)
  }
}
