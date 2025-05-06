<template>
    <div>
        <DxTabPanel :height="1300" :data-source="ileriTarihliOdemeEmriTabs" :selected-index="selectedIndex"
            @selection-changed="ileriTarihliOdemeEmriTabsChanged" :loop="true" :animation-enabled="true" :swipe-enabled="true"
            style="background-color: white;">

            <template #title="{ data: tab }">
                {{ tab.Name }}


            </template>
            <template #item="{ data: tab }">
                <div>
                    <div class="tabpanel-item">

                        <div v-if="tab.ID === 1" style="width: 100%;">
                            <div>
                                <p>Aşağıda ÖBHS'den başlatılan bir İleri Tarihli Ödeme Emri Rızası isteğinin sabit değerlerle nasıl çalıştığını ve "İleri Tarihli Ödeme Emri Rızası Al" butonuna basıldığında dönen başarılı ve başarısız yanıtları inceleyebilirsiniz. </p>

                                <p>Örnek akışta;</p>
                                <p> ÖHK, ÖBHS uygulamasında (web arayüzü/mobil uygulama) ileri tarihli ödeme emri başlatma rıza verme
                                    işlemini
                                    başlatır.</p>
                                <p>ÖBHS uygulaması İleri Tarihli Ödeme Emri Rızası API'si ile HHS'ye rıza talebinde bulunur.</p>
                                <p> Başarılı rıza talebi ile Rıza Durumu "Yetki Bekleniyor" durumuna gelir.</p>
                            </div>

                            <div class="row" style="width: 100%;">
                                <div class="col" style="width: 50%;">
                                    <Request title=" İleri Tarihli Ödeme Emri Rızası İsteği" actionButtonText="İleri Tarihli Ödeme Emri Rızası Al"
                                        httpMethod="POST" path="/ileri-tarihli-odeme-emri-rizasi" :requestBody="ileriTarihliOdemeEmriRequestBody"
                                        :headers="headersileriTarihliOdemeEmriRiza" @request-event="doneClick" />
                                </div>
                                <div class="col" style="width: 50%;">
                                    <Response title="İleri Tarihli Ödeme Emri Rızası Yanıtı" :headers="headerResponse"
                                        @process-event="nextStep" actionButtonText="Bir Sonraki İşlem"
                                        @response-event="changeTabs" :body="ileriTarihliOdemeEmriRizasiResponse" :tabs="responseTabsileriTarihliOdemeEmriRizasi" nextButtonVisible="true" />
                                </div>
                            </div>
                        </div>
                        <div v-if="tab.ID === 2">
                            <div>
                                <p>Örnek akışta;</p>
                                <p>ÖBHS uygulaması, başarılı ileri tarihli ödeme emri rızası çağrımından sonra ÖHK'yı HHS uygulamasına
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
                                        :headers="headersileriTarihliOdemeEmriRiza" @request-event="erisimBelirteci" />
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
                                <p>Rıza durumu "Yetki Kullanıldı” olması ön koşulu ile ileri tarihli ödeme emrini başlatmak için gerekli tüm zorunlu alanlar doldurularak HHS'ye iletilir.</p>
                                <p>HHS tarafında ödeme sistemine talep iletilir ve başarılı işlem sonucunda rıza durumu “Yetki Ödeme Emrine Dönüştü” olarak güncellenir.</p>                    
                            </div>

                            <div class="row" style="width: 100%;">
                                <div class="col" style="width: 50%;">
                                    <Request title="İleri Tarihli Ödeme Emri İsteği" actionButtonText="İleri Tarihli Ödeme Emri İsteği" httpMethod="POST"
                                        path="/ileri-tarihli-odeme-emri" :requestBody="ileriTarihliOdemeEmriBody"
                                        :headers="requestHeadersAfterToken" @request-event="ileriTarihliOdemeEmri" />
                                </div>
                                <div class="col" style="width: 50%;">
                                    <Response title="İleri Tarihli Ödeme Emri Yanıtı" :headers="headerResponse" @process-event="nextStep"
                                        actionButtonText="Bir Sonraki İşlem" @response-event="ileriTarihliOdemeEmriChangeTab"
                                        :body="ileriTarihliOdemeEmriResponseBody" :tabs="responseTabsileriTarihliOdemeEmri" nextButtonVisible="true"/>
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
                                    <Request title="İleri Tarihli Ödeme Emri Sorgulama" actionButtonText="İleri Tarihli Ödeme Emri Sorgula" httpMethod="GET"
                                        path="/ileri-tarihli-odeme-emri/{odemeEmriNo}" :requestBody="yenilemeBelirteci"
                                        :headers="requestHeadersAfterToken" @request-event="ileriTarihliOdemeEmri" />
                                </div>
                                <div class="col" style="width: 50%;">
                                    <Response title="İleri Tarihli Ödeme Emri Sorgulama Yanıtı" :headers="headerResponse"
                                        @process-event="nextStep" actionButtonText="Bir Sonraki İşlem"
                                        @response-event="ileriTarihliOdemeEmriSorgulamaChangeTab" :body="ileriTarihliOdemeEmriResponseBody"
                                        :tabs="responseTabsileriTarihliOdemeEmriSorgulama" nextButtonVisible="false"/>
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

