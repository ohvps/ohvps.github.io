<template>
    <div>
        <DxTabPanel :height="1100" :data-source="mainTabs" :selected-index="selectedIndex" @selection-changed="tabsChanged"
            :loop="true" :animation-enabled="true" :swipe-enabled="true" style="background-color: white;">
            <template #title="{ data: tab }">
                {{ tab.Name }}
            </template>
            <template #item="{ data: tab }">
                <div>
                    <div class="tabpanel-item">

                        <div v-if="tab.ID === 1" style="width: 100%;">
                         <div>
                            <p>BKM tarafından sunulan bu serviste , üretim ortamında sertifikasyonunu başarıyla tamamlayarak hizmet sunmaya başlamış HHS’ler listelenir.</p>
                        </div>
                            <div class="row" style="width: 100%;">
                                <div class="col" style="width: 50%;">
                                    <Request title="HHS İsteği" actionButtonText="HHS Listesi" httpMethod="GET"
                                        path="/hhs" :requestBody="hhsAPIRequest" :headers="requestHeadersHHSAPI"
                                        @request-event="hhsAPIrequestClick" />
                                </div>
                                <div class="col" style="width: 50%;">
                                    <Response title="HHS Yanıtı" :headers="responseHeadersHHSAPI"
                                        @process-event="nextStep" actionButtonText="Bir Sonraki İşlem"
                                        @response-event="hhsAPIChangeTabs" :body="hhsAPIResponse" :tabs="responseTabs"  nextButtonVisible="true"/>
                                </div>
                            </div>
                        </div>
                        <div v-if="tab.ID === 2" style="width: 100%;">
                            <div class="row" style="width: 100%;">
                                <div class="col" style="width: 50%;">
                                    <Request title="YÖS İsteği" actionButtonText="YÖS Listesi" httpMethod="GET"
                                        path="/yos" :requestBody="yosAPIRequest" :headers="requestHeadersYOSAPI"
                                        @request-event="yosAPIRequestClick" />
                                </div>
                                <div class="col" style="width: 50%;">
                                    <Response title="YÖS Yanıtı" :headers="responseHeadersYOSAPI"
                                        @process-event="nextStep" actionButtonText="Bir Sonraki İşlem"
                                        @response-event="yosAPIChangeTabs" :body="yosAPIResponse" :tabs="responseTabs" nextButtonVisible="false"/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </template>
        </DxTabPanel>
    </div>
</template>
<script  >

import Request from './Request'
import DxTabPanel, { DxItem } from 'devextreme-vue/tab-panel';
import { DxScrollView } from 'devextreme-vue/scroll-view';

import { mainTabs } from './data-hhs-yos-V1.1';
import { responseTabs, RequestHeadersHHSAPI, ResponseHeadersHHSAPI, RequestHeadersYOSAPI, ResponseHeadersYOSAPI } from './data-hhs-yos-V1.1'
import { HHSAPIResponse200,HHSAPIResponse400,HHSAPIResponse401,HHSAPIResponse403,HHSAPIResponse404 } from './data-hhs-yos-V1.1'
import { YOSAPIResponse200, YOSAPIResponse400,YOSAPIResponse401,YOSAPIResponse403,YOSAPIResponse404  } from './data-hhs-yos-V1.1'

import 'devextreme/dist/css/dx.light.css';

import '../public/assets/swagger-ui/swagger-ui.css'
import SwaggerUI from '../public/assets/swagger-ui/swagger-ui-es-bundle.js'
import SwaggerUIStandalonePreset from '../public/assets/swagger-ui/swagger-ui-standalone-preset.js'


