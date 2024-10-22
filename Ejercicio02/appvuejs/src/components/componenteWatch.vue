<script setup>
    import { watch, ref, reactive, watchEffect } from 'vue';

    const x = ref(1)
    const y = ref(1)

    const obj = reactive({count:0})
    
    // watch(x, (newX, oldX)=>{
    //     console.log(`hubo un cambio en X, newX: ${newX}, oldX: ${oldX}`)
    // })

    watch(()=>{ return parseInt(x.value)+  parseInt(y.value)},
    (sum)=>{
        console.log('la suma de x + y es:...' , sum)
    },
    {
        //immediate:true
        once:true
    }
    )

    // watchEffect(()=>{
    //     console.log('la suma de x + y es:' , parseInt(x.value)+  parseInt(y.value))
    // })

    // watch([x,y], (newXY, oldXY)=>{
    //     console.log("hubo un cambio en x o y.", newXY,oldXY )
    // })

    // watch(()=>obj.count, (newC)=>{
    //     console.log("el valor de count es:", newC)
    // })

</script>

<template>

    <h2>Watch</h2>
    <p>x</p>
    <input v-model="x">{{ x }}

    <p>y</p>
    <input v-model="y">{{ y }}

    <br>
    <input v-model="obj.count">{{ obj.count }}
</template>