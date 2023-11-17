<template>
    <div>
        <DxButton style="background-color: var(--renk3);" type="success" :text="content"
                    @click="process()" />
    </div>
</template>
  
<script>

import { defineComponent } from 'vue'
import DxButton from 'devextreme-vue/button';

export default defineComponent({
    name: 'ProcessButton',
    props: ['content'],
    methods: {
        process(){
            this.$emit('process-event');
        }
    },
    components: {
        DxButton
    },
})
</script>

<style>

</style>
  
