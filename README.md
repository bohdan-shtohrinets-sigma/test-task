# Test task

### Description

 - `client` - contains FE-app code.
 - `server` - contains server-side code.
 - `test-file` - contains csv-file example for testing app.


### Setup instructions

1. Init database:

```
cd /server
docker-compose up
```

2. Run server:

```
cd /server
npm install
npm start
```

3. Run client:

```
cd /client
npm install
npm start
```
Open client on http://localhost:3000/


Example of CSV file can be found in `/test-files` directory.
