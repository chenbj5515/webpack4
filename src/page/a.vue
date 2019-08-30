<template>
    <div>
        <h1>a</h1>
        <div class="father">
            <div class="child">

            </div>
        </div>
    </div>
</template>

<script>
    import img1 from 'images/img1.jpg'
    import utils from '@/utils'
    export default {
        created() {
            console.log(utils.a)
        }
    }
</script>

<style lang="less" scoped>
    .father {
        width: 188px;
        height: 66px;
        transform: all 2s;
        .child {    
            width: 166px;
            height: 44px;
        }
    }
    
</style>