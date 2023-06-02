<template>
    <div>
        <button @click="post()">click</button>
        <button @click="post1()">click_direct</button>
        <button @click="get()">get</button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'test',
    methods:{
        get(){
            axios.get('http://localhost:8080/api/students').then(
                res=>{console.log(res)},
                err=>{console.log(err)}
            )
        },
        post1(){
            console.log('direct')
            axios.post('http://106.52.61.60:8081/register',{
                'name':'123',
                'number':'123',
                'class':'123',
                'mail':'123',
                'introduction':'123'
            }).then(
                res=>{console.log(res)},
                err=>{console.log(err)}
            )
        },
        post(){
            console.log(12345)
            axios.post('http://localhost:8080/api/register',{
                'name':'123',
                'number':'123',
                'classs':'123',
                'mail':'123',
                'introduction':'123'
            }).then(
                res=>{console.log(res.data)},
                err=>{console.log(err)}
            )


            // axios.post('http://jsonplaceholder.typicode.com/users',{name:'a'}).then(
            //     res=>{
            //         console.log(res.data)
            //     },
            //     err=>{
            //         this.postMsg=err.data
            //     }
            // )


            // axios.get('https://autumnfish.cn/api/joke').then(
            //     res=>{console.log(res)},
            //     err=>{console.log(err)}
            // )
        }
    }
}
</script>
<style >
button{
    width: 100px;
    height: 100px;
}
</style>