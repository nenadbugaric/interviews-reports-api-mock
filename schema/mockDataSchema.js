var schema = {
  "type": "object",
  "properties": {
    "companies": {
      "type": "array",
      "minItems": 1,
      "maxItems": 100,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "name": {
            "type": "string",
            "faker": "name.findName"
          },
          "email": {
            "type": "string",
            "format": "email",
            "unique": true,
            "faker": "internet.email"
          }
        },
        "required": ["id", "name", "email"]
      }
    },
    "candidates": {
      "type": "array",
      "minItems": 1,
      "maxItems": 100,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "username": {
            "type": "string",
            "faker": "internet.userName"
          },
          "email": {
            "type": "string",
            "format": "email",
            "unique": true,
            "faker": "internet.email"
          }
        },
        "required": ["id", "username", "email"]
      }
    },
    "reports": {
      "type": "array",
      "minItems": 1,
      "maxItems": 3,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "interviewDate": {
            "type": "string",
            "faker": "date.recent"
          },
          "candidate": {
            "type": "number"
          },
          "company": {
            "type": "number"
          }
        },
        "required": [
          "id",
          "interviewDate",
          "candidate",
          "company"
        ]
      }
    }
  },
  "required": ["companies", "candidates", "reports"]
};

module.exports = schema;
