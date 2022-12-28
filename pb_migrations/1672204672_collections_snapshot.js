migrate((db) => {
  const snapshot = [
    {
      "id": "_pb_users_auth_",
      "created": "2022-12-28 03:31:13.867Z",
      "updated": "2022-12-28 03:31:13.867Z",
      "name": "users",
      "type": "auth",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "users_name",
          "name": "name",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "users_avatar",
          "name": "avatar",
          "type": "file",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "maxSize": 5242880,
            "mimeTypes": [
              "image/jpg",
              "image/jpeg",
              "image/png",
              "image/svg+xml",
              "image/gif"
            ],
            "thumbs": null
          }
        }
      ],
      "listRule": "id = @request.auth.id",
      "viewRule": "id = @request.auth.id",
      "createRule": "",
      "updateRule": "id = @request.auth.id",
      "deleteRule": "id = @request.auth.id",
      "options": {
        "allowEmailAuth": true,
        "allowOAuth2Auth": true,
        "allowUsernameAuth": true,
        "exceptEmailDomains": null,
        "manageRule": null,
        "minPasswordLength": 8,
        "onlyEmailDomains": null,
        "requireEmail": false
      }
    },
    {
      "id": "jxr3dy16o8hml8p",
      "created": "2022-12-28 03:33:37.863Z",
      "updated": "2022-12-28 04:17:02.422Z",
      "name": "books",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "mgclfv5x",
          "name": "name",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": 300,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "nabmytj8",
          "name": "author",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": 300,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "yjttlwdw",
          "name": "isbn",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": null,
            "max": 300,
            "pattern": ""
          }
        }
      ],
      "listRule": "",
      "viewRule": "",
      "createRule": "",
      "updateRule": "",
      "deleteRule": "",
      "options": {}
    }
  ];

  const collections = snapshot.map((item) => new Collection(item));

  return Dao(db).importCollections(collections, true, null);
}, (db) => {
  return null;
})
