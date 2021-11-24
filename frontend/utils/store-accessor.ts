import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Books from '@/store/books'
import APRs from '@/store/aprs'

// eslint-disable-next-line import/no-mutable-exports
let books: Books
let aprs: APRs

function initializeStores(store: Store<any>): void {
  books = getModule(Books, store)
  aprs = getModule(APRs, store)
}

export { initializeStores, books, aprs }
