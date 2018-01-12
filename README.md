# Mock API

This is an example Mock API for rapid front-end development.
Generate GET, PUT, POST, and DELETE requests against the mock API and note that changes are saved to `db/db.json`, so they're reflected on refresh like a real database exists!

### Getting Started

```
> yarn install
> yarn start
Load http://localhost:3001/admins
```

### Info

Application data is in `db/db.json` file.

### Schema

To generate new data edit schema in `schema/mockDataSchema.js` according to your needs. 

### Endpoints 

Application endpoints based on `db/db.js` objects and support REST standards.

POST `http://localhost:3001/api/auth`
GET `http://localhost:3001/api/db` - Using header `Authorization: Bearer FaKeTok3nHeRe`

#### References

This project is using:
* [express](https://expressjs.com)
* [json-server](https://github.com/typicode/json-server)
* [json-schema-faker](https://github.com/json-schema-faker/json-schema-faker)
