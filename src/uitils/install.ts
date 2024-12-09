import type { App,Plugin,AppContext } from 'vue'
type SFCWithInstall<T> = T & Plugin
type SFCInstallWithContext<T> = SFCWithInstall<T> & {
    _context: AppContext | null
  }
export const withInstallFunction = <T>(fn: T, name: string) => {
    ;(fn as SFCWithInstall<T>).install = (app: App) => {
        console.log(`Installing ${name}`)
      ;(fn as SFCInstallWithContext<T>)._context = app._context
      app.config.globalProperties[name] = fn
    }
    return fn as SFCInstallWithContext<T>
}