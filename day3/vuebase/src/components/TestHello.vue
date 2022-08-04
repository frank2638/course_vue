<template>
    <div>计数: {{count}}</div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'

export default {
    //1.setup生命周期函数，是组合式API的起点
    setup () {
        //2.reactive的作用：定义一个响应式对象
        //vue2是选项式API
        const state = reactive({
            count: 0
        })
        // const state2 = {
        //     count2: 0
        // }
        //3.定义一个函数，实现+1
        function add() {
            state.count += 1
        }
        //4.生命周期函数-onMounted
        onMounted(() => {
            setInterval(add, 1000)
        })
        //5.定义的变量、方法必须返回，模板中才能使用
        return {
            //6.toRefs的作用是把一个响应式对象转换成“普通”对象，该普通对象的每一个属性，都是ref（响应式的）类型的
            //7.对象的拓展运算符...,用于把对象中的可遍历属性取出来，放到当前对象中。
            //...toRefs(state, state2)
            ...toRefs(state)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>