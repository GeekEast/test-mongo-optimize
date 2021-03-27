### Build Stack
```shell
docker-compose up -d
```
### Optimize Approaches
- use `lean` queries for GET operations
- create custom indexes for queries
- favour using `.aggregate()` instead of `.populate()`
- use `.select()` to select specific properties to return
- run `Promise.all()` to run parallel operations (if possible), `insertMany()` and `bulkWrite()` is even better
- cache/reuse `mongoose` connections

### Start Test
```sh
yarn initd # init data, might take some time
yarn start # start testing
```

### Mongo URI
```sh
mongo uri: mongodb://readandwrite:readandwrite@localhost:27017/firstdb
```

### Conclusion
- use `select()` as much as you can
- `lean()` is much faster
- use `index` as much as you can, but only create index for necessary fields
- since write operation will update index, it's better to split write and read operation
- best case is that you should use `select()` and `lean()` together

### References
- [MongoDB 4.0 using docker-compose](https://faun.pub/managing-mongodb-on-docker-with-docker-compose-26bf8a0bbae3)