export default {
    components: {
        DxTabPanel,
        DxScrollView,
        Request
    },

    data() {
        return {
            selectedIndex: 0,
            baseClass: 'open-api-container',
            loop: false,
            animationEnabled: true,
            swipeEnabled: true,
            mainTabs: mainTabs,
            responseTabs: responseTabs,
            requestHeadersHHSAPI: RequestHeadersHHSAPI,
            responseHeadersHHSAPI: ResponseHeadersHHSAPI,
            requestHeadersYOSAPI: RequestHeadersYOSAPI,
            responseHeadersYOSAPI: ResponseHeadersYOSAPI,
            yosAPIResponse: "",
            hhsAPIResponse: "",

        };
    },
    props: {
        spec: Object
    },
    async mounted() {


    },
    computed: {
        getselectItemIndex() {
            
            return this.selectedIndex;
        }
    },

    methods: {
        hhsAPIrequestClick() {
            this.hhsAPIResponse = JSON.stringify(HHSAPIResponse200, null, 2)
        },
        yosAPIRequestClick() {
            this.yosAPIResponse = JSON.stringify(YOSAPIResponse200, null, 2);
        },
        nextStep() {
            this.selectedIndex = this.selectedIndex + 1;
        },


        hhsAPIChangeTabs(step) {
            
            switch (step) {
                case 1:
                    return this.hhsAPIResponse = JSON.stringify(HHSAPIResponse200, null, 2);
                case 2:
                    return this.hhsAPIResponse = JSON.stringify(HHSAPIResponse400, null, 2);
                case 3:
                    return this.hhsAPIResponse = JSON.stringify(HHSAPIResponse401, null, 2);
                case 4:
                    return this.hhsAPIResponse = JSON.stringify(HHSAPIResponse403, null, 2);
                case 5:
                    return this.hhsAPIResponse = JSON.stringify(HHSAPIResponse404, null, 2);

            }
        },
        yosAPIChangeTabs(step) {
            
            switch (step) {
                case 1:
                    return this.yosAPIResponse = JSON.stringify(YOSAPIResponse200, null, 2);
                case 2:
                    return this.yosAPIResponse = JSON.stringify(YOSAPIResponse400, null, 2);
                case 3:
                    return this.yosAPIResponse = JSON.stringify(YOSAPIResponse401, null, 2);
                case 4:
                    return this.yosAPIResponse = JSON.stringify(YOSAPIResponse403, null, 2);
                case 5:
                    return this.yosAPIResponse = JSON.stringify(YOSAPIResponse404, null, 2);

            }
        },

        tabsChanged: function (e) {
            
            this.selectedIndex = e.addedItems[0].ID - 1;
            if (e.addedItems[0].ID == 2) {
                const spec = require('../public/oas-api-s1.1.json');
                SwaggerUI({
                    spec: spec,
                    dom_id: '#swagger-ui-oas',
                    presets: [
                        SwaggerUI.presets.apis,
                        SwaggerUIStandalonePreset,
                    ],
                    layout: 'StandaloneLayout',

                });
            }
            else if (e.addedItems[0].ID == 4) {
                const spec = require('../public/ods-api-s1.1.json');
                SwaggerUI({
                    spec: spec,
                    dom_id: '#swagger-ui-ods',
                    presets: [
                        SwaggerUI.presets.apis,
                        SwaggerUIStandalonePreset,
                    ],
                    layout: 'StandaloneLayout',
                })
            }
        },

    },
};
</script>
<style>


:root {
    --renk1: #dcebeb;
    --renk2: #49cc90;
    --renk3: darkcyan;
    --renk4: white;
}

.tabpanel-item {
    user-select: none;
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 55px;
}

.tabpanel-item2 {
    user-select: none;

    padding-top: 4px;
}

.mobile .tabpanel-item {
    padding-top: 10px;
}

.dx-tab.dx-tab-selected {
    background-color: var(--renk3) !important;
    color: white;

}

.dx-tab.dx-tab-selected>.dx-item-content.dx-tab-content {
    color: white;
}


#test .dx-tab.dx-tab-selected {
    background-color: white !important;
    color: white;
    border-color: wheat;
}

#test .dx-tab.dx-item {
    border-style: solid;
    background-color: var(--renk4);
    border-radius: 60px;
    height: 30px;
    font-weight: bold;
    width: 50px;
}




.dx-tab.dx-item {
    border-style: solid;
    border-width: 0.4px;
    background-color: var(--renk1);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 60px;
    border-bottom-right-radius: 60px;
    height: 52px;
    font-weight: bold;
    padding-right: 30px;
}

.dx-tabs.dx-widget {
    background-color: white;
}
</style>
  
  

 