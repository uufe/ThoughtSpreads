<!-- TOC -->

- [db_tables](#db_tables)
    - [node](#node)
    - [link](#link)
- [api](#api)
    - [common errno list](#common-errno-list)
    - [the common response pattern to describe if the api is success](#the-common-response-pattern-to-describe-if-the-api-is-success)
    - [namespace: /ts/](#namespace-ts)
    - [apis](#apis)
        - [/node](#node)
        - [/node](#node-1)
        - [/node](#node-2)
        - [/node](#node-3)

<!-- /TOC -->

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

# others
## resource
https://docs.mongodb.com

# todo
## server
### 2019 Apr 13
优先级排序
* 接口测试，postman
* 接口参数验证
* link功能
* 自动化部署，build.sh
* 接口自动化测试，非postman
* type script

