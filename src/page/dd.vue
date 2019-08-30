<template>
    <div>
        <h1>ddd</h1>
        <div class="dd"></div>
        <img src="../assets/images/img1.jpg" alt="">
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

<style scoped>
    .dd {
        background: url(~images/img1.jpg);
        width: 141px;
        height: 88px;
    }
</style>