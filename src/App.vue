<template>
    <div id="app">
        <div id="tab-bar">
            <div class="tab-bar-item">首页1</div>
            <div class="tab-bar-item">首页2</div>
            <div class="tab-bar-item">首页3</div>
            <div class="tab-bar-item">首页4</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App',
        components: {}
    }
</script>

<style>
    /*在css中引用css文件*/
    @import "./assets/css/base.css";

    #tab-bar {
        /*流性布局*/
        display: flex;
        background-color: #f6f6f6;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.1);
    }

    .tab-bar-item {
        flex: 1;
        text-align: center;
        height: 49px;
    }
</style>
