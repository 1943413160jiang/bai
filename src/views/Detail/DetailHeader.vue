<template>
    <div>{{name}}</div>
</template>
<script>
export default {
    props:["name"]
}
</script>
<style scoped>
div{
    position: fixed;
    width:100%;
    top: 0;
    left: 0;
    text-align: center;
    line-height: 50px;
    height: 50px;
    background-color: #fff;
    display: none;
}
</style>