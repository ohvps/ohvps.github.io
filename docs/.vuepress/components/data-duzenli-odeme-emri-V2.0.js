export const mainTabs = [{
    ID: 1,
    Name: 'Düzenli Ödeme Emri Rızası',
   
}, 
{
    ID: 2,
    Name: "GKD - Kimlik Doğrulama",
   
}, 
{
    ID: 3,
    Name: 'GKD - Rıza Onayı',
   
  
}, 
{
    ID: 4,
    Name: 'GKD - Erişim Belirteci',
   
},
{
    ID: 5,
    Name: 'Düzenli Ödeme Emri',
  
},
{
    ID: 6,
    Name: 'Yenileme Belirteci',
  
},
{
    ID: 7,
    Name: 'Düzenli Ödeme Emri Sorgula',
   
},
{
  ID: 8,
  Name: 'Ödeme Planı Sorgula',
 
},

];
export const responseTabsDuzenliOdemeEmriRizasi = [{
  ID: 1,
  Name: '201',
  Color: 'black'
}, {
  ID: 2,
  Name: "400",
  Color: 'red'
},  {
  ID: 3,
  Name: '401',
  Color: 'red'
}, {
  ID: 4,
  Name: '403',
  Color: 'red'
},
{
  ID: 5,
  Name: '404',
  Color: 'red'
},
{
  ID: 6,
  Name: '500',
  Color: 'red'
},
{
  ID: 7,
  Name: '503',
  Color: 'red'
},
{
  ID: 8,
  Name: '504',
  Color: 'red'
}
];
export const erisimBelirteciResponseTabs = [{
    ID: 1,
    Name: '200',
    Color: 'black'
}, {
    ID: 2,
    Name: "400",
    Color: 'red'
}, {
    ID: 3,
    Name: '401',
    Color: 'red'
}, {
    ID: 4,
    Name: '403',
    Color: 'red'
}, {
    ID: 5,
    Name: '404',
    Color: 'red'
}, {
  ID: 6,
  Name: '500',
  Color: 'red'
}, {
  ID: 7,
  Name: '503',
  Color: 'red'
}, {
  ID: 8,
  Name: '504',
  Color: 'red'
}
];
export const responseTabsDuzenliOdemeEmri = [{
  ID: 1,
  Name: '201',
  Color: 'black'
}, {
  ID: 2,
  Name: "400",
  Color: 'red'
},  {
  ID: 3,
  Name: '401',
  Color: 'red'
}, {
  ID: 4,
  Name: '403',
  Color: 'red'
},
{
  ID: 5,
  Name: '404',
  Color: 'red'
},
{
  ID: 6,
  Name: '500',
  Color: 'red'
},
{
  ID: 7,
  Name: '503',
  Color: 'red'
},
{
  ID: 8,
  Name: '504',
  Color: 'red'
}
];
export const responseTabsDuzenliOdemeEmriSorgulama = [{
  ID: 1,
  Name: '200',
  Color: 'black'
}, {
  ID: 2,
  Name: "400",
  Color: 'red'
},  {
  ID: 3,
  Name: '401',
  Color: 'red'
}, {
  ID: 4,
  Name: '403',
  Color: 'red'
},
{
  ID: 5,
  Name: '404',
  Color: 'red'
},
{
  ID: 6,
  Name: '429',
  Color: 'red'
},
{
  ID: 7,
  Name: '500',
  Color: 'red'
},
{
  ID: 8,
  Name: '503',
  Color: 'red'
},
{
  ID: 9,
  Name: '504',
  Color: 'red'
}
];
export const responseTabsOdemePlaniSorgulama = [{
  ID: 1,
  Name: '201',
  Color: 'black'
}, {
  ID: 2,
  Name: "400",
  Color: 'red'
},  {
  ID: 3,
  Name: '401',
  Color: 'red'
}, {
  ID: 4,
  Name: '403',
  Color: 'red'
},
{
  ID: 5,
  Name: '404',
  Color: 'red'
},
{
  ID: 6,
  Name: '500',
  Color: 'red'
},
{
  ID: 7,
  Name: '503',
  Color: 'red'
},
{
  ID: 8,
  Name: '504',
  Color: 'red'
}
];

