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


export const responseTabs = [{
    ID: 1,
    Name: '201',
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
}
];

export const responseTabsHBHRiza = [{
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
        Value: 'ee396d39-5fdf-45ac-80e0-fe3a4ced6267'
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
    "rizaNo": "1178d476afc24468a7411019ea411053",
    "yetKod": "a238307640ba4b8ebbdc4835ca9a021c",
    "yetTip": "yet_kod",
    "rizaTip": "H"
}
export const ErisimBelirteciResponse200 =	{
  "erisimBelirteci": "eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJodHRwczovL2FwaS5ia20uY29tLnRyIiwiZXhwIjoxNzAwOTk1NzAzLCJpYXQiOjE3MDA5OTE1MDMsInJpemFfbm8iOiIxMDhlN2MwNzdjMGQ0N2M4Yjc1YjRiNWIzY2UwZGFiNSIsInNjb3BlIjpbIm9kZW1lX2VtcmkiXSwidW5pcXVlX25hbWUiOiJna2Rfc3ViamVjdCJ9.ZRlhYiVRJDcPSTsrSzh_pgOStq1e8to9BWIjikmM-86knfIVonTXAx6kBkReofj267Bg2ozCx2MeCKPYkmNCyA",
  "gecerlilikSuresi": 300,
  "yenilemeBelirteci": "eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJodHRwczovL2FwaS5ia20uY29tLnRyIiwiZXhwIjoxNzAyMjkxNDAzLCJpYXQiOjE3MDA5OTE1MDMsInJpemFfbm8iOiIxMDhlN2MwNzdjMGQ0N2M4Yjc1YjRiNWIzY2UwZGFiNSIsInNjb3BlIjpbIm9kZW1lX2VtcmkiXSwidW5pcXVlX25hbWUiOiJna2Rfc3ViamVjdCJ9.rUZv1pLPo07kVfsX8LMl9xkS2cepZXaUmLWz_y32NPPAciIrItF0idA-El33o8sc5hjdRx-LZSBQOq24O4kgag",
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
    Value: 'eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJodHRwczovL2FwaS5ia20uY29tLnRyIiwiZXhwIjoxNzAwOTk1NzAzLCJpYXQiOjE3MDA5OTE1MDMsInJpemFfbm8iOiIxMDhlN2MwNzdjMGQ0N2M4Yjc1YjRiNWIzY2UwZGFiNSIsInNjb3BlIjpbIm9kZW1lX2VtcmkiXSwidW5pcXVlX25hbWUiOiJna2Rfc3ViamVjdCJ9.ZRlhYiVRJDcPSTsrSzh_pgOStq1e8to9BWIjikmM-86knfIVonTXAx6kBkReofj267Bg2ozCx2MeCKPYkmNCyA'
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
      Value: 'eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5ia20uY29tLnRyIiwiZXhwIjoxNzAwNjQ5ODI1LCJpYXQiOjE3MDA2NDU5MjUsImJvZHkiOiJlNzcwNjgzNWU3YTI2OTNkOGU1YzQ3NjY2MjU5ZTdhOTQ0MTU0NTdDMTVFODJFQTVCODM5OTEwQUNEQzk3REJFIn0.VZBLdZScE4eGyqnxiVKzvVlU85BoYIBUGU_GCwOskpSdVVQUL7KtFKxNMPuzZ6gpfLX6mZS1j1FAFFpnDjTz9k65J7KYmDQor_DwMuazsr_m7XG9EyM3EDbnPOLi-xij8V2VcN6tBzVKK5MZ8oyP0Pv4hoBhMpLZKoo6vmS_yiammvxq9QY1UyKkPiqSfdvLZhK8XsZ3GXTEHNGLGJVd51pBzCZ1YHP6ILtUfZAU5Rq_r3bjA-hMxrBZOqPBjoAJstmiHsJ3bp2quJVmwzXEGBiSvQvZwFpkomRMRgLdkHQ4L1Fg4NnNZ4oEQJA_bLqL_I2pax2phc_47KVjK4udWg'
  },

];
export const odemeEmriYenilemeBelirteci={
    "rizaNo": "c8231dac7bf84bc999a8e3f1eeb21114",
    "yetTip": "yenileme_belirteci",
    "rizaTip": "H",
    "yenilemeBelirteci": "eyJ..."
  }

  export const OdemeEmriRequestBody={
    "rzBlg": {
      "rizaNo": "ecc75c946a9a4531a54df887de0c70c5",
      "olusZmn": "2023-11-15T10:09:47+03:00",
      "gnclZmn": "2023-11-15T10:10:09+03:00",
      "rizaDrm": "K"
    },
    "katilimciBlg": {
      "hhsKod": "8000",
      "yosKod": "8000"
    },
    "gkd": {
      "yetYntm": "Y",
      "yonAdr": "https://tripsit.bkm.com.tr/boss/ab/yos-simulator-ui-v11/8000?drmKod=da18b3a5-0cf2-4629-9854-d551e1aa0671",
      "yetTmmZmn": "2023-11-15T10:14:47+03:00",
      "hhsYonAdr": "https://tripsit.bkm.com.tr/boss/ab/hhs-simulator-ui-v11/8000/odeme-emri-rizasi/ecc75c946a9a4531a54df887de0c70c5/goruntule"
    },
    "odmBsltm": {
      "kmlk": {
        "kmlkTur": "K",
        "kmlkVrs": "77121323400",
        "ohkTur": "B"
      },
      "islTtr": {
        "prBrm": "TRY",
        "ttr": "0.09"
      },
      "gon": {
        "unv": "AHMET YILMAZ",
        "hspNo": "TR8008000G2BGNZ90MXSE96SW2"
      },
      "alc": {
        "unv": "Serkan Eren",
        "hspNo": "TR320010009999901234567890"
      },
      "odmAyr": {
        "odmKynk": "O",
        "odmAmc": "04",
        "refBlg": "Y-2701852-202302",
        "odmAcklm": "İıçöğüş ÇÖĞÜŞ",
        "ohkMsj": "ÖHK Mesajı",
        "odmStm": "F",
        "bekOdmZmn": "2023-11-15T10:19:47+03:00"
      }
    },
    "isyOdmBlg": {
      "isyKtgKod": "5732",
      "altIsyKtgKod": "5732",
      "genelUyeIsyeriNo": "01234567"
    }
  }

  export const odemeEmriResponse201 = {
    "rzBlg": {
      "rizaNo": "33ef1107003540faa4a8c917a711e6da",
      "olusZmn": "2021-07-09T14:11:55+03:00",
      "gnclZmn": "2021-07-09T14:13:55+03:00",
      "rizaDrm": "E"
    },
    "katilimciBlg": {
      "hhsKod": "8000",
      "yosKod": "8000"
    },
    "gkd": {
      "yetYntm": "Y",
      "yonAdr": "https://boss-test.bkm.com.tr/boss/ab/yosSimulator/8000/odeme-emri-rizasi/onay",
      "hhsYonAdr": "https://boss-test.bkm.com.tr/boss/ab/hhsSimulator/8000/odeme-emri-rizasi/33ef1107003540faa4a8c917a711e6da/goruntule",
      "yetTmmZmn": "2021-07-09T14:16:55+03:00"
    },
    "emrBlg": {
      "odmEmriNo": "3234dfge235235werwe43543534ef",
      "odmEmriZmn": "2021-07-09T14:16:55+03:00"
    },
    "odmBsltm": {
      "kmlk": {
        "kmlkTur": "K",
        "kmlkVrs": "77121323400",
        "ohkTur": "B"
      },
      "islTtr": {
        "prBrm": "TRY",
        "ttr": "13.21"
      },
      "gon": {
        "unv": "AHMET YILMAZ",
        "hspNo": "TR1000010XP9UDWM4Z6LVJKS45"
      },
      "alc": {
        "unv": "AHMET YILMAZ",
        "hspNo": "TR1000010XP9UDWM4Z6LVJKS45"
      },
      "odmAyr": {
        "odmKynk": "A",
        "odmDrm": "01",
        "odmAmc": "01",
        "refBlg": "Y-2701852-202011",
        "odmAcklm": "Kira bedeli",
        "odmStm": "F"
      },
      "obhsMsrfTtr": {
        "prBrm": "TRY",
        "ttr": "1.00"
      }
    }
  }

  export const odemeEmriResponse400={
    "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
    "path": "/obh/odeme-emri",
    "timestamp": "2021-08-13T09:55:23+03:00",
    "httpCode": 400,
    "httpMessage": "Not Found",
    "moreInformation": "Resource Schema validation error",
    "moreInformationTr": "Alan doğrulama hatası",
    "errorCode": "TR.OHVPS.Resource.InvalidFormat",
    "fieldErrors": [
      {
        "objectName": "odemeEmriRizasi",
        "field": "rizaNo",
        "messageTr": "boyut '1' ile '128' arasında olmalı",
        "message": "size must be between '1' and '128'",
        "code": "TR.OHVPS.Field.Invalid"
      }
    ]
  }

  export const odemeEmriResponse401 ={
    "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
    "path": "/obh/odeme-emri",
    "timestamp": "2021-08-13T09:55:23+03:00",
    "httpCode": 401,
    "httpMessage": "Not Found",
    "moreInformation": "Resource Schema validation error",
    "moreInformationTr": "Alan doğrulama hatası",
    "errorCode": "TR.OHVPS.Resource.InvalidFormat",
    "fieldErrors": [
      {
        "objectName": "odemeEmriRizasi",
        "field": "rizaNo",
        "messageTr": "boyut '1' ile '128' arasında olmalı",
        "message": "size must be between '1' and '128'",
        "code": "TR.OHVPS.Field.Invalid"
      }
    ]
  }

  export const odemeEmriResponse403={
    "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
    "path": "/obh/odeme-emri",
    "timestamp": "2021-08-13T09:55:23+03:00",
    "httpCode": 403,
    "httpMessage": "Not Found",
    "moreInformation": "Resource Schema validation error",
    "moreInformationTr": "Alan doğrulama hatası",
    "errorCode": "TR.OHVPS.Resource.InvalidFormat",
    "fieldErrors": [
      {
        "objectName": "odemeEmriRizasi",
        "field": "rizaNo",
        "messageTr": "boyut '1' ile '128' arasında olmalı",
        "message": "size must be between '1' and '128'",
        "code": "TR.OHVPS.Field.Invalid"
      }
    ]
  }

  export const odemeEmriResponse404= {
    "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
    "path": "/obh/odeme-emri",
    "timestamp": "2021-08-13T09:55:23+03:00",
    "httpCode": 401,
    "httpMessage": "Not Found",
    "moreInformation": "Resource Schema validation error",
    "moreInformationTr": "Alan doğrulama hatası",
    "errorCode": "TR.OHVPS.Resource.InvalidFormat",
    "fieldErrors": [
      {
        "objectName": "odemeEmriRizasi",
        "field": "rizaNo",
        "messageTr": "boyut '1' ile '128' arasında olmalı",
        "message": "size must be between '1' and '128'",
        "code": "TR.OHVPS.Field.Invalid"
      }
    ]
  }

  export const HesaplarResponse200=[
    {
      "rizaNo": "e785e48e345f4e91a1d611f4b65c521a",
      "hspTml": {
        "hspRef": "22SDKJ29DJW32EDJ3EJ2E3JIU8SDDS2",
        "subeAdi": "Ulus Şubesi",
        "hspNo": "TR123456789012345678901234",
        "kisaAd": "Maaş Hesabım",
        "prBrm": "TRY",
        "hspTur": "T",
        "hspTip": "VADESIZ",
        "hspUrunAdi": "string",
        "hspDrm": "AKTIF",
        "hspShb": "AHMET YILMAZ"
      },
      "hspDty": {
        "hspAclsTrh": "2021-03-25T06:30:22+03:00"
      }
    }
  ]

  export const HesaplarResponse400={
    "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
    "path": "/hbh/hesap-bilgisi",
    "timestamp": "2021-08-13T09:55:23+03:00",
    "httpCode": 401,
    "httpMessage": "Not Found",
    "moreInformation": "Resource Schema validation error",
    "moreInformationTr": "Alan doğrulama hatası",
    "errorCode": "TR.OHVPS.Resource.InvalidFormat",
    "fieldErrors": [
      {
        "objectName": "odemeEmriRizasi",
        "field": "rizaNo",
        "messageTr": "boyut '1' ile '128' arasında olmalı",
        "message": "size must be between '1' and '128'",
        "code": "TR.OHVPS.Field.Invalid"
      }
    ]
  }

  export const HesaplarResponse401={
    "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
    "path": "/hbh/hesap-bilgisi",
    "timestamp": "2021-08-13T09:55:23+03:00",
    "httpCode": 401,
    "httpMessage": "Not Found",
    "moreInformation": "Resource Schema validation error",
    "moreInformationTr": "Alan doğrulama hatası",
    "errorCode": "TR.OHVPS.Resource.InvalidFormat",
    "fieldErrors": [
      {
        "objectName": "odemeEmriRizasi",
        "field": "rizaNo",
        "messageTr": "boyut '1' ile '128' arasında olmalı",
        "message": "size must be between '1' and '128'",
        "code": "TR.OHVPS.Field.Invalid"
      }
    ]
  }


  export const HesaplarResponse403={
    "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
    "path": "/hbh/hesap-bilgisi",
    "timestamp": "2021-08-13T09:55:23+03:00",
    "httpCode": 401,
    "httpMessage": "Not Found",
    "moreInformation": "Resource Schema validation error",
    "moreInformationTr": "Alan doğrulama hatası",
    "errorCode": "TR.OHVPS.Resource.InvalidFormat",
    "fieldErrors": [
      {
        "objectName": "odemeEmriRizasi",
        "field": "rizaNo",
        "messageTr": "boyut '1' ile '128' arasında olmalı",
        "message": "size must be between '1' and '128'",
        "code": "TR.OHVPS.Field.Invalid"
      }
    ]
  }

  export const HesaplarResponse404={
    "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
    "path": "/hbh/hesap-bilgisi",
    "timestamp": "2021-08-13T09:55:23+03:00",
    "httpCode": 401,
    "httpMessage": "Not Found",
    "moreInformation": "Resource Schema validation error",
    "moreInformationTr": "Alan doğrulama hatası",
    "errorCode": "TR.OHVPS.Resource.InvalidFormat",
    "fieldErrors": [
      {
        "objectName": "odemeEmriRizasi",
        "field": "rizaNo",
        "messageTr": "boyut '1' ile '128' arasında olmalı",
        "message": "size must be between '1' and '128'",
        "code": "TR.OHVPS.Field.Invalid"
      }
    ]
  }


  export const BakiyeResponse200=[
    {
      "hspRef": "22SDKJ29DJW32EDJ3EJ2E3JIU8SDDS2",
      "bky": {
        "bkyTtr": "13.21",
        "blkTtr": "13.21",
        "prBrm": "TRY",
        "bkyZmn": "2021-03-25T06:30:22+03:00",
        "krdHsp": {
          "kulKrdTtr": "13.21",
          "krdDhlGstr": "1"
        }
      }
    }
  ]

  export const BakiyeResponse400={
    "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
    "path": "/hbh/hesap-bilgisi",
    "timestamp": "2021-08-13T09:55:23+03:00",
    "httpCode": 401,
    "httpMessage": "Not Found",
    "moreInformation": "Resource Schema validation error",
    "moreInformationTr": "Alan doğrulama hatası",
    "errorCode": "TR.OHVPS.Resource.InvalidFormat",
    "fieldErrors": [
      {
        "objectName": "odemeEmriRizasi",
        "field": "rizaNo",
        "messageTr": "boyut '1' ile '128' arasında olmalı",
        "message": "size must be between '1' and '128'",
        "code": "TR.OHVPS.Field.Invalid"
      }
    ]
  }

  export const BakiyeResponse401={
    "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
    "path": "/hbh/hesap-bilgisi",
    "timestamp": "2021-08-13T09:55:23+03:00",
    "httpCode": 401,
    "httpMessage": "Not Found",
    "moreInformation": "Resource Schema validation error",
    "moreInformationTr": "Alan doğrulama hatası",
    "errorCode": "TR.OHVPS.Resource.InvalidFormat",
    "fieldErrors": [
      {
        "objectName": "odemeEmriRizasi",
        "field": "rizaNo",
        "messageTr": "boyut '1' ile '128' arasında olmalı",
        "message": "size must be between '1' and '128'",
        "code": "TR.OHVPS.Field.Invalid"
      }
    ]
  }


  export const BakiyeResponse403= {
    "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
    "path": "/hbh/hesap-bilgisi",
    "timestamp": "2021-08-13T09:55:23+03:00",
    "httpCode": 401,
    "httpMessage": "Not Found",
    "moreInformation": "Resource Schema validation error",
    "moreInformationTr": "Alan doğrulama hatası",
    "errorCode": "TR.OHVPS.Resource.InvalidFormat",
    "fieldErrors": [
      {
        "objectName": "odemeEmriRizasi",
        "field": "rizaNo",
        "messageTr": "boyut '1' ile '128' arasında olmalı",
        "message": "size must be between '1' and '128'",
        "code": "TR.OHVPS.Field.Invalid"
      }
    ]
  }


  export const BakiyeResponse404={
    "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
    "path": "/hbh/hesap-bilgisi",
    "timestamp": "2021-08-13T09:55:23+03:00",
    "httpCode": 401,
    "httpMessage": "Not Found",
    "moreInformation": "Resource Schema validation error",
    "moreInformationTr": "Alan doğrulama hatası",
    "errorCode": "TR.OHVPS.Resource.InvalidFormat",
    "fieldErrors": [
      {
        "objectName": "odemeEmriRizasi",
        "field": "rizaNo",
        "messageTr": "boyut '1' ile '128' arasında olmalı",
        "message": "size must be between '1' and '128'",
        "code": "TR.OHVPS.Field.Invalid"
      }
    ]
  }


  export const IslemlerResponse200={
    "hspRef": "22SDKJ29DJW32EDJ3EJ2E3JIU8SDDS2",
    "isller": [
      {
        "islTml": {
          "islNo": "AB1234567890",
          "refNo": "CD0987654321",
          "islTtr": "1.99",
          "prBrm": "TRY",
          "islGrckZaman": "2021-03-25T06:30:22+03:00",
          "brcAlc": "B",
          "kanal": "A",
          "islTur": "PARA_YATIRMA",
          "islAmc": "12",
          "odmStmNo": "xxxxx-xxxxx-yyyy"
        },
        "islDty": {
          "islAcklm": "Maaş Ödemesi",
          "krsTrf": {
            "krsMskIBAN": "-",
            "krsMskUnvan": "A**"
          }
        }
      }
    ]
  }

  export const IslemlerResponse400={
    "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
    "path": "/hbh/hesap-bilgisi",
    "timestamp": "2021-08-13T09:55:23+03:00",
    "httpCode": 401,
    "httpMessage": "Not Found",
    "moreInformation": "Resource Schema validation error",
    "moreInformationTr": "Alan doğrulama hatası",
    "errorCode": "TR.OHVPS.Resource.InvalidFormat",
    "fieldErrors": [
      {
        "objectName": "odemeEmriRizasi",
        "field": "rizaNo",
        "messageTr": "boyut '1' ile '128' arasında olmalı",
        "message": "size must be between '1' and '128'",
        "code": "TR.OHVPS.Field.Invalid"
      }
    ]
  }

  export const IslemlerResponse401={
    "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
    "path": "/hbh/hesap-bilgisi",
    "timestamp": "2021-08-13T09:55:23+03:00",
    "httpCode": 401,
    "httpMessage": "Not Found",
    "moreInformation": "Resource Schema validation error",
    "moreInformationTr": "Alan doğrulama hatası",
    "errorCode": "TR.OHVPS.Resource.InvalidFormat",
    "fieldErrors": [
      {
        "objectName": "odemeEmriRizasi",
        "field": "rizaNo",
        "messageTr": "boyut '1' ile '128' arasında olmalı",
        "message": "size must be between '1' and '128'",
        "code": "TR.OHVPS.Field.Invalid"
      }
    ]
  }

  export const IslemlerResponse403={
    "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
    "path": "/hbh/hesap-bilgisi",
    "timestamp": "2021-08-13T09:55:23+03:00",
    "httpCode": 401,
    "httpMessage": "Not Found",
    "moreInformation": "Resource Schema validation error",
    "moreInformationTr": "Alan doğrulama hatası",
    "errorCode": "TR.OHVPS.Resource.InvalidFormat",
    "fieldErrors": [
      {
        "objectName": "odemeEmriRizasi",
        "field": "rizaNo",
        "messageTr": "boyut '1' ile '128' arasında olmalı",
        "message": "size must be between '1' and '128'",
        "code": "TR.OHVPS.Field.Invalid"
      }
    ]
  }

  export const IslemlerResponse404={
    "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
    "path": "/hbh/hesap-bilgisi",
    "timestamp": "2021-08-13T09:55:23+03:00",
    "httpCode": 401,
    "httpMessage": "Not Found",
    "moreInformation": "Resource Schema validation error",
    "moreInformationTr": "Alan doğrulama hatası",
    "errorCode": "TR.OHVPS.Resource.InvalidFormat",
    "fieldErrors": [
      {
        "objectName": "odemeEmriRizasi",
        "field": "rizaNo",
        "messageTr": "boyut '1' ile '128' arasında olmalı",
        "message": "size must be between '1' and '128'",
        "code": "TR.OHVPS.Field.Invalid"
      }
    ]
  }