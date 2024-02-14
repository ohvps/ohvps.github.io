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
                        <div>HHS'nin olay abonelik hizmeti sunduğu servistir. YÖS, seçeceği olay-kaynak tipleri için bu servis aracılığı ile abone olabilir.<br> <br>HHS POST işlemi sonucunda, YÖS adına bir olay abonelik kaynağı oluşturur ve tekil tanımlayıcı olan olayAbonelikNo değerini döner. olayAbonelikNo üretilirken farklı YÖS'ler için aynı değer kullanılamaz. <p></p><br> </div>
                            <div class="row" style="width: 100%;">
                                <div class="col" style="width: 50%;">
                                    <Request title="Olay Abonelik İsteği" actionButtonText="Olay Abonelik Gerçekleştirme" httpMethod="POST"
                                        path="/olay-abonelik" :requestBody="oasRequest" :headers="requestHeadersOAS"
                                        @request-event="requestClick" />
                                </div>
                                <div class="col" style="width: 50%;">
                                    <Response title="Olay Abonelik Yanıtı" :headers="responseHeadersOAS"
                                        @process-event="nextStep" actionButtonText="Bir Sonraki İşlem"
                                        @response-event="ChangeTabsOlayAbonelik" :body="oasResponse" :tabs="responseTabsOAS" nextButtonVisible="true"/>
                                </div>
                            </div>
                        </div>
                       
                          <div v-if="tab.ID === 2" style="width: 100%;">
                           <div>
                           YÖS'ün olay aboneliğine ait abonelik tiplerini güncelleyebildiği servistir. Olay aboneliği oluşturulduğu zaman HHS tarafından iletilen olayAbonelikNo aracılığı ile güncelleme işlemi yapılır.<br> YÖS abone olmak istediği olay-kayıt tiplerininin son halini güncelleme servisi ile HHS'ye iletir.<br><br> 
                            </div>
                            <div class="row" style="width: 100%;">
                                <div class="col" style="width: 50%;">
                                    <Request title="Olay Abonelik Güncelleme İsteği" actionButtonText="Olay Abonelik Güncelleme" httpMethod="PUT"
                                        path="olay-abonelik/{olayAbonelikNo}" :requestBody="oaGuncellemeRequest" :headers="requestHeadersOAS"
                                        @request-event="requestClickOAGuncelleme" />
                                </div>
                                <div class="col" style="width: 50%;">
                                    <Response title="Olay Abonelik Güncelleme Yanıtı" :headers="responseHeadersOAS"
                                        @process-event="nextStep" actionButtonText="Bir Sonraki İşlem"
                                        @response-event="ChangeTabsOAGuncelleme" :body="oasResponse" :tabs="responseTabsOAS" nextButtonVisible="true"/>
                                </div>
                            </div>
                        </div>
                        <div v-if="tab.ID === 3" style="width: 100%;">
                        <div>YÖS olay abonelik bilgilerini sorgulamak isteyebilir. HHS, YÖS'e ait aktif durumdaki abonelik bilgisini iletir. <br><br></div>
                            <div class="row" style="width: 100%;">
                                <div class="col" style="width: 50%;">
                                    <Request title="Olay Abonelik Sorgulama İsteği" actionButtonText="Olay Abonelik Sorgulama" httpMethod="GET"
                                        path="/olay-abonelik" :requestBody="odsRequest" :headers="requestHeadersWithoutSignature"
                                        @request-event="requestClickOASorgulama" />
                                </div>
                                <div class="col" style="width: 50%;">
                                    <Response title="Olay Abonelik Sorgulama Yanıtı" :headers="responseHeadersOAS"
                                        @process-event="nextStep" actionButtonText="Bir Sonraki İşlem"
                                        @response-event="ChangeTabsOASorgulama" :body="oasResponse" :tabs="responseTabsOAS"  nextButtonVisible="true"/>
                                </div>
                            </div>
                        </div>
                        <div v-if="tab.ID === 4" style="width: 100%;">
                            <div>YÖS'ün abonelik kaydını silmesi için HHS'nin sunduğu servistir.<br><br> </div>
                            <div class="row" style="width: 100%;">
                                <div class="col" style="width: 50%;">
                                    <Request title="Olay Abonelik İptal İsteği" actionButtonText="Olay Abonelik İptal" httpMethod="DELETE"
                                        path="/olay-abonelik/{olayAbonelikNo}" :requestBody="odsRequest" :headers="requestHeadersWithoutSignature"
                                        @request-event="requestClickOAIptal" />
                                </div>
                                <div class="col" style="width: 50%;">
                                    <Response title="Olay Abonelik İptal Yanıtı" :headers="responseHeadersOASWithoutSignature"
                                        @process-event="nextStep" actionButtonText="Bir Sonraki İşlem"
                                        @response-event="ChangeTabsOAIptal" :body="oasResponse" :tabs="responseTabsOAIptal"  nextButtonVisible="true"/>
                                </div>
                            </div>
                        </div>
                        <div v-if="tab.ID === 5" style="width: 100%;">
                            <div>HHS kaynaklar üzerinde oluşacak olayları YÖS'e POST/olay-dinleme servisi ile gönderim sağlamaktadır. Bu gönderim belli bir yeniden gönderim politası (retry-policy) ile yapılmalıdır. Ancak yine de iletilemeyen olaylar olursa (YÖS servisinden HTTP 202 alamama durumu) YÖS'e iletilemeyen-olaylar servisi üzerinden sunulmalıdır.  <br><br></div>
                            <div class="row" style="width: 100%;">
                                <div class="col" style="width: 50%;">
                                    <Request title="İletilemeyen Olaylar İsteği" actionButtonText="İletilemeyen Olaylar" httpMethod="GET"
                                        path="/olay-abonelik/{olayAbonelikNo}/iletilemeyen-olaylar" :requestBody="odsRequest" :headers="requestHeadersWithoutSignature"
                                        @request-event="requestClickIletilemeyenOlaylar" />
                                </div>
                                <div class="col" style="width: 50%;">
                                    <Response title="İletilemeyen Olaylar Yanıtı" :headers="responseHeadersOASWithoutSignature"
                                        @process-event="nextStep" actionButtonText="Bir Sonraki İşlem"
                                        @response-event="ChangeTabsIletilemeyenOlaylar" :body="oasResponse" :tabs="responseTabsOAS"  nextButtonVisible="true"/>
                                </div>
                            </div>
                        </div>
                         <div v-if="tab.ID === 6" style="width: 100%;">
                         <div>HHS'lerin sistem olaylarını dinleme amacıyla açması gereken endpoint bilgisidir.<br>YÖS API içerisinde yapılan değişikliklerde, BKM tarafından HHS'lere olay bildirimlerini yapılır.<br><br></div>
                            <div class="row" style="width: 100%;">
                                <div class="col" style="width: 50%;">
                                    <Request title="HHS Sistem Olay Dinleme İsteği" actionButtonText="HHS Sistem Olay Dinleme" httpMethod="POST"
                                        path="/sistem-olay-dinleme" :requestBody="sistemOlayDinlemeRequest" :headers="requestHeadersWithoutSignature"
                                        @request-event="requestClickSistemOlayDinleme" />
                                </div>
                                <div class="col" style="width: 50%;">
                                    <Response title="HHS Sistem Olay Dinleme Yanıtı" :headers="responseHeadersOASWithoutSignature"
                                        @process-event="nextStep" actionButtonText="Bir Sonraki İşlem"
                                        @response-event="ChangeTabsSistemOlayDinleme" :body="oasResponse" :tabs="responseTabsOAS"  nextButtonVisible="true"/>
                                </div>
                            </div>
                        </div>
                       <div v-if="tab.ID === 7" style="width: 100%;">
                       <div>Olay abonelik servisi ile abone olunan olaylar, olay dinleme servisi ile YÖS'e iletilir. YÖS'lerin hem HHS'den hem de BKM'den gelen olayları dinlemek için olay dinleme endpointini açmaları gerekmektedir.<br><br></div>
                            <div class="row" style="width: 100%;">
                                <div class="col" style="width: 50%;">
                                    <Request title=" Olay Dinleme İsteği" actionButtonText="Olay Dinleme" httpMethod="POST"
                                        path="/olay-dinleme" :requestBody="odsRequest" :headers="requestHeadersOAS"
                                        @request-event="odsRequestClick" />
                                </div>
                                <div class="col" style="width: 50%;">
                                    <Response title="Olay Dinleme Yanıtı" :headers="responseHeadersOASWithoutSignature"
                                        @process-event="nextStep" actionButtonText="Bir Sonraki İşlem"
                                        @response-event="odsChangeTabs" :body="odsResponse" :tabs="responseTabsODS"  nextButtonVisible="true"/>
                                </div>
                            </div>
                        </div>

                        <div v-if="tab.ID === 8" style="width: 100%;">
                            <div class="row" style="width: 100%;">
                                <div class="col" style="width: 50%;">
                                    <Request title="YÖS Sistem Olay Dinleme İsteği" actionButtonText="YÖS Sistem Olay Dinleme" httpMethod="POST"
                                        path="/sistem-olay-dinleme" :requestBody="yosSistemOlayDinlemeRequest" :headers="requestHeadersWithoutSignature"
                                        @request-event="requestClickYOSSistemOlayDinleme" />
                                </div>
                                <div class="col" style="width: 50%;">
                                    <Response title="YÖS Sistem Olay Dinleme Yanıtı" :headers="responseHeadersOASWithoutSignature"
                                        @process-event="nextStep" actionButtonText="Bir Sonraki İşlem"
                                        @response-event="ChangeTabsYOSSistemOlayDinleme" :body="oasResponse" :tabs="responseTabsOAS"  nextButtonVisible="false"/>
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
import { ResponseTabsOAS,ResponseTabsOAIptal, ResponseTabsODS} from './data-olay-dinleme-V1.1'
import { RequestHeadersOAS,ResponseHeadersOAS, RequestHeadersWithoutSignature, ResponseHeadersOASWithoutSignature, OlayAbonelikRequest, OlayAbonelikResponse200, OlayAbonelikResponse400, OlayAbonelikResponse401, OlayAbonelikResponse403,OlayAbonelikResponse404 } from './data-olay-dinleme-V1.1'
import { OAGuncellemeRequest, OAGuncellemeResponse200, OAGuncellemeResponse400, OAGuncellemeResponse401, OAGuncellemeResponse403, OAGuncellemeResponse404 } from './data-olay-dinleme-V1.1'

