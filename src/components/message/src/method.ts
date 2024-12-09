import { createVNode, render } from "vue"
import message from "./message.vue"
interface MessageOptions {
    text: string
    appendTo?: HTMLElement | string
}
let idFirst = 0
let instances: any = []
const normalizeOptions = (options: any) => {
    console.log(Object.prototype.toString.call(options.appendTo))
    if (!options.appendTo) {
        options.appendTo = document.body
    } else if (Object.prototype.toString.call(options.appendTo) === "HTMLDivElement") {
        options.appendTo = options.appendTo
    } else if (Object.prototype.toString.call(options.appendTo) === "[object String]") {
        options.appendTo = document.querySelector(options.appendTo)
    } else {
        options.appendTo = document.body
    }
    return options.appendTo
}
const closeMessage = (instance: any) => {
    const idx = instances.indexOf(instance)
    if (idx === -1) return
  
    instances.splice(idx, 1)
    const { handler } = instance
    handler.close()
  }
export const createMessage = ({appendTo=document.body,text}: MessageOptions) => {
    const id = "message"+idFirst++
    const options = {
        text,
        appendTo,
        id
    }
    const appTo = normalizeOptions(options)
    const container = document.createElement("div")
    const vnode = createVNode(message, options)
    vnode.appContext = message._context
    render(vnode, container)
    appTo.appendChild(container);
    const vm = vnode.component!

    const handler= {
        // instead of calling the onClose function directly, setting this value so that we can have the full lifecycle
        // for out component, so that all closing steps will not be skipped.
        close: () => {
            console.log("close",vm)
            vm.exposed!.visible.value = false
        },
    }

    const instance= {
        id,
        vnode,
        vm,
        handler,
        props: (vnode.component as any).props,
    }
    instances.push(instance)
    setTimeout(() => {
        closeMessage(instance)
    }, 3000)
    return instance
}