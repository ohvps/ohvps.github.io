export const mainTabs = [{
    ID: 1,
    Name: 'YÖS Listeleme',
   
}, {
    ID: 2,
    Name: "YÖS API Swagger",
   
}, {
    ID: 3,
    Name: 'HHS Listeleme',
   
  
}, {
    ID: 4,
    Name: 'HHS API Swagger',
   
}
];



export const responseTabs = [{
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
    ];

   export const YosResponse200=[
    {
      "roller": [
        "obhs",
        "hbhs"
      ],
      "kod": "0001",
      "unv": "OBHS Simulator1",
      "marka": "ObhsSim1",
      "acikAnahtar": "MII...DAQAB",
      "adresler": [
        {
          "yetYntm": "Y",
          "adresDetaylari": [
            {
              "tmlAdr": "https://example.com/",
              "aciklama": "WEB bireysel"
            }
          ]
        }
      ],
      "logoBilgileri": [
        {
          "logoTur": "FULL_LOGO",
          "logoAdr": "https://example.com/logo.png",
          "logoArkaPlan": "K",
          "logoFormat": "PNG"
        }
      ],
      "apiBilgileri": [
        {
          "api": "ods",
          "surum": "s1.1"
        }
      ],
      "durum": "A"
    }
  ]

  export const YosResponse400={
    "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
    "path": "/yos",
    "timestamp": "2021-08-13T09:55:23+03:00",
    "httpCode": 401,
    "httpMessage": "Not Found",
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

  export const YosResponse401= {
    "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
    "path": "/yos",
    "timestamp": "2021-08-13T09:55:23+03:00",
    "httpCode": 401,
    "httpMessage": "Not Found",
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

  export const YosResponse403={
    "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
    "path": "/yos",
    "timestamp": "2021-08-13T09:55:23+03:00",
    "httpCode": 401,
    "httpMessage": "Not Found",
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

  export const YosResponse404={
    "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
    "path": "/yos",
    "timestamp": "2021-08-13T09:55:23+03:00",
    "httpCode": 401,
    "httpMessage": "Not Found",
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


  export const HhsResponse200=[
    {
      "kod": "0001",
      "unv": "HHS Simulator1",
      "marka": "HhsSim1",
      "acikAnahtar": "MII...DAQAB",
      "apiBilgileri": [
        {
          "api": "obh",
          "surum": "s1.0"
        },
        {
          "api": "obh",
          "surum": "s1.1"
        },
        {
          "api": "hbh",
          "surum": "s1.0"
        },
        {
          "api": "gkd",
          "surum": "s1.0"
        }
      ],
      "logoBilgileri": [
        {
          "logoTur": "FULL_LOGO",
          "logoAdr": "https://example.com/logo.png",
          "logoArkaPlan": "K",
          "logoFormat": "PNG"
        }
      ],
      "durum": "A"
    }
  ]


  export const HhsResponse400={
    "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
    "path": "/hhs",
    "timestamp": "2021-08-13T09:55:23+03:00",
    "httpCode": 401,
    "httpMessage": "Not Found",
    "moreInformation": "Resource Schema validation error",
    "moreInformationTr": "Alan doğrulama hatası",
    "errorCode": "TR.OHVPS.Resource.InvalidFormat",
    "fieldErrors": [
      {
        "objectName": "hhs",
        "field": "kod",
        "messageTr": "boyut '4' ile '4' arasında olmalı",
        "message": "size must be between '4' and '4'",
        "code": "TR.OHVPS.Field.Invalid"
      }
    ]
  }

  export const HhsResponse401={
    "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
    "path": "/hhs",
    "timestamp": "2021-08-13T09:55:23+03:00",
    "httpCode": 401,
    "httpMessage": "Not Found",
    "moreInformation": "Resource Schema validation error",
    "moreInformationTr": "Alan doğrulama hatası",
    "errorCode": "TR.OHVPS.Resource.InvalidFormat",
    "fieldErrors": [
      {
        "objectName": "hhs",
        "field": "kod",
        "messageTr": "boyut '4' ile '4' arasında olmalı",
        "message": "size must be between '4' and '4'",
        "code": "TR.OHVPS.Field.Invalid"
      }
    ]
  }
  export const HhsResponse403={
    "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
    "path": "/hhs",
    "timestamp": "2021-08-13T09:55:23+03:00",
    "httpCode": 401,
    "httpMessage": "Not Found",
    "moreInformation": "Resource Schema validation error",
    "moreInformationTr": "Alan doğrulama hatası",
    "errorCode": "TR.OHVPS.Resource.InvalidFormat",
    "fieldErrors": [
      {
        "objectName": "hhs",
        "field": "kod",
        "messageTr": "boyut '4' ile '4' arasında olmalı",
        "message": "size must be between '4' and '4'",
        "code": "TR.OHVPS.Field.Invalid"
      }
    ]
  }

  export const HhsResponse404={
    "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
    "path": "/hhs",
    "timestamp": "2021-08-13T09:55:23+03:00",
    "httpCode": 401,
    "httpMessage": "Not Found",
    "moreInformation": "Resource Schema validation error",
    "moreInformationTr": "Alan doğrulama hatası",
    "errorCode": "TR.OHVPS.Resource.InvalidFormat",
    "fieldErrors": [
      {
        "objectName": "hhs",
        "field": "kod",
        "messageTr": "boyut '4' ile '4' arasında olmalı",
        "message": "size must be between '4' and '4'",
        "code": "TR.OHVPS.Field.Invalid"
      }
    ]
  }