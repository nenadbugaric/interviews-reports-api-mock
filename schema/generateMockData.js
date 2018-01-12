/* This script generates mock data for local development.
   This way you don't have to point to an actual API,
   but you can enjoy realistic, but randomized data,
   and rapid page loads due to local, static data.
 */

const jsf = require('json-schema-faker')
const mockDataSchema = require('./mockDataSchema')
const fs = require('fs')

const fakeApiData = jsf(mockDataSchema)

const json = JSON.stringify(fakeApiData)

fs.writeFile("db/db.json", json, function (err) {
  if (err) {
    return console.log(err)
  } else {
    console.log("Mock data generated.")
  }
})
