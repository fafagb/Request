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


Post exercisestructindex/_delete_by_query?pretty
{
  "query":{
    "match":{"exerciseTypeAliasId":0}
    
  }
  
}







// DELETE /exercisestructindex




