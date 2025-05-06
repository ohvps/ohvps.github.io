<template>
    <div>
        <DxTabPanel :height="1300" :data-source="duzenliOdemeEmriTabs" :selected-index="selectedIndex"
            @selection-changed="duzenliOdemeEmriTabsChanged" :loop="true" :animation-enabled="true" :swipe-enabled="true"
            style="background-color: white;">

            <template #title="{ data: tab }">
                {{ tab.Name }}


            </template>
            <template #item="{ data: tab }">
                <div>
                    <div class="tabpanel-item">

                        <div v-if="tab.ID === 1" style="width: 100%;">
                            <div>
                                <p>Aşağıda ÖBHS'den başlatılan bir Düzenli Ödeme Emri Rızası isteğinin sabit değerlerle nasıl çalıştığını ve "Düzenli Ödeme Emri Rızası Al" butonuna basıldığında dönen başarılı ve başarısız yanıtları inceleyebilirsiniz. </p>

                                <p>Örnek akışta;</p>
                                <p> ÖHK, ÖBHS uygulamasında (web arayüzü/mobil uygulama) düzenli ödeme emri başlatma rıza verme
                                    işlemini
                                    başlatır.</p>
                                <p>ÖBHS uygulaması Düzenli Ödeme Emri Rızası API'si ile HHS'ye rıza talebinde bulunur.</p>
                                <p> Başarılı rıza talebi ile Rıza Durumu "Yetki Bekleniyor" durumuna gelir.</p>
                            </div>

                            <div class="row" style="width: 100%;">
                                <div class="col" style="width: 50%;">
                                    <Request title="Düzenli Ödeme Emri Rızası İsteği" actionButtonText="Düzenli Ödeme Emri Rızası Al"
                                        httpMethod="POST" path="/duzenli-odeme-emri-rizasi" :requestBody="duzenliOdemeEmriRequestBody"
                                        :headers="headersDuzenliOdemeEmriRiza" @request-event="doneClick" />
                                </div>
                                <div class="col" style="width: 50%;">
                                    <Response title="Duzenli Ödeme Emri Rızası Yanıtı" :headers="headerResponse"
                                        @process-event="nextStep" actionButtonText="Bir Sonraki İşlem"
                                        @response-event="changeTabs" :body="duzenliOdemeEmriRizasiResponse" :tabs="responseTabsDuzenliOdemeEmriRizasi" nextButtonVisible="true" />
                                </div>
                            </div>
                        </div>
                        <div v-if="tab.ID === 2">
                            <div>
                                <p>Örnek akışta;</p>
                                <p>ÖBHS uygulaması, başarılı düzenli ödeme emri rızası çağrımından sonra ÖHK'yı HHS uygulamasına
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
                                        httpMethod="POST" path="/erisim-belirteci" :requestBody="erisimBelirteciBody"
                                        :headers="headersDuzenliOdemeEmriRiza" @request-event="erisimBelirteci" />
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
                                    <Request title="Düzenli Ödeme Emri İsteği" actionButtonText="Düzenli Ödeme Emri İsteği" httpMethod="POST"
                                        path="/duzenli-odeme-emri" :requestBody="duzenliOdemeEmriBody"
                                        :headers="requestHeadersAfterToken" @request-event="duzenliOdemeEmri" />
                                </div>
                                <div class="col" style="width: 50%;">
                                    <Response title="Düzenli Ödeme Emri Yanıtı" :headers="headerResponse" @process-event="nextStep"
                                        actionButtonText="Bir Sonraki İşlem" @response-event="duzenliOdemeEmriChangeTab"
                                        :body="duzenliOdemeEmriResponseBody" :tabs="responseTabsDuzenliOdemeEmri" nextButtonVisible="true"/>
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
                                        httpMethod="POST" path="/erisim-belirteci" :requestBody="yenilemeBelirteci"
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
                                    <Request title="Düzenli Ödeme Emri Sorgulama" actionButtonText="Düzenli Ödeme Emri Sorgula" httpMethod="GET"
                                        path="/duzenli-odeme-emri/{odemeEmriNo}" :requestBody="yenilemeBelirteci"
                                        :headers="requestHeadersAfterToken" @request-event="duzenliOdemeEmri" />
                                </div>
                                <div class="col" style="width: 50%;">
                                    <Response title="Düzenli Ödeme Emri Sorgulama Yanıtı" :headers="headerResponse"
                                        @process-event="nextStep" actionButtonText="Bir Sonraki İşlem"
                                        @response-event="duzenliOdemeEmriSorgulamaChangeTab" :body="duzenliOdemeEmriResponseBody"
                                        :tabs="responseTabsDuzenliOdemeEmriSorgulama" nextButtonVisible="false"/>
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

