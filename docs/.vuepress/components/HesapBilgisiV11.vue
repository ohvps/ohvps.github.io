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
                            Aşağıda HBHS'den başlatılan bir Hesap Bilgisi Rızası isteğinin sabit değerlerle nasıl çalıştığını,  "Hesap Bilgisi Rızası Al" butonuna basıldığında dönen başarılı ve başarısız yanıtları inceleyebilirsiniz.<br>
                           Örnek akışta; <br>
                           ÖHK, HBHS uygulamasında (web arayüzü/mobil uygulama) hesap bilgilerine erişim için talepte bulunur.<br>
                            ÖBHS uygulaması Hesap Bilgisi Rızası API ile rıza isteğinde bulunur.İşlem başarı ile gerçekleştirildiğinde rıza durumu "Yetki Bekleniyor" durumuna getirilir.</br>
                            <p></p> 
                           </div>
                            <div class="row" style="width: 100%;">
                                <div class="col" style="width: 50%;">
                                    <Request title="Hesap Bilgisi Rızası İsteği" actionButtonText="Hesap Bilgisi Rızası Al" isGet="false"
                                        path="/hesap-bilgisi-rizasi" :requestBody="hesapBilgisiRequestBody" :headers="headerHesapBilgiRiza"
                                        @request-event="requestClick" />
                                </div>
                                <div class="col" style="width: 50%;">
                                    <Response title="Hesap Bilgisi Rızası Yanıtı" :headers="headerResponse"
                                        @process-event="nextStep" actionButtonText="Bir Sonraki İşlem"
                                        @response-event="changeTabs" :body="hesapBilgisiRizasiResponse" :tabs="responseTabsHBHRiza" nextButtonVisible="true" />
                                </div>
                            </div>
                        </div>
                        <div v-if="tab.ID === 2">
                          <div>
                                <p>Örnek akışta;</p>
                                <p>ÖBHS uygulaması, başarılı hesap bilgisi rızası çağrımından sonra ÖHK'yı HHS uygulamasına yönlendirir. Burada Yönlendirmeli Güçlü Kimlik Doğrulama akışı örneklendirilmiştir.</p>
                                <p>HHS, sisteminde ÖHK'yı yetkilendirilebilmek için kendi login akışını başlatır.</p>
                                <p>HHS kendi iç servisleri ile akışı devam ettirir. ÖHVPS API çağrımı yapılmaz.</p>
                                <p>Aşağıda, örnek bir HHS login ekranını inceleyebilirsiniz.</p>
                            </div>
                           <Gkd  @process-event="nextStep" />
                        </div>

                        <div v-if="tab.ID === 3">
                               <div>
                                <p>Örnek akışta;</p>
                                <p> ÖHK, HHS uygulamasında rızanın detaylarını inceler ve hesap seçimi yapar.  </p>
                                <p> HHS kendi iç servisleri ile akışı devam ettirir. ÖHVPS API çağrısı yapılmaz .</p>
                                <p>ÖHK onayı alındığında, Rıza Durumu "Yetkilendirildi" durumuna gelir.</p>
                                <p>HHS, akışa özel oluşturduğu "yetKod" parametresini YÖS'e iletir.</p>
                            </div>
                            <RizaOnayHesapBilgisi  @process-event="nextStep" />
                        </div>

                        <div v-if="tab.ID === 4" style="width: 100%;">
                             <div>
                                <p>Örnek akışta;</p>
                                <p>YÖS, ÖHK adına işlem yapabilmek için, HHS'den erişim belirteci talep eder.
                                Erişim belirteci alabilmek için rıza durumunun "Yetkilendirildi" olması ve "yetKod"
                                    parametresinin HHS'ye iletilmesi gerekmektedir.
                                Erişim belirteci başarı ile iletildiğinde rıza durumu "Yetki Kullanıldı" olarak
                                    güncellenir.
                                </p>
                            </div>
                            <div class="row" style="width: 100%;">
                                <div class="col" style="width: 50%;">
                                    <Request title="Erişim Belirteci İsteği" actionButtonText="Erişim Belirteci Al" isGet="false"
                                        path="/erisim-belirteci" :requestBody="erisimBelirteciBody"
                                        :headers="headerHesapBilgiRiza" @request-event="erisimBelirteci" />
                                </div>
                                <div class="col" style="width: 50%;">
                                    <Response title="Erişim Belirteci  Yanıtı" :headers="headerHesapBilgiRiza"
                                        @process-event="nextStep" actionButtonText="Bir Sonraki İşlem"
                                        @response-event="erisimBelirteciChangeTab" :body="erisimBelirteciResponseBody"  :tabs="erisimBelirteciTabs" nextButtonVisible="true"/>
                                </div>
                            </div>
                        </div>

                        <div v-if="tab.ID === 5" style="width: 100%;">
                            <div>
                                <p>Rıza durumu "Yetki Kullanıldı " ise YÖS, ÖHK'ya ait hesap bilgilerini bu servis ile sorgular.
                                    Servis parametre alarak, tek bir hesaba ait bilgileri dönebilirken, parametre almadığında tüm hesaplara ait bilgileri de dönebilir. </p>
                            </div>
                            <div class="row" style="width: 100%;">
                                <div class="col" style="width: 50%;">
                                    <Request title="Hesaplar İsteği" actionButtonText="Hesaplar" isGet="true"
                                        path="/hesaplar"  :requestBody="hesapBilgisiBody"
                                        :headers="requestHeadersAfterToken" @request-event="getHesaplar" />
                                </div>
                                <div class="col" style="width: 50%;">
                                    <Response title="Hesaplar Yanıtı" :headers="headerResponse"
                                        @process-event="nextStep" actionButtonText="Bir Sonraki İşlem"
                                        @response-event="hesaplarChangeTab" :body="hesaplarResponseBody"  :tabs="responseTabsHesaplar" nextButtonVisible="true"/>
                                </div>
                            </div>
                        </div>

                        <div v-if="tab.ID === 6" style="width: 100%;">
                            <div><p>Rıza durumu "Yetki Kullanıldı " ise YÖS, ÖHK'ya ait tüm hesapların veya belirli bir hesabın bakiyesi bu servis ile sorgular.</p></div>
                            <div class="row" style="width: 100%;">
                                <div class="col" style="width: 50%;">
                                    <Request title="Bakiye İsteği" actionButtonText="Bakiye" isGet="true"
                                        path="/bakiye" :requestBody="hesapBilgisiBody"
                                        :headers="requestHeadersAfterToken" @request-event="getBakiye" />
                                </div>
                                <div class="col" style="width: 50%;">
                                    <Response title="Bakiye Yanıtı" :headers="headerResponse"
                                        @process-event="nextStep" actionButtonText="Bir Sonraki İşlem"
                                        @response-event="bakiyeChangeTab" :body="bakiyeResponse"  :tabs="responseTabsHesaplar" nextButtonVisible="true"/>
                                </div>
                            </div>
                        </div>

                        <div v-if="tab.ID === 7" style="width: 100%;">
                            <div><p>YÖS, ÖHK'ya ait belirli bir hesabın işlemlerini bu servis ile sorgular. </p></div>
                            <div class="row" style="width: 100%;">
                                <div class="col" style="width: 50%;">
                                    <Request title="İşlemler İsteği" actionButtonText="İşlemler" isGet="true"
                                        path="/hesaplar/1234/islemler" :requestBody="hesapBilgisiBody"
                                        :headers="requestHeadersAfterToken" @request-event="getIslemler" />
                                </div>
                                <div class="col" style="width: 50%;">
                                    <Response title="İşlemler Yanıtı" :headers="headerResponse"
                                        @process-event="nextStep" actionButtonText="Bir Sonraki İşlem"
                                        @response-event="islemlerChangeTab" :body="islemlerResponse"  :tabs="responseTabsHesaplar" nextButtonVisible="true"/>
                                </div>
                            </div>
                        </div>

                        <div v-if="tab.ID === 8" style="width: 100%;">
                            <div class="row" style="width: 100%;">
                                <div class="col" style="width: 50%;">
                                    <Request title="Yenileme Belirteci İsteği" actionButtonText="Yenileme Belirteci Al" isGet="false"
                                        path="/erisim-belirteci" :requestBody="yenilemeBelirteciReuestBody"
                                        :headers="requestHeadersAfterToken" @request-event="erisimBelirteci" />
                                </div>
                                <div class="col" style="width: 50%;">
                                    <Response title="Yenileme Belirteci  Yanıtı" :headers="headerResponse"
                                        @process-event="nextStep" actionButtonText="Bir Sonraki İşlem"
                                        @response-event="yenilemeBelirteciChangeTab" :body="erisimBelirteciResponseBody"  :tabs="erisimBelirteciTabs" nextButtonVisible="false"/>
                                </div>
                            </div>
                        </div>
                        <div v-if="tab.ID === 9" style="width: 100%;">
                            <div class="row" style="width: 100%;">
                                <div class="col" style="width: 50%;">
                                    <Request title="Rıza Sorgulama" actionButtonText="Rıza Sorgulama" isGet="true"
                                        path=" /hesap-bilgisi-rizasi/{RizaNo}" :requestBody="yenilemeBelirteciReuestBody"
                                        :headers="requestHeadersAfterToken" @request-event="erisimBelirteci" />
                                </div>
                                <div class="col" style="width: 50%;">
                                    <Response title="Yenileme Belirteci  Yanıtı" :headers="headerResponse"
                                        @process-event="nextStep" actionButtonText="Bir Sonraki İşlem"
                                        @response-event="yenilemeBelirteciChangeTab" :body="erisimBelirteciResponseBody"  :tabs="erisimBelirteciTabs" nextButtonVisible="false"/>
                                </div>
                            </div>
                        </div>
                         <div v-if="tab.ID === 10" style="width: 100%;">
                            <div class="row" style="width: 100%;">
                                <div class="col" style="width: 50%;">
                                    <Request title="Rıza İptal" actionButtonText="Rıza İptal" isGet="false"
                                        path="DELETE /hesap-bilgisi-rizasi/{RizaNo}" :requestBody="yenilemeBelirteciReuestBody"
                                        :headers="requestHeadersAfterToken" @request-event="erisimBelirteci" />
                                </div>
                                <div class="col" style="width: 50%;">
                                    <Response title="Yenileme Belirteci  Yanıtı" :headers="headerResponse"
                                        @process-event="nextStep" actionButtonText="Bir Sonraki İşlem"
                                        @response-event="yenilemeBelirteciChangeTab" :body="erisimBelirteciResponseBody"  :tabs="erisimBelirteciTabs" nextButtonVisible="false"/>
                                </div>
                            </div>
                        </div>
                       

                        <div v-if="tab.ID === 19">
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

