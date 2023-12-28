<template>
    <div>
        <p class="boxTitle">{{ title }}</p>
    </div>
</template>
  
<script>

import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ProcessTitle',
    props: ['title'],
})
</script>

<style>
.boxTitle {
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: right;
    font-weight: bold;
    color: var(--renk3);

}
</style>
  
