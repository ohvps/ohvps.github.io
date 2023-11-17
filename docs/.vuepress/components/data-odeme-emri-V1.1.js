export const mainTabs = [{
    ID: 1,
    Name: 'Ödeme Emri Rızası',
   
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
    Name: 'Ödeme Emri',
  
},
{
    ID: 6,
    Name: 'Yenileme Belirteci',
  
},
{
    ID: 7,
    Name: 'Ödeme Emri Sorgula',
   
  
},

{
    ID: 8,
    Name: 'Swagger File',
   
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
}
];



export const odemeEmriRizaHeader = [
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



export const odemeEmriRizaResponseHeader = [
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
        Key: 'content-type',
        Value: 'application/json'
    },
    {
        ID: 4,
        Key: 'X-JWS-Signature',
        Value: 'eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5ia20uY29tLnRyIiwiZXhwIjoxNjk5NDQ2NzY2LCJpYXQiOjE2OTk0NDI4NjYsImJvZHkiOiIwNmQ5YzAxODViMDRkNDAzZGVjZjIyMTczYTFiMjhlZTBGQzUyNjIwNzQ1N0IwOTcyRTlCRjRGRUFERDY5Q0MwIn0.ET19olrqy_ezfULZqkIiNxyWO8gdmuQk9Roc1QuculIPTQL7rpxIWq4wVS_tlUdSxmSMs6nIS31rpL-yGtdZ01bKKfjJSynw3m2-Gw-w5LFdH7S3jCHiZULK2ucb00GvCRfP7TPKEnLvyQvbz_yG4FGn4fFt26rBnofenGzKMii1vJ2-_1GWxJz5VGFxfGsHOTWG_0Ss6nrAJ6UWnaUzTb1ZYPu10u1CbP_tvp4EU42I_csoOZt6-we8Xhy5khAtHzA45dWDJDiyfwFs-JFIq2qVkX808rQ71dXm3qElSB_PLAHDvB41nztTNjOxdoVBSs3gYTGt2KoptnMuY9QNKQ        '
    },
    {
        ID: 1,
        Key: 'x-request-id',
        Value: 'aec70909-2ff9-4d5b-9829-e6e7de88c2a6'
    },
    {
        ID: 7,
        Key: 'x-group-id',
        Value: 'ee396d39-5fdf-45ac-80e0-fe3a4ced6267'
    },];

