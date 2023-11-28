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
                                    <Request title="YÖS Listeleme İsteği" actionButtonText="Yös Listele" isGet="true"
                                        path="/yos"  :headers="requestHeaders"
                                        @request-event="requestClick" />
                                </div>
                                <div class="col" style="width: 50%;">
                                    <Response title="YÖS Listeleme Yanıtı" :headers="responseHeaders"
                                        @process-event="nextStep" actionButtonText="Bir Sonraki İşlem"
                                        @response-event="yosChangeTabs" :body="yosResponse" :tabs="responseTabs" />
                                </div>
                            </div>
                        </div>
                        <div v-if="tab.ID === 2">
                            <DxScrollView id="scrollview" ref="scrollViewWidget" :height="1000"
                                direction="both">
                                <div id="swagger-ui-yos"></div>
                            </DxScrollView>
                            <div id="swagger-ui-yos"></div>
                        </div>

                   
                        <div v-if="tab.ID === 3" style="width: 100%;">
                            <div class="row" style="width: 100%;">
                                <div class="col" style="width: 50%;">
                                    <Request title="HHS Listeleme İsteği" actionButtonText="HHS Listele" isGet="true"
                                        path="/hhs" 
                                        :headers="requestHeaders" @request-event="hhsRequestClick" />
                                </div>
                                <div class="col" style="width: 50%;">
                                    <Response title="HHS Listeleme  Yanıtı" :headers="responseHeaders"
                                        @process-event="nextStep" actionButtonText="Bir Sonraki İşlem"
                                        @response-event="hhsChangeTabs" :body="hhsResponse"  :tabs="responseTabs"/>
                                </div>
                            </div>
                        </div>

                        <div v-if="tab.ID === 4" style="width: 100%;">
                            <DxScrollView id="scrollview" ref="scrollViewWidget"  :height="1000" 
                                direction="both">
                                <div id="swagger-ui-hhs"></div>
                            </DxScrollView>
                            <div id="swagger-ui-hhs"></div>
                        </div>

                        

                       

                        <div v-if="tab.ID === 9">
                            <DxScrollView id="scrollview" ref="scrollViewWidget" :height="1000" 
                                direction="both">
                                <div id="swagger-ui-hbh"></div>
                            </DxScrollView>
                            <div id="swagger-ui-hbh"></div>
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
import {responseTabs,requestHeaders,responseHeaders} from './data-hhs-yos-V1.1';
import {YosResponse200,YosResponse400,YosResponse401,YosResponse403,YosResponse404} from './data-hhs-yos-V1.1'
import {HhsResponse200,HhsResponse400,HhsResponse401,HhsResponse403,HhsResponse404} from './data-hhs-yos-V1.1'
import '../public/assets/swagger-ui/swagger-ui.css'
import SwaggerUI from '../public/assets/swagger-ui/swagger-ui-es-bundle.js'
import SwaggerUIStandalonePreset from '../public/assets/swagger-ui/swagger-ui-standalone-preset.js'

import 'devextreme/dist/css/dx.light.css';

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
            requestHeaders:requestHeaders,
            responseHeaders:responseHeaders,
            yosResponse : "",
            hhsResponse: "",
            
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
            this.yosResponse = JSON.stringify(YosResponse200, null, 2)
        },
        hhsRequestClick() {
            this.hhsResponse = JSON.stringify(HhsResponse200, null, 2);
        },
        nextStep() {
            this.selectedIndex = this.selectedIndex + 1;
        },

        
        yosChangeTabs(step) {
            
            switch (step) {
                case 1:
                    return this.yosResponse = JSON.stringify(YosResponse200, null, 2);
                case 2:
                    return this.yosResponse = JSON.stringify(YosResponse400, null, 2);
                case 3:
                    return this.yosResponse = JSON.stringify(YosResponse401, null, 2);
                case 4:
                    return this.yosResponse = JSON.stringify(YosResponse403, null, 2);
                case 5:
                    return this.yosResponse = JSON.stringify(YosResponse404, null, 2);

            }
        },
        hhsChangeTabs(step) {
            
            switch (step) {
                case 1:
                    return this.hhsResponse = JSON.stringify(HhsResponse200, null, 2);
                case 2:
                    return this.hhsResponse = JSON.stringify(HhsResponse400, null, 2);
                case 3:
                    return this.hhsResponse = JSON.stringify(HhsResponse401, null, 2);
                case 4:
                    return this.hhsResponse = JSON.stringify(HhsResponse403, null, 2);
                case 5:
                    return this.hhsResponse = JSON.stringify(HhsResponse404, null, 2);

            }
        },

        tabsChanged: function (e) {
            
            this.selectedIndex = e.addedItems[0].ID - 1;
            if (e.addedItems[0].ID == 2) {
                const spec = require('../public/yos-api-s1.1.json');
                SwaggerUI({
                    spec: spec,
                    dom_id: '#swagger-ui-yos',
                    presets: [
                        SwaggerUI.presets.apis,
                        SwaggerUIStandalonePreset,
                    ],
                    layout: 'StandaloneLayout',
                 
                });
            }
            else if (e.addedItems[0].ID == 4) {
                const spec = require('../public/hhs-api-s1.1.json');
                SwaggerUI({
                    spec: spec,
                    dom_id: '#swagger-ui-hhs',
                    presets: [
                        SwaggerUI.presets.apis,
                        SwaggerUIStandalonePreset,
                    ],
                    layout: 'StandaloneLayout',
                 
                });
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
  
  

 