<template>
    <div>
        <div class="requestBox">
                <DxTextArea style="background-color: var(--renk1);" :height="height" :read-only="true" :value="body" />
            </div>
    </div>
</template>
  
<script>

import { defineComponent } from 'vue'
import DxTextArea from 'devextreme-vue/text-area';
export default defineComponent({
    name: 'BodyBox',
    props: ['body','height'],
    components: {
        DxTextArea
    },
})
</script>

<style>
.requestBox {
    margin-top: 10px;
    background-color: var(--renk1);
}
</style>
  
