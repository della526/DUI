import Card from './card/index.js'
import Demo from './Demo/index.js'

const components = [
    Card,
    Demo
]
// const install = 

const API = {
    install:function(Vue){
        components.forEach(item=>{
            Vue.component(item.name,item)
        })
    }
}
export default API