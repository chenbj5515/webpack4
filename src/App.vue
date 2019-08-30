<template>
    <div>
        <h1>Hello World!</h1>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App',
        created() {
            console.log(PROSESS_ENV, 'PROSESS_ENV====')
        }
    }
</script>

<style >
    html, body {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-size: 16px;
    }
    .div {
        background: thistle;
        width: 144px;
        height: 88px;
    }
</style>