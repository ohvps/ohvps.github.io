export const mainTabs = [{
    ID: 1,
    Name: 'Hesap Bilgisi Rızası',
   
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
    Name: 'Hesaplar',
  
},

{
    ID: 6,
    Name: 'Bakiye',
   
  
},
{
  ID: 7,
  Name: 'İşlemler',
 

},
{
  ID: 8,
  Name: 'Yenileme Belirteci',

}
];
export const ResponseTabsHBHRiza = [{
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
export const ResponseTabsErisimBelirteci = [{
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
export const ResponseTabsHesaplar = [{
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
export const hesapBilgisiRizaHeader = [
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
      Value: 'ee396d39-5fdf-45ac-80e0-fe3a4ced6268'
  },
  {
      ID: 5,
      Key: 'X-JWS-Signature',
      Value: 'eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5ia20uY29tLnRyIiwiZXhwIjoxNjk5NDQ2NzY2LCJpYXQiOjE2OTk0NDI4NjYsImJvZHkiOiIwNmQ5YzAxODViMDRkNDAzZGVjZjIyMTczYTFiMjhlZTBGQzUyNjIwNzQ1N0IwOTcyRTlCRjRGRUFERDY5Q0MwIn0.ET19olrqy_ezfULZqkIiNxyWO8gdmuQk9Roc1QuculIPTQL7rpxIWq4wVS_tlUdSxmSMs6nIS31rpL-yGtdZ01bKKfjJSynw3m2-Gw-w5LFdH7S3jCHiZULK2ucb00GvCRfP7TPKEnLvyQvbz_yG4FGn4fFt26rBnofenGzKMii1vJ2-_1GWxJz5VGFxfGsHOTWG_0Ss6nrAJ6UWnaUzTb1ZYPu10u1CbP_tvp4EU42I_csoOZt6-we8Xhy5khAtHzA45dWDJDiyfwFs-JFIq2qVkX808rQ71dXm3qElSB_PLAHDvB41nztTNjOxdoVBSs3gYTGt2KoptnMuY9QNKQ        '
  },
  {
      ID: 6,
      Key: 'PSU-Fraud-Check',
      Value: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJBbm9tYWx5RmxhZyI6IjAiLCJMYXN0UGFzc3dvcmRDaGFuZ2VGbGFnIjoiMSIsIkZpcnN0TG9naW5GbGFnIjoiMSIsIkRldmljZUZpcnN0TG9naW5GbGFnIjoiMSIsIkJsYWNrbGlzdEZsYWciOiIwIiwiTWFsd2FyZUZsYWciOiIwIiwiVW5zYWZlQWNjb3VudEZsYWciOiIwIiwiZXhwIjoxNjk5MzQ5MTk2LCJpYXQiOjE2OTkzNDUyOTYsImlzcyI6Imh0dHBzOi8vYXBpLmJrbS5jb20udHIifQ.bfJjCtxYwgW-duWOPuWTNzoOnLjNi_tQUA-9PQEWKdNPQkw4nVoDPjNbgFkZYtmQg4z8gLJbosBZq3KWwEAfCQX1EFjRHpkIwQVBF7nTho7GHZ8qraz5HYNyWVLWFvQFaIp3KXl4QcmKJhuhXPQn0UGDEQVZ11urDX_xFtbKe2oAU-cw7lijM7XHKchaxL4bYeXW08yrCchZgx4uRgO6mP_0_Mtk63go9UV-1Xok2Fm_HGZaDIONGT1a_3QfWb1UkDcV8Yj907V5zu_vnEz1-52aOFPiSSEssHVvwioMK_tP0AJvQIu5WsyLCodNSAUwr6bGv-lVqMsI5caQEDHo8Q'
  }, 
  {
      ID: 7,
      Key: 'PSU-Initiated',
      Value: 'E'
  },    
  {
      ID: 8,
      Key: 'Authorization',
      Value: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJmdXRoWW5oTTBDd3FkY2FxUElQMWlHdXlGeDFackJZeElXZmRzTlN6dlZJIn0.eyJleHAiOjE3MDA1NzU3NzQsImlhdCI6MTcwMDU3MjE3NCwianRpIjoiMWYxMjFkMjItYTg5ZS00NzA4LTlmZjctMDRiMDhiZjcxMmQ0IiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmUuYXBpLXByZXByb2QuYmttLmNvbS50ci9hdXRoL3JlYWxtcy9ia21wcmVwcm9kcmVhbG0iLCJzdWIiOiJjYTZjOGQ1Mi0wNWNkLTQyNmMtODIxNS0yMzg2YjZiYTRkNTMiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiIyOGFhOTBjY2UzY2M2ZTIzMzU5NTY3N2Y5ODEyNGZmNyIsInNjb3BlIjoia29sYXNfd3JpdGUga29sYXNfcmVhZCIsImNsaWVudElkIjoiMjhhYTkwY2NlM2NjNmUyMzM1OTU2NzdmOTgxMjRmZjciLCJjbGllbnRIb3N0IjoiMTkyLjE2OC4xNTQuMzEiLCJjbGllbnRfb3JnYW5pemF0aW9uX3R5cGUiOiIyIiwiY2xpZW50QWRkcmVzcyI6IjE5Mi4xNjguMTU0LjMxIiwiY2xpZW50X2NvZGUiOiIwODA3In0.hOflRFxE2h9uKPRrn3DHU8pW9uJUgZMgK9j1T8eyYQSHggmPu3UKK_qqiHW3YAnSErBEDrqsS23XX_5_Qi2V6SM2-HMGYq14A_Z9GiQZRboDAls8U71boR6dU0CBIjYNTHOG876seOlG7ur7e5E_LW5jd7_4cecsegl8MAnIIFiKvMGhm-uP_kfAwbQiiyO5oSxdNMicvmi9S_AmW6wApW-mP-2vVmwoKZRdywhP8uCZnnWHkW1shsZaYoEjGG-B_2k8nckDUp7ag54Ow28gX-gGmQPwHSX4LGLxjw4AcrTP-cXSTnHayaL64a7tGXGBOfO_AsPB-R07yZjyv_BR2Q'
  },
];
export const hesapBilgisiRizaResponseHeader = [
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
    Value: 'ee396d39-5fdf-45ac-80e0-fe3a4ced6268'
  },
  {
      ID: 5,
      Key: 'content-type',
      Value: 'application/json'
  },
  {
      ID: 6,
      Key: 'X-JWS-Signature',
      Value: 'eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5ia20uY29tLnRyIiwiZXhwIjoxNzAwNjQ5ODI1LCJpYXQiOjE3MDA2NDU5MjUsImJvZHkiOiJlNzcwNjgzNWU3YTI2OTNkOGU1YzQ3NjY2MjU5ZTdhOTQ0MTU0NTdDMTVFODJFQTVCODM5OTEwQUNEQzk3REJFIn0.VZBLdZScE4eGyqnxiVKzvVlU85BoYIBUGU_GCwOskpSdVVQUL7KtFKxNMPuzZ6gpfLX6mZS1j1FAFFpnDjTz9k65J7KYmDQor_DwMuazsr_m7XG9EyM3EDbnPOLi-xij8V2VcN6tBzVKK5MZ8oyP0Pv4hoBhMpLZKoo6vmS_yiammvxq9QY1UyKkPiqSfdvLZhK8XsZ3GXTEHNGLGJVd51pBzCZ1YHP6ILtUfZAU5Rq_r3bjA-hMxrBZOqPBjoAJstmiHsJ3bp2quJVmwzXEGBiSvQvZwFpkomRMRgLdkHQ4L1Fg4NnNZ4oEQJA_bLqL_I2pax2phc_47KVjK4udWg'
  },

];
export const odemeEmriErisimBelirteciHeader = [
    {
        ID: 9,
        Key: 'X-Access-Token',
        Value: 'abc123'
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
        Value: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJBbm9tYWx5RmxhZyI6IjAiLCJMYXN0UGFzc3dvcmRDaGFuZ2VGbGFnIjoiMSIsIkZpcnN0TG9naW5GbGFnIjoiMSIsIkRldmljZUZpcnN0TG9naW5GbGFnIjoiMSIsIkJsYWNrbGlzdEZsYWciOiIwIiwiTWFsd2FyZUZsYWciOiIwIiwiVW5zYWZlQWNjb3VudEZsYWciOiIwIiwiZXhwIjoxNjk5MzQ5MTk2LCJpYXQiOjE2OTkzNDUyOTYsImlzcyI6Imh0dHBzOi8vYXBpLmJrbS5jb20udHIifQ.bfJjCtxYwgW-duWOPuWTNzoOnLjNi_tQUA-9PQEWKdNPQkw4nVoDPjNbgFkZYtmQg4z8gLJbosBZq3KWwEAfCQX1EFjRHpkIwQVBF7nTho7GHZ8qraz5HYNyWVLWFvQFaIp3KXl4QcmKJhuhXPQn0UGDEQVZ11urDX_xFtbKe2oAU-cw7lijM7XHKchaxL4bYeXW08yrCchZgx4uRgO6mP_0_Mtk63go9UV-1Xok2Fm_HGZaDIONGT1a_3QfWb1UkDcV8Yj907V5zu_vnEz1-52aOFPiSSEssHVvwioMK_tP0AJvQIu5WsyLCodNSAUwr6bGv-lVqMsI5caQEDHo8Q'
    },
    {
        ID: 4,
        Key: 'X-JWS-Signature',
        Value: 'eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5ia20uY29tLnRyIiwiZXhwIjoxNjk5NDQ2NzY2LCJpYXQiOjE2OTk0NDI4NjYsImJvZHkiOiIwNmQ5YzAxODViMDRkNDAzZGVjZjIyMTczYTFiMjhlZTBGQzUyNjIwNzQ1N0IwOTcyRTlCRjRGRUFERDY5Q0MwIn0.ET19olrqy_ezfULZqkIiNxyWO8gdmuQk9Roc1QuculIPTQL7rpxIWq4wVS_tlUdSxmSMs6nIS31rpL-yGtdZ01bKKfjJSynw3m2-Gw-w5LFdH7S3jCHiZULK2ucb00GvCRfP7TPKEnLvyQvbz_yG4FGn4fFt26rBnofenGzKMii1vJ2-_1GWxJz5VGFxfGsHOTWG_0Ss6nrAJ6UWnaUzTb1ZYPu10u1CbP_tvp4EU42I_csoOZt6-we8Xhy5khAtHzA45dWDJDiyfwFs-JFIq2qVkX808rQ71dXm3qElSB_PLAHDvB41nztTNjOxdoVBSs3gYTGt2KoptnMuY9QNKQ        '
    },
    {
        ID: 6,
        Key: 'PSU-Initiated',
        Value: 'E'
    },
    {
        ID: 1,
        Key: 'X-Request-ID',
        Value: 'aec70909-2ff9-4d5b-9829-e6e7de88c2a6'
    },
    {
        ID: 7,
        Key: 'X-Group-ID',
        Value: 'ee396d39-5fdf-45ac-80e0-fe3a4ced6268'
    },
    
    {
        ID: 8,
        Key: 'Authorization',
        Value: 'Bearer ey..............'
    },
];
export const hesapBilgisiRızasiRequest={
  "katilimciBlg": {
    "hhsKod": "8000",
    "yosKod": "8000"
  },
  "gkd": {
    "yetYntm": "Y",
    "yonAdr": "https://yos.com.tr?drmKod=560a6231-2be6-45a9-8660-b899e1fd006d"
  },
  "kmlk": {
    "kmlkTur": "K",
    "kmlkVrs": "77121323400",
    "ohkTur": "B"
  },
  "hspBlg": {
    "iznBlg": {
      "iznTur": [
        "01",
        "02",
        "03",
        "04",
        "05"
      ],
      "erisimIzniSonTrh": "2024-06-04T23:59:59+03:00",
      "hesapIslemBslZmn": "2022-12-04T23:59:59+03:00",
      "hesapIslemBtsZmn": "2024-12-04T23:59:59+03:00"
    }
  }
}
export const HesapBilgisiRizasi201 = {
  "rzBlg": {
    "rizaNo": "637319fc-1b2c-4f1a-9173-fbbea18ae75h",
    "olusZmn": "2023-12-04T15:49:19+03:00",
    "gnclZmn": "2023-12-04T15:49:19+03:00",
    "rizaDrm": "B"
  },
  "kmlk": {
    "kmlkTur": "K",
    "kmlkVrs": "77121323400",
    "ohkTur": "B"
  },
  "katilimciBlg": {
    "hhsKod": "8000",
    "yosKod": "8000"
  },
  "gkd": {
    "yetYntm": "Y",
    "yonAdr": "https://yos.com.tr?drmKod=560a6231-2be6-45a9-8660-b899e1fd006d",
    "yetTmmZmn": "2023-12-04T15:54:19+03:00",
    "hhsYonAdr": "https://hhsadres.com.tr?rizaNo=637319fc-1b2c-4f1a-9173-fbbea18ae75h"
  },
  "hspBlg": {
    "iznBlg": {
      "iznTur": [
        "01",
        "02",
        "03",
        "04",
        "05"
      ],
      "erisimIzniSonTrh": "2024-06-04T23:59:59+03:00",
      "hesapIslemBslZmn": "2022-12-04T23:59:59+03:00",
      "hesapIslemBtsZmn": "2024-12-04T23:59:59+03:00"
    },
    "ayrBlg": {
      "ohkMsj": "ÖHK Mesajı"
    }
  }
}
export const HesapBilgisiRizasi400 = {
  "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebcy",
  "path": "/ohvps/hbh/s1.0/hesap-bilgisi-rizasi",
  "timestamp": "2023-12-04T15:55:19+03:00",
  "httpCode": 400,
  "httpMessage": "Bad Request",
    "moreInformation": "Validation error",
    "moreInformationTr": "Şema kontrolleri başarısız",
    "errorCode": "TR.OHVPS.Resource.InvalidFormat",
    "fieldErrors": [
        {         
            "field": "X-Request-ID",
            "messageTr": "X-Request-ID değeri boş olamaz.",
            "message": "X-Request-ID cannot be null.",
            "code": "TR.OHVPS.Field.Invalid"
        }
    ]
}
export const HesapBilgisiRizasi401 = {
  "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbert",
  "path": "/ohvps/hbh/s1.0/hesap-bilgisi-rizasi",
  "timestamp": "2023-12-04T15:55:19+03:00",
  "httpCode": 401,
  "httpMessage": "Unauthorized",
  "moreInformation": "Unauthorized",
  "moreInformationTr": "İzin verilmedi",
  "errorCode": "TR.OHVPS.Connection.InvalidToken"
}
export const HesapBilgisiRizasi403 = {
  "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
  "path": "/ohvps/hbh/s1.0/hesap-bilgisi-rizasi",
  "timestamp": "2023-12-04T15:55:19+03:00",
  "httpCode": 403,
  "httpMessage": "Forbidden",
  "moreInformation": "Message signature not found.",
  "moreInformationTr": "Mesaj imzası bulunamadı.",
  "errorCode": "TR.OHVPS.Resource.MissingSignature"
}
export const HesapBilgisiRizasi404 = {
  "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbeb4",
  "path": "/ohvps/hbh/s1.0/hesap-bilgisi-rizasi",
  "timestamp": "2023-12-04T15:55:19+03:00",
  "httpCode": 404,
  "httpMessage": "Not Found",
  "moreInformation": "Customer not found",
  "moreInformationTr": "Kimlik bilgisine ait geçerli müşteri bulunamadı.",
  "errorCode": "TR.OHVPS.Resource.NotFound"
}
export const HesapBilgisiRizasi500 = {
  "id": "965c6beb-4893-477d-8b63-576cbds85500",
  "path": "/ohvps/hbh/s1.0/hesap-bilgisi-rizasi",
  "timestamp": "2023-12-04T15:55:19+03:00",
  "httpCode": 500,
  "httpMessage": "Internal Server Error",
  "moreInformation": "Unexpected condition was encountered",
  "moreInformationTr": "Beklenmedik bir durumla karşılaşıldı.",
  "errorCode": "TR.OHVPS.Server.InternalError"
}
export const HesapBilgisiRizasi503 = {
  "id": "be3ecce0-aeca-4558-b5e4-67e44a981506",
  "path": "/ohvps/hbh/s1.0/hesap-bilgisi-rizasi",
  "timestamp": "2023-12-04T15:55:19+03:00",
  "httpCode": 503,
  "httpMessage": "HHS hizmet veremiyor",
  "moreInformationTr": "HHS hizmet veremiyor",
  "moreInformation":  "HHS is currently unavailable",
  "errorCode": "TR.OHVPS.Server.ServiceUnavailable"
}
export const HesapBilgisiRizasi504 = {
  "id": "be3ecce0-aeca-4558-b5e4-67e44a981504",
  "path": "/ohvps/hbh/s1.0/hesap-bilgisi-rizasi",
  "timestamp": "2023-12-04T15:55:19+03:00",
  "httpCode": 504,
  "httpMessage": "Gateway Timeout",
  "moreInformationTr": "Servis Cevap Bekleme Zaman Aşımı",
  "moreInformation": "Gateway Timeout Exception",
  "errorCode": "TR.OHVPS.Server.ServiceUnavailable"
}
export const ErisimBelirteciRequest = {
    "rizaNo": "637319fc-1b2c-4f1a-9173-fbbea18ae75h",
    "yetKod": "a238307640ba4b8ebbdc4835ca9a021c",
    "yetTip": "yet_kod",
    "rizaTip": "H"
}
export const ErisimBelirteciResponse200 =	{
  "erisimBelirteci": "eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJodHRwczovL2FwaS5ia20uY29tLnRyIiwiZXhwIjoxNzAwOTk1NzAzLCJpYXQiOjE3MDA5OTE1MDMsInJpemFfbm8iOiIxMDhlN2MwNzdjMGQ0N2M4Yjc1YjRiNWIzY2UwZGFiNSIsInNjb3BlIjpbIm9kZW1lX2VtcmkiXSwidW5pcXVlX25hbWUiOiJna2Rfc3ViamVjdCJ9.ZRlhYiVRJDcPSTsrSzh_pgOStq1e8to9BWIjikmM-86knfIVonTXAx6kBkReofj267Bg2ozCx2MeCKPYkmNHBH",
  "gecerlilikSuresi": 300,
  "yenilemeBelirteci": "eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJodHRwczovL2FwaS5ia20uY29tLnRyIiwiZXhwIjoxNzAyMjkxNDAzLCJpYXQiOjE3MDA5OTE1MDMsInJpemFfbm8iOiIxMDhlN2MwNzdjMGQ0N2M4Yjc1YjRiNWIzY2UwZGFiNSIsInNjb3BlIjpbIm9kZW1lX2VtcmkiXSwidW5pcXVlX25hbWUiOiJna2Rfc3ViamVjdCJ9.rUZv1pLPo07kVfsX8LMl9xkS2cepZXaUmLWz_y32NPPAciIrItF0idA-El33o8sc5hjdRx-LZSBQOq24O4kHBH",
  "yenilemeBelirteciGecerlilikSuresi": 1296000
};
export const ErisimBelirteciResponse400 ={
  "id": "3f5f1a05-48e3-4475-8ce2-67d778280c19",
  "path": "/ohvps/gkd/s1.0/erisim-belirteci",
  "timestamp": "2023-11-02T13:02:51+03:00",
  "httpCode": "400",
  "httpMessage": "Bad Request",
  "moreInformationTr": "Riza durumunuz iptal/sonlandırıldı statüsündedir.",
  "moreInformation": "Consent is in cancelled status",
  "errorCode": "TR.OHVPS.Resource.ConsentRevoked"
}
export const ErisimBelirteciResponse401 ={
  "id": "4dc29205-de28-4a66-8da8-26152258b3a1",
  "path": "/ohvps/gkd/s1.0/erisim-belirteci",
  "timestamp": "2023-11-27T16:14:07+03:00",
  "httpCode": 401,
  "httpMessage": "Unauthorized",
  "moreInformation": "Unauthorized",
  "moreInformationTr": "İzin verilmedi",
  "errorCode": "TR.OHVPS.Connection.InvalidToken"
 }
 export const ErisimBelirteciResponse403 = {
  "id": "38d9d82a-aa98-4b13-8e49-4118ebc85b74",
  "path": "/ohvps/gkd/s1.0/erisim-belirteci",
  "timestamp": "2023-11-23T03:07:49+03:00",
  "httpCode": 403,
  "httpMessage": "Forbidden",
  "moreInformation": "PSU-Fraud-Check expired.",
  "moreInformationTr": "YOS ten gelen istekteki PSU-Fraud-Check tarihi gecmistir.",
  "errorCode": "TR.OHVPS.Resource.InvalidSignature"
}
export const ErisimBelirteciResponse404 ={
  "id": "udYRPEWYeZJt_IW98eiWDUmUpg1HPWvtSZ3B",
  "path": "/ohvps/gkd/s1.0/erisim-belirteci",
  "timestamp": "2023-11-23T16:37:36+03:00",
  "httpCode": 404,
  "httpMessage": "Resource Not Found",
  "moreInformation": "Rıza Numarası Geçerli Değil",
  "moreInformationTr": "Rıza Numarası Geçerli Değil",
  "errorCode": "TR.OHVPS.Resource.NotFound"
}
export const ErisimBelirteciResponse500 = {
  "id": "965c6beb-4893-477d-8b63-576cbds852e3",
  "path": "/ohvps/gkd/s1.0/erisim-belirteci",
  "timestamp": "2023-11-23T16:43:18+03:00",
  "httpCode": 500,
  "httpMessage": "Internal Server Error",
  "moreInformation": "Unexpected condition was encountered",
  "moreInformationTr": "Beklenmedik bir durumla karşılaşıldı.",
  "errorCode": "TR.OHVPS.Server.InternalError"
}
export const ErisimBelirteciResponse503 ={
  "id": "be3ecce0-aeca-4558-b5e4-67e44a9810e7",
  "path": "/ohvps/gkd/s1.0/erisim-belirteci",
  "timestamp": "2023-11-23T00:31:42+03:00",
  "httpCode": 503,
  "httpMessage": "HHS hizmet veremiyor",
  "moreInformationTr": "HHS hizmet veremiyor",
  "moreInformation": "HHS is currently unavailable",
  "errorCode": "TR.OHVPS.Server.ServiceUnavailable"
}
export const ErisimBelirteciResponse504 ={
  "id": "abd506a6-0608-4db5-ad5b-723cepde545f",
  "path": "/ohvps/gkd/s1.0/erisim-belirteci",
  "timestamp": "2023-11-23T15:46:19+03:00",
  "httpCode": 504,
  "httpMessage": "Gateway Timeout",
  "moreInformation": "Gateway Timeout Exception",
  "moreInformationTr": "Servis Cevap Bekleme Zaman Aşımı",
  "errorCode": "TR.OHVPS.Server.InternalError"
}
export const RequestHeadersAfterToken = [
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
    Value: 'eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJodHRwczovL2FwaS5ia20uY29tLnRyIiwiZXhwIjoxNzAwOTk1NzAzLCJpYXQiOjE3MDA5OTE1MDMsInJpemFfbm8iOiIxMDhlN2MwNzdjMGQ0N2M4Yjc1YjRiNWIzY2UwZGFiNSIsInNjb3BlIjpbIm9kZW1lX2VtcmkiXSwidW5pcXVlX25hbWUiOiJna2Rfc3ViamVjdCJ9.ZRlhYiVRJDcPSTsrSzh_pgOStq1e8to9BWIjikmM-86knfIVonTXAx6kBkReofj267Bg2ozCx2MeCKPYkmNHBH'
},
  {
    ID: 4,
    Key:  'X-Request-ID',
    Value: 'aec10909-2ff9-4d5b-9829-fe3a4c......(Her istekte farklılaşmalı)'
  },
  {
    ID: 5,
    Key:  'X-Group-ID',
    Value: 'ee396d39-5fdf-45ac-80e0-fe3a4ced6268'
  },
  {
      ID: 6,
      Key: 'content-type',
      Value: 'application/json'
  },
  {
      ID: 7,
      Key: 'X-JWS-Signature',
      Value: 'eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5ia20uY29tLnRyIiwiZXhwIjoxNzAwNjQ5ODI1LCJpYXQiOjE3MDA2NDU5MjUsImJvZHkiOiJlNzcwNjgzNWU3YTI2OTNkOGU1YzQ3NjY2MjU5ZTdhOTQ0MTU0NTdDMTVFODJFQTVCODM5OTEwQUNEQzk3REJFIn0.VZBLdZScE4eGyqnxiVKzvVlU85BoYIBUGU_GCwOskpSdVVQUL7KtFKxNMPuzZ6gpfLX6mZS1j1FAFFpnDjTz9k65J7KYmDQor_DwMuazsr_m7XG9EyM3EDbnPOLi-xij8V2VcN6tBzVKK5MZ8oyP0Pv4hoBhMpLZKoo6vmS_yiammvxq9QY1UyKkPiqSfdvLZhK8XsZ3GXTEHNGLGJVd51pBzCZ1YHP6ILtUfZAU5Rq_r3bjA-hMxrBZOqPBjoAJstmiHsJ3bp2quJVmwzXEGBiSvQvZwFpkomRMRgLdkHQ4L1Fg4NnNZ4oEQJA_bLqL_I2pax2phc_47KVjK4udWg'
  },

];
export const hesapBilgisiYenilemeBelirteciReuest={
  "rizaNo": "637319fc-1b2c-4f1a-9173-fbbea18ae75h",
  "yetTip": "yenileme_belirteci",
  "rizaTip": "H",
  "yenilemeBelirteci": "eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJodHRwczovL2FwaS5ia20uY29tLnRyIiwiZXhwIjoxNzAyMjkxNDAzLCJpYXQiOjE3MDA5OTE1MDMsInJpemFfbm8iOiIxMDhlN2MwNzdjMGQ0N2M4Yjc1YjRiNWIzY2UwZGFiNSIsInNjb3BlIjpbIm9kZW1lX2VtcmkiXSwidW5pcXVlX25hbWUiOiJna2Rfc3ViamVjdCJ9.rUZv1pLPo07kVfsX8LMl9xkS2cepZXaUmLWz_y32NPPAciIrItF0idA-El33o8sc5hjdRx-LZSBQOq24O4kgag"
}

export const YenilemeBelirteciResponse401 =
{
  "id": "d1f8d44c-1470-fd54-9ea9-c5csdea5ac02",
  "path": "/ohvps/hbh/s1.1/erisim-belirteci",
  "timestamp": "2023-11-26T19:37:15+03:00",
  "httpCode": 401,
  "httpMessage": "Unauthorized",
  "moreInformation": "Geçersiz Token",
  "moreInformationTr": "Invalid Token",
  "errorCode": "TR.OHVPS.Connection.InvalidToken"
}
  export const HesaplarResponse200=[
    {
      "rizaNo": "637319fc-1b2c-4f1a-9173-fbbea18ae75h",
      "hspTml": {
        "hspDrm": "AKTIF",
        "hspNo": "TR680003200000000073144415",
        "hspRef": "68c9ead2af99127e846a6a06ff41c026",
        "hspShb": "AYŞE DEMİR",
        "hspTip": "VADESIZ",
        "hspTur": "B",
        "hspUrunAdi": "Vadesiz Mevduat",
        "prBrm": "TRY",
        "subeAdi": "Beşiktaş Şubesi"
      },
      "hspDty": {
        "hspAclsTrh": "2019-09-16T00:00:00+03:00"
      }

    },
    {
      "rizaNo": "637319fc-1b2c-4f1a-9173-fbbea18ae75h",
      "hspTml": {
        "hspDrm": "AKTIF",
        "hspNo": "TR880003200000000102589209",
        "hspRef": "88ae6c58d309567d0d54a34a4e5f57d3",
        "hspShb": "AYŞE DEMİR",
        "hspTip": "VADESIZ",
        "hspTur": "B",
        "hspUrunAdi": "Vadesiz Mevduat",
        "prBrm": "EUR",
        "subeAdi": "Etiler Şubesi"
      },
      "hspDty": {
        "hspAclsTrh": "2022-06-13T00:00:00+03:00"
      }
    },
    {
      "rizaNo": "637319fc-1b2c-4f1a-9173-fbbea18ae75h",
      "hspTml": {
        "hspDrm": "AKTIF",
        "hspNo": "TR980003200000000096785934",
        "hspRef": "98271970d10b0c4738b53308a5d8695f",
        "hspShb": "AYŞE DEMİR",
        "hspTip": "VADESIZ",
        "hspTur": "B",
        "hspUrunAdi": "Vadesiz Mevduat",
        "prBrm": "TRY",
        "subeAdi": "Milas Şubesi"
      },
      "hspDty": {
        "hspAclsTrh": "2022-02-03T00:00:00+03:00"
      }
    }
  ]
  export const HesaplarResponse400={
    "id": "400f0fb2-730b-11e8-adc0-fa7ae01bbebc",
    "path": "/ohvps/hbh/s1.0/hesaplar",
    "timestamp": "2021-08-13T09:55:23+03:00",
    "httpCode": 400,
    "httpMessage": "Bad Request",
    "moreInformation": "The status of the account is closed.",
    "moreInformationTr": "Sorgulanan hesabın durumu kapalıdır.",
    "errorCode": "TR.OHVPS.Business.InvalidAccount",
  }
  export const HesaplarResponse401={
    "id": "401f0fb2-730b-11e8-adc0-fa7ae01bbebc",
    "path": "/ohvps/hbh/s1.0/hesaplar",
    "timestamp": "2021-08-13T09:55:23+03:00",
    "httpCode": 401,
    "httpMessage": "Unauthorized",
    "moreInformation": "Geçersiz Token",
    "moreInformationTr": "Invalid Token",
    "errorCode": "TR.OHVPS.Connection.InvalidToken"
  }
  export const HesaplarResponse403={
    "id": "403f0fb2-730b-11e8-adc0-fa7ae01bbebc",
    "path": "/ohvps/hbh/s1.0/hesaplar",
    "timestamp": "2021-08-13T09:55:23+03:00",
    "httpCode": 403,
    "httpMessage": "Forbidden",
    "moreInformation": "X-JWS-Signature header not found in the TPP request",
    "moreInformationTr": "YOS ten gelen istekte X-JWS-Signature basligi bulunamadi.",
    "errorCode": "TR.OHVPS.Resource.MissingSignature"
  }
  export const HesaplarResponse404={
    "id": "404f0fb2-730b-11e8-adc0-fa7ae01bbebc",
    "path": "/ohvps/hbh/s1.0/hesaplar",
    "timestamp": "2021-08-13T09:55:23+03:00",
    "httpCode": 404,
    "httpMessage": "Not Found",
    "moreInformation": "Resource not found",
    "moreInformationTr": "Kayıt bulunamadı",
    "errorCode": "TR.OHVPS.Resource.NotFound"
  }
  export const HesaplarResponse429={
    "id": "42916216-af41-ewb4-e5c6-5489b128e453",
    "path": "/ohvps/hbh/s1.0/hesaplar",
    "timestamp": "2023-11-27T02:00:15+03:00",
    "httpCode": 429,
    "httpMessage": "Too Many Requests",
    "moreInformation": "The number of allowed requests has been exceeded.",
    "moreInformationTr": "İzin verilen istek sayısı aşıldı.",
    "errorCode": "TR.OHVPS.Connection.ExceededRate"
  }
  export const HesaplarResponse500={
    "id": "5004567-125e-4556-be26-994df1dsa8e1",
    "path": "/ohvps/hbh/s1.0/hesaplar",
    "timestamp": "2023-11-27T00:50:13+03:00",
    "httpCode": 500,
    "httpMessage": "Internal Server Error",
    "moreInformation": "Sorry, the transaction has failed. Please try again later.",
    "moreInformationTr": "Özür dileriz işleminizi gerçekleştiremiyoruz. Lütfen daha sonra tekrar deneyiniz.",
    "errorCode": "TR.OHVPS.Server.ServiceUnavailable"
  }
  export const HesaplarResponse503={
    "id": "503506a6-0608-4db5-ad5b-723cepde545f",
    "path": "/ohvps/hbh/s1.0/hesaplar",
    "timestamp": "2023-11-27T00:50:13+03:00",
    "httpCode": 503,
    "httpMessage": "Service Unavailable",
    "moreInformation": "Service Unavailable Error",
    "moreInformationTr": "Servis Hizmet Dışı Hatası",
    "errorCode": "TR.OHVPS.Server.ServiceUnavailable"
  }
  export const HesaplarResponse504={
    "id": "504506a6-0608-4db5-ad5b-723cepde545f",
    "path": "/ohvps/hbh/s1.0/hesaplar",
    "timestamp": "2023-11-23T15:46:19+03:00",
    "httpCode": 504,
    "httpMessage": "Gateway Timeout",
    "moreInformation": "Gateway Timeout Exception",
    "moreInformationTr": "Servis Cevap Bekleme Zaman Aşımı",
    "errorCode": "TR.OHVPS.Server.InternalError"
  }
  export const BakiyeResponse200=[
    {
      "hspRef": "22SDKJ29DJW32EDJ3EJ2E3JIU8SDDS2",
      "bky": {
        "krdHsp": {
          "krdDhlGstr": "0",
          "kulKrdTtr": "362"
        },
        "prBrm": "TRY",
        "bkyTtr": "7999.29",
        "bkyZmn": "2023-12-05T19:17:23+03:00",
        "blkTtr": "0"
      },
    },
    {
      "hspRef": "22SDKJ29DJW32EDJ3EJ2E3JIU8SDDS3",
      "bky": {
        "prBrm": "TRY",
        "bkyTtr": "0",
        "bkyZmn": "2023-12-05T19:17:23+03:00",
        "blkTtr": "0"
      },     
    },
  ]
  export const BakiyeResponse400={
    "id": "400f0fb2-730b-11e8-adc0-fa7ae01bbebc",
    "path": "/ohvps/hbh/s1.1/bakiye",
    "timestamp": "2021-08-13T09:55:23+03:00",
    "httpCode": 400,
    "httpMessage": "Bad Request",
    "moreInformation": "Consent revoked",
    "moreInformationTr": "Rıza iptal durumdadır",
    "errorCode": "TR.OHVPS.Business.ConsentRevoked",
  }
  export const BakiyeResponse401={
    "id": "401f0fb2-730b-11e8-adc0-fa7ae01bbebc",
    "path": "/ohvps/hbh/s1.1/bakiye",
    "timestamp": "2021-08-13T09:55:23+03:00",
    "httpCode": 401,
    "httpMessage": "Unauthorized",
    "moreInformation": "Geçersiz Token",
    "moreInformationTr": "Invalid Token",
    "errorCode": "TR.OHVPS.Connection.InvalidToken"
  }
  export const BakiyeResponse403={
    "id": "403f0fb2-730b-11e8-adc0-fa7ae01bbebc",
    "path": "/ohvps/hbh/s1.1/bakiye",
    "timestamp": "2021-08-13T09:55:23+03:00",
    "httpCode": 403,
    "httpMessage": "Forbidden",
    "moreInformation": "X-JWS-Signature header not found in the TPP request",
    "moreInformationTr": "YOS ten gelen istekte X-JWS-Signature basligi bulunamadi.",
    "errorCode": "TR.OHVPS.Resource.MissingSignature"
  }
  export const BakiyeResponse404={
    "id": "404f0fb2-730b-11e8-adc0-fa7ae01bbebc",
    "path": "/ohvps/hbh/s1.1/bakiye",
    "timestamp": "2021-08-13T09:55:23+03:00",
    "httpCode": 404,
    "httpMessage": "Not Found",
    "moreInformation": "Resource not found",
    "moreInformationTr": "Kayıt bulunamadı",
    "errorCode": "TR.OHVPS.Resource.NotFound"
  }
  export const BakiyeResponse429={
    "id": "42916216-af41-ewb4-e5c6-5489b128e453",
    "path": "/ohvps/hbh/s1.1/bakiye",
    "timestamp": "2023-11-27T02:00:15+03:00",
    "httpCode": 429,
    "httpMessage": "Too Many Requests",
    "moreInformation": "The number of allowed requests has been exceeded.",
    "moreInformationTr": "İzin verilen istek sayısı aşıldı.",
    "errorCode": "TR.OHVPS.Connection.ExceededRate"
  }
  export const BakiyeResponse500={
    "id": "5004567-125e-4556-be26-994df1dsa8e1",
    "path": "/ohvps/hbh/s1.1/bakiye",
    "timestamp": "2023-11-27T00:50:13+03:00",
    "httpCode": 500,
    "httpMessage": "Internal Server Error",
    "moreInformation": "Sorry, the transaction has failed. Please try again later.",
    "moreInformationTr": "Özür dileriz işleminizi gerçekleştiremiyoruz. Lütfen daha sonra tekrar deneyiniz.",
    "errorCode": "TR.OHVPS.Server.ServiceUnavailable"
  }
  export const BakiyeResponse503={
    "id": "503506a6-0608-4db5-ad5b-723cepde545f",
    "path": "/ohvps/hbh/s1.1/bakiye",
    "timestamp": "2023-11-27T00:50:13+03:00",
    "httpCode": 503,
    "httpMessage": "Service Unavailable",
    "moreInformation": "Service Unavailable Error",
    "moreInformationTr": "Servis Hizmet Dışı Hatası",
    "errorCode": "TR.OHVPS.Server.ServiceUnavailable"
  }
  export const BakiyeResponse504={
    "id": "504506a6-0608-4db5-ad5b-723cepde545f",
    "path": "/ohvps/hbh/s1.1/bakiye",
    "timestamp": "2023-11-23T15:46:19+03:00",
    "httpCode": 504,
    "httpMessage": "Gateway Timeout",
    "moreInformation": "Gateway Timeout Exception",
    "moreInformationTr": "Servis Cevap Bekleme Zaman Aşımı",
    "errorCode": "TR.OHVPS.Server.InternalError"
  }
  export const IslemlerResponse200={
    "hspRef": "22SDKJ29DJW32EDJ3EJ2E3JIU8SDDS2",
    "isller": [
      {
        "islTml": {
          "islNo": "AB1234567890",
          "refNo": "CD0987654321",
          "islTtr": "1000.99",
          "prBrm": "TRY",
          "islGrckZaman": "2021-03-25T06:30:22+03:00",
          "brcAlc": "B",
          "kanal": "A",
          "islTur": "PARA_YATIRMA",
          "islAmc": "05",
          "odmStmNo": "xxxxx-xxxxx-yyyy"
        },
        "islDty": {
          "islAcklm": "Maaş Ödemesi",
          "krsTrf": {
            "krsMskIBAN": "-",
            "krsMskUnvan": "A**"
          }
        }
      },
      {
        "islTml": {
          "islNo": "244450000439",
          "refNo": "fd4452866180",
          "islTtr": "750",
          "prBrm": "TRY",
          "islGrckZaman": "2023-12-06T14:40:37+03:00",
          "kanal": "O",
          "brcAlc": "B",
          "islTur": "FAST",
          "islAmc": "07",
          "odmStmNo": "20231206|0067|1364202795"
        },
        "islDty": {
          "islAcklm": "GİDEN FAST - Fikret Çayır",
          "krsTrf": {
            "krsMskIBAN": "TR35******************8888",
            "krsMskUnvan": "Fi**** Ça****"
          }
        }
      },
      {
        "islTml": {
          "islNo": "456450000179",
          "refNo": "753454092780",
          "islTtr": "3500",
          "prBrm": "TRY",
          "islGrckZaman": "2023-12-06T16:11:21+03:00",
          "kanal": "M",
          "brcAlc": "B",
          "islTur": "KREDI_ODEMESI",
          "islAmc": "12"
        },
        "islDty": {
          "islAcklm": "2858735780347 no'lu kredi 3. taksit toplam ödeme tutarı ",
        }
      },
      {
        "islTml": {
          "islNo": "8665450000182",
          "refNo": "321553102004",
          "islTtr": "0.26",
          "prBrm": "TRY",
          "islGrckZaman": "2023-12-12T16:13:37+03:00",
          "kanal": "M",
          "brcAlc": "B",
          "islTur": "VERGI_ODEMESI",
          "islAmc": "07",
          "odmStmNo": "20231212|8000|1999529782"
        },
        "islDty": {
          "islAcklm": "BSMV ELEKTRONİK FON TRANSFERİ (EFT) ÜCRETİ-FAST/hakan kahraman",
          "krsTrf": {
            "krsMskIBAN": "TR93******************9999",
            "krsMskUnvan": "ha**** ka****"
          }
        }
      }
    ]
  }
  export const IslemlerResponse400={
    "id": "400f0fb2-730b-11e8-adc0-fa7ae01bbebc",
    "path": "/ohvps/hbh/s1.0/hesaplar/xrgwYsiNTdPwxbgh/islemler?hesapIslemBslTrh=2023-12-06T16%3A16%3A30%2B03%3A00&hesapIslemBtsTrh=2023-12-06T16%3A19%3A52%2B03%3A00&syfKytSayi=100&srlmKrtr=islGrckZaman&syfNo=1",
    "timestamp": "2021-08-13T09:55:23+03:00",
    "httpCode": 400,
    "httpMessage": "Bad Request",
    "moreInformation": "After activating your Open Banking channel, you can continue your transaction.",
    "moreInformationTr": "Açık Bankacılık kanalınızı aktifleştirdikten sonra işleminize devam edebilirsiniz.",
    "errorCode": "TR.OHVPS.Business.ConsentRevoked",
  }
  export const IslemlerResponse401={
    "id": "401f0fb2-730b-11e8-adc0-fa7ae01bbebc",
    "path": "/ohvps/hbh/s1.0/hesaplar/xrgwYsiNTdPwxbgh/islemler?hesapIslemBslTrh=2023-12-06T16%3A16%3A30%2B03%3A00&hesapIslemBtsTrh=2023-12-06T16%3A19%3A52%2B03%3A00&syfKytSayi=100&srlmKrtr=islGrckZaman&syfNo=1",
    "timestamp": "2021-08-13T09:55:23+03:00",
    "httpCode": 401,
    "httpMessage": "Unauthorized",
    "moreInformation": "Geçersiz Token",
    "moreInformationTr": "Invalid Token",
    "errorCode": "TR.OHVPS.Connection.InvalidToken"
  }
  export const IslemlerResponse403={
    "id": "403f0fb2-730b-11e8-adc0-fa7ae01bbebc",
    "path": "/ohvps/hbh/s1.0/hesaplar/xrgwYsiNTdPwxbgh/islemler?hesapIslemBslTrh=2023-12-06T16%3A16%3A30%2B03%3A00&hesapIslemBtsTrh=2023-12-06T16%3A19%3A52%2B03%3A00&syfKytSayi=100&srlmKrtr=islGrckZaman&syfNo=1",
    "timestamp": "2021-08-13T09:55:23+03:00",
    "httpCode": 403,
    "httpMessage": "Forbidden",
    "moreInformation": "X-JWS-Signature header not found in the TPP request",
    "moreInformationTr": "YOS ten gelen istekte X-JWS-Signature basligi bulunamadi.",
    "errorCode": "TR.OHVPS.Resource.MissingSignature"
  }
  export const IslemlerResponse404={
    "id": "404f0fb2-730b-11e8-adc0-fa7ae01bbebc",
    "path": "/ohvps/hbh/s1.0/hesaplar/xrgwYsiNTdPwxbgh/islemler?hesapIslemBslTrh=2023-12-06T16%3A16%3A30%2B03%3A00&hesapIslemBtsTrh=2023-12-06T16%3A19%3A52%2B03%3A00&syfKytSayi=100&srlmKrtr=islGrckZaman&syfNo=1",
    "timestamp": "2021-08-13T09:55:23+03:00",
    "httpCode": 404,
    "httpMessage": "Not Found",
    "moreInformation": "Resource not found",
    "moreInformationTr": "Kayıt bulunamadı",
    "errorCode": "TR.OHVPS.Resource.NotFound"
  }
  export const IslemlerResponse429={
    "id": "42916216-af41-ewb4-e5c6-5489b128e453",
    "path": "/ohvps/hbh/s1.0/hesaplar/xrgwYsiNTdPwxbgh/islemler?hesapIslemBslTrh=2023-12-06T16%3A16%3A30%2B03%3A00&hesapIslemBtsTrh=2023-12-06T16%3A19%3A52%2B03%3A00&syfKytSayi=100&srlmKrtr=islGrckZaman&syfNo=1",
    "timestamp": "2023-11-27T02:00:15+03:00",
    "httpCode": 429,
    "httpMessage": "Too Many Requests",
    "moreInformation": "The number of allowed requests has been exceeded.",
    "moreInformationTr": "İzin verilen istek sayısı aşıldı.",
    "errorCode": "TR.OHVPS.Connection.ExceededRate"
  }
  export const IslemlerResponse500={
    "id": "5004567-125e-4556-be26-994df1dsa8e1",
    "path": "/ohvps/hbh/s1.0/hesaplar/xrgwYsiNTdPwxbgh/islemler?hesapIslemBslTrh=2023-12-06T16%3A16%3A30%2B03%3A00&hesapIslemBtsTrh=2023-12-06T16%3A19%3A52%2B03%3A00&syfKytSayi=100&srlmKrtr=islGrckZaman&syfNo=1",
    "timestamp": "2023-11-27T00:50:13+03:00",
    "httpCode": 500,
    "httpMessage": "Internal Server Error",
    "moreInformation": "Sorry, the transaction has failed. Please try again later.",
    "moreInformationTr": "Özür dileriz işleminizi gerçekleştiremiyoruz. Lütfen daha sonra tekrar deneyiniz.",
    "errorCode": "TR.OHVPS.Server.ServiceUnavailable"
  }
  export const IslemlerResponse503={
    "id": "503506a6-0608-4db5-ad5b-723cepde545f",
    "path": "/ohvps/hbh/s1.0/hesaplar/xrgwYsiNTdPwxbgh/islemler?hesapIslemBslTrh=2023-12-06T16%3A16%3A30%2B03%3A00&hesapIslemBtsTrh=2023-12-06T16%3A19%3A52%2B03%3A00&syfKytSayi=100&srlmKrtr=islGrckZaman&syfNo=1",
    "timestamp": "2023-11-27T00:50:13+03:00",
    "httpCode": 503,
    "httpMessage": "Service Unavailable",
    "moreInformation": "Service Unavailable Error",
    "moreInformationTr": "Servis Hizmet Dışı Hatası",
    "errorCode": "TR.OHVPS.Server.ServiceUnavailable"
  }
  export const IslemlerResponse504={
    "id": "504506a6-0608-4db5-ad5b-723cepde545f",
    "path": "/ohvps/hbh/s1.0/hesaplar/xrgwYsiNTdPwxbgh/islemler?hesapIslemBslTrh=2023-12-06T16%3A16%3A30%2B03%3A00&hesapIslemBtsTrh=2023-12-06T16%3A19%3A52%2B03%3A00&syfKytSayi=100&srlmKrtr=islGrckZaman&syfNo=1",
    "timestamp": "2023-11-23T15:46:19+03:00",
    "httpCode": 504,
    "httpMessage": "Gateway Timeout",
    "moreInformation": "Gateway Timeout Exception",
    "moreInformationTr": "Servis Cevap Bekleme Zaman Aşımı",
    "errorCode": "TR.OHVPS.Server.InternalError"
  }