export const OdemeEmriRızasiRequest={
    "katilimciBlg": {
        "hhsKod": "8000",
        "yosKod": "2501"
    },
    "gkd": {
        "yetYntm": "Y",
        "yonAdr": "https://tripsit.bkm.com.tr/boss/ab/yos-simulator-ui-v11/2501?drmKod=c2cf7367-98c1-4511-8195-99eff2cbb4b0"
    },
    "odmBsltm": {
        "kmlk": {
            "ohkTur": "B"
        },
        "islTtr": {
            "prBrm": "TRY",
            "ttr": "0.09"
        },
        "alc": {
            "hspNo": "TR320010009999901234567890",
            "unv": "Serkan Eren"
        },
        "odmAyr": {
            "odmAcklm": "İıçöğüş ÇÖĞÜŞ",
            "odmAmc": "04",
            "odmKynk": "O",
            "refBlg": "Y-2701852-202302"
        }
    },
    "isyOdmBlg": {
        "isyKtgKod": "5732",
        "altIsyKtgKod": "5732",
        "genelUyeIsyeriNo": "01234567"
    }
}
export const OdemeEmriRizasi201 = {
    "rzBlg": {
        "rizaNo": "58af49355aee43e08c1b4e5aaca7d726",
        "olusZmn": "2021-07-09T15:19:12+03:00",
        "gnclZmn": "2021-07-09T16:19:12+03:00",
        "rizaDrm": "B"
    },
    "katilimciBlg": {
        "hhsKod": "8000",
        "yosKod": "8000"
    },
    "gkd": {
        "yetYntm": "Y",
        "yonAdr": "https://boss-test.bkm.com.tr/boss/ab/yosSimulator/8000/odeme-emri-rizasi/onay",
        "yetTmmZmn": "2021-07-09T12:42:44+03:00",
        "hhsYonAdr": "https://boss-test.bkm.com.tr/boss/ab/hhsSimulator/8000/odeme-emri-rizasi/58af49355aee43e08c1b4e5aaca7d726/goruntule"
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
            "odmAmc": "01",
            "refBlg": "Y-2701852-202011",
            "odmAcklm": "Kira bedeli",
            "ohkMsj": "Ödeme rızası talebi alındı",
            "odmStm": "H",
            "bekOdmZmn": "2021-01-28T12:42:44+03:00"
        },
        "obhsMsrfTtr": {
            "prBrm": "TRY",
            "ttr": "1.00"
        },
        "hhsMsrfTtr": {
            "prBrm": "TRY",
            "ttr": "1.00"
        }
    }
}
export const OdemeEmriRizasi400 = {
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

export const OdemeEmriRizasi401 = {
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

export const OdemeEmriRizasi403 = {
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

export const OdemeEmriRizasi404 = {
    "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
    "path": "/obh/odeme-emri",
    "timestamp": "2021-08-13T09:55:23+03:00",
    "httpCode": 404,
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

export const ErisimBerliteciRequest ={
    "rizaNo": "1178d476afc24468a7411019ea411053",
    "yetKod": "a238307640ba4b8ebbdc4835ca9a021c",
    "yetTip": "yet_kod",
    "rizaTip": "O"
}
export const ErisimBelirteciResponse200=	
{
  "erisimBelirteci": "abc123",
  "gecerlilikSuresi": 86400,
  "yenilemeBelirteci": "eyJ...",
  "yenilemeBelirteciGecerlilikSuresi": 86400
};

export const ErisimBelirteciResponse400={
    "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
    "path": "/gkd/erisim-belirteci",
    "timestamp": "2021-08-13T09:55:23+03:00",
    "httpCode": 400,
    "httpMessage": "Not Found",
    "moreInformation": "Resource Schema validation error",
    "moreInformationTr": "Alan doğrulama hatası",
    "errorCode": "TR.OHVPS.Resource.InvalidFormat",
    "fieldErrors": [
      {
        "objectName": "erisimBelirteci",
        "field": "rizaNo",
        "messageTr": "boyut '1' ile '128' arasında olmalı",
        "message": "size must be between '1' and '128'",
        "code": "TR.OHVPS.Field.Invalid"
      }
    ]
  }

  export const ErisimBelirteciResponse401={
    "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
    "path": "/gkd/erisim-belirteci",
    "timestamp": "2021-08-13T09:55:23+03:00",
    "httpCode": 401,
    "httpMessage": "Not Found",
    "moreInformation": "Resource Schema validation error",
    "moreInformationTr": "Alan doğrulama hatası",
    "errorCode": "TR.OHVPS.Resource.InvalidFormat",
    "fieldErrors": [
      {
        "objectName": "erisimBelirteci",
        "field": "rizaNo",
        "messageTr": "boyut '1' ile '128' arasında olmalı",
        "message": "size must be between '1' and '128'",
        "code": "TR.OHVPS.Field.Invalid"
      }
    ]
  }

  export const ErisimBelirteciResponse403={
    "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
    "path": "/gkd/erisim-belirteci",
    "timestamp": "2021-08-13T09:55:23+03:00",
    "httpCode": 403,
    "httpMessage": "Not Found",
    "moreInformation": "Resource Schema validation error",
    "moreInformationTr": "Alan doğrulama hatası",
    "errorCode": "TR.OHVPS.Resource.InvalidFormat",
    "fieldErrors": [
      {
        "objectName": "erisimBelirteci",
        "field": "rizaNo",
        "messageTr": "boyut '1' ile '128' arasında olmalı",
        "message": "size must be between '1' and '128'",
        "code": "TR.OHVPS.Field.Invalid"
      }
    ]
  }

  export const ErisimBelirteciResponse404={
    "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
    "path": "/gkd/erisim-belirteci",
    "timestamp": "2021-08-13T09:55:23+03:00",
    "httpCode": 403,
    "httpMessage": "Not Found",
    "moreInformation": "Resource Schema validation error",
    "moreInformationTr": "Alan doğrulama hatası",
    "errorCode": "TR.OHVPS.Resource.InvalidFormat",
    "fieldErrors": [
      {
        "objectName": "erisimBelirteci",
        "field": "rizaNo",
        "messageTr": "boyut '1' ile '128' arasında olmalı",
        "message": "size must be between '1' and '128'",
        "code": "TR.OHVPS.Field.Invalid"
      }
    ]
  }

export const odemeEmriYenilemeBelirteci={
    "rizaNo": "c8231dac7bf84bc999a8e3f1eeb21114",
    "yetTip": "yenileme_belirteci",
    "rizaTip": "O",
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