import { mainTabs } from './data-hesap-bilgi-V1.1.js';
import { ResponseTabsHBHRiza, ResponseTabsErisimBelirteci, ResponseTabsHesaplar} from './data-hesap-bilgi-V1.1.js';
import { odemeEmriErisimBelirteciHeader } from './data-hesap-bilgi-V1.1.js';
import { HesapBilgisiRizasi201, HesapBilgisiRizasi400, HesapBilgisiRizasi401, HesapBilgisiRizasi403, HesapBilgisiRizasi404, HesapBilgisiRizasi500, HesapBilgisiRizasi503, HesapBilgisiRizasi504 } from './data-hesap-bilgi-V1.1.js';
import { hesapBilgisiRizasiRequest,HesaplarResponse200,HesaplarResponse400,HesaplarResponse401,HesaplarResponse403,HesaplarResponse404, HesaplarResponse429, HesaplarResponse500, HesaplarResponse503, HesaplarResponse504} from './data-hesap-bilgi-V1.1.js';
import { BakiyeResponse200,BakiyeResponse400,BakiyeResponse401,BakiyeResponse403,BakiyeResponse404,BakiyeResponse429,BakiyeResponse500,BakiyeResponse503,BakiyeResponse504} from './data-hesap-bilgi-V1.1.js';
import { IslemlerResponse200,IslemlerResponse400,IslemlerResponse401,IslemlerResponse403,IslemlerResponse404,IslemlerResponse429,IslemlerResponse500,IslemlerResponse503,IslemlerResponse504} from './data-hesap-bilgi-V1.1.js';
import { hesapBilgisiYenilemeBelirteciReuest,ErisimBelirteciRequest, ErisimBelirteciResponse200, ErisimBelirteciResponse400,ErisimBelirteciResponse401 ,  ErisimBelirteciResponse403,  ErisimBelirteciResponse404,  ErisimBelirteciResponse500 ,ErisimBelirteciResponse503,ErisimBelirteciResponse504} from './data-hesap-bilgi-V1.1.js';
import { hesapBilgisiRizaHeader, hesapBilgisiRizaResponseHeader,YenilemeBelirteciResponse401 } from './data-hesap-bilgi-V1.1.js'
import { RequestHeadersAfterToken } from './data-hesap-bilgi-V1.1.js'


