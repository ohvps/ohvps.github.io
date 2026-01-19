export const mainTabs = [{
    ID: 1,
    Name: 'Olay Abonelik(OA)',   
},
 {
    ID: 2,
    Name: 'OA Güncelleme', 
},
{
   ID: 3,
   Name: 'OA Sorgulama', 
},
{
   ID: 4,
   Name: 'OA İptal', 
},
{
   ID: 5,
   Name: 'İletilemeyen Olaylar', 
},
{
   ID: 6,
   Name: 'HHS Sistem Olay Dinleme', 
},
{
   ID: 7,
   Name: 'Olay Dinleme', 
},
{
   ID: 8,
   Name: 'YÖS Sistem Olay Dinleme', 
}
];
export const ResponseTabsOAS = [{
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
export const ResponseTabsOAIptal = [{
  ID: 1,
  Name: '204',
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
export const ResponseTabsODS = [{
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
export const RequestHeadersOAS = [
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
    Value: 'aec70909-2ff9-4d5b-9829-...(Her istekte farklılaşmalı)'
  },
  {
    ID: 4,
    Key: 'Authorization',
    Value: 'Bearer eyJhb***************************2lkIiA6ICJmdXRoWW5oTTBDd3W'
  },
  {
    ID: 5,
    Key: 'content-type',
    Value: 'application/json'
  },
  {
    ID: 6,
    Key: 'X-JWS-Signature',
    Value: 'eyJhbGciOiJSUzI1*********************iJodHRwczovL2FwaS5ia'
  },
];

export const RequestHeadersWithoutSignature = [
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
    Value: 'aec70909-2ff9-4d5b-9829-...(Her İstekte farklılaşmalı)'
  },
  {
    ID: 4,
    Key: 'Authorization',
    Value: 'Bearer eyJhbGciOiJSUzI1***************************RoWW5oTTBDd3FkY2FxUElQMWlHdXlGeDFa'
  },
  {
    ID: 5,
    Key: 'content-type',
    Value: 'application/json'
  },
];
export const ResponseHeadersOAS = [
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
    Value: 'aec70909-2ff9-4d5b-9829-...(Her istekte farklılaşmalı)'
  },
    {
    ID: 5,
    Key: 'content-type',
    Value: 'application/json'
  },
  {
    ID: 6,
    Key: 'X-JWS-Signature',
    Value: 'eyJhbGciOiJSUzI1N****************************9tLnRyIiwiZXhwIjoxNjk5NDQ2Nz'
  },
];

export const ResponseHeadersOASWithoutSignature = [
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
    Value: 'aec70909-2ff9-4d5b-9829-...(Her istekte farklılaşmalı)'
  },
    {
    ID: 5,
    Key: 'content-type',
    Value: 'application/json'
  },
  
];
export const OlayAbonelikRequest =
     {
    "katilimciBlg": {
      "hhsKod": "8000",
      "yosKod": "8000"
    },
    "abonelikTipleri": [
      {
        "olayTipi": "KAYNAK_GUNCELLENDI",
        "kaynakTipi": "BAKIYE"
      },
      {
        "olayTipi": "KAYNAK_GUNCELLENDI",
        "kaynakTipi": "ODEME_EMRI"
      },
      {
        "olayTipi": "KAYNAK_GUNCELLENDI",
        "kaynakTipi": "COKLU_ISLEM_TALEBI"
      },
      {
        "olayTipi": "KAYNAK_GUNCELLENDI",
        "kaynakTipi": "HESAP_BILGISI_RIZASI"
      },
      {
        "olayTipi": "AYRIK_GKD_BASARILI",
        "kaynakTipi": "HESAP_BILGISI_RIZASI"
      },
      {
        "olayTipi": "AYRIK_GKD_BASARILI",
        "kaynakTipi": "ODEME_EMRI_RIZASI"
      },
      {
        "olayTipi": "AYRIK_GKD_BASARISIZ",
        "kaynakTipi": "HESAP_BILGISI_RIZASI"
      },
      {
        "olayTipi": "AYRIK_GKD_BASARISIZ",
        "kaynakTipi": "ODEME_EMRI_RIZASI"
      }
    ]
}
export const OlayAbonelikResponse200 =
    {
    "katilimciBlg": {
      "hhsKod": "8000",
      "yosKod": "8000"
    },
    "olayAbonelikNo": "8130000c-3bde-4765-ba66-9a0b2d58406a",
    "olusturmaZamani": "2023-12-15T14:09:12+03:00",
    "guncellemeZamani": "2023-12-15T14:09:12+03:00",
    "abonelikTipleri": [
      {
        "olayTipi": "KAYNAK_GUNCELLENDI",
        "kaynakTipi": "HESAP_BILGISI_RIZASI"
      },
      {
        "olayTipi": "KAYNAK_GUNCELLENDI",
        "kaynakTipi": "COKLU_ISLEM_TALEBI"
      },
      {
        "olayTipi": "AYRIK_GKD_BASARILI",
        "kaynakTipi": "ODEME_EMRI_RIZASI"
      },
      {
        "olayTipi": "AYRIK_GKD_BASARISIZ",
        "kaynakTipi": "ODEME_EMRI_RIZASI"
      },
      {
        "olayTipi": "AYRIK_GKD_BASARISIZ",
        "kaynakTipi": "HESAP_BILGISI_RIZASI"
      },
      {
        "olayTipi": "KAYNAK_GUNCELLENDI",
        "kaynakTipi": "BAKIYE"
      },
      {
        "olayTipi": "AYRIK_GKD_BASARILI",
        "kaynakTipi": "HESAP_BILGISI_RIZASI"
      },
      {
        "olayTipi": "KAYNAK_GUNCELLENDI",
        "kaynakTipi": "ODEME_EMRI"
      }
    ]
}
export const OlayAbonelikResponse400 ={ 
  "id": "420da151-0c9c-4f22-ac11-377d397762a9",
  "path": "/ohvps/oas/s1.1/olay-abonelik",
  "timestamp": "2023-12-15T13:42:42+03:00",
  "httpCode": 400,
  "httpMessage": "Bad Request",
  "moreInformation": "Invalid TPP Role. TPP role must have obhs.",
  "moreInformationTr": "Geçersiz Yos rolü. Yosde obhs rolü olmalı.",
  "errorCode": "TR.OHVPS.Connection.InvalidTPP"
}
export const OlayAbonelikResponse401 ={
    "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbert",
    "path": "/ohvps/oas/s1.1/olay-abonelik",
    "timestamp": "2023-12-04T15:55:19+03:00",
    "httpCode": 401,
    "httpMessage": "Unauthorized",
    "moreInformation": "Unauthorized",
    "moreInformationTr": "İzin verilmedi",
    "errorCode": "TR.OHVPS.Connection.InvalidToken"
}
export const OlayAbonelikResponse403 ={ 
  "id": "318b2b42-cdf1-4d27-8802-beaf27316590",
  "path": "/ohvps/oas/s1.1/olay-abonelik",
  "timestamp": "2023-12-15T11:14:20+03:00",
  "httpCode": 403,
  "httpMessage": "Forbidden",
  "moreInformation": "X-JWS-Signature header in the TPP request could not be parsed.",
  "moreInformationTr": "YOS ten gelen istekteki X-JWS-Signature basligi okunamadi.",
  "errorCode": "TR.OHVPS.Resource.InvalidSignature"
}
export const OlayAbonelikResponse404 ={
    "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbeb4",
    "path": "/ohvps/oas/s1.1/olay-abonelik",
    "timestamp": "2023-12-04T15:55:19+03:00",
    "httpCode": 404,
    "httpMessage": "Not Found",
    "moreInformation": "İlgili Olay Tipi bulunamadı",
    "moreInformationTr": "İlgili Olay Tipi bulunamadı",
    "errorCode": "TR.OHVPS.Resource.NotFound"
}
export const OAGuncellemeRequest =
{
  "olayAbonelikNo": "8130000c-3bde-4765-ba66-9a0b2d58406a",
  "abonelikTipleri": [
    {
      "olayTipi": "KAYNAK_GUNCELLENDI",
      "kaynakTipi": "ODEME_EMRI"
    },
    {
      "olayTipi": "KAYNAK_GUNCELLENDI",
      "kaynakTipi": "COKLU_ISLEM_TALEBI"
    },
    {
      "olayTipi": "KAYNAK_GUNCELLENDI",
      "kaynakTipi": "HESAP_BILGISI_RIZASI"
    },
    {
      "olayTipi": "KAYNAK_GUNCELLENDI",
      "kaynakTipi": "BAKIYE"
    },
    {
      "olayTipi": "AYRIK_GKD_BASARILI",
      "kaynakTipi": "HESAP_BILGISI_RIZASI"
    },
    {
      "olayTipi": "AYRIK_GKD_BASARILI",
      "kaynakTipi": "ODEME_EMRI_RIZASI"
    }
  ],
  "katilimciBlg": {
    "hhsKod": "8000",
    "yosKod": "8000"
  },

}
export const OAGuncellemeResponse200 =
{
  "katilimciBlg": {
    "hhsKod": "8000",
    "yosKod": "8000"
  },
  "olayAbonelikNo": "8130000c-3bde-4765-ba66-9a0b2d58406a",
  "olusturmaZamani": "2023-12-15T14:09:12+03:00",
  "guncellemeZamani": "2023-12-15T16:03:48+03:00",
  "abonelikTipleri": [
    {
      "olayTipi": "KAYNAK_GUNCELLENDI",
      "kaynakTipi": "HESAP_BILGISI_RIZASI"
    },
    {
      "olayTipi": "KAYNAK_GUNCELLENDI",
      "kaynakTipi": "BAKIYE"
    },
    {
      "olayTipi": "KAYNAK_GUNCELLENDI",
      "kaynakTipi": "COKLU_ISLEM_TALEBI"
    },
    {
      "olayTipi": "AYRIK_GKD_BASARILI",
      "kaynakTipi": "ODEME_EMRI_RIZASI"
    },
    {
      "olayTipi": "KAYNAK_GUNCELLENDI",
      "kaynakTipi": "ODEME_EMRI"
    },
    {
      "olayTipi": "AYRIK_GKD_BASARILI",
      "kaynakTipi": "HESAP_BILGISI_RIZASI"
    }
  ]
}
export const OAGuncellemeResponse400 ={ 
  "id": "420da151-0c9c-4f22-ac11-377d397762a9",
  "path": "/ohvps/oas/s1.1/olay-abonelik/8130000c-3bde-4765-ba66-9a0b2d58406a",
  "timestamp": "2023-12-15T13:42:42+03:00",
  "httpCode": 400,
  "httpMessage": "Bad Request",
  "moreInformation": "Invalid TPP Role. TPP role must have obhs.",
  "moreInformationTr": "Geçersiz Yos rolü. Yosde obhs rolü olmalı.",
  "errorCode": "TR.OHVPS.Connection.InvalidTPP"
}
export const OAGuncellemeResponse401 ={
    "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbert",
    "path": "/ohvps/oas/s1.1/olay-abonelik/8130000c-3bde-4765-ba66-9a0b2d58406a",
    "timestamp": "2023-12-04T15:55:19+03:00",
    "httpCode": 401,
    "httpMessage": "Unauthorized",
    "moreInformation": "Unauthorized",
    "moreInformationTr": "İzin verilmedi",
    "errorCode": "TR.OHVPS.Connection.InvalidToken"
}
export const OAGuncellemeResponse403 ={ 
  "id": "318b2b42-cdf1-4d27-8802-beaf27316590",
  "path": "/ohvps/oas/s1.1/olay-abonelik/8130000c-3bde-4765-ba66-9a0b2d58406a",
  "timestamp": "2023-12-15T11:14:20+03:00",
  "httpCode": 403,
  "httpMessage": "Forbidden",
  "moreInformation": "X-JWS-Signature header in the TPP request could not be parsed.",
  "moreInformationTr": "YOS ten gelen istekteki X-JWS-Signature basligi okunamadi.",
  "errorCode": "TR.OHVPS.Resource.InvalidSignature"
}
export const OAGuncellemeResponse404 ={
    "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbeb4",
    "path": "/ohvps/oas/s1.1/olay-abonelik/8130000c-3bde-4765-ba66-9a0b2d58406a",
    "timestamp": "2023-12-04T15:55:19+03:00",
    "httpCode": 404,
    "httpMessage": "Not Found",
    "moreInformation": "İlgili Olay Tipi bulunamadı",
    "moreInformationTr": "İlgili Olay Tipi bulunamadı",
    "errorCode": "TR.OHVPS.Resource.NotFound"
}
export const OASorgulamaResponse404 ={
  "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbeb4",
  "path": "/ohvps/oas/s1.1/olay-abonelik",
  "timestamp": "2023-12-04T15:55:19+03:00",
  "httpCode": 404,
  "httpMessage": "Not Found",
  "moreInformation": "İlgili Olay Abonelik No bulunamadı",
  "moreInformationTr": "İlgili Olay Abonelik No bulunamadı",
  "errorCode": "TR.OHVPS.Resource.NotFound"
}
export const OAIptalResponse202 ="Accepted";
export const IletilemeyenOlaylarResponse200 =
    {
    "katilimciBlg": {
      "hhsKod": "8000",
      "yosKod": "8000"
    },
    "olaylar": [
      {
        "olayNo": "4343234",
        "olayZamani":  "2023-12-15T13:42:42+03:00",
        "olayTipi": "KAYNAK_GUNCELLENDI",
        "kaynakTipi": "ODEME_EMRI",
        "kaynakNo": "3421"
      },
   
    ]
}
export const IletilemeyenOlaylarResponse400 ={ 
  "id": "420da151-0c9c-4f22-ac11-377d397762a9",
  "path": "/ohvps/oas/s1.1/olay-abonelik/8130000c-3bde-4765-ba66-9a0b2d58406a/iletilemeyen-olaylar",
  "timestamp": "2023-12-15T13:42:42+03:00",
  "httpCode": 400,
  "httpMessage": "Bad Request",
  "moreInformation": "Invalid TPP Role. TPP role must have obhs.",
  "moreInformationTr": "Geçersiz Yos rolü. Yosde obhs rolü olmalı.",
  "errorCode": "TR.OHVPS.Connection.InvalidTPP"
}
export const IletilemeyenOlaylarResponse401 ={
    "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbert",
    "path": "/ohvps/oas/s1.1/olay-abonelik/8130000c-3bde-4765-ba66-9a0b2d58406a/iletilemeyen-olaylar",
    "timestamp": "2023-12-04T15:55:19+03:00",
    "httpCode": 401,
    "httpMessage": "Unauthorized",
    "moreInformation": "Unauthorized",
    "moreInformationTr": "İzin verilmedi",
    "errorCode": "TR.OHVPS.Connection.InvalidToken"
}
export const IletilemeyenOlaylarResponse403 ={ 
  "id": "318b2b42-cdf1-4d27-8802-beaf27316590",
  "path": "/ohvps/oas/s1.1/olay-abonelik/8130000c-3bde-4765-ba66-9a0b2d58406a/iletilemeyen-olaylar",
  "timestamp": "2023-12-15T11:14:20+03:00",
  "httpCode": 403,
  "httpMessage": "Forbidden",
  "moreInformation": "X-JWS-Signature header in the TPP request could not be parsed.",
  "moreInformationTr": "YOS ten gelen istekteki X-JWS-Signature basligi okunamadi.",
  "errorCode": "TR.OHVPS.Resource.InvalidSignature"
}
export const IletilemeyenOlaylarResponse404 ={
    "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbeb4",
    "path": "/ohvps/oas/s1.1/olay-abonelik/8130000c-3bde-4765-ba66-9a0b2d58406a/iletilemeyen-olaylar",
    "timestamp": "2023-12-04T15:55:19+03:00",
    "httpCode": 404,
    "httpMessage": "Not Found",
    "moreInformation": "İlgili Olay Tipi bulunamadı",
    "moreInformationTr": "İlgili Olay Tipi bulunamadı",
    "errorCode": "TR.OHVPS.Resource.NotFound"
}
export const YOSSistemOlayDinlemeRequest =
{
  "katilimciBlg": {
    "hhsKod": "8000",
    "yosKod": "8000"
  },
  "olaylar": [
    {
      "olayNo": "520c608d45a84aa98b313f4f222744a0",
      "olayZamani": "2023-12-18T19:06:28+03:00",
      "olayTipi": "HHS_YOS_GUNCELLENDI",
      "kaynakTipi": "HHS",
      "kaynakNo": "2840"
    }
  ]
}
export const SistemOlayDinlemeRequest =
{
  "katilimciBlg": {
    "hhsKod": "8000",
    "yosKod": "8000"
  },
  "olaylar": [
    {
      "olayNo": "520c608d45a84aa98b313f4f222744a0",
      "olayZamani": "2023-12-18T19:06:28+03:00",
      "olayTipi": "HHS_YOS_GUNCELLENDI",
      "kaynakTipi": "YOS",
      "kaynakNo": "2840"
    }
  ]
}
export const SistemOlayDinlemeResponse200 =
{
  "katilimciBlg": {
    "hhsKod": "8000",
    "yosKod": "8000"
  },
  "olaylar": [
    {
      "olayNo": "520c608d45a84aa98b313f4f222744a0",
      "olayZamani": "2023-12-18T19:06:28+03:00",
      "olayTipi": "HHS_YOS_GUNCELLENDI",
      "kaynakTipi": "YOS",
      "kaynakNo": "2840"
    }
  ]
}
export const SistemOlayDinlemeResponse400 ={
  "id": "b528e04717704ef89730358a38a0d9a9",
  "path": "/ohvps/oas/s1.1/sistem-olay-dinleme",
  "timestamp": "2023-12-18T19:10:07+03:00",
  "httpCode": 400,
  "httpMessage": "Bad Request",
  "moreInformation": "Resource schema validation error.",
  "moreInformationTr": "Şema kontrolleri başarısız.",
  "errorCode": "TR.OHVPS.Resource.InvalidFormat",
  "fieldErrors": [
    {
      "objectName": "olayIstegi",
      "field": "olaylar[].kaynakTipi",
      "messageTr": "Desteklenmeyen veri tipi.",
      "message": "Unsupported data type.",
      "code": "TR.OHVPS.Field.Invalid"
    }
  ]
}
export const SistemOlayDinlemeResponse401 ={
    "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbert",
    "path": "/ohvps/oas/s1.1/sistem-olay-dinleme",
    "timestamp": "2023-12-04T15:55:19+03:00",
    "httpCode": 401,
    "httpMessage": "Unauthorized",
    "moreInformation": "Invalid Token",
    "moreInformationTr": "Geçersiz Token",
    "errorCode": "TR.OHVPS.Connection.InvalidToken"
}
export const SistemOlayDinlemeResponse403 ={
  "id": "2f70b32a-3db8-43c0-a145-705ac566a0f2",
  "path": "/api/ohvps/oas/s1.1/sistem-olay-dinleme",
  "timestamp": "2023-12-18T19:10:03+03:00",
  "httpCode": 403,
  "httpMessage": "Forbidden",
  "moreInformation": "Resource Schema validation error",
  "moreInformationTr": "Şema kontrolleri başarısız",
  "errorCode": "TR.OHVPS.Resource.MissingSignature"
}
export const SistemOlayDinlemeResponse404 ={
    "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbeb4",
    "path": "/ohvps/oas/s1.1/sistem-olay-dinleme",
    "timestamp": "2023-12-04T15:55:19+03:00",
    "httpCode": 404,
    "httpMessage": "Not Found",
    "moreInformation": "Not Found",
    "moreInformationTr": "Path not found. Method: POST and path: /ohvps/oas/s1.1/sistem-olay-dinleme",
    "errorCode": "TR.OHVPS.Resource.NotFound"
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
  "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbert",
  "path": "/ohvps/oas/s1.1/olay-dinleme",
  "timestamp": "2023-12-04T15:55:19+03:00",
  "httpCode": 401,
  "httpMessage": "Unauthorized",
  "moreInformation": "Invalid Token",
  "moreInformationTr": "Geçersiz Token",
  "errorCode": "TR.OHVPS.Connection.InvalidToken"
}
export const OlayDinlemeResponse403={
  "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbebc",
  "path": "/ohvps/ods/s1.1/olay-dinleme",
  "timestamp": "2023-12-18T19:10:03+03:00",
  "httpCode": 403,
  "httpMessage": "Forbidden",
  "moreInformation": "Resource Schema validation error",
  "moreInformationTr": "Şema kontrolleri başarısız",
  "errorCode": "TR.OHVPS.Resource.MissingSignature"
}
export const OlayDinlemeResponse404={
  "id": "2b5f0fb2-730b-11e8-adc0-fa7ae01bbeb4",
  "path": "/ohvps/ods/s1.1/olay-dinleme",
    "timestamp": "2023-12-04T15:55:19+03:00",
    "httpCode": 404,
    "httpMessage": "Not Found",
    "moreInformation": "İlgili Olay Tipi bulunamadı",
    "moreInformationTr": "İlgili Olay Tipi bulunamadı",
    "errorCode": "TR.OHVPS.Resource.NotFound"

}