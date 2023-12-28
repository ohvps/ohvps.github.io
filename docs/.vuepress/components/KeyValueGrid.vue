<template>
    <div>
        <DxDataGrid :height="200" :data-source="headers" key-expr="ID"
                :allow-column-resizing="true" :column-auto-width="true">
                <DxScrolling mode="virtual" />
                <DxColumn width="200" data-field="Key" caption="Anahtar" />
                <DxColumn data-field="Value" caption="Değer" />
            </DxDataGrid>
    </div>
</template>
  
<script>

import { defineComponent } from 'vue'
import { DxDataGrid, DxColumn, DxScrolling } from 'devextreme-vue/data-grid';
export default defineComponent({
    name: 'KeyValueGrid',
    props: ['headers'],
    components: {
        DxDataGrid,
        DxColumn,
        DxScrolling,
        
 
    },
})
</script>

<style>

</style>
  
