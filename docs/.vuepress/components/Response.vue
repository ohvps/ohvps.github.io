<template>
    <div>

        <div class="col" style="width: 100%;">
            <TitleBox :title="title" />

            <p style="height: 40px;margin-top: 40px;padding: 5px;"></p>
            <ProcessTitle title="Yanıt Başlığı" />

            <KeyValueGrid :headers="headers" />
            <ProcessTitle title="Yanıt Gövdesi" />

            <DxTabPanel id=test :height="300" :data-source="tabs" @selection-changed="changeTabs">
                <template #title="{ data: responsTab }" style="margin-right: 10px;">
                    <div>
                        <div>
                            <span v-if="responsTab.ID === 1" style="color: black;font-weight: bold;">{{
                                responsTab.Name }}</span>
                        </div>
                        <div>
                            <span v-if="responsTab.ID !== 1" style="color: #b30101; font-weight: bold;">{{
                                responsTab.Name }}</span>
                        </div>
                    </div>

                </template>
                <template #item="{ data: responsTab }">
                    <div class="tabpanel-item2">
                        <BodyBox :body="body" height="260" />
                    </div>
                </template>
            </DxTabPanel>

            <div style="margin-top: 40px;text-align: right;">
                <ProcessButton content="Bir Sonraki İşlem" @process-event="nextStep" />
            </div>

        </div>

    </div>
</template>
  
<script>
import { defineComponent } from 'vue'

import DxTabPanel, { DxItem } from 'devextreme-vue/tab-panel';
export default defineComponent({
    name: 'Response',
    props: ['title', 'headers', 'body', 'actionButtonText','tabs'],
   
    methods: {
        callParentMethod() {
            this.$emit('custom-event');
        },

        nextStep() {
            this.$emit('process-event');
        },
        changeTabs: function (e) {
            
            this.$emit('response-event', e.addedItems[0].ID);

        },

    },
    components: {
        DxTabPanel,
        DxItem
    },


})
</script>
  
