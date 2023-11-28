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
    Name: 'Bakiyler',
   
  
},
{
  ID: 7,
  Name: 'İşlemler',
 

},
{
  ID: 8,
  Name: 'Yenileme Belirteci',

},

{
    ID: 9,
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

export const hesapBilgisiRızasiRequest={
  "katilimciBlg": {
    "hhsKod": "8000",
    "yosKod": "8000"
  },
  "gkd": {
    "yetYntm": "Y",
    "yonAdr": "https://example.com"
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
        "03"
      ],
      "erisimIzniSonTrh": "2021-06-30T06:30:22+03:00"
    }
  }
}
export const HesapBilgisiRizasi201 = {
  "rzBlg": {
    "rizaNo": "e785e48e345f4e91a1d611f4b65c521a",
    "olusZmn": "2021-07-09T15:27:53+03:00",
    "gnclZmn": "2021-07-09T15:27:53+03:00",
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
    "yonAdr": "https://example.com",
    "yetTmmZmn": "2021-07-09T15:32:53+03:00",
    "hhsYonAdr": "https://boss-test.bkm.com.tr/boss/ab/hhsSimulator/8000/hesap-bilgisi-rizasi/e785e48e345f4e91a1d611f4b65c521a/goruntule"
  },
  "hspBlg": {
    "iznBlg": {
      "iznTur": [
        "01",
        "03"
      ],
      "erisimIzniSonTrh": "2022-01-09T15:21:56+03:00+03:00"
    },
    "ayrBlg": {
      "ohkMsj": "ÖHK Mesajı"
    }
  }
}
export const HesapBilgisiRizasi400 = {
  "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
  "path": "/hbh/hesap-bilgisi",
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

export const HesapBilgisiRizasi401 = {
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

export const HesapBilgisiRizasi403 = {
  "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
  "path": "/hbh/hesap-bilgisi",
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

export const HesapBilgisiRizasi404 = {
  "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
  "path": "/hbh/hesap-bilgisi",
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
    "rizaTip": "H"
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