export const duzenliOdemeEmriRizaHeader = [
  {
      ID: 1,
      Key: 'X-TPP-Code',
      Value: '8000'
  },
  {
      ID: 2,
      Key: 'X-ASPSP-Code',
      Value: '8000'
  },
  {
      ID: 3,
      Key: 'X-Request-ID',
      Value: 'aec10909-2ff9-4d5b-9829-fe3a4c......(Her istekte farklılaşmalı)'
  },
  {
      ID: 4,
      Key: 'X-Group-ID',
      Value: 'ee396d39-5fdf-45ac-80e0-fe3a4ced6267'
  },
  {
      ID: 5,
      Key: 'X-JWS-Signature',
      Value: 'eyJhbGciOiJSUzI*******************wczovL2FwaS5ia20uY29tLnRyIiwi'
  },
  {
      ID: 6,
      Key: 'PSU-Fraud-Check',
      Value: 'eyJ0eXAiOiJKV1QiLC**********************x5RmxhZyI6IjAiLCJMYXN0UGF'
  }, 
  {
      ID: 7,
      Key: 'PSU-Initiated',
      Value: 'E'
  },    
  {
      ID: 8,
      Key: 'Authorization',
      Value: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiA******************3FkY2FxUElQMWlHdXl'
  },
];
export const duzenliOdemeEmriRizaResponseHeader = [
  {
      ID: 1,
      Key: 'X-TPP-Code',
      Value: '8000'
  },
  {
      ID: 2,
      Key: 'X-ASPSP-Code',
      Value: '8000'
  },
  {
    ID: 3,
    Key:  'X-Request-ID',
    Value: 'aec10909-2ff9-4d5b-9829-fe3a4c......(Her istekte farklılaşmalı)'
  },
  {
    ID: 4,
    Key:  'X-Group-ID',
    Value: 'ee396d39-5fdf-45ac-80e0-fe3a4ced6267'
  },
  {
      ID: 5,
      Key: 'content-type',
      Value: 'application/json'
  },
  {
      ID: 6,
      Key: 'X-JWS-Signature',
      Value: 'eyJhbGciOiJSUzI1NiJ9*********************wIjoxNzAwNjQ5ODI1LCJpYX'
  },

];
export const requestHeadersAfterToken = [
  {
      ID: 1,
      Key: 'X-TPP-Code',
      Value: '8000'
  },
  {
      ID: 2,
      Key: 'X-ASPSP-Code',
      Value: '8000'
  },
  {
    ID: 3,
    Key: 'X-Access-Token',
    Value: 'eyJh1123344566UzU***************a20uY29tLnRyIiw'
},
  {
    ID: 4,
    Key:  'X-Request-ID',
    Value: 'aec10909-2ff9-4d5b-9829-fe3a4c......(Her istekte farklılaşmalı)'
  },
  {
    ID: 5,
    Key:  'X-Group-ID',
    Value: 'ee396d39-5fdf-45ac-80e0-fe3a4ced6267'
  },
  {
      ID: 6,
      Key: 'content-type',
      Value: 'application/json'
  },
  {
      ID: 7,
      Key: 'X-JWS-Signature',
      Value: 'eyJhbGciOi*******************RMRgLdkHQ4L1Fg4NnNZ4oEQJA_bLqL_I2pax2phc_47KVjK4udWg'
  },

];
export const duzenliOdemeEmriErisimBelirteciHeader = [
  {
      ID: 9,
      Key: 'X-Access-Token',
      Value: 'eyJh1123344**********ovL2FwaS5ia20uY29tLnRyIiw'
  },
  {
      ID: 3,
      Key: 'X-TPP-Code',
      Value: '8000'
  },
  {
      ID: 2,
      Key: 'X-ASPSP-Code',
      Value: '8000'
  },
  {
      ID: 8,
      Key: 'PSU-Fraud-Check',
      Value: 'eyJ0e123456789CJhbGciOiJS*****************iLCJMYXN0UGFzc3dvc'
  },
  {
      ID: 4,
      Key: 'X-JWS-Signature',
      Value: 'eyJhbGciO123**********L2FwaS5ia20uY29tLnR'
  },
  {
      ID: 6,
      Key: 'PSU-Initiated',
      Value: 'E'
  },
  {
      ID: 1,
      Key: 'X-Request-ID',
      Value: 'aec70909-2ff9-4d5b-9829-e6e7de88caa1'
  },
  {
      ID: 7,
      Key: 'X-Group-ID',
      Value: 'ee396d39-5fdf-45ac-80e0-fe3a4ced6267'
  },
  
  {
      ID: 8,
      Key: 'Authorization',
      Value: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiA******************3FkY2FxUElQMWlHdXl'
  },
];
export const DuzenliOdemeEmriRızasiRequest={
  "katilimciBlg": {
      "hhsKod": "8000",
      "yosKod": "8000"
  },
  "gkd": {
      "yetYntm": "Y",
      "yonAdr": "https://tripsit.bkm.com.tr/boss/ab/yos-simulator-ui-v20/8000?drmKod=280764e0-6351-4359-847a-72b5c11d5118"
  },
  "odmBsltm": {
      "kmlk": {
        "kmlkVrs": "33333333333",
        "kmlkTur": "K",
        "ohkTur": "B"
      },
      "gon": {
        "unv": "İsim Soyisim",
        "hspNo": "TR1000010XP9UDWM4Z6LVJKS45"
    },
      "alc": {
          "hspNo": "TR320010009999901234567890",
          "unv": "İsim Soyisim"
      },
      "odmAyr": {
          "odmAcklm": "E-Ticaret odemesi",
          "odmAmc": "04",
          "odmKynk": "O",
          "refBlg": "Y-2701852-1111"
      }
  },
}
export const DuzenliOdemeEmriRizasi201 = {
  "rzBlg": {
      "rizaNo": "180b170fcd1f44b6b4ae71bd03030958",
      "olusZmn": "2025-05-06T11:47:19+03:00",
      "gnclZmn": "2025-05-06T11:47:19+03:00",
      "rizaDrm": "B"
  },
  "katilimciBlg": {
      "hhsKod": "8000",
      "yosKod": "8000"
  },
  "gkd": {
      "yetYntm": "Y",
      "yonAdr": "https://tripsit.bkm.com.tr/boss/ab/yos-simulator-ui-v20/8000?drmKod=280764e0-6351-4359-847a-72b5c11d5118",
      "yetTmmZmn": "2025-05-06T11:52:19+03:00",
      "hhsYonAdr": "https://tripsit.bkm.com.tr/boss/ab/hhs-simulator-ui-v20/8000/duzenli-odeme-emri-rizasi/180b170fcd1f44b6b4ae71bd03030958/goruntule"
    },
  "odmBsltm": {
      "kmlk": {
          "kmlkTur": "K",
          "kmlkVrs": "33333333333",
          "ohkTur": "B"
      },
      "gon": {
          "unv": "İsim Soyisim",
          "hspNo": "TR1000010XP9UDWM4Z6LVJKS45"
      },
      "alc": {
          "unv": "İsim Soyisim",
          "hspNo": "TR320010009999901234567890"
      },
      "odmAyr": {
          "odmKynk": "O",
          "odmAmc": "04",
          "refBlg": "Y-2701852-1111",
          "odmAcklm": "E-Ticaret odemesi"
      }
  },  
}
export const DuzenliOdemeEmriRizasi400 = {
  "id": "7f115b9c-d7c2-4a2a-bc45-5a9891c79072",
  "path": "/ohvps/obh/s2.0/duzenli-odeme-emri-rizasi",
  "timestamp": "2025-05-06T11:47:19+03:00",
  "httpCode": 400,
  "httpMessage": "Bad Request",
  "moreInformation": "Validation error",
  "moreInformationTr": "Şema kontrolleri başarısız",
  "fieldErrors": [
      {
          "objectName": "odemeEmriRizasiIstegi",
          "field": "odmBsltm.alc.unv",
          "messageTr": "boyut '3' ile '140' arasında olmalı",
          "message": "size must be between 3 and 140",
          "code": "TR.OHVPS.Field.Invalid"
      },
      {
          "objectName": "odemeEmriRizasiIstegi",
          "field": "odmBsltm.islTtr.ttr",
          "messageTr": "boş değer olamaz",
          "message": "must not be null",
          "code": "TR.OHVPS.Field.Missing"
      }
  ],
  "errorCode": "TR.OHVPS.Resource.InvalidFormat"
}
export const DuzenliOdemeEmriRizasi401 = {
  "id": "4dc29205-de28-4a66-8da8-26152258b3a1",
  "path": "/ohvps/obh/s2.0/duzenli-odeme-emri-rizasi",
  "timestamp": "2025-05-06T11:47:19+03:00",
  "httpCode": 401,
  "httpMessage": "Unauthorized",
  "moreInformation": "Unauthorized",
  "moreInformationTr": "İzin verilmedi",
  "errorCode": "TR.OHVPS.Connection.InvalidToken"
}
export const DuzenliOdemeEmriRizasi403 = {
  "id": "38d9d82a-aa98-4b13-8e49-4118ebc85b74",
  "path": "/ohvps/obh/s2.0/duzenli-odeme-emri-rizasi",
  "timestamp": "2025-05-06T11:47:19+03:00",
  "httpCode": 403,
  "httpMessage": "Forbidden",
  "moreInformation": "Signature could not be verified",
  "moreInformationTr": "Imza Doğrulanamadı.",
  "errorCode": "TR.OHVPS.Resource.MissingSignature"
}
export const DuzenliOdemeEmriRizasi404 = {
  "id": "udYRPEWYeZJt_IW98eiWDUmUpg1HPWvtSZ3B",
  "path": "/ohvps/obh/s2.0/duzenli-odeme-emri-rizasi",
  "timestamp": "2025-05-06T11:47:19+03:00",
  "httpCode": 404,
  "httpMessage": "Not Found",
  "moreInformation": "Customer not found",
  "moreInformationTr": "Kimlik bilgisine ait geçerli müşteri bulunamadı.",
  "errorCode": "TR.OHVPS.Resource.NotFound"
}
export const DuzenliOdemeEmriRizasi500 = {
  "id": "965c6beb-4893-477d-8b63-576cbds852e3",
  "path": "/ohvps/obh/s2.0/duzenli-odeme-emri-rizasi",
  "timestamp": "2025-05-06T11:47:19+03:00",
  "httpCode": 500,
  "httpMessage": "Internal Server Error",
  "moreInformation": "Unexpected condition was encountered",
  "moreInformationTr": "Beklenmedik bir durumla karşılaşıldı.",
  "errorCode": "TR.OHVPS.Server.InternalError"
}
export const DuzenliOdemeEmriRizasi503 = {
  "id": "be3ecce0-aeca-4558-b5e4-67e44a9810e7",
  "path": "/ohvps/obh/s2.0/duzenli-odeme-emri-rizasi",
  "timestamp": "2025-05-06T11:47:19+03:00",
  "httpCode": 503,
  "httpMessage": "HHS hizmet veremiyor",
  "moreInformationTr": "HHS hizmet veremiyor",
  "moreInformation":  "HHS is currently unavailable",
  "errorCode": "TR.OHVPS.Server.ServiceUnavailable"
}
export const DuzenliOdemeEmriRizasi504 = {
  "id": "be3ecce0-aeca-4558-b5e4-67e44a9810e7",
  "path": "/ohvps/obh/s2.0/duzenli-odeme-emri-rizasi",
  "timestamp": "2025-05-06T11:47:19+03:00",
  "httpCode": 504,
  "httpMessage": "Gateway Timeout",
  "moreInformationTr": "Servis Cevap Bekleme Zaman Aşımı",
  "moreInformation": "Gateway Timeout Exception",
  "errorCode": "TR.OHVPS.Server.ServiceUnavailable"
}
export const ErisimBelirteciRequest ={
    "rizaNo": "180b170fcd1f44b6b4ae71bd03030958",
    "yetKod": "a033aa200cec41deb14a27633d114462",
    "yetTip": "yet_kod",
    "rizaTip": "D"
}
export const ErisimBelirteciResponse200 =	{
  "erisimBelirteci": "eyJhbGciO*************************iOiJodHRwczovL2FwaS5ia20u",
  "gecerlilikSuresi": 300,
  "yenilemeBelirteci": "eyJhbGciOi***************2FwaS5ia20uY29tLnRyIiwi",
  "yenilemeBelirteciGecerlilikSuresi": 11098122
}
export const ErisimBelirteciResponse400 ={
  "id": "3f5f1a05-48e3-4475-8ce2-67d778280c19",
  "path": "/ohvps/gkd/s2.0/erisim-belirteci",
  "timestamp": "2025-05-06T11:47:19+03:00",
  "httpCode": "400",
  "httpMessage": "Bad Request",
  "moreInformationTr": "Riza durumunuz iptal/sonlandırıldı statüsündedir.",
  "moreInformation": "Consent is in cancelled status",
  "errorCode": "TR.OHVPS.Resource.ConsentRevoked"
}
export const ErisimBelirteciResponse401 ={
  "id": "4dc29205-de28-4a66-8da8-26152258b3a1",
  "path": "/ohvps/gkd/s2.0/erisim-belirteci",
  "timestamp": "2025-05-06T11:47:19+03:00",
  "httpCode": 401,
  "httpMessage": "Unauthorized",
  "moreInformation": "Unauthorized",
  "moreInformationTr": "İzin verilmedi",
  "errorCode": "TR.OHVPS.Connection.InvalidToken"
 }
 export const ErisimBelirteciResponse403 = {
  "id": "38d9d82a-aa98-4b13-8e49-4118ebc85b74",
  "path": "/ohvps/gkd/s2.0/erisim-belirteci",
  "timestamp": "2025-05-06T11:47:19+03:00",
  "httpCode": 403,
  "httpMessage": "Forbidden",
  "moreInformation": "PSU-Fraud-Check expired.",
  "moreInformationTr": "YOS ten gelen istekteki PSU-Fraud-Check tarihi gecmistir.",
  "errorCode": "TR.OHVPS.Resource.InvalidSignature"
}
export const ErisimBelirteciResponse404 ={
  "id": "udYRPEWYeZJt_IW98eiWDUmUpg1HPWvtSZ3B",
  "path": "/ohvps/obh/s2.0/erisim-belirteci",
  "timestamp": "2025-05-06T11:47:19+03:00",
  "httpCode": 404,
  "httpMessage": "Resource Not Found",
  "moreInformation": "Rıza Numarası Geçerli Değil",
  "moreInformationTr": "Rıza Numarası Geçerli Değil",
  "errorCode": "TR.OHVPS.Resource.NotFound"
}
export const ErisimBelirteciResponse500 = {
  "id": "965c6beb-4893-477d-8b63-576cbds852e3",
  "path": "/ohvps/obh/s2.0/erisim-belirteci",
  "timestamp": "2025-05-06T11:47:19+03:00",
  "httpCode": 500,
  "httpMessage": "Internal Server Error",
  "moreInformation": "Unexpected condition was encountered",
  "moreInformationTr": "Beklenmedik bir durumla karşılaşıldı.",
  "errorCode": "TR.OHVPS.Server.InternalError"
}
export const ErisimBelirteciResponse503 ={
  "id": "be3ecce0-aeca-4558-b5e4-67e44a9810e7",
  "path": "/ohvps/obh/s2.0/erisim-belirteci",
  "timestamp": "2025-05-06T11:47:19+03:00",
  "httpCode": 503,
  "httpMessage": "HHS hizmet veremiyor",
  "moreInformationTr": "HHS hizmet veremiyor",
  "moreInformation": "HHS is currently unavailable",
  "errorCode": "TR.OHVPS.Server.ServiceUnavailable"
}
export const ErisimBelirteciResponse504 ={
  "id": "abd506a6-0608-4db5-ad5b-723cepde545f",
  "path": "/ohvps/gkd/s2.0/erisim-belirteci",
  "timestamp": "2025-05-06T11:47:19+03:00",
  "httpCode": 504,
  "httpMessage": "Gateway Timeout",
  "moreInformation": "Gateway Timeout Exception",
  "moreInformationTr": "Servis Cevap Bekleme Zaman Aşımı",
  "errorCode": "TR.OHVPS.Server.InternalError"
}
export const duzenliOdemeEmriYenilemeBelirteci ={
    "rizaNo": "1178d476afc24468a7411019ea411053",
    "yetTip": "yenileme_belirteci",
    "rizaTip": "D",
    "yenilemeBelirteci": "eyJhbGciOi***************2FwaS5ia20uY29tLnRyIiwi"
}
export const DuzenliOdemeEmriRequestBody ={
  "rzBlg": {
    "rizaNo": "180b170fcd1f44b6b4ae71bd03030958",
    "olusZmn": "2025-05-06T11:47:19+03:00",
    "gnclZmn": "2025-05-06T11:47:58+03:00",
    "rizaDrm": "K"
  },
  "katilimciBlg": {
    "hhsKod": "8000",
    "yosKod": "8000"
  },
  "gkd": {
    "yetYntm": "Y",
    "yonAdr":  "https://tripsit.bkm.com.tr/boss/ab/yos-simulator-ui-v20/8000?drmKod=280764e0-6351-4359-847a-72b5c11d5118",
    "yetTmmZmn": "2025-05-06T11:52:19+03:00",
    "hhsYonAdr": "https://tripsit.bkm.com.tr/boss/ab/hhs-simulator-ui-v20/8000/duzenli-odeme-emri-rizasi/180b170fcd1f44b6b4ae71bd03030958/goruntule"
  },
  "odmBsltm": {
    "kmlk": {
      "kmlkTur": "K",
      "kmlkVrs": "33333333333",
      "ohkTur": "B"
    },
    "gon": {
      "unv": "İsim Soyisim",
      "hspNo": "TR1000010XP9UDWM4Z6LVJKS45"
    },
    "alc": {
      "unv": "İsim Soyisin",
      "hspNo": "TR320010009999901234567890"
    },
    "odmAyr": {
      "odmKynk": "O",
      "odmAmc": "04",
      "refBlg": "Y-2701852-1111",
      "odmAcklm": "Ödeme Açıklamasıdır"
    }
  },
}
export const DuzenliOdemeEmriResponse201 = {
  "rzBlg": {
    "rizaNo": "180b170fcd1f44b6b4ae71bd03030958",
    "olusZmn": "2025-05-06T11:47:19+03:00",
    "gnclZmn": "2025-05-06T11:48:24+03:00",
    "rizaDrm": "E"
  },
  "katilimciBlg": {
    "hhsKod": "8000",
    "yosKod": "8000"
  },
  "gkd": {
    "yetYntm": "Y",
    "yonAdr": "https://tripsit.bkm.com.tr/boss/ab/yos-simulator-ui-v20/8000?drmKod=280764e0-6351-4359-847a-72b5c11d5118",
    "yetTmmZmn": "2025-05-06T11:52:19+03:00",
    "hhsYonAdr": "https://tripsit.bkm.com.tr/boss/ab/hhs-simulator-ui-v20/8000/duzenli-odeme-emri-rizasi/180b170fcd1f44b6b4ae71bd03030958/goruntule"
  },
  "odmBsltm": {
    "kmlk": {
      "kmlkTur": "K",
      "kmlkVrs": "33333333333",
      "ohkTur": "B"
    },
    "gon": {
      "unv": "İsim Soyisim",
      "hspNo": "TR1000010XP9UDWM4Z6LVJKS45"
    },
    "alc": {
      "unv": "İsim Soyisim",
      "hspNo": "TR320010009999901234567890"
    },
    "odmAyr": {
      "odmKynk": "O",
      "odmAmc": "04",
      "refBlg": "Y-2701852-1111",
      "odmAcklm": "E-Ticaret odemesi"
    }
  },
  "tlmtBlg": {
      "tlmtNo": "cccac0d182874b45a5aad11cc7b8cdd7",
      "tlmtOlsZmn": "2025-05-06T11:47:48+03:00",
      "tlmtTtr": "0.09",
      "prBrm": "TRY",
      "ilkOdmGn": "2025-05-07",
      "sonOdmGn": "2025-09-07",
      "odmSayi": 5,
      "odmPryt": "A"
  }
}
export const DuzenliOdemeEmriResponse400 =
{
  "id": "d1f8d44c-1470-fd54-9ea9-c5c0bea5ac02",
  "path": "/ohvps/obh/s2.0/duzenli-odeme-emri",
  "timestamp": "2025-05-06T11:47:19+03:00",
  "httpCode": 400,
  "httpMessage": "Bad Request",
  "moreInformation": "Your account balance is insufficient. Please check the balance on and try again.",
  "moreInformationTr": "Bakiyeniz müsait değil. Lütfen kontrol edip tekrar deneyiniz.",
  "errorCode": "TR.OHVPS.Business.InvalidContent"
}
export const DuzenliOdemeEmriResponse401 =
{
  "id": "d1f8d44c-1470-fd54-9ea9-c5csdea5ac02",
  "path": "/ohvps/obh/s2.0/duzenli-odeme-emri",
  "timestamp": "2025-05-06T11:47:19+03:00",
  "httpCode": 401,
  "httpMessage": "Unauthorized",
  "moreInformation": "Geçersiz Token",
  "moreInformationTr": "Invalid Token",
  "errorCode": "TR.OHVPS.Connection.InvalidToken"
}
export const DuzenliOdemeEmriResponse403 =
{
  "id": "a7e51238-79d1-4133-9ef5-4311a9625a1c",
  "path": "/ohvps/obh/s2.0/duzenli-odeme-emri",
  "timestamp": "2025-05-06T11:47:19+03:00",
  "httpCode": 403,
  "httpMessage": "Forbidden",
  "moreInformation": "PSU-Fraud-Check header not found in the TPP request",
  "moreInformationTr": "YOS ten gelen istekte PSU-Fraud-Check basligi bulunamadi.",
  "errorCode": "TR.OHVPS.Resource.MissingSignature"
}
export const DuzenliOdemeEmriResponse404 =
{
  "id": "udYRPEWYeZJt_IW98eilpDUmUpg1HPWvtSZ3B",
  "path": "/ohvps/obh/s2.0/duzenli-odeme-emri",
  "timestamp": "2025-05-06T11:47:19+03:00",
  "httpCode": 404,
  "httpMessage": "Not Found",
  "moreInformation": "Consent Number not found",
  "moreInformationTr": "Rıza numarası bulunamadı.",
  "errorCode": "TR.OHVPS.Resource.NotFound"
}
export const DuzenliOdemeEmriResponse500 =
{
  "id": "qwe16216-af41-ewb4-e5c6-5489b128e453",
  "path": "/ohvps/obh/s2.0/duzenli-odeme-emri",
  "timestamp": "2025-05-06T11:47:19+03:00",
  "httpCode": 500,
  "httpMessage": "Internal Server Error",
  "moreInformation": "Unexpected condition was encountered",
  "moreInformationTr": "Beklenmedik bir durumla karşılaşıldı.",
  "errorCode": "TR.OHVPS.Server.InternalError"
}
export const DuzenliOdemeEmriResponse503 =
{
  "id": "1234567-125e-4556-be26-994df1dsa8e1",
  "path": "/ohvps/obh/s2.0/duzenli-odeme-emri",
  "timestamp": "2025-05-06T11:47:19+03:00",
  "httpCode": 503,
  "httpMessage": "Service Unavailable",
  "moreInformation": "Service Unavailable Error",
  "moreInformationTr": "Servis Hizmet Dışı Hatası",
  "errorCode": "TR.OHVPS.Server.ServiceUnavailable"
}
export const DuzenliOdemeEmriResponse504={
  "id": "abd506a6-0608-4db5-ad5b-723cepde545f",
  "path": "/ohvps/gkd/s2.0/duzenli-odeme-emri",
  "timestamp": "2025-05-06T11:47:19+03:00",
  "httpCode": 504,
  "httpMessage": "Gateway Timeout",
  "moreInformation": "Gateway Timeout Exception",
  "moreInformationTr": "Servis Cevap Bekleme Zaman Aşımı",
  "errorCode": "TR.OHVPS.Server.InternalError"
}
export const YenilemeBelirteciResponse401 =
{
  "id": "d1f8d44c-1470-fd54-9ea9-c5csdea5ac02",
  "path": "/ohvps/obh/s2.0/duzenli-erisim-belirteci",
  "timestamp": "2025-05-06T11:47:19+03:00",
  "httpCode": 401,
  "httpMessage": "Unauthorized",
  "moreInformation": "Geçersiz Token",
  "moreInformationTr": "Invalid Token",
  "errorCode": "TR.OHVPS.Connection.InvalidToken"
}
export const DuzenliOdemeEmriSorgulamaResponse400 =
{
  "id": "d1f8d44c-1470-fd54-9ea9-c5c0bea5ac02",
  "path": "/ohvps/obh/s2.0/duzenli-odeme-emri/cccac0d182874b45a5aad11cc7b8cdd7",
  "timestamp": "2025-05-06T11:47:19+03:00",
  "httpCode": 400,
  "httpMessage": "Bad Request",
  "moreInformation": "Please check that payment information entered is correct.",
  "moreInformationTr": "Lütfen girilen ödeme bilgilerin doğruluğunu kontrol ediniz",
  "errorCode": "TR.OHVPS.Business.InvalidContent"
}
export const DuzenliOdemeEmriSorgulamaResponse401 =
{
  "id": "d1f8d44c-1470-fd54-9ea9-c5csdea5ac02",
  "path": "/ohvps/obh/s2.0/duzenli-odeme-emri/cccac0d182874b45a5aad11cc7b8cdd7",
  "timestamp": "2025-05-06T11:47:19+03:00",
  "httpCode": 401,
  "httpMessage": "Unauthorized",
  "moreInformation": "Geçersiz Token",
  "moreInformationTr": "Invalid Token",
  "errorCode": "TR.OHVPS.Connection.InvalidToken"
}
export const DuzenliOdemeEmriSorgulamaResponse403 =
{
  "id": "a7e51238-79d1-4133-9ef5-4311a9625a1c",
  "path": "/ohvps/obh/s2.0/duzenli-odeme-emri/cccac0d182874b45a5aad11cc7b8cdd7",
  "timestamp": "2025-05-06T11:47:19+03:00",
  "httpCode": 403,
  "httpMessage": "Forbidden",
  "moreInformation": "X-JWS-Signature header not found in the TPP request",
  "moreInformationTr": "YOS ten gelen istekte X-JWS-Signature basligi bulunamadi.",
  "errorCode": "TR.OHVPS.Resource.MissingSignature"
}
export const DuzenliOdemeEmriSorgulamaResponse404={
  "id": "udYRPEWYeZJt_IW98eilpDUmUpg1HPWvtSZ3B",
  "path": "/ohvps/obh/s2.0/duzenli-odeme-emri/cccac0d182874b45a5aad11cc7b8cdd7",
  "timestamp": "2025-05-06T11:47:19+03:00",
  "httpCode": 404,
  "httpMessage": "Not Found",
  "moreInformation": "Payment number not found",
  "moreInformationTr": "Ödeme numarası bulunamadı.",
  "errorCode": "TR.OHVPS.Resource.NotFound"
}
export const DuzenliOdemeEmriSorgulamaResponse429={
  "id": "qwe16216-af41-ewb4-e5c6-5489b128e453",
  "path": "/ohvps/obh/s2.0/duzenli-odeme-emri/cccac0d182874b45a5aad11cc7b8cdd7",
  "timestamp": "2025-05-06T11:47:19+03:00",
  "httpCode": 429,
  "httpMessage": "Too Many Requests",
  "moreInformation": "The number of allowed requests has been exceeded.",
  "moreInformationTr": "İzin verilen istek sayısı aşıldı.",
  "errorCode": "TR.OHVPS.Connection.ExceededRate"
}
export const DuzenliOdemeEmriSorgulamaResponse500={
  "id": "1234567-125e-4556-be26-994df1dsa8e1",
  "path": "/ohvps/obh/s2.0/duzenli-odeme-emri/cccac0d182874b45a5aad11cc7b8cdd7",
  "timestamp": "2025-05-06T11:47:19+03:00",
  "httpCode": 500,
  "httpMessage": "Internal Server Error",
  "moreInformation": "Sorry, the transaction has failed. Please try again later.",
  "moreInformationTr": "Özür dileriz işleminizi gerçekleştiremiyoruz. Lütfen daha sonra tekrar deneyiniz.",
  "errorCode": "TR.OHVPS.Server.ServiceUnavailable"
}
export const DuzenliOdemeEmriSorgulamaResponse503={
  "id": "abd506a6-0608-4db5-ad5b-723cepde545f",
  "path": "/ohvps/obh/s2.0/duzenli-odeme-emri/cccac0d182874b45a5aad11cc7b8cdd7",
  "timestamp": "2025-05-06T11:47:19+03:00",
  "httpCode": 503,
  "httpMessage": "Service Unavailable",
  "moreInformation": "Service Unavailable Error",
  "moreInformationTr": "Servis Hizmet Dışı Hatası",
  "errorCode": "TR.OHVPS.Server.ServiceUnavailable"
}
export const DuzenliOdemeEmriSorgulamaResponse504={
  "id": "abd506a6-0608-4db5-ad5b-723cepde545f",
  "path": "/ohvps/obh/s2.0/duzenli-odeme-emri/cccac0d182874b45a5aad11cc7b8cdd7",
  "timestamp": "2025-05-06T11:47:19+03:00",
  "httpCode": 504,
  "httpMessage": "Gateway Timeout",
  "moreInformation": "Gateway Timeout Exception",
  "moreInformationTr": "Servis Cevap Bekleme Zaman Aşımı",
  "errorCode": "TR.OHVPS.Server.InternalError"
}
export const OdemePlaniSorgulamaResponse200 =	[
  {
    "odmSiraNo": "1",
    "odmTtr": "0.09",
    "prBrm": "TRY",
    "odmTlmtTrh": "2025-05-07",
    "odmDrm": "05"
  },
  {
    "odmSiraNo": "2",
    "odmTtr": "0.09",
    "prBrm": "TRY",
    "odmTlmtTrh": "2025-06-07",
    "odmDrm": "05"
  },
  {
    "odmSiraNo": "3",
    "odmTtr": "0.09",
    "prBrm": "TRY",
    "odmTlmtTrh": "2025-07-07",
    "odmDrm": "05"
  },
  {
    "odmSiraNo": "4",
    "odmTtr": "0.09",
    "prBrm": "TRY",
    "odmTlmtTrh": "2025-08-07",
    "odmDrm": "05"
  },
  {
    "odmSiraNo": "5",
    "odmTtr": "0.09",
    "prBrm": "TRY",
    "odmTlmtTrh": "2025-09-07",
    "odmDrm": "05"
  }
]