import { mainTabs, duzenliOdemeEmriRizaResponseHeader, duzenliOdemeEmriYenilemeBelirteci,duzenliOdemeEmriRizaHeader, responseTabsDuzenliOdemeEmriRizasi} from './data-duzenli-odeme-emri-V2.0.js';
import { erisimBelirteciResponseTabs, responseTabsDuzenliOdemeEmri, responseTabsDuzenliOdemeEmriSorgulama} from './data-duzenli-odeme-emri-V2.0.js';
import { duzenliOdemeEmriErisimBelirteciHeader } from './data-duzenli-odeme-emri-V2.0.js';
import { DuzenliOdemeEmriRızasiRequest, DuzenliOdemeEmriRizasi201, DuzenliOdemeEmriRizasi400, DuzenliOdemeEmriRizasi401, DuzenliOdemeEmriRizasi403, DuzenliOdemeEmriRizasi404,DuzenliOdemeEmriRizasi500,DuzenliOdemeEmriRizasi503,DuzenliOdemeEmriRizasi504 } from './data-duzenli-odeme-emri-V2.0.js';
import { DuzenliOdemeEmriRequestBody, DuzenliOdemeEmriResponse201, DuzenliOdemeEmriResponse400, DuzenliOdemeEmriResponse401, DuzenliOdemeEmriResponse403, DuzenliOdemeEmriResponse404 , DuzenliOdemeEmriResponse500 , DuzenliOdemeEmriResponse503, DuzenliOdemeEmriResponse504   } from './data-duzenli-odeme-emri-V2.0.js';
import { odemeEmriYenilemeBelirteci, ErisimBelirteciRequest, ErisimBelirteciResponse200, ErisimBelirteciResponse400, YenilemeBelirteciResponse401,  ErisimBelirteciResponse403,  ErisimBelirteciResponse404,  ErisimBelirteciResponse500 ,ErisimBelirteciResponse503,ErisimBelirteciResponse504} from './data-duzenli-odeme-emri-V2.0.js';
import { odemeEmriRizaHeader, odemeEmriRizaResponseHeader } from './data-duzenli-odeme-emri-V2.0.js'
import { requestHeadersAfterToken } from './data-duzenli-odeme-emri-V2.0.js'
import { DuzenliOdemeEmriSorgulamaResponse400,DuzenliOdemeEmriSorgulamaResponse401,DuzenliOdemeEmriSorgulamaResponse403,DuzenliOdemeEmriSorgulamaResponse429,DuzenliOdemeEmriSorgulamaResponse500,DuzenliOdemeEmriSorgulamaResponse503,DuzenliOdemeEmriSorgulamaResponse504 } from './data-duzenli-odeme-emri-V2.0.js'


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
            duzenliOdemeEmriTabs: mainTabs,    
            responseTabsDuzenliOdemeEmriRizasi: responseTabsDuzenliOdemeEmriRizasi,
            erisimBelirteciTabs: erisimBelirteciResponseTabs,
            responseTabsDuzenliOdemeEmri:responseTabsDuzenliOdemeEmri,
            headerResponse: duzenliOdemeEmriRizaResponseHeader,
            duzenliOdemeEmriRizasiResponse: "",
            erisimBelirteciRequestHeader: duzenliOdemeEmriErisimBelirteciHeader,
            erisimBelirteciBody: JSON.stringify(ErisimBelirteciRequest, null, 2),
            erisimBelirteciResponseBody: "",
            yenilemeBelirteci: JSON.stringify(duzenliOdemeEmriYenilemeBelirteci, null, 2),
            duzenliOdemeEmriBody: JSON.stringify(DuzenliOdemeEmriRequestBody, null, 2),
            duzenliOdemeEmriResponseBody: "",
            duzenliOdemeEmriRequestBody: JSON.stringify(DuzenliOdemeEmriRızasiRequest, null, 2),
            headersDuzenliOdemeEmriRiza: duzenliOdemeEmriRizaHeader,
            requestHeadersAfterToken:requestHeadersAfterToken,            
            responseTabsDuzenliOdemeEmriSorgulama: responseTabsDuzenliOdemeEmriSorgulama,
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
            this.duzenliOdemeEmriRizasiResponse = JSON.stringify(DuzenliOdemeEmriRizasi201, null, 2)
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
        duzenliOdemeEmriChangeTab(step) {
            debugger
            switch (step) {
                case 1:
                    return this.duzenliOdemeEmriResponseBody = JSON.stringify(DuzenliOdemeEmriResponse201, null, 2);
                case 2:
                    return this.duzenliOdemeEmriResponseBody = JSON.stringify(DuzenliOdemeEmriResponse400, null, 2);
                case 3:
                    return this.duzenliOdemeEmriResponseBody = JSON.stringify(DuzenliOdemeEmriResponse401, null, 2);
                case 4:
                    return this.duzenliOdemeEmriResponseBody = JSON.stringify(DuzenliOdemeEmriResponse403, null, 2);
                case 5:
                    return this.duzenliOdemeEmriResponseBody = JSON.stringify(DuzenliOdemeEmriResponse404, null, 2);
                case 6:
                    return this.duzenliOdemeEmriResponseBody = JSON.stringify(DuzenliOdemeEmriResponse500, null, 2);
                case 7:
                    return this.duzenliOdemeEmriResponseBody = JSON.stringify(DuzenliOdemeEmriResponse503, null, 2);
                case 8:
                    return this.duzenliOdemeEmriResponseBody = JSON.stringify(DuzenliOdemeEmriResponse504, null, 2);
            }
        },
               duzenliOdemeEmriSorgulamaChangeTab(step) {
            
            switch (step) {
                case 1:
                    return this.duzenliOdemeEmriResponseBody = JSON.stringify(DuzenliOdemeEmriResponse201, null, 2);
                case 2:
                    return this.duzenliOdemeEmriResponseBody = JSON.stringify(DuzenliOdemeEmriSorgulamaResponse400, null, 2);
                case 3:
                    return this.duzenliOdemeEmriResponseBody = JSON.stringify(DuzenliOdemeEmriSorgulamaResponse401, null, 2);
                case 4:
                    return this.duzenliOdemeEmriResponseBody = JSON.stringify(DuzenliOdemeEmriSorgulamaResponse403, null, 2);
                case 5:
                    return this.duzenliOdemeEmriResponseBody = JSON.stringify(DuzenliOdemeEmriSorgulamaResponse404, null, 2);
                case 6:
                    return this.duzenliOdemeEmriResponseBody = JSON.stringify(DuzenliOdemeEmriSorgulamaResponse429, null, 2);
                case 7:
                    return this.duzenliOdemeEmriResponseBody = JSON.stringify(DuzenliOdemeEmriSorgulamaResponse500, null, 2);
                case 8:
                    return this.duzenliOdemeEmriResponseBody = JSON.stringify(DuzenliOdemeEmriSorgulamaResponse503, null, 2);
                case 9:
                    return this.duzenliOdemeEmriResponseBody = JSON.stringify(DuzenliOdemeEmriSorgulamaResponse504, null, 2);
            }
        },
        changeTabs(step) {
            

            switch (step) {
                  case 1:
                    return this.duzenliOdemeEmriRizasiResponse = JSON.stringify(DuzenliOdemeEmriRizasi201, null, 2);
                case 2:
                    return this.duzenliOdemeEmriRizasiResponse = JSON.stringify(DuzenliOdemeEmriRizasi400, null, 2);
                case 3:
                    return this.duzenliOdemeEmriRizasiResponse = JSON.stringify(DuzenliOdemeEmriRizasi401, null, 2);
                case 4:
                    return this.duzenliOdemeEmriRizasiResponse = JSON.stringify(DuzenliOdemeEmriRizasi403, null, 2);
                case 5:
                    return this.duzenliOdemeEmriRizasiResponse = JSON.stringify(DuzenliOdemeEmriRizasi404, null, 2);
                case 6:
                    return this.duzenliOdemeEmriRizasiResponse = JSON.stringify(DuzenliOdemeEmriRizasi500, null, 2);         
                case 7:
                    return this.duzenliOdemeEmriRizasiResponse = JSON.stringify(DuzenliOdemeEmriRizasi503, null, 2);               
                case 8:
                    return this.duzenliOdemeEmriRizasiResponse = JSON.stringify(DuzenliOdemeEmriRizasi504, null, 2);  
            }
        },
        duzenliOdemeEmri() {
            this.duzenliOdemeEmriResponseBody = JSON.stringify(DuzenliOdemeEmriResponse201, null, 2)
        },
        duzenliOdemeEmriTabsChanged: function (e) {
            debugger
            this.selectedIndex = e.addedItems[0].ID - 1;
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

#script {
    color: v-bind('colorFromScript')
}
</style>
  
  

 