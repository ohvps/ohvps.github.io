<template>
    <div>
        <p class="postBox" style="margin-top:40px"><span class="postTitle">GET</span>{{ path }}</p>
    </div>
</template>
  
<script>

import { defineComponent } from 'vue'
export default defineComponent({
    name: 'GetBox',
    props: ['path'],
})
</script>

<style scoped>

.postBox {
    background-color: var(--renk1);
    border-radius: 10px;
    height: 40px;
    padding: 5px;
    border-style: solid;
    border-width: 1px;
    border-color: var(--renk3);
    color: black;
    font-weight: bold;
}
.postTitle {
    width: 100px;
    background-color: #61affe;
    color: white;
    height: 70px;
    margin: 11px;
    padding-left: 12px;
    padding-right: 12px;
    padding-bottom: 5px;
    padding-top: 5px;
}


</style>
  
