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
Post exercisestructindex/_delete_by_query?pretty
{
  "query":{
                "terms":{
                    "exerciseId": [
3032246947905,3032246947904,3032246947897

      ]
                }
        

    
  }
  
}







Post exercisestructindex/_delete_by_query?pretty
{
  "query":{
    "match":{"exerciseTypeAliasId":0}
    
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
                        "parentID": 0
                    }
                },
                {
                    "match":{
                        "charpterIds": 1374390106403
                    }
                }
            ]
        
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