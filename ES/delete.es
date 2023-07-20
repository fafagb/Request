Post exercisestructindex/_delete_by_query?pretty
{
  "query":{
    "match":{"charpterIds":90194313262867}
    
  }
//   
}


//删除
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
    "match":{"_id":"KsEnw4cB5o7gCXwlFlmv"}
    
  }
//   
}




Post sysctechapterindex/_delete_by_query?pretty
{
  "query":{
    "match_all":{}
    
  }
//   
}


Post sysctechapterindex/_delete_by_query?pretty
{
  
    "query":{
        "bool":{
            "must":[
                {
                    "match":{
                        "coursetemplateId": 863331724564
                    }
                },
                {
                    "match":{
                        "ebookid": 1374390096076
                    }
                }
            ]
     
        }
    }
}

