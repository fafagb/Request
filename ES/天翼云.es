DELETE exerciseindex/_doc/KvTMdoUBLFajYtC9b_ce





POST exerciseindex/_search
{
"size": 1000,
"aggs": {
"duplicateCount": {
"terms": {
"field": "exerciseID",
"min_doc_count": 2
},
"aggs": {
"duplicateDocuments": {
"top_hits": {}
}
}
}
}
}






GET exerciseindex/_search
{
    "size":0,
    "aggs":{
        "field":{
            "terms":{
                "field":"exerciseID",
                "size":3000,
                "min_doc_count":1
            }
        }
    }
}

