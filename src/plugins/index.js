import store from '@/store'
import mixin from '@/mixins'
export default {
    install: (app) => {
        app.use(store)
        app.mixin(mixin)
    }
  }