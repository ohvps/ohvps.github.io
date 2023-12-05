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
                            <div class="row" style="width: 100%;">
                                <div class="col" style="width: 50%;">
                                    <Request title="Olay Abonelik İsteği" actionButtonText="Olay Abonelik" isGet="false"
                                        path="/olay-abonelik" :requestBody="oasRequest" :headers="requestHeaders"
                                        @request-event="requestClick" />
                                </div>
                                <div class="col" style="width: 50%;">
                                    <Response title="Olay Abonelik Yanıtı" :headers="responseHeaders"
                                        @process-event="nextStep" actionButtonText="Bir Sonraki İşlem"
                                        @response-event="oasChangeTabs" :body="oasResponse" :tabs="responseTabs" nextButtonVisible="true"/>
                                </div>
                            </div>
                        </div>
                        <div v-if="tab.ID === 2" style="width: 100%;">
                            <div class="row" style="width: 100%;">
                                <div class="col" style="width: 50%;">
                                    <Request title="Olay Dinleme İsteği" actionButtonText="Olay Dinleme" isGet="false"
                                        path="/olay-dinleme" :requestBody="odsRequest" :headers="requestHeaders"
                                        @request-event="odsRequestClick" />
                                </div>
                                <div class="col" style="width: 50%;">
                                    <Response title="Olay Dinleme Yanıtı" :headers="responseHeaders"
                                        @process-event="nextStep" actionButtonText="Bir Sonraki İşlem"
                                        @response-event="odsChangeTabs" :body="odsResponse" :tabs="responseTabsOds"  nextButtonVisible="false"/>
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

import { mainTabs } from './data-olay-dinleme-V1.1';
import { responseTabs, requestHeaders, responseHeaders, responseTabsOds } from './data-olay-dinleme-V1.1'
import { OlayAbonelikRequest, OlayAbonelikResponse201, OlayAbonelikResponse400, OlayAbonelikResponse401, OlayAbonelikResponse403, OlayAbonelikResponse404 } from './data-olay-dinleme-V1.1'
import { OlayDinlemeRequest, OlayDinlemeResponse202, OlayDinlemeResponse400, OlayDinlemeResponse401, OlayDinlemeResponse403, OlayDinlemeResponse404 } from './data-olay-dinleme-V1.1'

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
            requestHeaders: requestHeaders,
            responseHeaders: responseHeaders,
            responseTabsOds: responseTabsOds,

            oasRequest: JSON.stringify(OlayAbonelikRequest, null, 2),
            odsRequest: JSON.stringify(OlayDinlemeRequest, null, 2),
            oasResponse: "",
            odsResponse: "",

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
        requestClick() {
            this.oasResponse = JSON.stringify(OlayAbonelikResponse201, null, 2)
        },
        odsRequestClick() {
            this.odsResponse = JSON.stringify(OlayDinlemeRequest, null, 2);
        },
        nextStep() {
            this.selectedIndex = this.selectedIndex + 1;
        },


        oasChangeTabs(step) {
            
            switch (step) {
                case 1:
                    return this.oasResponse = JSON.stringify(OlayAbonelikResponse201, null, 2);
                case 2:
                    return this.oasResponse = JSON.stringify(OlayAbonelikResponse400, null, 2);
                case 3:
                    return this.oasResponse = JSON.stringify(OlayAbonelikResponse401, null, 2);
                case 4:
                    return this.oasResponse = JSON.stringify(OlayAbonelikResponse403, null, 2);
                case 5:
                    return this.oasResponse = JSON.stringify(OlayAbonelikResponse404, null, 2);

            }
        },
        odsChangeTabs(step) {
            
            switch (step) {
                case 1:
                    return this.odsResponse = JSON.stringify(OlayDinlemeResponse202, null, 2);
                case 2:
                    return this.odsResponse = JSON.stringify(OlayDinlemeResponse400, null, 2);
                case 3:
                    return this.odsResponse = JSON.stringify(OlayDinlemeResponse401, null, 2);
                case 4:
                    return this.odsResponse = JSON.stringify(OlayDinlemeResponse403, null, 2);
                case 5:
                    return this.odsResponse = JSON.stringify(OlayDinlemeResponse404, null, 2);

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
@import "~swagger-ui/dist/swagger-ui.css";

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
  
  

 