export const OdemePlaniSorgulamaResponse400 =
{
  "id": "d1f8d44c-1470-fd54-9ea9-c5c0bea5ac02",
  "path": "/ohvps/obh/s2.0/duzenli-odeme-emri/cccac0d182874b45a5aad11cc7b8cdd7/odeme-plani",
  "timestamp": "2025-05-06T11:47:19+03:00",
  "httpCode": 400,
  "httpMessage": "Bad Request",
  "moreInformation": "Please check that payment information entered is correct.",
  "moreInformationTr": "Lütfen girilen ödeme bilgilerin doğruluğunu kontrol ediniz",
  "errorCode": "TR.OHVPS.Business.InvalidContent"
}
export const OdemePlaniSorgulamaResponse401 =
{
  "id": "d1f8d44c-1470-fd54-9ea9-c5csdea5ac02",
  "path": "/ohvps/obh/s2.0/duzenli-odeme-emri/cccac0d182874b45a5aad11cc7b8cdd7/odeme-plani",
  "timestamp": "2025-05-06T11:47:19+03:00",
  "httpCode": 401,
  "httpMessage": "Unauthorized",
  "moreInformation": "Geçersiz Token",
  "moreInformationTr": "Invalid Token",
  "errorCode": "TR.OHVPS.Connection.InvalidToken"
}
export const OdemePlaniSorgulamaResponse403 =
{
  "id": "a7e51238-79d1-4133-9ef5-4311a9625a1c",
  "path": "/ohvps/obh/s2.0/duzenli-odeme-emri/cccac0d182874b45a5aad11cc7b8cdd7/odeme-plani",
  "timestamp": "2025-05-06T11:47:19+03:00",
  "httpCode": 403,
  "httpMessage": "Forbidden",
  "moreInformation": "X-JWS-Signature header not found in the TPP request",
  "moreInformationTr": "YOS ten gelen istekte X-JWS-Signature basligi bulunamadi.",
  "errorCode": "TR.OHVPS.Resource.MissingSignature"
}
export const OdemePlaniSorgulamaResponse404={
  "id": "udYRPEWYeZJt_IW98eilpDUmUpg1HPWvtSZ3B",
  "path": "/ohvps/obh/s2.0/duzenli-odeme-emri/cccac0d182874b45a5aad11cc7b8cdd7/odeme-plani",
  "timestamp": "2025-05-06T11:47:19+03:00",
  "httpCode": 404,
  "httpMessage": "Not Found",
  "moreInformation": "Payment number not found",
  "moreInformationTr": "Ödeme numarası bulunamadı.",
  "errorCode": "TR.OHVPS.Resource.NotFound"
}
export const OdemePlaniSorgulamaResponse429={
  "id": "qwe16216-af41-ewb4-e5c6-5489b128e453",
  "path": "/ohvps/obh/s2.0/duzenli-odeme-emri/cccac0d182874b45a5aad11cc7b8cdd7/odeme-plani",
  "timestamp": "2025-05-06T11:47:19+03:00",
  "httpCode": 429,
  "httpMessage": "Too Many Requests",
  "moreInformation": "The number of allowed requests has been exceeded.",
  "moreInformationTr": "İzin verilen istek sayısı aşıldı.",
  "errorCode": "TR.OHVPS.Connection.ExceededRate"
}
export const OdemePlaniSorgulamaResponse500={
  "id": "1234567-125e-4556-be26-994df1dsa8e1",
  "path": "/ohvps/obh/s2.0/duzenli-odeme-emri/cccac0d182874b45a5aad11cc7b8cdd7/odeme-plani",
  "timestamp": "2025-05-06T11:47:19+03:00",
  "httpCode": 500,
  "httpMessage": "Internal Server Error",
  "moreInformation": "Sorry, the transaction has failed. Please try again later.",
  "moreInformationTr": "Özür dileriz işleminizi gerçekleştiremiyoruz. Lütfen daha sonra tekrar deneyiniz.",
  "errorCode": "TR.OHVPS.Server.ServiceUnavailable"
}
export const OdemePlaniSorgulamaResponse503={
  "id": "abd506a6-0608-4db5-ad5b-723cepde545f",
  "path": "/ohvps/obh/s2.0/duzenli-odeme-emri/cccac0d182874b45a5aad11cc7b8cdd7/odeme-plani",
  "timestamp": "2025-05-06T11:47:19+03:00",
  "httpCode": 503,
  "httpMessage": "Service Unavailable",
  "moreInformation": "Service Unavailable Error",
  "moreInformationTr": "Servis Hizmet Dışı Hatası",
  "errorCode": "TR.OHVPS.Server.ServiceUnavailable"
}
export const OdemePlaniSorgulamaResponse504={
  "id": "abd506a6-0608-4db5-ad5b-723cepde545f",
  "path": "/ohvps/obh/s2.0/duzenli-odeme-emri/cccac0d182874b45a5aad11cc7b8cdd7/odeme-plani",
  "timestamp": "2025-05-06T11:47:19+03:00",
  "httpCode": 504,
  "httpMessage": "Gateway Timeout",
  "moreInformation": "Gateway Timeout Exception",
  "moreInformationTr": "Servis Cevap Bekleme Zaman Aşımı",
  "errorCode": "TR.OHVPS.Server.InternalError"
}
