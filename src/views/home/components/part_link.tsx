import { defineComponent, h, ref, watch } from "vue"
import video1 from "./video.vue"



  h('video1',video1 )
const divs1=ref([11,1,1,1,5,6,6,5,5,5])
const def= <>
{
divs1.value.map((v,i)=>{
    return <video1 style="width: 22%;height: 230px; margin: 20px; " text="无"></video1>
    
})
}
</>            
export default defineComponent({
    props: ['value'],
      setup(props, { slots, emit }) {
        watch(() => props.value, (newVal, oldVal) => {
          console.log(newVal)
          divs1.value.push(newVal)
        });
        return () => {
          
          return def;
        };
      },
    });
