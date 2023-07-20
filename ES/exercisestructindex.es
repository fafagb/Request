POST  fafagb/_doc
{
    "name": "gengbin2",
    "pass": [
        [
            123456,
            456,
            789
        ],
        [
            987,
            654,
            321
        ]
    ]
}




Post fafagb/_search
{
  "query":{
    
   "match": {
     "pass": "1234"
   }
  }
  
}


Post fafagb/_search
{
  "query":{
    
  "match_all": {}
  }
  
}



Post exercisestructindex/_search
{
  "query":{
    
  "match_all": {}
  }
  
}



Post exercisestructindex/_search
{
  "query":{
    "match":{"exerciseTypeId":0}
    
  }
  
}
















Post exercisestructindex/_search
{
  "query":{
    "bool": {
      "must_not": [
        {
         "match": {
           "parentID": 0
         } 
          
        }
      ]
    }
    
  }
  
}




Post exercisestructindex/_search
{
  
    "query":{
        "bool":{
            "must":[
                {
                    "match":{
                        "parentID": 0
                    }
                },
                {
                    "match":{
                        "charpterIds": 1374390106405
                    }
                },
               { "range":{

"exerciseTypeId":{"gt": 0}

}}
            ]
     
        }
    }
}



Post exercisestructindex/_search
{
    "from": 1, 
    "size": 100,
    "query":{
        "bool":{
            "must":[
                {
                    "match":{
                        "usePeopleNum": 6
                    }
                }
            ]
        
        }
    }
}



Post exercisestructindex/_search
{
    "from": 1, 
    "size": 100,
    "query":{
        "bool":{
            "must":[
                {
                    "match":{
                        "charpterIds": 1374390106405
                    }
                }
            ]
        
        }
    }
}





Post exercisestructindex/_search
{
    "query":{
        "bool":{
            "must":[{
                "terms":{
                    "chapterIds": [
90198609023994

      ]
                }
            }]
        }
    }
}






// 分页
Post exercisestructindex/_search
{
    "from": 1, 
    "size": 10,
    "query": {
        "match_all": {}
    },
    "sort": [
        {"exerciseId": "asc"}    
    ]
}


// DELETE /exercisestructindex





Post exercisestructindex/_search
{
    "query":{
        "bool":{"must_not": [
        {
         "match": {
           "exerciseTypeAliasId": 0
         } 
          
        }
      ],
            "must":[{
                "terms":{
                    "exerciseId": [
3032247553440,
3032247553438,
3032247553439,
3032247553441,
3032247553437,
3032247553435,
3032247553436,
3032247557647,
3032247557648,
3032247557649,
3032247557640,
3032247557650

      ]
                }
            }]
        }
    }
}







//查询chapterIds不为空的数据
Post exercisestructindex/_search
{
    "query":{
        "bool":{
            "must_not": [
        {
         "match": {
           "chapterIds": 0
         } 
          
        }
      ]
        }
    }
}


//查询chapterIds为90198609023994的数据
Post exercisestructindex/_search
{
     "query":{
                "terms":{
                    "charpterIds": [
90198609024011

      ]
                }
        

    
  }
}




Post exercisestructindex/_search
{
  
    "query":{
        "bool":{
            "must":[
                {
                    "match":{
                        "exerciseId": 3113875957608
                    }
                }
            ]
     
        }
    }
}





Post exercisestructindex/_search
{
    "query":{
      
         
                "terms":{
                    "exerciseId": [
3032247553440,
3032247553438,
3032247553439,
3032247553441,
3032247553437,
3032247553435,
3032247553436,
3032247557647,
3032247557648,
3032247557649,
3032247557640,
3032247557650

      ]
                }
            
        }
    }




Post exercisestructindex/_doc
{
"schoolId": 0,
"exerciseId": 3032247566666,
"exerciseTypeAliasId": 863288433875,
"exerciseTypeId": 3
}




Post exercisestructindex/_search
{
  "query":{
    "match":{"exerciseTypeAliasId":0}
    
  }
  
}









//重复
Post exercisestructindex/_search

{
    "size":0,
    "aggs":{
        "field":{
            "terms":{
                "field":"exerciseId",
                "size":3000,
                "min_doc_count":2
            }
        }
    },

    "query":{
        "bool":{
            "must":[
               
               { "range":{

"parentID":{"gt": 0}

}}
            ]
     
        }
    }









}



Post exercisestructindex/_search
{
  "query":{
    "match":{"exerciseId":3032247599325}
    
  }
  
}



post exercisestructindex/_update_by_query
{
   "script": {
        "inline": "ctx._source.isValid = params.isValid",
        "params": {
            "isValid": false
           
        }
    },
 "query":{
"match_phrase":{"exerciseId":3032247687325}
}
}






{"from":1,"size":100,"query":{"bool":{"must":[{"match":{"coursetemplateId":863327811131}},{"match":{"isvalid":true}}]}}}




