<template>
    <div>
        <h1>rank page</h1>
    </div>
</template>

<script>
    // import img1 from 'images/img1.jpg'
    import utils from '@/utils'
    export default {
        created() {
            console.log(utils.a)
        }
    }
</script>

<style lang="less" scoped>
    .rank {
        width: 168px;
        height: 88px;
        background: teal;
        transform: all 1s;
    }
</style>