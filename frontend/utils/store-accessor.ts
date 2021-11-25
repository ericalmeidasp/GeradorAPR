import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Geral from '@/store/geral'
import APRs from '@/store/aprs'

// eslint-disable-next-line import/no-mutable-exports
let gerais: Geral
// eslint-disable-next-line import/no-mutable-exports
let aprs: APRs

function initializeStores(store: Store<any>): void {
  gerais = getModule(Geral, store)
  aprs = getModule(APRs, store)
}

export { initializeStores, gerais, aprs }
