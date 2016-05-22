define({ "api": [  {    "type": "get",    "url": "/api/:id",    "title": "Route information",    "name": "RouteById",    "group": "Routes",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "id",            "description": "<p>Route identifier.</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Boolean",            "optional": false,            "field": "error",            "description": "<p>Error status for the requested id.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "id",            "description": "<p>ID of the request.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "value",            "description": "<p>Value of the requested route.</p>"          }        ]      }    },    "filename": "routes/api.js",    "groupTitle": "Routes"  },  {    "type": "get",    "url": "/api",    "title": "Available Routes",    "name": "Routes",    "group": "Routes",    "version": "1.0.0",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "routes",            "description": "<p>Available Routes for the api.</p>"          }        ]      }    },    "filename": "routes/api.js",    "groupTitle": "Routes"  }] });
