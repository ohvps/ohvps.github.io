export const mainTabs = [{
    ID: 1,
    Name: 'OAS - Olay Abonelik API',
   
}, {
    ID: 2,
    Name: "OAS API Swagger",
   
}, {
    ID: 3,
    Name: 'ODS - Olay Dinleme API',
   
  
}, {
    ID: 4,
    Name: 'ODS API Swagger',
   
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

export const responseTabsOds = [{
  ID: 1,
  Name: '202',
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




export const requestHeaders = [
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
        ID: 4,
        Key: 'X-JWS-Signature',
        Value: 'eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5ia20uY29tLnRyIiwiZXhwIjoxNjk5NDQ2NzY2LCJpYXQiOjE2OTk0NDI4NjYsImJvZHkiOiIwNmQ5YzAxODViMDRkNDAzZGVjZjIyMTczYTFiMjhlZTBGQzUyNjIwNzQ1N0IwOTcyRTlCRjRGRUFERDY5Q0MwIn0.ET19olrqy_ezfULZqkIiNxyWO8gdmuQk9Roc1QuculIPTQL7rpxIWq4wVS_tlUdSxmSMs6nIS31rpL-yGtdZ01bKKfjJSynw3m2-Gw-w5LFdH7S3jCHiZULK2ucb00GvCRfP7TPKEnLvyQvbz_yG4FGn4fFt26rBnofenGzKMii1vJ2-_1GWxJz5VGFxfGsHOTWG_0Ss6nrAJ6UWnaUzTb1ZYPu10u1CbP_tvp4EU42I_csoOZt6-we8Xhy5khAtHzA45dWDJDiyfwFs-JFIq2qVkX808rQ71dXm3qElSB_PLAHDvB41nztTNjOxdoVBSs3gYTGt2KoptnMuY9QNKQ        '
    },
    {
        ID: 1,
        Key: 'X-Request-ID',
        Value: 'aec70909-2ff9-4d5b-9829-e6e7de88c2a6'
    },
    {
        ID: 8,
        Key: 'Authorization',
        Value: 'Bearer ey..............'
    },

   ];



export const responseHeaders = [
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
   ];



export const OlayAbonelikRequest ={
  "katilimciBlg": {
    "hhsKod": "8000",
    "yosKod": "8000"
  },
  "abonelikTipleri": [
    {
      "olayTipi": "KAYNAK_GUNCELLENDI",
      "kaynakTipi": "BAKIYE"
    }
  ]
}

export const OlayAbonelikResponse201={
  "katilimciBlg": {
    "hhsKod": "8000",
    "yosKod": "8000"
  },
  "olayAbonelikNo": "e486da8c-9896-427e-84e3-6118c8b193f7",
  "olusturmaZamani": "2023-04-13T09:55:23+03:00",
  "guncellemeZamani": "2023-04-13T09:55:23+03:00",
  "abonelikTipleri": [
    {
      "olayTipi": "KAYNAK_GUNCELLENDI",
      "kaynakTipi": "BAKIYE"
    }
  ]
}

export const OlayAbonelikResponse400={
  "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
  "path": "/ohvps/oas/s1.1/olay-abonelik",
  "timestamp": "2023-04-13T09:55:23+03:00",
  "httpCode": 400,
  "httpMessage": "Bad Request",
  "moreInformation": "Resource Schema validation error",
  "moreInformationTr": "Alan doğrulama hatası",
  "errorCode": "TR.OHVPS.Resource.InvalidFormat",
  "fieldErrors": [
    {
      "objectName": "yos",
      "field": "kod",
      "messageTr": "boyut '4' ile '4' arasında olmalı",
      "message": "size must be between '4' and '4'",
      "code": "TR.OHVPS.Field.Invalid"
    }
  ]
}

export const OlayAbonelikResponse401={
  "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
  "path": "/ohvps/oas/s1.1/olay-abonelik",
  "timestamp": "2023-04-13T09:55:23+03:00",
  "httpCode": 400,
  "httpMessage": "Bad Request",
  "moreInformation": "Resource Schema validation error",
  "moreInformationTr": "Alan doğrulama hatası",
  "errorCode": "TR.OHVPS.Resource.InvalidFormat",
  "fieldErrors": [
    {
      "objectName": "yos",
      "field": "kod",
      "messageTr": "boyut '4' ile '4' arasında olmalı",
      "message": "size must be between '4' and '4'",
      "code": "TR.OHVPS.Field.Invalid"
    }
  ]
}

export const OlayAbonelikResponse403={
  "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
  "path": "/ohvps/oas/s1.1/olay-abonelik",
  "timestamp": "2023-04-13T09:55:23+03:00",
  "httpCode": 400,
  "httpMessage": "Bad Request",
  "moreInformation": "Resource Schema validation error",
  "moreInformationTr": "Alan doğrulama hatası",
  "errorCode": "TR.OHVPS.Resource.InvalidFormat",
  "fieldErrors": [
    {
      "objectName": "yos",
      "field": "kod",
      "messageTr": "boyut '4' ile '4' arasında olmalı",
      "message": "size must be between '4' and '4'",
      "code": "TR.OHVPS.Field.Invalid"
    }
  ]
}

export const OlayAbonelikResponse404={
  "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
  "path": "/ohvps/oas/s1.1/olay-abonelik",
  "timestamp": "2023-04-13T09:55:23+03:00",
  "httpCode": 400,
  "httpMessage": "Bad Request",
  "moreInformation": "Resource Schema validation error",
  "moreInformationTr": "Alan doğrulama hatası",
  "errorCode": "TR.OHVPS.Resource.InvalidFormat",
  "fieldErrors": [
    {
      "objectName": "yos",
      "field": "kod",
      "messageTr": "boyut '4' ile '4' arasında olmalı",
      "message": "size must be between '4' and '4'",
      "code": "TR.OHVPS.Field.Invalid"
    }
  ]
}




export const OlayDinlemeRequest ={
  "katilimciBlg": {
    "hhsKod": "8000",
    "yosKod": "8000"
  },
  "olaylar": [
    {
      "olayNo": "a9ca2110-23c2-4685-ad76-563f7f1cf75b",
      "olayZamani": "2023-04-13T09:55:23+03:00",
      "olayTipi": "KAYNAK_GUNCELLENDI",
      "kaynakTipi": "BAKIYE",
      "kaynakNo": "c7050930-f77f-4644-b546-964583aebdc3"
    }
  ]
}


export const OlayDinlemeResponse202 ="Accepted";

export const OlayDinlemeResponse400={
  "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
  "path": "/ohvps/ods/s1.1/olay-dinleme",
  "timestamp": "2023-04-13T09:55:23+03:00",
  "httpCode": 400,
  "httpMessage": "Bad Request",
  "moreInformation": "Resource Schema validation error",
  "moreInformationTr": "Alan doğrulama hatası",
  "errorCode": "TR.OHVPS.Resource.InvalidFormat",
  "fieldErrors": [
    {
      "objectName": "yos",
      "field": "kod",
      "messageTr": "boyut '4' ile '4' arasında olmalı",
      "message": "size must be between '4' and '4'",
      "code": "TR.OHVPS.Field.Invalid"
    }
  ]
}

export const OlayDinlemeResponse401={
  "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
  "path": "/ohvps/ods/s1.1/olay-dinleme",
  "timestamp": "2023-04-13T09:55:23+03:00",
  "httpCode": 400,
  "httpMessage": "Bad Request",
  "moreInformation": "Resource Schema validation error",
  "moreInformationTr": "Alan doğrulama hatası",
  "errorCode": "TR.OHVPS.Resource.InvalidFormat",
  "fieldErrors": [
    {
      "objectName": "yos",
      "field": "kod",
      "messageTr": "boyut '4' ile '4' arasında olmalı",
      "message": "size must be between '4' and '4'",
      "code": "TR.OHVPS.Field.Invalid"
    }
  ]
}

export const OlayDinlemeResponse403={
  "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
  "path": "/ohvps/ods/s1.1/olay-dinleme",
  "timestamp": "2023-04-13T09:55:23+03:00",
  "httpCode": 400,
  "httpMessage": "Bad Request",
  "moreInformation": "Resource Schema validation error",
  "moreInformationTr": "Alan doğrulama hatası",
  "errorCode": "TR.OHVPS.Resource.InvalidFormat",
  "fieldErrors": [
    {
      "objectName": "yos",
      "field": "kod",
      "messageTr": "boyut '4' ile '4' arasında olmalı",
      "message": "size must be between '4' and '4'",
      "code": "TR.OHVPS.Field.Invalid"
    }
  ]
}

export const OlayDinlemeResponse404={
  "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
  "path": "/ohvps/ods/s1.1/olay-dinleme",
  "timestamp": "2023-04-13T09:55:23+03:00",
  "httpCode": 400,
  "httpMessage": "Bad Request",
  "moreInformation": "Resource Schema validation error",
  "moreInformationTr": "Alan doğrulama hatası",
  "errorCode": "TR.OHVPS.Resource.InvalidFormat",
  "fieldErrors": [
    {
      "objectName": "yos",
      "field": "kod",
      "messageTr": "boyut '4' ile '4' arasında olmalı",
      "message": "size must be between '4' and '4'",
      "code": "TR.OHVPS.Field.Invalid"
    }
  ]
}