import { OASorgulamaResponse404} from './data-olay-dinleme-V1.1' 
import { OAIptalResponse202} from './data-olay-dinleme-V1.1' 
import { IletilemeyenOlaylarResponse200,IletilemeyenOlaylarResponse400,IletilemeyenOlaylarResponse401,IletilemeyenOlaylarResponse403,IletilemeyenOlaylarResponse404} from './data-olay-dinleme-V1.1' 
import { YOSSistemOlayDinlemeRequest, SistemOlayDinlemeRequest,SistemOlayDinlemeResponse200,SistemOlayDinlemeResponse400,SistemOlayDinlemeResponse401,SistemOlayDinlemeResponse403,SistemOlayDinlemeResponse404} from './data-olay-dinleme-V1.1' 

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
           
            responseTabsOAS: ResponseTabsOAS,
            responseTabsOAIptal: ResponseTabsOAIptal,
            requestHeadersOAS: RequestHeadersOAS,
            responseHeadersOAS: ResponseHeadersOAS,
            requestHeadersWithoutSignature: RequestHeadersWithoutSignature,
            responseHeadersOASWithoutSignature: ResponseHeadersOASWithoutSignature,


            oasRequest: JSON.stringify(OlayAbonelikRequest, null, 2),
            oaGuncellemeRequest: JSON.stringify(OAGuncellemeRequest, null, 2),
            sistemOlayDinlemeRequest: JSON.stringify(SistemOlayDinlemeRequest, null, 2),
            yosSistemOlayDinlemeRequest: JSON.stringify(YOSSistemOlayDinlemeRequest, null, 2),

            responseTabsODS: ResponseTabsODS,
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
            this.oasResponse = JSON.stringify(OlayAbonelikResponse200, null, 2)
        },
        requestClickOAGuncelleme(){
            this.oasResponse = JSON.stringify(OAGuncellemeResponse200, null, 2)
        },
        requestClickOASorgulama(){
            this.oasResponse = JSON.stringify(OAGuncellemeResponse200, null, 2)
        },
        requestClickOAIptal(){
            this.oasResponse = JSON.stringify(OAIptalResponse202, null, 2)
        },
        requestClickIletilemeyenOlaylar(){
            this.oasResponse = JSON.stringify(IletilemeyenOlaylarResponse200, null, 2)
        },
        requestClickSistemOlayDinleme(){
            this.oasResponse = JSON.stringify(SistemOlayDinlemeResponse200, null, 2)
        },  
        requestClickYOSSistemOlayDinleme(){
            this.oasResponse = JSON.stringify(YOSSistemOlayDinlemeRequest, null, 2)
        },        
        odsRequestClick() {
            this.odsResponse = JSON.stringify(OlayDinlemeRequest, null, 2);
        },
        nextStep() {
            this.selectedIndex = this.selectedIndex + 1;
        },


        ChangeTabsOlayAbonelik(step) {
            
            switch (step) {
                case 1:
                    return this.oasResponse = JSON.stringify(OlayAbonelikResponse200, null, 2);
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
        ChangeTabsOAGuncelleme(step) {
            
            switch (step) {
                case 1:
                    return this.oasResponse = JSON.stringify(OAGuncellemeResponse200, null, 2);
                case 2:
                    return this.oasResponse = JSON.stringify(OAGuncellemeResponse400, null, 2);
                case 3:
                    return this.oasResponse = JSON.stringify(OAGuncellemeResponse401, null, 2);
                case 4:
                    return this.oasResponse = JSON.stringify(OAGuncellemeResponse403, null, 2);
                case 5:
                    return this.oasResponse = JSON.stringify(OAGuncellemeResponse404, null, 2);

            }
        },
        ChangeTabsOASorgulama(step) {
            
            switch (step) {
                case 1:
                    return this.oasResponse = JSON.stringify(OAGuncellemeResponse200, null, 2);
                case 2:
                    return this.oasResponse = JSON.stringify(OAGuncellemeResponse400, null, 2);
                case 3:
                    return this.oasResponse = JSON.stringify(OAGuncellemeResponse401, null, 2);
                case 4:
                    return this.oasResponse = JSON.stringify(OAGuncellemeResponse403, null, 2);
                case 5:
                    return this.oasResponse = JSON.stringify(OAGuncellemeResponse404, null, 2);

            }
        },
        ChangeTabsOAIptal(step) {
            
            switch (step) {
                case 1:
                    return this.oasResponse = JSON.stringify(OAIptalResponse202, null, 2);
                case 2:
                    return this.oasResponse = JSON.stringify(OAGuncellemeResponse400, null, 2);
                case 3:
                    return this.oasResponse = JSON.stringify(OAGuncellemeResponse401, null, 2);
                case 4:
                    return this.oasResponse = JSON.stringify(OAGuncellemeResponse403, null, 2);
                case 5:
                    return this.oasResponse = JSON.stringify(OAGuncellemeResponse404, null, 2);


            }
        },
                
        ChangeTabsIletilemeyenOlaylar(step) {
            
            switch (step) {
                case 1:
                    return this.oasResponse = JSON.stringify(IletilemeyenOlaylarResponse200, null, 2);
                case 2:
                    return this.oasResponse = JSON.stringify(IletilemeyenOlaylarResponse400, null, 2);
                case 3:
                    return this.oasResponse = JSON.stringify(IletilemeyenOlaylarResponse401, null, 2);
                case 4:
                    return this.oasResponse = JSON.stringify(IletilemeyenOlaylarResponse403, null, 2);
                case 5:
                    return this.oasResponse = JSON.stringify(IletilemeyenOlaylarResponse404, null, 2);


            }
        },

        ChangeTabsSistemOlayDinleme(step) {
            
            switch (step) {
                case 1:
                    return this.oasResponse = JSON.stringify(SistemOlayDinlemeResponse200, null, 2);
                case 2:
                    return this.oasResponse = JSON.stringify(SistemOlayDinlemeResponse400, null, 2);
                case 3:
                    return this.oasResponse = JSON.stringify(SistemOlayDinlemeResponse401, null, 2);
                case 4:
                    return this.oasResponse = JSON.stringify(SistemOlayDinlemeResponse403, null, 2);
                case 5:
                    return this.oasResponse = JSON.stringify(SistemOlayDinlemeResponse404, null, 2);


            }
        },
        ChangeTabsYOSSistemOlayDinleme(step) {
            
            switch (step) {
                case 1:
                    return this.oasResponse = JSON.stringify(YOSSistemOlayDinlemeRequest, null, 2);
                case 2:
                    return this.oasResponse = JSON.stringify(SistemOlayDinlemeResponse400, null, 2);
                case 3:
                    return this.oasResponse = JSON.stringify(SistemOlayDinlemeResponse401, null, 2);
                case 4:
                    return this.oasResponse = JSON.stringify(SistemOlayDinlemeResponse403, null, 2);
                case 5:
                    return this.oasResponse = JSON.stringify(SistemOlayDinlemeResponse404, null, 2);


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
  
  

 