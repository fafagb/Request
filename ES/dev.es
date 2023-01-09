get exerciseindex/_search?pretty
{
    "query": {
        "match": {
            "exerciseTypeID": 5
        }
        
    },"from" : 1 , "size" : 15
}

//scroll=3m代表当前查询的数据缓存3分钟
get exerciseindex/_search?scroll=3m   
{
    "query": {
        "match": {
            "exerciseTypeID": 5
        }
        
    }, "size": 3
}



put  gbtest14

{
    "settings": {
        "number_of_shards": 3,
        "number_of_replicas": 2
    },
    "mapping": {
       
            "properties": {
                "id": {
                    "type": "long"
                },
                "phone": {
                    "type": "text"
                },
                "name": {
                    "type": "keyword"
                },
                "price": {
                    "type": "double"
                }
            }
        
    }
}


Post gbtest14/_doc
{
  "name":"第一章",
  "price":10
}


get gbtest14/_search?pretty
{
    "query": {
        "match_all": {}
    },
    "from": 1,
    "size": 15
}






