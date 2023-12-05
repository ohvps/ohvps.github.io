<template>
    <div>
        <DxTabPanel :height="1300" :data-source="odemeEmriTabs" :selected-index="selectedIndex"
            @selection-changed="odemeEmriTabsChanged" :loop="true" :animation-enabled="true" :swipe-enabled="true"
            style="background-color: white;">

            <template #title="{ data: tab }">
                {{ tab.Name }}


            </template>
            <template #item="{ data: tab }">
                <div>
                    <div class="tabpanel-item">

                        <div v-if="tab.ID === 1" style="width: 100%;">
                            <div>
                                <p>Aşağıda ÖBHS'den başlatılan bir Ödeme Emri Rızası isteğinin sabit değerlerle nasıl çalıştığını ve "Ödeme Emri Rızası Al" butonuna basıldığında dönen başarılı ve başarısız yanıtları inceleyebilirsiniz. </p>

                                <p>Örnek akışta;</p>
                                <p> ÖHK, ÖBHS uygulamasında (web arayüzü/mobil uygulama) ödeme emri başlatma rıza verme
                                    işlemini
                                    başlatır.</p>
                                <p>ÖBHS uygulaması Ödeme Emri Rızası API'si ile HHS'ye rıza talebinde bulunur.</p>
                                <p> Başarılı rıza talebi ile Rıza Durumu "Yetki Bekleniyor" durumuna gelir.</p>
                            </div>

                            <div class="row" style="width: 100%;">
                                <div class="col" style="width: 50%;">
                                    <Request title="Ödeme Emri Rızası İsteği" actionButtonText="Ödeme Emri Rızası Al"
                                        isGet="false" path="/odeme-emri-rizasi" :requestBody="odemeEmriRequestBody"
                                        :headers="headersOdemeEmriRiza" @request-event="doneClick" />
                                </div>
                                <div class="col" style="width: 50%;">
                                    <Response title="Ödeme Emri Rızası Yanıtı" :headers="headerResponse"
                                        @process-event="nextStep" actionButtonText="Bir Sonraki İşlem"
                                        @response-event="changeTabs" :body="odemeEmriRizasiResponse" :tabs="responseTabsOdemeEmriRizasi" nextButtonVisible="true" />
                                </div>
                            </div>
                        </div>
                        <div v-if="tab.ID === 2">
                            <div>
                                <p>Örnek akışta;</p>
                                <p>ÖBHS uygulaması, başarılı ödeme emri rızası çağrımından sonra ÖHK'yı HHS uygulamasına
                                    yönlendirir. Burada Yönlendirmeli Güçlü Kimlik Doğrulama akışı örneklendirilmiştir.</p>
                                <p>HHS, sisteminde ÖHK'yı yetkilendirilebilmek için kendi login akışını başlatır.</p>
                                <p>HHS kendi iç servisleri ile akışı devam ettirir. ÖHVPS API çağrımı yapılmaz.</p>
                                <p>Aşağıda, örnek bir HHS login ekranını inceleyebilirsiniz.</p>
                            </div>

                            <Gkd @process-event="nextStep" />
                        </div>

                        <div v-if="tab.ID === 3">
                            <div>
                                <p>Örnek akışta;</p>
                                <p> ÖHK, HHS uygulamasında rızanın detaylarını inceler ve hesap seçimi (opsiyonel) yapar.
                                </p>
                                <p> HHS kendi iç servisleri ile akışı devam ettirir. ÖHVPS API çağrımı yapılmaz.</p>
                                <p>ÖHK onayı alındığında, Rıza Durumu "Yetkilendirildi" durumuna gelir.</p>
                                <p>HHS, akışa özel oluşturduğu "yetKod" parametresini YÖS'e iletir.</p>
                            </div>

                            <RizaOnay @process-event="nextStep" />
                        </div>

                        <div v-if="tab.ID === 4" style="width: 100%;">
                            <div>
                                <p>Örnek akışta;</p>
                                <p>YÖS, ÖHK adına işlem yapabilmek için, HHS'den erişim belirteci talep eder.</p>
                                <p>Erişim belirteci alabilmek için rıza durumunun "Yetkilendirildi" olması ve "yetKod"
                                    parametresinin HHS'ye iletilmesi gerekmektedir.</p>
                                <p>Erişim belirteci başarı ile iletildiğinde rıza durumu "Yetki Kullanıldı" olarak
                                    güncellenir.
                                </p>
                            </div>

                            <div class="row" style="width: 100%;">
                                <div class="col" style="width: 50%;">
                                    <Request title="Erişim Belirteci İsteği" actionButtonText="Erişim Belirteci Al"
                                        isGet="false" path="/erisim-belirteci" :requestBody="erisimBelirteciBody"
                                        :headers="headersOdemeEmriRiza" @request-event="erisimBelirteci" />
                                </div>
                                <div class="col" style="width: 50%;">
                                    <Response title="Erişim Belirteci  Yanıtı" :headers="headerResponse"
                                        @process-event="nextStep" actionButtonText="Bir Sonraki İşlem"
                                        @response-event="erisimBelirteciChangeTab" :body="erisimBelirteciResponseBody"
                                        :tabs="erisimBelirteciTabs" nextButtonVisible="true"/>
                                </div>
                            </div>
                        </div>

                        <div v-if="tab.ID === 5" style="width: 100%;">
                          <div>
                                <p>Örnek akışta;</p>
                                <p>Rıza durumu "Yetki Kullanıldı” olması ön koşulu ile ödeme emrini başlatmak için gerekli tüm zorunlu alanlar doldurularak HHS'ye iletilir.</p>
                                <p>HHS tarafında ödeme sistemine talep iletilir ve başarılı işlem sonucunda rıza durumu “Yetki Ödeme Emrine Dönüştü” olarak güncellenir.</p>                    
                            </div>

                            <div class="row" style="width: 100%;">
                                <div class="col" style="width: 50%;">
                                    <Request title="Ödeme Emri İsteği" actionButtonText="Ödeme Emri İsteği" isGet="false"
                                        path="/odeme-emri" :requestBody="odemeEmriBody"
                                        :headers="requestHeadersAfterToken" @request-event="odemeEmri" />
                                </div>
                                <div class="col" style="width: 50%;">
                                    <Response title="Ödeme Emri Yanıtı" :headers="headerResponse" @process-event="nextStep"
                                        actionButtonText="Bir Sonraki İşlem" @response-event="odemeEmriChangeTab"
                                        :body="odemeEmriResponseBody" :tabs="responseTabsOdemeEmri" nextButtonVisible="true"/>
                                </div>
                            </div>
                        </div>

                        <div v-if="tab.ID === 6" style="width: 100%;">
                            <div>
                                <p>Örnek akışta;</p>
                                <p>Erişim belirtecinin Geçerlilik Süresinin dolduğu durumda, yenileme belirteci karşılığında
                                    yeni bir erişim belirteci alınması gerekmektedir.</p>
                                <p>Erişim Belirteci API farklı parametrelerle çağrılarak Yenileme Belirteci alınır.</p>
                            </div>

                            <div class="row" style="width: 100%;">
                                <div class="col" style="width: 50%;">
                                    <Request title="Yenileme Belirteci İsteği" actionButtonText="Yenileme Belirteci Al"
                                        isGet="false" path="/erisim-belirteci" :requestBody="yenilemeBelirteci"
                                        :headers="requestHeadersAfterToken" @request-event="erisimBelirteci" />
                                </div>
                                <div class="col" style="width: 50%;">
                                    <Response title="Yenileme Belirteci  Yanıtı" :headers="headerResponse"
                                        @process-event="nextStep" actionButtonText="Bir Sonraki İşlem"
                                        @response-event="yenilemeBelirteciChangeTab" :body="erisimBelirteciResponseBody"
                                        :tabs="erisimBelirteciTabs" nextButtonVisible="true" />
                                </div>
                            </div>
                        </div>

                        <div v-if="tab.ID === 7" style="width: 100%;">
                          <div>                                
                                <p>Ödeme durumunu takip etmek isteyen YÖS tarafından yapılan sorgulamadır. </p>
                            </div>
                            <div class="row" style="width: 100%;">
                                <div class="col" style="width: 50%;">
                                    <Request title="Ödeme Emri Sorgulama" actionButtonText="Ödeme Emri Sorgula" isGet="true"
                                        path="/odeme-emri/67d3fd73ae0b433c847201bbb1e5356d" :requestBody="yenilemeBelirteci"
                                        :headers="requestHeadersAfterToken" @request-event="odemeEmri" />
                                </div>
                                <div class="col" style="width: 50%;">
                                    <Response title="Ödeme Emri Sorgulama Yanıtı" :headers="headerResponse"
                                        @process-event="nextStep" actionButtonText="Bir Sonraki İşlem"
                                        @response-event="odemeEmriSorgulamaChangeTab" :body="odemeEmriResponseBody"
                                        :tabs="responseTabsOdemeEmriSorgulama" nextButtonVisible="false"/>
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
import DxTabPanel from 'devextreme-vue/tab-panel';
import { DxScrollView } from 'devextreme-vue/scroll-view';

