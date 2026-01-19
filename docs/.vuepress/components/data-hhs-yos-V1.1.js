export const mainTabs = [{
  ID: 1,
  Name: 'HHS API',
 
}, {
  ID: 2,
  Name: 'YÖS API',
 

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
export const RequestHeadersHHSAPI = [
  {
      ID: 1,
      Key: 'X-TPP-Code',
      Value: '8000'
  },
  {
      ID: 2,
      Key: 'X-Request-ID',
      Value: 'aec10909-2ff9-4d5b-9829-fe3a4c......(Her istekte farklılaşmalı)'
  },
   
  {
      ID: 3,
      Key: 'Authorization',
      Value: 'Bearer eyJhbGciOiJSUzI1*****************************a2lkIiA6ICJmdXRoWW5oTTBDd3'
  },
  {
      ID: 4,
      Key: 'content-type',
      Value: 'application/json'
},
];
export const ResponseHeadersHHSAPI = [
  {
    ID: 1,
    Key: 'X-RateLimit-Limit',
    Value: '50'
  },
  {
    ID: 2,
    Key: 'X-RateLimit-Remaining',
    Value: '49'
  },
  {
    ID: 3,
    Key: 'X-TPP-Code',
    Value: '8000'
  },
  {
    ID: 4,
    Key: 'X-Request-ID',
    Value: 'aec10909-2ff9-4d5b-9829-fe3a4c......(Her istekte farklılaşmalı)'
  },
  {
    ID: 5,
    Key: 'content-type',
    Value: 'application/json'
},
];
export const RequestHeadersYOSAPI = [
  {
      ID: 1,
      Key: 'X-ASPSP-Code',
      Value: '8000'
  },
  {
      ID: 2,
      Key: 'X-Request-ID',
      Value: 'aec10909-2ff9-4d5b-9829-fe3a4c......(Her istekte farklılaşmalı)'
  },   
  {
      ID: 3,
      Key: 'Authorization',
      Value: 'Bearer eyJhbGciOi**********************XRoWW5oTTBDd3FkY2FxUElQMWlH'
  },
  {
      ID: 4,
      Key: 'content-type',
      Value: 'application/json'
},
];
export const ResponseHeadersYOSAPI = [
  {
    ID: 1,
    Key: 'X-RateLimit-Limit',
    Value: '50'
  },
  {
    ID: 2,
    Key: 'X-RateLimit-Remaining',
    Value: '49'
  },
  {
    ID: 3,
    Key: 'X-ASPSP-Code',
    Value: '8000'
  },
  {
    ID: 4,
    Key: 'X-Request-ID',
    Value: 'aec10909-2ff9-4d5b-9829-fe3a4c......(Her istekte farklılaşmalı)'
  },
  {
    ID: 5,
    Key: 'content-type',
    Value: 'application/json'
  },
];
export const HHSAPIResponse200 = [
  {
    "kod": "8000",
    "unv": "Abank ",
    "marka": "Abank",
    "acikAnahtar": "MIIBIjANB........0QIDAQAB",
    "apiBilgileri": [
      {
        "api": "gkd",
        "surum": "s1.1"
      },
      {
        "api": "hbh",
        "surum": "s1.1"
      },
      {
        "api": "obh",
        "surum": "s1.1"
      }
    ],
    "logoBilgileri": [
      {
        "logoTur": "BLACK_OVERLAY",
        "logoAdr": "https://www.abank.com/abank_black.png"
      },
      {
        "logoTur": "GRAY_OVERLAY",
        "logoAdr": "https://www.abank.com/abank_gray.png"
      },
      {
        "logoTur": "WHITE_OVERLAY",
        "logoAdr": "https://www.abank.com/abank_white.png"
      },
      {
        "logoTur": "ORIGINAL",
        "logoAdr": "https://www.abank.com/abank_original.png"
      }
    ],
    "durum": "A"
  },
  {
    "kod": "8001",
    "unv": "B BANKASI",
    "marka": "B Bank",
    "acikAnahtar": "MIIBIjANB........QIDAQAB",
    "apiBilgileri": [
      {
        "api": "gkd",
        "surum": "s1.1"
      },
      {
        "api": "hbh",
        "surum": "s1.1"
      },
      {
        "api": "obh",
        "surum": "s1.1"
      }
    ],
    "logoBilgileri": [
      {
        "logoTur": "BLACK_OVERLAY",
        "logoAdr": "https://www.bbank.com.tr/siyah.png"
      },
      {
        "logoTur": "GRAY_OVERLAY",
        "logoAdr": "https://www.bbank.com.tr/gri.png"
      },
      {
        "logoTur": "ORIGINAL",
        "logoAdr": "https://www.bbank.com.tr/orjinal.png"
      },
      {
        "logoTur": "WHITE_OVERLAY",
        "logoAdr": "https://www.bbank.com.tr/beyaz.png"
      }
    ],
    "durum": "A"
  },
];
export const HHSAPIResponse400={
    "timestamp": "2022-12-22T10:40:28+03:00",
    "path": "/hhs-api/s1.1/hhs",
    "id": "drewrew-6fc7-4f7e-94f3-6411cab1d59f",
    "moreInformationTr": "Geçersiz YÖS kodu.",
    "errorCode": "TR.OHVPS.Connection.InvalidTPP",
    "moreInformation": "Invalid TPP Code",
    "httpCode": 400,
    "httpMessage": "Bad Request"
} 
export const HHSAPIResponse401  ={
  "id": "401f0fb2-730b-11e8-adc0-fa7ae01bbebc",
  "path": "/hhs-api/s1.1/hhs",
  "timestamp": "2021-08-13T09:55:23+03:00",
  "httpCode": 401,
  "httpMessage": "Unauthorized",
  "moreInformation": "Geçersiz Token",
  "moreInformationTr": "Invalid Token",
  "errorCode": "TR.OHVPS.Connection.InvalidToken"
}
export const HHSAPIResponse403={
  "id": "ee1e3ea7-a5e5-468b-bb02-314148f84e6a",
  "path": "/hhs-api/s1.1/hhs",
  "timestamp": "2022-12-22T11:14:05+03:00",
  "httpCode": 403,
  "httpMessage": "Forbidden",
  "moreInformation": "Invalid TPP Role",
  "moreInformationTr": "Geçersiz YÖS rolü. İlgili api çağrısı için yetkisi yok.",
  "errorCode": "TR.OHVPS.Connection.InvalidTPPRole"
}
export const HHSAPIResponse404  ={
  "id": "401f0fb2-730b-11e8-adc0-fa7ae01bbebc",
  "path": "/hhs-api/s1.1/hhs",
  "timestamp": "2021-08-13T09:55:23+03:00",
  "httpCode": 404,
  "httpMessage": "Not Found",
  "moreInformation": "Resource not found",
  "errorCode": "TR.OHVPS.Resource.NotFound",
  "moreInformationTr": "Kaynak bulunamadı"
}
export const YOSAPIResponse200 = [
  {
    "kod": "8000",
    "unv": "YOS1",
    "marka": "YOS1",
    "acikAnahtar": "MIIBIjANB........QIDAQAB",
    "roller": [
      "obhs",
      "hbhs"
    ],
    "adresler": [
      {
        "yetYntm": "Y",
        "adresDetaylari": [
          {
            "tmlAdr": "YOSADRES1",
            "aciklama": "HBHS APP Android"
          },
          {
            "tmlAdr": "YOSADRES2",
            "aciklama": "OBHS APP IOS"
          },
          {
            "tmlAdr": "YOSADRES3",
            "aciklama": "HBHS APP IOS"
          },
          {
            "tmlAdr": "YOSADRES4",
            "aciklama": "Web"
          },
        ]
      }
    ],
    "logoBilgileri": [
      {
        "logoTur": "BLACK_OVERLAY",
        "logoAdr": "https://www.yos1.com/black.png"
      },
      {
        "logoTur": "WHITE_OVERLAY",
        "logoAdr": "https://www.yos1.com/white.png"
      },
      {
        "logoTur": "GRAY_OVERLAY",
        "logoAdr": "https://www.yos1.com/gray.png"
      },
      {
        "logoTur": "ORIGINAL",
        "logoAdr": "https://www.yos1.com/original.png"
      }
    ]
  },
  {
    "kod": "8000",
    "unv": "YOS2",
    "marka": "YOS2",
    "acikAnahtar": "MIIBIjANBd........QIDAQAB",
    "roller": [
      "obhs",
      "hbhs"
    ],
    "adresler": [
      {
        "yetYntm": "Y",
        "adresDetaylari": [
          {
            "tmlAdr": "YOSADRES1",
            "aciklama": "HBHS APP Android"
          },
          {
            "tmlAdr": "YOSADRES2",
            "aciklama": "OBHS APP IOS"
          },
          {
            "tmlAdr": "YOSADRES4",
            "aciklama": "Web"
          },
        ]
      }
    ],
    "logoBilgileri": [
      {
        "logoTur": "BLACK_OVERLAY",
        "logoAdr": "https://www.yos2.com/black.png"
      },
      {
        "logoTur": "WHITE_OVERLAY",
        "logoAdr": "https://www.yos2.com/white.png"
      },
      {
        "logoTur": "GRAY_OVERLAY",
        "logoAdr": "https://www.yos2.com/gray.png"
      },
      {
        "logoTur": "ORIGINAL",
        "logoAdr": "https://www.yos2.com/original.png"
      }
    ]
  },
];
export const YOSAPIResponse400={
  "timestamp": "2022-12-22T10:40:28+03:00",
  "path": "/yos-api/s1.1/yos",
  "id": "drewrew-6fc7-4f7e-94f3-6411cab1d59f",
  "moreInformationTr": "Geçersiz HHS kodu.",
  "errorCode": "TR.OHVPS.Connection.InvalidASPSP",
  "moreInformation": "Invalid ASPSP Code",
  "httpCode": 400,
  "httpMessage": "Bad Request"
} 
export const YOSAPIResponse401  ={
  "id": "401f0fb2-730b-11e8-adc0-fa7ae01bbebc",
  "path": "/yos-api/s1.1/yos",
  "timestamp": "2021-08-13T09:55:23+03:00",
  "httpCode": 401,
  "httpMessage": "Unauthorized",
  "moreInformation": "Geçersiz Token",
  "moreInformationTr": "Invalid Token",
  "errorCode": "TR.OHVPS.Connection.InvalidToken"
  }
export const YOSAPIResponse403={
  "id": "ee1e3ea7-a5e5-468b-bb02-314148f84e6a",
  "path": "/yos-api/s1.1/yos",
  "timestamp": "2022-12-22T11:14:05+03:00",
  "httpCode": 403,
  "httpMessage": "Forbidden",
  "moreInformation": "Invalid ASPSP Role",
  "moreInformationTr": "Geçersiz HHS rolü. İlgili api çağrısı için yetkisi yok.",
  "errorCode": "TR.OHVPS.Connection.InvalidASPSPRole"
}
export const YOSAPIResponse404  ={
"id": "401f0fb2-730b-11e8-adc0-fa7ae01bbebc",
"path": "/yos-api/s1.1/yos",
"timestamp": "2021-08-13T09:55:23+03:00",
"httpCode": 404,
"httpMessage": "Not Found",
"moreInformation": "Resource not found",
"errorCode": "TR.OHVPS.Resource.NotFound",
"moreInformationTr": "Kaynak bulunamadı"
}