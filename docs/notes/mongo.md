[TOC]
# resource
[official document](https://docs.mongodb.com/manual)
# mongo shell
[official document][https://docs.mongodb.com/manual/reference/mongo-shell/]
## common use marks
### open mongo server
open server: mongod --port 27027 --dbpath ./database
mongo shell: mongo --port 27027
### db
* help: db.help()
* show all: "show dbs"
* show current: "db"
* create: "use [db_name]"
* drop: "delete [db_name]"
* switch db: "use [db_name]"

### collection
* help: db.collections.help()
* show all collections: "show collections"
* create one collection: db.table1.insert({a:1,b:2})
* drop one collection: db.table1.drop()
* insert one record: db.table1.insert({a:1,b:2})
* remove records: db.table1.remove({a:1})
* update records: db.table1.insert({a:1}, {a:1,b:2})
* find records: db.table1.find({a:1})

# nodejs
[official document](http://mongodb.github.io/node-mongodb-native/3.2/quick-start/quick-start/)
## todo
connet only once or connet once when a query