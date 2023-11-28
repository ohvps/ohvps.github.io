<template>
    <div>
        <p class="tableBoxTitle">{{ title }}</p>
    </div>
</template>
  
<script>

import { defineComponent } from 'vue'
export default defineComponent({
    name: 'TitleBox',
    props: ['title'],
})
</script>

<style>

.tableBoxTitle {
    height: 30px;
    background-color: var(--renk3);
    border-radius: 10px;
    height: 40px;
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: large;
}


</style>
  
