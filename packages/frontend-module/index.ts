import { addPlugin, defineNuxtModule, createResolver } from '@nuxt/kit'
import { join } from 'path'

export default defineNuxtModule({
  setup(_, nuxt) {
    nuxt.hook('components:dirs', dirs => {
      dirs.push({
        path: join(__dirname, 'lib/components'),
        prefix: 'farhans',
      })
    })

    const { resolve } = createResolver(import.meta.url)

    // add the helper plugin
    addPlugin(resolve('lib/plugins/helper.ts'))

    // add animate.css file from animate.css library
    nuxt.options.css.push('animate.css')
  },
})