import { mainTabs } from './data-ileri-tarihli-odeme-emri-V2.0.js';
import { erisimBelirteciResponseTabs, responseTabsileriTarihliOdemeEmriRizasi , responseTabsileriTarihliOdemeEmri, responseTabsileriTarihliOdemeEmriSorgulama} from './data-ileri-tarihli-odeme-emri-V2.0.js';
import { ileriTarihliOdemeEmriErisimBelirteciHeader } from './data-ileri-tarihli-odeme-emri-V2.0.js';
import { ileriTarihliOdemeEmriRızasiRequest, ileriTarihliOdemeEmriRizasi201, ileriTarihliOdemeEmriRizasi400, ileriTarihliOdemeEmriRizasi401, ileriTarihliOdemeEmriRizasi403, ileriTarihliOdemeEmriRizasi404, ileriTarihliOdemeEmriRizasi500, ileriTarihliOdemeEmriRizasi503, ileriTarihliOdemeEmriRizasi504 } from './data-ileri-tarihli-odeme-emri-V2.0.js';
import { ileriTarihliOdemeEmriRequestBody, ileriTarihliOdemeEmriResponse201, ileriTarihliOdemeEmriResponse400, ileriTarihliOdemeEmriResponse401, ileriTarihliOdemeEmriResponse403, ileriTarihliOdemeEmriResponse404 , ileriTarihliOdemeEmriResponse500 , ileriTarihliOdemeEmriResponse503, ileriTarihliOdemeEmriResponse504   } from './data-ileri-tarihli-odeme-emri-V2.0.js';
import { ileriTarihliOdemeEmriYenilemeBelirteci, ErisimBelirteciRequest, ErisimBelirteciResponse200, ErisimBelirteciResponse400, YenilemeBelirteciResponse401,  ErisimBelirteciResponse403,  ErisimBelirteciResponse404,  ErisimBelirteciResponse500 ,ErisimBelirteciResponse503,ErisimBelirteciResponse504} from './data-ileri-tarihli-odeme-emri-V2.0.js';
import { ileriTarihliOdemeEmriRizaHeader, ileriTarihliOdemeEmriRizaResponseHeader } from './data-ileri-tarihli-odeme-emri-V2.0.js'
import { requestHeadersAfterToken } from './data-ileri-tarihli-odeme-emri-V2.0.js'
import { ileriTarihliOdemeEmriSorgulamaResponse400,ileriTarihliOdemeEmriSorgulamaResponse401,ileriTarihliOdemeEmriSorgulamaResponse403,ileriTarihliOdemeEmriSorgulamaResponse404,ileriTarihliOdemeEmriSorgulamaResponse429,ileriTarihliOdemeEmriSorgulamaResponse500,ileriTarihliOdemeEmriSorgulamaResponse503,ileriTarihliOdemeEmriSorgulamaResponse504 } from './data-ileri-tarihli-odeme-emri-V2.0.js'



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
            ileriTarihliOdemeEmriTabs: mainTabs,    
            responseTabsileriTarihliOdemeEmriRizasi: responseTabsileriTarihliOdemeEmriRizasi,
            erisimBelirteciTabs: erisimBelirteciResponseTabs,
            responseTabsileriTarihliOdemeEmri:responseTabsileriTarihliOdemeEmri,
            headerResponse: ileriTarihliOdemeEmriRizaResponseHeader,
            ileriTarihliOdemeEmriRizasiResponse: "",
            erisimBelirteciRequestHeader: ileriTarihliOdemeEmriErisimBelirteciHeader,
            erisimBelirteciBody: JSON.stringify(ErisimBelirteciRequest, null, 2),
            erisimBelirteciResponseBody: "",
            yenilemeBelirteci: JSON.stringify(ileriTarihliOdemeEmriYenilemeBelirteci, null, 2),
            ileriTarihliOdemeEmriBody: JSON.stringify(ileriTarihliOdemeEmriRequestBody, null, 2),
            ileriTarihliOdemeEmriResponseBody: "",
            ileriTarihliOdemeEmriRequestBody: JSON.stringify(ileriTarihliOdemeEmriRızasiRequest, null, 2),
            headersileriTarihliOdemeEmriRiza: ileriTarihliOdemeEmriRizaHeader,
            requestHeadersAfterToken:requestHeadersAfterToken,            
            responseTabsileriTarihliOdemeEmriSorgulama: responseTabsileriTarihliOdemeEmriSorgulama,
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
            this.ileriTarihliOdemeEmriRizasiResponse = JSON.stringify(ileriTarihliOdemeEmriRizasi201, null, 2)
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
        ileriTarihliOdemeEmriChangeTab(step) {
            
            switch (step) {
                case 1:
                    return this.ileriTarihliOdemeEmriResponseBody = JSON.stringify(ileriTarihliOdemeEmriResponse201, null, 2);
                case 2:
                    return this.ileriTarihliOdemeEmriResponseBody = JSON.stringify(ileriTarihliOdemeEmriResponse400, null, 2);
                case 3:
                    return this.ileriTarihliOdemeEmriResponseBody = JSON.stringify(ileriTarihliOdemeEmriResponse401, null, 2);
                case 4:
                    return this.ileriTarihliOdemeEmriResponseBody = JSON.stringify(ileriTarihliOdemeEmriResponse403, null, 2);
                case 5:
                    return this.ileriTarihliOdemeEmriResponseBody = JSON.stringify(ileriTarihliOdemeEmriResponse404, null, 2);
                case 6:
                    return this.ileriTarihliOdemeEmriResponseBody = JSON.stringify(ileriTarihliOdemeEmriResponse500, null, 2);
                case 7:
                    return this.ileriTarihliOdemeEmriResponseBody = JSON.stringify(ileriTarihliOdemeEmriResponse503, null, 2);
                case 8:
                    return this.ileriTarihliOdemeEmriResponseBody = JSON.stringify(ileriTarihliOdemeEmriResponse504, null, 2);
            }
        },
               ileriTarihliOdemeEmriSorgulamaChangeTab(step) {
            
            switch (step) {
                case 1:
                    return this.ileriTarihliOdemeEmriResponseBody = JSON.stringify(ileriTarihliOdemeEmriResponse201, null, 2);
                case 2:
                    return this.ileriTarihliOdemeEmriResponseBody = JSON.stringify(ileriTarihliOdemeEmriSorgulamaResponse400, null, 2);
                case 3:
                    return this.ileriTarihliOdemeEmriResponseBody = JSON.stringify(ileriTarihliOdemeEmriSorgulamaResponse401, null, 2);
                case 4:
                    return this.ileriTarihliOdemeEmriResponseBody = JSON.stringify(ileriTarihliOdemeEmriSorgulamaResponse403, null, 2);
                case 5:
                    return this.ileriTarihliOdemeEmriResponseBody = JSON.stringify(ileriTarihliOdemeEmriSorgulamaResponse404, null, 2);
                case 6:
                    return this.ileriTarihliOdemeEmriResponseBody = JSON.stringify(ileriTarihliOdemeEmriSorgulamaResponse429, null, 2);
                case 7:
                    return this.ileriTarihliOdemeEmriResponseBody = JSON.stringify(ileriTarihliOdemeEmriSorgulamaResponse500, null, 2);
                case 8:
                    return this.ileriTarihliOdemeEmriResponseBody = JSON.stringify(ileriTarihliOdemeEmriSorgulamaResponse503, null, 2);
                case 9:
                    return this.ileriTarihliOdemeEmriResponseBody = JSON.stringify(ileriTarihliOdemeEmriSorgulamaResponse504, null, 2);
            }
        },
        changeTabs(step) {
            

            switch (step) {
                  case 1:
                    return this.ileriTarihliOdemeEmriRizasiResponse = JSON.stringify(ileriTarihliOdemeEmriRizasi201, null, 2);
                case 2:
                    return this.ileriTarihliOdemeEmriRizasiResponse = JSON.stringify(ileriTarihliOdemeEmriRizasi400, null, 2);
                case 3:
                    return this.ileriTarihliOdemeEmriRizasiResponse = JSON.stringify(ileriTarihliOdemeEmriRizasi401, null, 2);
                case 4:
                    return this.ileriTarihliOdemeEmriRizasiResponse = JSON.stringify(ileriTarihliOdemeEmriRizasi403, null, 2);
                case 5:
                    return this.ileriTarihliOdemeEmriRizasiResponse = JSON.stringify(ileriTarihliOdemeEmriRizasi404, null, 2);
                case 6:
                    return this.ileriTarihliOdemeEmriRizasiResponse = JSON.stringify(ileriTarihliOdemeEmriRizasi500, null, 2);         
                case 7:
                    return this.ileriTarihliOdemeEmriRizasiResponse = JSON.stringify(ileriTarihliOdemeEmriRizasi503, null, 2);               
                case 8:
                    return this.ileriTarihliOdemeEmriRizasiResponse = JSON.stringify(ileriTarihliOdemeEmriRizasi504, null, 2);  
            }
        },
        ileriTarihliOdemeEmri() {
            this.ileriTarihliOdemeEmriResponseBody = JSON.stringify(ileriTarihliOdemeEmriResponse201, null, 2)
        },
        ileriTarihliOdemeEmriTabsChanged: function (e) {
            
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
  
  

 