import '../public/assets/swagger-ui/swagger-ui.css'
import SwaggerUI from '../public/assets/swagger-ui/swagger-ui-es-bundle.js'
import SwaggerUIStandalonePreset from '../public/assets/swagger-ui/swagger-ui-standalone-preset.js'

import 'devextreme/dist/css/dx.light.css';
const dataSource = hesapBilgisiRizaHeader;
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
            responseTabsHBHRiza: ResponseTabsHBHRiza,
            erisimBelirteciTabs: ResponseTabsErisimBelirteci,
            responseTabsHesaplar: ResponseTabsHesaplar,
            headerResponse: hesapBilgisiRizaResponseHeader,
            hesapBilgisiRizasiResponse: "",
            erisimBelirteciRequestHeader: odemeEmriErisimBelirteciHeader,
            erisimBelirteciBody: JSON.stringify(ErisimBelirteciRequest, null, 2),
            erisimBelirteciResponseBody: "",
            yenilemeBelirteciReuestBody: JSON.stringify(hesapBilgisiYenilemeBelirteciReuest,null,2),
            hesapBilgisiBody:JSON.stringify(null,null,2),
            hesaplarResponseBody:"",
            hesapBilgisiRequestBody: JSON.stringify(hesapBilgisiRizasiRequest, null, 2),
            headerHesapBilgiRiza: hesapBilgisiRizaHeader,
            bakiyeResponse:"",
            islemlerResponse:"",
            requestHeadersAfterToken:RequestHeadersAfterToken
            
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
            this.hesapBilgisiRizasiResponse = JSON.stringify(HesapBilgisiRizasi201, null, 2)
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

        hesaplarChangeTab(step) {
            
            switch (step) {
                case 1:
                    return this.hesaplarResponseBody = JSON.stringify(HesaplarResponse200, null, 2);
                case 2:
                    return this.hesaplarResponseBody = JSON.stringify(HesaplarResponse400, null, 2);
                case 3:
                    return this.hesaplarResponseBody = JSON.stringify(HesaplarResponse401, null, 2);
                case 4:
                    return this.hesaplarResponseBody = JSON.stringify(HesaplarResponse403, null, 2);
                case 5:
                    return this.hesaplarResponseBody = JSON.stringify(HesaplarResponse404, null, 2);
                case 6:
                    return this.hesaplarResponseBody = JSON.stringify(HesaplarResponse429, null, 2);
                case 7:
                    return this.hesaplarResponseBody = JSON.stringify(HesaplarResponse500, null, 2);
                case 8:
                    return this.hesaplarResponseBody = JSON.stringify(HesaplarResponse503, null, 2);                
                case 9:
                    return this.hesaplarResponseBody = JSON.stringify(HesaplarResponse504, null, 2);       
            }
        },

        bakiyeChangeTab(step) {
            
            switch (step) {
                case 1:
                    return this.bakiyeResponse = JSON.stringify(BakiyeResponse200, null, 2);
                case 2:
                    return this.bakiyeResponse = JSON.stringify(BakiyeResponse400, null, 2);
                case 3:
                    return this.bakiyeResponse = JSON.stringify(BakiyeResponse401, null, 2);
                case 4:
                    return this.bakiyeResponse = JSON.stringify(BakiyeResponse403, null, 2);
                case 5:
                    return this.bakiyeResponse = JSON.stringify(BakiyeResponse404, null, 2);
                case 6:
                    return this.bakiyeResponse = JSON.stringify(BakiyeResponse429, null, 2);
                case 7:
                    return this.bakiyeResponse = JSON.stringify(BakiyeResponse500, null, 2);
                case 8:
                    return this.bakiyeResponse = JSON.stringify(BakiyeResponse503, null, 2);                
                case 9:
                    return this.bakiyeResponse = JSON.stringify(BakiyeResponse504, null, 2);       

            }
        },

        islemlerChangeTab(step) {
            
            switch (step) {
                case 1:
                    return this.islemlerResponse = JSON.stringify(IslemlerResponse200, null, 2);
                case 2:
                    return this.islemlerResponse = JSON.stringify(IslemlerResponse400, null, 2);
                case 3:
                    return this.islemlerResponse = JSON.stringify(IslemlerResponse401, null, 2);
                case 4:
                    return this.islemlerResponse = JSON.stringify(IslemlerResponse403, null, 2);
                case 5:
                    return this.islemlerResponse = JSON.stringify(IslemlerResponse404, null, 2);
                case 6:
                    return this.islemlerResponse = JSON.stringify(IslemlerResponse429, null, 2);
                case 7:
                    return this.islemlerResponse = JSON.stringify(IslemlerResponse500, null, 2);
                case 8:
                    return this.islemlerResponse = JSON.stringify(IslemlerResponse503, null, 2);                
                case 9:
                    return this.islemlerResponse = JSON.stringify(IslemlerResponse504, null, 2);       

            }
        },
        changeTabs(step) {
            
            switch (step) {
                case 1:
                    return this.hesapBilgisiRizasiResponse = JSON.stringify(HesapBilgisiRizasi201, null, 2);
                case 2:
                    return this.hesapBilgisiRizasiResponse = JSON.stringify(HesapBilgisiRizasi400, null, 2);
                case 3:
                    return this.hesapBilgisiRizasiResponse = JSON.stringify(HesapBilgisiRizasi401, null, 2);
                case 4:
                    return this.hesapBilgisiRizasiResponse = JSON.stringify(HesapBilgisiRizasi403, null, 2);
                case 5:
                    return this.hesapBilgisiRizasiResponse = JSON.stringify(HesapBilgisiRizasi404, null, 2);
                case 6:
                    return this.hesapBilgisiRizasiResponse = JSON.stringify(HesapBilgisiRizasi500, null, 2);
                case 7:
                    return this.hesapBilgisiRizasiResponse = JSON.stringify(HesapBilgisiRizasi503, null, 2);
                case 8:
                    return this.hesapBilgisiRizasiResponse = JSON.stringify(HesapBilgisiRizasi504, null, 2);                    
            }
        },

        getHesaplar(){
            this.hesaplarResponseBody = JSON.stringify(HesaplarResponse200,null,2)
        },
        getBakiye(){
            this.bakiyeResponse = JSON.stringify(BakiyeResponse200,null,2)
        },
        getIslemler(){
            this.islemlerResponse = JSON.stringify(IslemlerResponse200,null,2);
        },

        tabsChanged: function (e) {
            
            this.selectedIndex = e.addedItems[0].ID - 1;
            if (e.addedItems[0].ID == 9) {
                const spec = require('../public/hbh-api-s1.1.json');
                SwaggerUI({
                    spec: spec,
                    dom_id: '#swagger-ui-hbh',
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
  
  

 