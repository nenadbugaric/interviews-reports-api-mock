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
* *GET* `http://localhost:3333/api/companies`   
* *GET* `http://localhost:3333/api/candidates`
* *GET* `http://localhost:3333/api/reports`   
   

* *POST* `http://localhost:3333/api/reports`    
```
// Post request payload example for "reports" endpoint
{
    "candidateId": 9451057,
    "candidateName": "Zula Feeney",
    "companyId": 92859858,
    "companyName": "Volkman - Schimmel",
    "interviewDate": "Fri Jan 11 2018 15:23:09 GMT+0100 (CET)",
    "phase": "cv",
    "status": "passed",
    "note": "Suscipit dolores sed ..."
}
``` 


### Additional info

Application data is in `db/db.json` file.
