[TOC]
# db_tables
## node
id  
name  
desc  
isdeleted  

## link
id  
source: a node id  
target: a node id  
isdeleted  

# api
* common response data structure: { errno, errmsg, data: [Array or Object] }
## common errno list
* errno: errmsg
* -1: auth faild
* -2: unknown
## the common response pattern to describe if the api is success
* errno: 0
## namespace: /ts/
## apis
### /node
insert node  

* method: POST
* input: { name, desc, parentid }
* output: { data: { newid } }
### /node
remove node  

* method: DELETE
* input: { id }
* output: common
### /node
modify node  

* method: PUT
* input: { id, name, desc, parentid: [  ] }
* output: common
### /node
select node  

* method: GET
* input: empty
* output: { data: { nodes: [{ id, name, desc }], linkes: [{ id, source, target }] }