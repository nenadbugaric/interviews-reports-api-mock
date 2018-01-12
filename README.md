# Mock API

This is an Mock API which is used for development of "Interviews Reports" app.
It supports GET, PUT, POST, and DELETE requests against the mock API and note that changes are saved to `db/db.json`.

### Getting Started

```
> yarn install
> yarn start   

Load http://localhost:3333/api/companies using browser or some rest client
```

### Endpoints 

Application endpoints based on `db/db.js` objects and support REST standards.
Meaning you can use GET, PUT, POST, and DELETE requests against all provided endpoints.   
Provided endpoints are:   
* `http://localhost:3333/api/companies`   
* `http://localhost:3333/api/candidates`
* `http://localhost:3333/api/reports`   


### Additional info

Application data is in `db/db.json` file.
