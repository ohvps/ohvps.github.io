export const mainTabs = [{
    ID: 1,
    Name: 'İleri Tarihli Ödeme Emri Rızası',
   
}, {
    ID: 2,
    Name: "GKD - Kimlik Doğrulama",
   
}, {
    ID: 3,
    Name: 'GKD - Rıza Onayı',
   
  
}, {
    ID: 4,
    Name: 'GKD - Erişim Belirteci',
   
},

{
    ID: 5,
    Name: 'İleri Tarihli Ödeme Emri',
  
},
{
    ID: 6,
    Name: 'Yenileme Belirteci',
  
},
{
    ID: 7,
    Name: 'İleri Tarihli Ödeme Emri Sorgula',
   
  
}


];
export const responseTabsileriTarihliOdemeEmriRizasi = [{
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
export const responseTabsileriTarihliOdemeEmri = [{
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
export const responseTabsileriTarihliOdemeEmriSorgulama = [{
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
export const ileriTarihliOdemeEmriRizaHeader = [
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
      Value: 'eyJhbGciOiJSUzI1NiJ9**********MwIn0T19olrqy_ezfULZqk**********xIWq4wVS'
  },
  {
      ID: 6,
      Key: 'PSU-Fraud-Check',
      Value: 'eyJ0eXAiOiJKV1QiLC******************iJ9.eyJBbm9tYWx5Rmxabkaltrfv'
  }, 
  {
      ID: 7,
      Key: 'PSU-Initiated',
      Value: 'E'
  },    
  {
      ID: 8,
      Key: 'Authorization',
      Value: 'Bearer eyJhbGciOiJSUzI1NiIsInR5c****************************************************lHdXlGeDFackJZeE'
  },
];
export const ileriTarihliOdemeEmriRizaResponseHeader = [
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
      Value: 'eyJhbGciO123456789**********JodHRwczovL2FwaS5ia20uY29tLnRyIi'
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
    Value: 'eyJh1123344566UzUxMiJ9.eyJp****************************vL2FwaS5ia20uY29tLnRyIiwiZXhwIjoxNz'
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
      Value: 'eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczov2*************IiwiZXhwIjoxNzAwNjQ'
  },

];
export const ileriTarihliOdemeEmriErisimBelirteciHeader = [
  {
      ID: 9,
      Key: 'X-Access-Token',
      Value: 'eyJh1123344566UzUxMiJ9.eyJpc3MiOiJodHRwczovL2FwaS5********tLnRyIiwiZXhwIjoxNzAw********LCJpYXQiOjE3MDA5OTE1MDMsInJpem'
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
      Value: 'eyJ0e123456789CJhbGciOiJSUzI1NiJ9.eyJB***tYW***mxhZyI6IjAiLCJMYXN0UG*******mRDaGFuZ2VG*'
  },
  {
      ID: 4,
      Key: 'X-JWS-Signature',
      Value: 'eyJhbGciO123456789**********JodHRwczovL2FwaS5ia20uY29tLnRyIiwiZX**********NDQ2NzY2LCJpYXQiOjE2O**********sImJvZHkiOiIwNmQ5YzAxOD'
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
      Value: 'Bearer eyJhbGciOiJSUzI1NiIsInR5c****************************************************lHdXlGeDFackJZeE'
  },
];
export const ileriTarihliOdemeEmriRızasiRequest={
  "katilimciBlg": {
      "hhsKod": "8000",
      "yosKod": "8000"
  },
  "gkd": {
    "yetYntm": "Y",
    "yonAdr": "https://tripsit.bkm.com.tr/boss/ab/yos-simulator-ui-v20/8000?drmKod=df92e60f-5bfc-4bfd-91b1-52f3ca0e8211"
  },
  "odmBsltm": {
      "kmlk": {
        "kmlkVrs": "22222222222",
        "kmlkTur": "K",
        "ohkTur": "B"
      },
      "islTtr": {
          "prBrm": "TRY",
          "ttr": "1000.50"
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
          "odmAmc": "07",
          "odmKynk": "O",
          "refBlg": "Y-2701852-1111",
          "tlmtTrh": "2025-05-05"
      }
  },
}
export const ileriTarihliOdemeEmriRizasi201 = {
  "rzBlg": {
      "rizaNo": "061807e95cb146b58bb457849a8f2342",
      "olusZmn": "2025-05-05T10:59:51+03:00",
      "gnclZmn": "2025-05-05T10:59:51+03:00",
      "rizaDrm": "B"
  },
  "katilimciBlg": {
      "hhsKod": "8000",
      "yosKod": "8000"
  },
  "gkd": {
      "yetYntm": "Y",
      "yonAdr": "https://tripsit.bkm.com.tr/boss/ab/yos-simulator-ui-v20/8000?drmKod=df92e60f-5bfc-4bfd-91b1-52f3ca0e8211",
      "yetTmmZmn": "2025-05-05T11:04:51+03:00",
      "hhsYonAdr": "https://tripsit.bkm.com.tr/boss/ab/hhs-simulator-ui-v20/8000/ileri-tarihli-odeme-emri-rizasi/061807e95cb146b58bb457849a8f2342/goruntule"
  },
  "odmBsltm": {
      "kmlk": {
          "kmlkTur": "K",
          "kmlkVrs": "22222222222",
          "ohkTur": "B"
      },
      "islTtr": {
          "prBrm": "TRY",
          "ttr": "1000.50"
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
          "odmAmc": "07",
          "refBlg": "Y-2701852-1111",
          "odmAcklm": "E-Ticaret odemesi",
          "ohkMsj": "ÖHK Mesajı",
          "tlmtTrh": "2025-05-06"
      }
  },  
}
export const ileriTarihliOdemeEmriRizasi400 = {
  "id": "7f115b9c-d7c2-4a2a-bc45-5a9891c79072",
  "path": "/ohvps/obh/s2.0/ileri-tarihli-odeme-emri-rizasi",
  "timestamp": "2022-12-22T10:47:57+03:00",
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
export const ileriTarihliOdemeEmriRizasi401 = {
  "id": "4dc29205-de28-4a66-8da8-26152258b3a1",
  "path": "/ohvps/obh/s2.0/ileri-tarihli-odeme-emri-rizasi",
  "timestamp": "2023-11-27T16:14:07+03:00",
  "httpCode": 401,
  "httpMessage": "Unauthorized",
  "moreInformation": "Unauthorized",
  "moreInformationTr": "İzin verilmedi",
  "errorCode": "TR.OHVPS.Connection.InvalidToken"
}
export const ileriTarihliOdemeEmriRizasi403 = {
  "id": "38d9d82a-aa98-4b13-8e49-4118ebc85b74",
  "path": "/ohvps/obh/s2.0/ileri-tarihli-odeme-emri-rizasi",
  "timestamp": "2023-11-23T03:07:49+03:00",
  "httpCode": 403,
  "httpMessage": "Forbidden",
  "moreInformation": "Signature could not be verified",
  "moreInformationTr": "Imza Doğrulanamadı.",
  "errorCode": "TR.OHVPS.Resource.MissingSignature"
}
export const ileriTarihliOdemeEmriRizasi404 = {
  "id": "udYRPEWYeZJt_IW98eiWDUmUpg1HPWvtSZ3B",
  "path": "/ohvps/obh/s2.0/ileri-tarihli-odeme-emri-rizasi",
  "timestamp": "2023-11-23T16:37:36+03:00",
  "httpCode": 404,
  "httpMessage": "Not Found",
  "moreInformation": "Customer not found",
  "moreInformationTr": "Kimlik bilgisine ait geçerli müşteri bulunamadı.",
  "errorCode": "TR.OHVPS.Resource.NotFound"
}
export const ileriTarihliOdemeEmriRizasi500 = {
  "id": "965c6beb-4893-477d-8b63-576cbds852e3",
  "path": "/ohvps/obh/s2.0/ileri-tarihli-odeme-emri-rizasi",
  "timestamp": "2023-11-23T16:43:18+03:00",
  "httpCode": 500,
  "httpMessage": "Internal Server Error",
  "moreInformation": "Unexpected condition was encountered",
  "moreInformationTr": "Beklenmedik bir durumla karşılaşıldı.",
  "errorCode": "TR.OHVPS.Server.InternalError"
}
export const ileriTarihliOdemeEmriRizasi503 = {
  "id": "be3ecce0-aeca-4558-b5e4-67e44a9810e7",
  "path": "/ohvps/obh/s2.0/ileri-tarihli-odeme-emri-rizasi",
  "timestamp": "2023-11-23T00:31:42+03:00",
  "httpCode": 503,
  "httpMessage": "HHS hizmet veremiyor",
  "moreInformationTr": "HHS hizmet veremiyor",
  "moreInformation":  "HHS is currently unavailable",
  "errorCode": "TR.OHVPS.Server.ServiceUnavailable"
}
export const ileriTarihliOdemeEmriRizasi504 = {
  "id": "be3ecce0-aeca-4558-b5e4-67e44a9810e7",
  "path": "/ohvps/obh/s2.0/ileri-tarihli-odeme-emri-rizasi",
  "timestamp": "2023-11-23T00:31:42+03:00",
  "httpCode": 504,
  "httpMessage": "Gateway Timeout",
  "moreInformationTr": "Servis Cevap Bekleme Zaman Aşımı",
  "moreInformation": "Gateway Timeout Exception",
  "errorCode": "TR.OHVPS.Server.ServiceUnavailable"
}
export const ErisimBelirteciRequest ={
    "rizaNo": "1178d476afc24468a7411019ea411053",
    "yetKod": "a238307640ba4b8ebbdc4835ca9a021c",
    "yetTip": "yet_kod",
    "rizaTip": "I"
}
export const ErisimBelirteciResponse200 =	{
  "erisimBelirteci": "eyJhbGciOiJIUz********************dHRwczovL2FwaS5ia20uY29tL",
  "gecerlilikSuresi": 300,
  "yenilemeBelirteci": "eyJhbGciOiJIUzU***************RwczovL2FwaS5ia2",
  "yenilemeBelirteciGecerlilikSuresi": 1296000
};
export const ErisimBelirteciResponse400 ={
  "id": "3f5f1a05-48e3-4475-8ce2-67d778280c19",
  "path": "/ohvps/gkd/s2.0/erisim-belirteci",
  "timestamp": "2023-11-02T13:02:51+03:00",
  "httpCode": "400",
  "httpMessage": "Bad Request",
  "moreInformationTr": "Riza durumunuz iptal/sonlandırıldı statüsündedir.",
  "moreInformation": "Consent is in cancelled status",
  "errorCode": "TR.OHVPS.Resource.ConsentRevoked"
}
export const ErisimBelirteciResponse401 ={
  "id": "4dc29205-de28-4a66-8da8-26152258b3a1",
  "path": "/ohvps/gkd/s2.0/erisim-belirteci",
  "timestamp": "2023-11-27T16:14:07+03:00",
  "httpCode": 401,
  "httpMessage": "Unauthorized",
  "moreInformation": "Unauthorized",
  "moreInformationTr": "İzin verilmedi",
  "errorCode": "TR.OHVPS.Connection.InvalidToken"
 }
 export const ErisimBelirteciResponse403 = {
  "id": "38d9d82a-aa98-4b13-8e49-4118ebc85b74",
  "path": "/ohvps/gkd/s2.0/erisim-belirteci",
  "timestamp": "2023-11-23T03:07:49+03:00",
  "httpCode": 403,
  "httpMessage": "Forbidden",
  "moreInformation": "PSU-Fraud-Check expired.",
  "moreInformationTr": "YOS ten gelen istekteki PSU-Fraud-Check tarihi gecmistir.",
  "errorCode": "TR.OHVPS.Resource.InvalidSignature"
}
export const ErisimBelirteciResponse404 ={
  "id": "udYRPEWYeZJt_IW98eiWDUmUpg1HPWvtSZ3B",
  "path": "/ohvps/obh/s2.0/erisim-belirteci",
  "timestamp": "2023-11-23T16:37:36+03:00",
  "httpCode": 404,
  "httpMessage": "Resource Not Found",
  "moreInformation": "Rıza Numarası Geçerli Değil",
  "moreInformationTr": "Rıza Numarası Geçerli Değil",
  "errorCode": "TR.OHVPS.Resource.NotFound"
}
export const ErisimBelirteciResponse500 = {
  "id": "965c6beb-4893-477d-8b63-576cbds852e3",
  "path": "/ohvps/obh/s2.0/erisim-belirteci",
  "timestamp": "2023-11-23T16:43:18+03:00",
  "httpCode": 500,
  "httpMessage": "Internal Server Error",
  "moreInformation": "Unexpected condition was encountered",
  "moreInformationTr": "Beklenmedik bir durumla karşılaşıldı.",
  "errorCode": "TR.OHVPS.Server.InternalError"
}
export const ErisimBelirteciResponse503 ={
  "id": "be3ecce0-aeca-4558-b5e4-67e44a9810e7",
  "path": "/ohvps/obh/s2.0/erisim-belirteci",
  "timestamp": "2023-11-23T00:31:42+03:00",
  "httpCode": 503,
  "httpMessage": "HHS hizmet veremiyor",
  "moreInformationTr": "HHS hizmet veremiyor",
  "moreInformation": "HHS is currently unavailable",
  "errorCode": "TR.OHVPS.Server.ServiceUnavailable"
}
export const ErisimBelirteciResponse504 ={
  "id": "abd506a6-0608-4db5-ad5b-723cepde545f",
  "path": "/ohvps/gkd/s2.0/erisim-belirteci",
  "timestamp": "2023-11-23T15:46:19+03:00",
  "httpCode": 504,
  "httpMessage": "Gateway Timeout",
  "moreInformation": "Gateway Timeout Exception",
  "moreInformationTr": "Servis Cevap Bekleme Zaman Aşımı",
  "errorCode": "TR.OHVPS.Server.InternalError"
}
export const ileriTarihliOdemeEmriYenilemeBelirteci ={
    "rizaNo": "1178d476afc24468a7411019ea411053",
    "yetTip": "yenileme_belirteci",
    "rizaTip": "I",
    "yenilemeBelirteci": "eyJhbGciOiJIUzU***************RwczovL2FwaS5ia2"
}
export const ileriTarihliOdemeEmriRequestBody ={
  "rzBlg": {
    "rizaNo": "5de85dd5019d4c33bd6c53247277cce6",
    "olusZmn": "2025-05-05T11:12:39+03:00",
    "rizaDrm": "K"
  },
  "katilimciBlg": {
    "hhsKod": "8000",
    "yosKod": "8000"
  },
  "gkd": {
    "yetYntm": "Y",
    "yonAdr": "https://tripsit.bkm.com.tr/boss/ab/yos-simulator-ui-v20/8000?drmKod=bdb864ba-1270-48af-9e68-b16f012e2977",
    "yetTmmZmn": "2025-05-05T11:17:39+03:00",
    "hhsYonAdr": "https://tripsit.bkm.com.tr/boss/ab/hhs-simulator-ui-v20/8000/ileri-tarihli-odeme-emri-rizasi/5de85dd5019d4c33bd6c53247277cce6/goruntule"
  },
  "odmBsltm": {
    "kmlk": {
      "kmlkTur": "K",
      "kmlkVrs": "22222222222",
      "ohkTur": "B"
    },
    "islTtr": {
      "prBrm": "TRY",
      "ttr": "1000.50"
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
      "odmAmc": "07",
      "refBlg": "Y-2701852-202302",
      "odmAcklm": "Ödeme Açıklamasıdır",
      "ohkMsj": "ÖHK Mesajı",
      "tlmtTrh": "2025-05-06"
    }
  },
}
export const ileriTarihliOdemeEmriResponse201 = {
  "rzBlg": {
    "rizaNo": "5de85dd5019d4c33bd6c53247277cce6",
    "olusZmn": "2025-05-05T11:12:39+03:00",
    "rizaDrm": "E"
  },
  "katilimciBlg": {
    "hhsKod": "8000",
    "yosKod": "8000"
  },
  "gkd": {
    "yetYntm": "Y",
    "yonAdr": "https://tripsit.bkm.com.tr/boss/ab/yos-simulator-ui-v20/8000?drmKod=bdb864ba-1270-48af-9e68-b16f012e2977",
    "yetTmmZmn": "2025-05-05T11:17:39+03:00",
    "hhsYonAdr": "https://tripsit.bkm.com.tr/boss/ab/hhs-simulator-ui-v20/8000/ileri-tarihli-odeme-emri-rizasi/5de85dd5019d4c33bd6c53247277cce6/goruntule"
  },
  "emrBlg": {
    "odmEmriNo": "47bfd972a8bf4fdab85f6a47adc4f130",
    "odmEmriZmn": "2025-05-05T11:13:17+03:00"
  },
  "odmBsltm": {
    "kmlk": {
      "kmlkTur": "K",
      "kmlkVrs": "22222222222",
      "ohkTur": "B"
    },
    "islTtr": {
      "prBrm": "TRY",
      "ttr": "1000.50"
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
      "odmDrm": "01",
      "odmAmc": "07",
      "refBlg": "Y-2701852-202302",
      "odmAcklm": "E-Ticaret odemesi",
      "ohkMsj": "ÖHK Mesajı",
      "tlmtTrh": "2025-05-06"
    },
  }
}
export const ileriTarihliOdemeEmriResponse400 =
{
  "id": "d1f8d44c-1470-fd54-9ea9-c5c0bea5ac02",
  "path": "/ohvps/obh/s2.0/ileri-tarihli-odeme-emri",
  "timestamp": "2023-11-26T19:37:15+03:00",
  "httpCode": 400,
  "httpMessage": "Bad Request",
  "moreInformation": "Your account balance is insufficient. Please check the balance on and try again.",
  "moreInformationTr": "Bakiyeniz müsait değil. Lütfen kontrol edip tekrar deneyiniz.",
  "errorCode": "TR.OHVPS.Business.InvalidContent"
}
export const ileriTarihliOdemeEmriResponse401 =
{
  "id": "d1f8d44c-1470-fd54-9ea9-c5csdea5ac02",
  "path": "/ohvps/obh/s2.0/ileri-tarihli-odeme-emri",
  "timestamp": "2023-11-26T19:37:15+03:00",
  "httpCode": 401,
  "httpMessage": "Unauthorized",
  "moreInformation": "Geçersiz Token",
  "moreInformationTr": "Invalid Token",
  "errorCode": "TR.OHVPS.Connection.InvalidToken"
}
export const ileriTarihliOdemeEmriResponse403 =
{
  "id": "a7e51238-79d1-4133-9ef5-4311a9625a1c",
  "path": "/ohvps/obh/s2.0/ileri-tarihli-odeme-emri",
  "timestamp": "2023-11-26T07:17:11+03:00",
  "httpCode": 403,
  "httpMessage": "Forbidden",
  "moreInformation": "PSU-Fraud-Check header not found in the TPP request",
  "moreInformationTr": "YOS ten gelen istekte PSU-Fraud-Check basligi bulunamadi.",
  "errorCode": "TR.OHVPS.Resource.MissingSignature"
}
export const ileriTarihliOdemeEmriResponse404 =
{
  "id": "udYRPEWYeZJt_IW98eilpDUmUpg1HPWvtSZ3B",
  "path": "/ohvps/obh/s2.0/ileri-tarihli-odeme-emri",
  "timestamp": "2023-11-23T16:37:36+03:00",
  "httpCode": 404,
  "httpMessage": "Not Found",
  "moreInformation": "Consent Number not found",
  "moreInformationTr": "Rıza numarası bulunamadı.",
  "errorCode": "TR.OHVPS.Resource.NotFound"
}
export const ileriTarihliOdemeEmriResponse500 =
{
  "id": "qwe16216-af41-ewb4-e5c6-5489b128e453",
  "path": "/ohvps/obh/s2.0/ileri-tarihli-odeme-emri",
  "timestamp": "2023-11-27T02:00:15+03:00",
  "httpCode": 500,
  "httpMessage": "Internal Server Error",
  "moreInformation": "Unexpected condition was encountered",
  "moreInformationTr": "Beklenmedik bir durumla karşılaşıldı.",
  "errorCode": "TR.OHVPS.Server.InternalError"
}
export const ileriTarihliOdemeEmriResponse503 =
{
  "id": "1234567-125e-4556-be26-994df1dsa8e1",
  "path": "/ohvps/obh/s2.0/ileri-tarihli-odeme-emri",
  "timestamp": "2023-11-27T00:50:13+03:00",
  "httpCode": 503,
  "httpMessage": "Service Unavailable",
  "moreInformation": "Service Unavailable Error",
  "moreInformationTr": "Servis Hizmet Dışı Hatası",
  "errorCode": "TR.OHVPS.Server.ServiceUnavailable"
}
export const ileriTarihliOdemeEmriResponse504={
  "id": "abd506a6-0608-4db5-ad5b-723cepde545f",
  "path": "/ohvps/gkd/s2.0/ileri-tarihli-odeme-emri",
  "timestamp": "2023-11-23T15:46:19+03:00",
  "httpCode": 504,
  "httpMessage": "Gateway Timeout",
  "moreInformation": "Gateway Timeout Exception",
  "moreInformationTr": "Servis Cevap Bekleme Zaman Aşımı",
  "errorCode": "TR.OHVPS.Server.InternalError"
}
export const YenilemeBelirteciResponse401 =
{
  "id": "d1f8d44c-1470-fd54-9ea9-c5csdea5ac02",
  "path": "/ohvps/obh/s2.0/erisim-belirteci",
  "timestamp": "2023-11-26T19:37:15+03:00",
  "httpCode": 401,
  "httpMessage": "Unauthorized",
  "moreInformation": "Geçersiz Token",
  "moreInformationTr": "Invalid Token",
  "errorCode": "TR.OHVPS.Connection.InvalidToken"
}
export const ileriTarihliOdemeEmriSorgulamaResponse400 =
{
  "id": "d1f8d44c-1470-fd54-9ea9-c5c0bea5ac02",
  "path": "/ohvps/obh/s2.0/ileri-tarihli-odeme-emri/123456773ae0b433c847432421bbb1e5356d",
  "timestamp": "2023-11-26T19:37:15+03:00",
  "httpCode": 400,
  "httpMessage": "Bad Request",
  "moreInformation": "Please check that payment information entered is correct.",
  "moreInformationTr": "Lütfen girilen ödeme bilgilerin doğruluğunu kontrol ediniz",
  "errorCode": "TR.OHVPS.Business.InvalidContent"
}
export const ileriTarihliOdemeEmriSorgulamaResponse401 =
{
  "id": "d1f8d44c-1470-fd54-9ea9-c5csdea5ac02",
  "path": "/ohvps/obh/s2.0/ileri-tarihli-odeme-emri/123456773ae0b433c847432421bbb1e5356d",
  "timestamp": "2023-11-26T19:37:15+03:00",
  "httpCode": 401,
  "httpMessage": "Unauthorized",
  "moreInformation": "Geçersiz Token",
  "moreInformationTr": "Invalid Token",
  "errorCode": "TR.OHVPS.Connection.InvalidToken"
}
export const ileriTarihliOdemeEmriSorgulamaResponse403 =
{
  "id": "a7e51238-79d1-4133-9ef5-4311a9625a1c",
  "path": "/ohvps/obh/s2.0/ileri-tarihli-odeme-emri/123456773ae0b433c847432421bbb1e5356d",
  "timestamp": "2023-11-26T07:17:11+03:00",
  "httpCode": 403,
  "httpMessage": "Forbidden",
  "moreInformation": "X-JWS-Signature header not found in the TPP request",
  "moreInformationTr": "YOS ten gelen istekte X-JWS-Signature basligi bulunamadi.",
  "errorCode": "TR.OHVPS.Resource.MissingSignature"
}
export const ileriTarihliOdemeEmriSorgulamaResponse404={
  "id": "udYRPEWYeZJt_IW98eilpDUmUpg1HPWvtSZ3B",
  "path": "/ohvps/obh/s2.0/ileri-tarihli-odeme-emri/123456773ae0b433c847432421bbb1e5356d",
  "timestamp": "2023-11-23T16:37:36+03:00",
  "httpCode": 404,
  "httpMessage": "Not Found",
  "moreInformation": "Payment number not found",
  "moreInformationTr": "Ödeme numarası bulunamadı.",
  "errorCode": "TR.OHVPS.Resource.NotFound"
}
export const ileriTarihliOdemeEmriSorgulamaResponse429={
  "id": "qwe16216-af41-ewb4-e5c6-5489b128e453",
  "path": "/ohvps/obh/s2.0/ileri-tarihli-odeme-emri/123456773ae0b433c847432421bbb1e5356d",
  "timestamp": "2023-11-27T02:00:15+03:00",
  "httpCode": 429,
  "httpMessage": "Too Many Requests",
  "moreInformation": "The number of allowed requests has been exceeded.",
  "moreInformationTr": "İzin verilen istek sayısı aşıldı.",
  "errorCode": "TR.OHVPS.Connection.ExceededRate"
}
export const ileriTarihliOdemeEmriSorgulamaResponse500={
  "id": "1234567-125e-4556-be26-994df1dsa8e1",
  "path": "/ohvps/obh/s2.0/ileri-tarihli-odeme-emri/123456773ae0b433c847432421bbb1e5356d",
  "timestamp": "2023-11-27T00:50:13+03:00",
  "httpCode": 500,
  "httpMessage": "Internal Server Error",
  "moreInformation": "Sorry, the transaction has failed. Please try again later.",
  "moreInformationTr": "Özür dileriz işleminizi gerçekleştiremiyoruz. Lütfen daha sonra tekrar deneyiniz.",
  "errorCode": "TR.OHVPS.Server.ServiceUnavailable"
}
export const ileriTarihliOdemeEmriSorgulamaResponse503={
  "id": "abd506a6-0608-4db5-ad5b-723cepde545f",
  "path": "/ohvps/obh/s2.0/ileri-tarihli-odeme-emri/123456773ae0b433c847432421bbb1e5356d",
  "timestamp": "2023-11-27T00:50:13+03:00",
  "httpCode": 503,
  "httpMessage": "Service Unavailable",
  "moreInformation": "Service Unavailable Error",
  "moreInformationTr": "Servis Hizmet Dışı Hatası",
  "errorCode": "TR.OHVPS.Server.ServiceUnavailable"
}
export const ileriTarihliOdemeEmriSorgulamaResponse504={
  "id": "abd506a6-0608-4db5-ad5b-723cepde545f",
  "path": "/ohvps/obh/s2.0/ileri-tarihli-odeme-emri/123456773ae0b433c847432421bbb1e5356d",
  "timestamp": "2023-11-23T15:46:19+03:00",
  "httpCode": 504,
  "httpMessage": "Gateway Timeout",
  "moreInformation": "Gateway Timeout Exception",
  "moreInformationTr": "Servis Cevap Bekleme Zaman Aşımı",
  "errorCode": "TR.OHVPS.Server.InternalError"
}