import { mainTabs } from './data-odeme-emri-V1.1.js';
import { erisimBelirteciResponseTabs, responseTabsOdemeEmriRizasi , responseTabsOdemeEmri, responseTabsOdemeEmriSorgulama} from './data-odeme-emri-V1.1.js';
import { odemeEmriErisimBelirteciHeader } from './data-odeme-emri-V1.1.js';
import { OdemeEmriRızasiRequest, OdemeEmriRizasi201, OdemeEmriRizasi400, OdemeEmriRizasi401, OdemeEmriRizasi403, OdemeEmriRizasi404,OdemeEmriRizasi500,OdemeEmriRizasi503,OdemeEmriRizasi504 } from './data-odeme-emri-V1.1.js';
import { OdemeEmriRequestBody, OdemeEmriResponse201, OdemeEmriResponse400, OdemeEmriResponse401, OdemeEmriResponse403, OdemeEmriResponse404 , OdemeEmriResponse500 , OdemeEmriResponse503, OdemeEmriResponse504   } from './data-odeme-emri-V1.1.js';
import { odemeEmriYenilemeBelirteci, ErisimBelirteciRequest, ErisimBelirteciResponse200, ErisimBelirteciResponse400, YenilemeBelirteciResponse401,  ErisimBelirteciResponse403,  ErisimBelirteciResponse404,  ErisimBelirteciResponse500 ,ErisimBelirteciResponse503,ErisimBelirteciResponse504} from './data-odeme-emri-V1.1.js';
import { odemeEmriRizaHeader, odemeEmriRizaResponseHeader } from './data-odeme-emri-V1.1.js'
import { requestHeadersAfterToken } from './data-odeme-emri-V1.1.js'
import { OdemeEmriSorgulamaResponse400,OdemeEmriSorgulamaResponse401,OdemeEmriSorgulamaResponse403,OdemeEmriSorgulamaResponse404,OdemeEmriSorgulamaResponse429,OdemeEmriSorgulamaResponse500,OdemeEmriSorgulamaResponse503,OdemeEmriSorgulamaResponse504 } from './data-odeme-emri-V1.1.js'



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
            odemeEmriTabs: mainTabs,    
            responseTabsOdemeEmriRizasi: responseTabsOdemeEmriRizasi,
            erisimBelirteciTabs: erisimBelirteciResponseTabs,
            responseTabsOdemeEmri:responseTabsOdemeEmri,
            headerResponse: odemeEmriRizaResponseHeader,
            odemeEmriRizasiResponse: "",
            erisimBelirteciRequestHeader: odemeEmriErisimBelirteciHeader,
            erisimBelirteciBody: JSON.stringify(ErisimBelirteciRequest, null, 2),
            erisimBelirteciResponseBody: "",
            yenilemeBelirteci: JSON.stringify(odemeEmriYenilemeBelirteci, null, 2),
            odemeEmriBody: JSON.stringify(OdemeEmriRequestBody, null, 2),
            odemeEmriResponseBody: "",
            odemeEmriRequestBody: JSON.stringify(OdemeEmriRızasiRequest, null, 2),
            headersOdemeEmriRiza: odemeEmriRizaHeader,
            requestHeadersAfterToken:requestHeadersAfterToken,            
            responseTabsOdemeEmriSorgulama: responseTabsOdemeEmriSorgulama,
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

        parentMethod() {
            console.log('Parent method çağrıldı!');
        },
        doneClick() {
            this.odemeEmriRizasiResponse = JSON.stringify(OdemeEmriRizasi201, null, 2)
        },
        erisimBelirteci() {
      
            this.erisimBelirteciResponseBody = JSON.stringify(ErisimBelirteciResponse200, null, 2);
        },
        nextStep() {
            this.selectedIndex = this.selectedIndex + 1;
        },

        erisimBelirteciChangeTab(step) {
            
            switch (step) {
                case 1:
                    return this.erisimBelirteciResponseBody = JSON.stringify(ErisimBelirteciResponse200, null, 2);
                case 2:
                    return this.erisimBelirteciResponseBody = JSON.stringify(ErisimBelirteciResponse400, null, 2);
                case 3:
                    return this.erisimBelirteciResponseBody = JSON.stringify(ErisimBelirteciResponse401, null, 2);
                case 4:
                    return this.erisimBelirteciResponseBody = JSON.stringify(ErisimBelirteciResponse403, null, 2);
                case 5:
                    return this.erisimBelirteciResponseBody = JSON.stringify(ErisimBelirteciResponse404, null, 2);
                case 6:
                    return this.erisimBelirteciResponseBody = JSON.stringify(ErisimBelirteciResponse500, null, 2);
                case 7:
                    return this.erisimBelirteciResponseBody = JSON.stringify(ErisimBelirteciResponse503, null, 2);
                case 8:
                    return this.erisimBelirteciResponseBody = JSON.stringify(ErisimBelirteciResponse504, null, 2);
            }
        },
        yenilemeBelirteciChangeTab(step) {
            
            switch (step) {
                case 1:
                    return this.erisimBelirteciResponseBody = JSON.stringify(ErisimBelirteciResponse200, null, 2);
                case 2:
                    return this.erisimBelirteciResponseBody = JSON.stringify(ErisimBelirteciResponse400, null, 2);
                case 3:
                    return this.erisimBelirteciResponseBody = JSON.stringify(YenilemeBelirteciResponse401, null, 2);
                case 4:
                    return this.erisimBelirteciResponseBody = JSON.stringify(ErisimBelirteciResponse403, null, 2);
                case 5:
                    return this.erisimBelirteciResponseBody = JSON.stringify(ErisimBelirteciResponse404, null, 2);
                case 6:
                    return this.erisimBelirteciResponseBody = JSON.stringify(ErisimBelirteciResponse500, null, 2);
                case 7:
                    return this.erisimBelirteciResponseBody = JSON.stringify(ErisimBelirteciResponse503, null, 2);
                case 8:
                    return this.erisimBelirteciResponseBody = JSON.stringify(ErisimBelirteciResponse504, null, 2);
            }
        },
        odemeEmriChangeTab(step) {
            
            switch (step) {
                case 1:
                    return this.odemeEmriResponseBody = JSON.stringify(OdemeEmriResponse201, null, 2);
                case 2:
                    return this.odemeEmriResponseBody = JSON.stringify(OdemeEmriResponse400, null, 2);
                case 3:
                    return this.odemeEmriResponseBody = JSON.stringify(OdemeEmriResponse401, null, 2);
                case 4:
                    return this.odemeEmriResponseBody = JSON.stringify(OdemeEmriResponse403, null, 2);
                case 5:
                    return this.odemeEmriResponseBody = JSON.stringify(OdemeEmriResponse404, null, 2);
                case 6:
                    return this.odemeEmriResponseBody = JSON.stringify(OdemeEmriResponse500, null, 2);
                case 7:
                    return this.odemeEmriResponseBody = JSON.stringify(OdemeEmriResponse503, null, 2);
                case 8:
                    return this.odemeEmriResponseBody = JSON.stringify(OdemeEmriResponse504, null, 2);
            }
        },
               odemeEmriSorgulamaChangeTab(step) {
            
            switch (step) {
                case 1:
                    return this.odemeEmriResponseBody = JSON.stringify(OdemeEmriResponse201, null, 2);
                case 2:
                    return this.odemeEmriResponseBody = JSON.stringify(OdemeEmriSorgulamaResponse400, null, 2);
                case 3:
                    return this.odemeEmriResponseBody = JSON.stringify(OdemeEmriSorgulamaResponse401, null, 2);
                case 4:
                    return this.odemeEmriResponseBody = JSON.stringify(OdemeEmriSorgulamaResponse403, null, 2);
                case 5:
                    return this.odemeEmriResponseBody = JSON.stringify(OdemeEmriSorgulamaResponse404, null, 2);
                case 6:
                    return this.odemeEmriResponseBody = JSON.stringify(OdemeEmriSorgulamaResponse429, null, 2);
                case 7:
                    return this.odemeEmriResponseBody = JSON.stringify(OdemeEmriSorgulamaResponse500, null, 2);
                case 8:
                    return this.odemeEmriResponseBody = JSON.stringify(OdemeEmriSorgulamaResponse503, null, 2);
                case 9:
                    return this.odemeEmriResponseBody = JSON.stringify(OdemeEmriSorgulamaResponse504, null, 2);
            }
        },
        changeTabs(step) {
            

            switch (step) {
                  case 1:
                    return this.odemeEmriRizasiResponse = JSON.stringify(OdemeEmriRizasi201, null, 2);
                case 2:
                    return this.odemeEmriRizasiResponse = JSON.stringify(OdemeEmriRizasi400, null, 2);
                case 3:
                    return this.odemeEmriRizasiResponse = JSON.stringify(OdemeEmriRizasi401, null, 2);
                case 4:
                    return this.odemeEmriRizasiResponse = JSON.stringify(OdemeEmriRizasi403, null, 2);
                case 5:
                    return this.odemeEmriRizasiResponse = JSON.stringify(OdemeEmriRizasi404, null, 2);
                case 6:
                    return this.odemeEmriRizasiResponse = JSON.stringify(OdemeEmriRizasi500, null, 2);         
                case 7:
                    return this.odemeEmriRizasiResponse = JSON.stringify(OdemeEmriRizasi503, null, 2);               
                case 8:
                    return this.odemeEmriRizasiResponse = JSON.stringify(OdemeEmriRizasi504, null, 2);  
            }
        },
        odemeEmri() {
            this.odemeEmriResponseBody = JSON.stringify(OdemeEmriResponse201, null, 2)
        },
        odemeEmriTabsChanged: function (e) {
            
            this.selectedIndex = e.addedItems[0].ID - 1;
            if (e.addedItems[0].ID == 7) {
                const spec = require('../public/obh-api-s1.1.json');
                SwaggerUI({
                    spec: spec,
                    dom_id: '#swagger-ui',
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

#script {
    color: v-bind('colorFromScript')
}
</style>
  
  

 