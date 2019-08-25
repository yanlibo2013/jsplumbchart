export const stepData = [
    {
        "group": "IO",
        "thisIcon": [
            {
                "id": "spark_sink",
                "name": "sink",
                "type": "sink",
                "group": "IO",
                "icon": "default.png",
                "inputCount": 1,
                "outputCount": 0,
                "inputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "outputConfigurations": [],
                "otherConfigurations": {
                    "schema": "",
                    "brokers": "",
                    "columns": "",
                    "groupId": "",
                    "description": "",
                    "sessionCache": "",
                    "interceptor": "",
                    "type": "HDFS",
                    "nullValue": "",
                    "mode": "",
                    "path": "",
                    "password": "",
                    "table": "",
                    "quoteChar": "\"",
                    "escapeChar": "\\",
                    "sliceTimeColumn": "",
                    "partitionColumns": "",
                    "format": "csv",
                    "maxFileSize": "",
                    "maxFileNumber": "",
                    "separator": ",",
                    "url": "",
                    "expiredTime": "0",
                    "driver": "",
                    "namespace": "",
                    "topic": "",
                    "dataset": "",
                    "user": "",
                    "sliceType": "",
                    "specifiedStringColumnTypes": []
                },
                "creator": "SYSTEM",
                "createTime": 1562751241000,
                "lastModifier": "SYSTEM",
                "lastModifiedTime": 1562751241000,
                "owner": "SYSTEM",
                "version": 1,
                "enabled": 1,
                "moduleVersion": 0,
                "tags": [
                    "IO",
                    "dataflow"
                ],
                "expiredPeriod": 0
            },
            {
                "id": "spark_source",
                "name": "source",
                "type": "source",
                "group": "IO",
                "icon": "default.png",
                "inputCount": 0,
                "outputCount": 1,
                "outputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "otherConfigurations": {
                    "sessionCache": "",
                    "interceptor": "",
                    "dataset": ""
                },
                "creator": "SYSTEM",
                "createTime": 1562751241000,
                "lastModifier": "SYSTEM",
                "lastModifiedTime": 1562751241000,
                "owner": "SYSTEM",
                "version": 1,
                "enabled": 1,
                "moduleVersion": 0,
                "tags": [
                    "IO",
                    "dataflow"
                ],
                "expiredPeriod": 0
            },
            {
                "id": "spark_sqlsource",
                "name": "sqlsource",
                "type": "sqlsource",
                "group": "IO",
                "icon": "default.png",
                "inputCount": 0,
                "outputCount": 1,
                "inputConfigurations": [],
                "outputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "otherConfigurations": {
                    "sessionCache": "",
                    "interceptor": "",
                    "sql": ""
                },
                "creator": "SYSTEM",
                "createTime": 1562751241000,
                "lastModifier": "SYSTEM",
                "lastModifiedTime": 1562751241000,
                "owner": "SYSTEM",
                "version": 1,
                "enabled": 1,
                "moduleVersion": 0,
                "tags": [
                    "IO",
                    "dataflow"
                ],
                "expiredPeriod": 0
            }
        ]
    },
    {
        "group": "Join",
        "thisIcon": [
            {
                "id": "spark_join",
                "name": "join",
                "type": "join",
                "group": "Join",
                "icon": "default.png",
                "inputCount": 1,
                "outputCount": 1,
                "inputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "outputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "otherConfigurations": {
                    "joinType": "",
                    "sessionCache": "",
                    "interceptor": "",
                    "joinConditions": []
                },
                "creator": "SYSTEM",
                "createTime": 1562751241000,
                "lastModifier": "SYSTEM",
                "lastModifiedTime": 1562751241000,
                "owner": "SYSTEM",
                "version": 1,
                "enabled": 1,
                "moduleVersion": 0,
                "tags": [
                    "Join",
                    "dataflow"
                ],
                "expiredPeriod": 0
            },
            {
                "id": "spark_lookup",
                "name": "lookup",
                "type": "lookup",
                "group": "Join",
                "icon": "default.png",
                "inputCount": 1,
                "outputCount": 1,
                "inputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "outputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "otherConfigurations": {
                    "mode": "",
                    "ruleSettings": [
                        {
                            "tabName": "Set_1",
                            "dataset": "",
                            "datasetId": "",
                            "schema": "",
                            "schemaId": "",
                            "inputKeyColumn": "",
                            "valueColumns": [
                                {
                                    "name": "",
                                    "alias": "",
                                    "defaultNoMatch": "",
                                    "defaultNullKey": ""
                                }
                            ],
                            "interceptor": "",
                            "sessionCache": ""
                        }
                    ]
                },
                "creator": "SYSTEM",
                "createTime": 1562751241000,
                "lastModifier": "SYSTEM",
                "lastModifiedTime": 1562751241000,
                "owner": "SYSTEM",
                "version": 1,
                "enabled": 1,
                "moduleVersion": 0,
                "tags": [
                    "Join",
                    "dataflow"
                ],
                "expiredPeriod": 0
            },
            {
                "id": "spark_productjoin",
                "name": "productjoin",
                "type": "productjoin",
                "group": "Join",
                "icon": "default.png",
                "inputCount": 1,
                "outputCount": 1,
                "inputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "outputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "otherConfigurations": {},
                "creator": "SYSTEM",
                "createTime": 1562751241000,
                "lastModifier": "SYSTEM",
                "lastModifiedTime": 1562751241000,
                "owner": "SYSTEM",
                "version": 1,
                "enabled": 1,
                "moduleVersion": 0,
                "tags": [
                    "Join",
                    "dataflow"
                ],
                "expiredPeriod": 0
            },
            {
                "id": "spark_starjoin",
                "name": "starjoin",
                "type": "starjoin",
                "group": "Join",
                "icon": "default.png",
                "inputCount": 1,
                "outputCount": 1,
                "inputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "outputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "otherConfigurations": {
                    "sessionCache": "",
                    "interceptor": "",
                    "factTable": "",
                    "joinConditions": [
                        {
                            "tableName": "",
                            "dimColumn": "",
                            "factColumn": ""
                        }
                    ]
                },
                "creator": "SYSTEM",
                "createTime": 1562751241000,
                "lastModifier": "SYSTEM",
                "lastModifiedTime": 1562751241000,
                "owner": "SYSTEM",
                "version": 1,
                "enabled": 1,
                "moduleVersion": 0,
                "tags": [
                    "Join",
                    "dataflow"
                ],
                "expiredPeriod": 0
            }
        ]
    },
    {
        "group": "Set",
        "thisIcon": [
            {
                "id": "spark_intersect",
                "name": "intersect",
                "type": "intersect",
                "group": "Set",
                "icon": "default.png",
                "inputCount": 1,
                "outputCount": 1,
                "inputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "outputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "otherConfigurations": {},
                "creator": "SYSTEM",
                "createTime": 1562751241000,
                "lastModifier": "SYSTEM",
                "lastModifiedTime": 1562751241000,
                "owner": "SYSTEM",
                "version": 1,
                "enabled": 1,
                "moduleVersion": 0,
                "tags": [
                    "Set",
                    "dataflow"
                ],
                "expiredPeriod": 0
            },
            {
                "id": "spark_minus",
                "name": "minus",
                "type": "minus",
                "group": "Set",
                "icon": "default.png",
                "inputCount": 1,
                "outputCount": 1,
                "inputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "outputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "otherConfigurations": {},
                "creator": "SYSTEM",
                "createTime": 1562751241000,
                "lastModifier": "SYSTEM",
                "lastModifiedTime": 1562751241000,
                "owner": "SYSTEM",
                "version": 1,
                "enabled": 1,
                "moduleVersion": 0,
                "tags": [
                    "Set",
                    "dataflow"
                ],
                "expiredPeriod": 0
            },
            {
                "id": "spark_split",
                "name": "split",
                "type": "split",
                "group": "Set",
                "icon": "default.png",
                "inputCount": 1,
                "outputCount": 1,
                "inputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "outputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "otherConfigurations": {
                    "condition": "",
                    "sessionCache": "",
                    "interceptor": ""
                },
                "creator": "SYSTEM",
                "createTime": 1562751241000,
                "lastModifier": "SYSTEM",
                "lastModifiedTime": 1562751241000,
                "owner": "SYSTEM",
                "version": 1,
                "enabled": 1,
                "moduleVersion": 0,
                "tags": [
                    "Set",
                    "dataflow"
                ],
                "expiredPeriod": 0
            },
            {
                "id": "spark_union",
                "name": "union",
                "type": "union",
                "group": "Set",
                "icon": "default.png",
                "inputCount": 1,
                "outputCount": 1,
                "inputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "outputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "otherConfigurations": {
                    "distinct": "false",
                    "sessionCache": "",
                    "interceptor": ""
                },
                "creator": "SYSTEM",
                "createTime": 1562751241000,
                "lastModifier": "SYSTEM",
                "lastModifiedTime": 1562751241000,
                "owner": "SYSTEM",
                "version": 1,
                "enabled": 1,
                "moduleVersion": 0,
                "tags": [
                    "Set",
                    "dataflow"
                ],
                "expiredPeriod": 0
            }
        ]
    },
    {
        "group": "Gateway",
        "thisIcon": [
            {
                "id": "spark_decision",
                "name": "decision",
                "type": "decision",
                "group": "Gateway",
                "icon": "default.png",
                "inputCount": 1,
                "outputCount": 1,
                "inputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "outputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "otherConfigurations": {
                    "condition": "",
                    "sessionCache": "",
                    "interceptor": ""
                },
                "creator": "SYSTEM",
                "createTime": 1562751241000,
                "lastModifier": "SYSTEM",
                "lastModifiedTime": 1562751241000,
                "owner": "SYSTEM",
                "version": 1,
                "enabled": 1,
                "moduleVersion": 0,
                "tags": [
                    "Gateway",
                    "dataflow"
                ],
                "expiredPeriod": 0
            },
            {
                "id": "spark_supplement",
                "name": "supplement",
                "type": "supplement",
                "group": "Gateway",
                "icon": "default.png",
                "inputCount": 1,
                "outputCount": 1,
                "inputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "outputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "otherConfigurations": {
                    "sessionCache": "",
                    "interceptor": "",
                    "supplementSchema": ""
                },
                "creator": "SYSTEM",
                "createTime": 1562751241000,
                "lastModifier": "SYSTEM",
                "lastModifiedTime": 1562751241000,
                "owner": "SYSTEM",
                "version": 1,
                "enabled": 1,
                "moduleVersion": 0,
                "tags": [
                    "Gateway",
                    "dataflow"
                ],
                "expiredPeriod": 0
            },
            {
                "id": "spark_validate",
                "name": "validate",
                "type": "validate",
                "group": "Gateway",
                "icon": "default.png",
                "inputCount": 1,
                "outputCount": 1,
                "inputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "outputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "otherConfigurations": {
                    "detailColumn": "errorInfo",
                    "validationRules": [
                        {
                            "name": "",
                            "expression": ""
                        }
                    ],
                    "action": "",
                    "sessionCache": "",
                    "interceptor": "",
                    "showDetails": ""
                },
                "creator": "SYSTEM",
                "createTime": 1562751241000,
                "lastModifier": "SYSTEM",
                "lastModifiedTime": 1562751241000,
                "owner": "SYSTEM",
                "version": 1,
                "enabled": 1,
                "moduleVersion": 0,
                "tags": [
                    "Gateway",
                    "dataflow"
                ],
                "expiredPeriod": 0
            }
        ]
    },
    {
        "group": "mapping",
        "thisIcon": [
            {
                "id": "spark_cache",
                "name": "lookupTable",
                "type": "cache",
                "group": "mapping",
                "icon": "default.png",
                "inputCount": 1,
                "outputCount": 1,
                "inputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "outputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "otherConfigurations": {
                    "schema": "",
                    "singleRowCache": "true",
                    "sessionCache": "",
                    "interceptor": "",
                    "url": "",
                    "path": "",
                    "password": "",
                    "keyColumn": "",
                    "cacheName": "",
                    "engine": "MapDB",
                    "valueColumns": [],
                    "dataset": "",
                    "key": ""
                },
                "creator": "SYSTEM",
                "createTime": 1562751241000,
                "lastModifier": "SYSTEM",
                "lastModifiedTime": 1562751241000,
                "owner": "SYSTEM",
                "version": 1,
                "enabled": 1,
                "moduleVersion": 0,
                "tags": [
                    "mapping",
                    "dataflow"
                ],
                "expiredPeriod": 0
            }
        ]
    },
    {
        "group": "Group",
        "thisIcon": [
            {
                "id": "spark_aggregate",
                "name": "aggregate",
                "type": "aggregate",
                "group": "Group",
                "icon": "default.png",
                "inputCount": 1,
                "outputCount": 1,
                "inputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "outputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "otherConfigurations": {
                    "groupBy": [],
                    "aggregations": [
                        {
                            "column": "",
                            "function": "",
                            "alias": ""
                        }
                    ]
                },
                "creator": "SYSTEM",
                "createTime": 1562751241000,
                "lastModifier": "SYSTEM",
                "lastModifiedTime": 1562751241000,
                "owner": "SYSTEM",
                "version": 1,
                "enabled": 1,
                "moduleVersion": 0,
                "tags": [
                    "Group",
                    "dataflow"
                ],
                "expiredPeriod": 0
            },
            {
                "id": "spark_top",
                "name": "top",
                "type": "top",
                "group": "Group",
                "icon": "default.png",
                "inputCount": 1,
                "outputCount": 1,
                "inputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "outputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "otherConfigurations": {
                    "limit": "",
                    "orderBy": [],
                    "sessionCache": "",
                    "interceptor": "",
                    "groupBy": [],
                    "limitType": "ROW_COUNT"
                },
                "creator": "SYSTEM",
                "createTime": 1562751241000,
                "lastModifier": "SYSTEM",
                "lastModifiedTime": 1562751241000,
                "owner": "SYSTEM",
                "version": 1,
                "enabled": 1,
                "moduleVersion": 0,
                "tags": [
                    "Group",
                    "dataflow"
                ],
                "expiredPeriod": 0
            }
        ]
    },
    {
        "group": "Transform",
        "thisIcon": [
            {
                "id": "sample",
                "name": "sample",
                "type": "sample",
                "group": "Transform",
                "icon": "default.png",
                "inputCount": 1,
                "outputCount": 1,
                "inputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "outputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "otherConfigurations": {
                    "withReplacement": "false",
                    "interceptor": "string",
                    "fraction": "0.2"
                },
                "creator": "SYSTEM",
                "createTime": 1562751241000,
                "lastModifier": "SYSTEM",
                "lastModifiedTime": 1562751241000,
                "owner": "SYSTEM",
                "version": 1,
                "enabled": 1,
                "moduleVersion": 0,
                "tags": [
                    "Transform",
                    "dataflow"
                ],
                "expiredPeriod": 0
            },
            {
                "id": "spark_filter",
                "name": "filter",
                "type": "filter",
                "group": "Transform",
                "icon": "default.png",
                "inputCount": 1,
                "outputCount": 1,
                "inputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "outputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "otherConfigurations": {
                    "condition": "",
                    "sessionCache": "",
                    "interceptor": ""
                },
                "creator": "SYSTEM",
                "createTime": 1562751241000,
                "lastModifier": "SYSTEM",
                "lastModifiedTime": 1562751241000,
                "owner": "SYSTEM",
                "version": 1,
                "enabled": 1,
                "moduleVersion": 0,
                "tags": [
                    "Transform",
                    "dataflow"
                ],
                "expiredPeriod": 0
            },
            {
                "id": "spark_sql",
                "name": "sql",
                "type": "sql",
                "group": "Transform",
                "icon": "default.png",
                "inputCount": 1,
                "outputCount": 1,
                "inputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "outputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "otherConfigurations": {
                    "sessionCache": "",
                    "interceptor": "",
                    "sql": ""
                },
                "creator": "SYSTEM",
                "createTime": 1562751241000,
                "lastModifier": "SYSTEM",
                "lastModifiedTime": 1562751241000,
                "owner": "SYSTEM",
                "version": 1,
                "enabled": 1,
                "moduleVersion": 0,
                "tags": [
                    "Transform",
                    "dataflow"
                ],
                "expiredPeriod": 0
            },
            {
                "id": "spark_transform",
                "name": "transform",
                "type": "transform",
                "group": "Transform",
                "icon": "default.png",
                "inputCount": 1,
                "outputCount": 1,
                "inputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "outputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "otherConfigurations": {
                    "sessionCache": "",
                    "interceptor": "",
                    "expressions": []
                },
                "creator": "SYSTEM",
                "createTime": 1562751241000,
                "lastModifier": "SYSTEM",
                "lastModifiedTime": 1562751241000,
                "owner": "SYSTEM",
                "version": 1,
                "enabled": 1,
                "moduleVersion": 0,
                "tags": [
                    "Transform",
                    "dataflow"
                ],
                "expiredPeriod": 0
            }
        ]
    },
    {
        "group": "Datamining",
        "thisIcon": [
            {
                "id": "classification_decisiontree_predict",
                "name": "classification_decisiontree_predict",
                "type": "classification_decisiontree_predict",
                "group": "Datamining",
                "icon": "default.png",
                "inputCount": 1,
                "outputCount": 1,
                "inputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "outputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "otherConfigurations": {
                    "featureColumns": [],
                    "labelColumn": "",
                    "modelPath": "",
                    "interceptor": "string",
                    "runMode": "predict"
                },
                "creator": "SYSTEM",
                "createTime": 1562751241000,
                "lastModifier": "SYSTEM",
                "lastModifiedTime": 1562751241000,
                "owner": "SYSTEM",
                "version": 1,
                "enabled": 1,
                "moduleVersion": 0,
                "tags": [
                    "Datamining",
                    "dataflow"
                ],
                "expiredPeriod": 0
            },
            {
                "id": "classification_decisiontree_train",
                "name": "classification_decisiontree_train",
                "type": "classification_decisiontree_train",
                "group": "Datamining",
                "icon": "default.png",
                "inputCount": 1,
                "outputCount": 1,
                "inputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "outputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "otherConfigurations": {
                    "maxDepth": "5",
                    "impurity": "gini",
                    "featureColumns": [],
                    "categoricalFeaturesInfo": [
                        {
                            "featureColumn": "",
                            "categories": ""
                        }
                    ],
                    "maxBins": "32",
                    "labelColumn": "label",
                    "modelPath": "",
                    "trainPortion": "0.7",
                    "modelType": "classification",
                    "runMode": "train",
                    "numClasses": ""
                },
                "creator": "SYSTEM",
                "createTime": 1562751241000,
                "lastModifier": "SYSTEM",
                "lastModifiedTime": 1562751241000,
                "owner": "SYSTEM",
                "version": 1,
                "enabled": 1,
                "moduleVersion": 0,
                "tags": [
                    "Datamining",
                    "dataflow"
                ],
                "expiredPeriod": 0
            },
            {
                "id": "classification_gradientboostedtrees_predict",
                "name": "classification_gradientboostedtrees_predict",
                "type": "classification_gradientboostedtrees_predict",
                "group": "Datamining",
                "icon": "default.png",
                "inputCount": 1,
                "outputCount": 1,
                "inputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "outputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "otherConfigurations": {
                    "featureColumns": [],
                    "labelColumn": "",
                    "modelPath": "",
                    "interceptor": "string",
                    "runMode": "predict"
                },
                "creator": "SYSTEM",
                "createTime": 1562751241000,
                "lastModifier": "SYSTEM",
                "lastModifiedTime": 1562751241000,
                "owner": "SYSTEM",
                "version": 1,
                "enabled": 1,
                "moduleVersion": 0,
                "tags": [
                    "Datamining",
                    "dataflow"
                ],
                "expiredPeriod": 0
            },
            {
                "id": "classification_gradientboostedtrees_train",
                "name": "classification_gradientboostedtrees_train",
                "type": "classification_gradientboostedtrees_train",
                "group": "Datamining",
                "icon": "default.png",
                "inputCount": 1,
                "outputCount": 1,
                "inputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "outputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "otherConfigurations": {
                    "impurity": "gini",
                    "modelPath": "",
                    "trainPortion": "0.7",
                    "interceptor": "string",
                    "modelType": "classification",
                    "learningRate": "0.1",
                    "runMode": "train",
                    "maxDepth": "5",
                    "loss": "logLoss",
                    "featureColumns": [],
                    "numIterations": "5",
                    "maxBins": "32",
                    "labelColumn": "label"
                },
                "creator": "SYSTEM",
                "createTime": 1562751241000,
                "lastModifier": "SYSTEM",
                "lastModifiedTime": 1562751241000,
                "owner": "SYSTEM",
                "version": 1,
                "enabled": 1,
                "moduleVersion": 0,
                "tags": [
                    "Datamining",
                    "dataflow"
                ],
                "expiredPeriod": 0
            },
            {
                "id": "spark_clustering_kmeans_predict",
                "name": "clustering_kmeans_predict",
                "type": "clustering_kmeans_predict",
                "group": "Datamining",
                "icon": "default.png",
                "inputCount": 1,
                "outputCount": 1,
                "inputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "outputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "otherConfigurations": {
                    "featureColumns": [],
                    "modelPath": "",
                    "interceptor": "string",
                    "clusterIdColumn": "",
                    "runMode": "predict"
                },
                "creator": "SYSTEM",
                "createTime": 1562751241000,
                "lastModifier": "SYSTEM",
                "lastModifiedTime": 1562751241000,
                "owner": "SYSTEM",
                "version": 1,
                "enabled": 1,
                "moduleVersion": 0,
                "tags": [
                    "Datamining",
                    "dataflow"
                ],
                "expiredPeriod": 0
            },
            {
                "id": "spark_clustering_kmeans_train",
                "name": "clustering_kmeans_train",
                "type": "clustering_kmeans_train",
                "group": "Datamining",
                "icon": "default.png",
                "inputCount": 1,
                "outputCount": 1,
                "inputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "outputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "otherConfigurations": {
                    "epsilon": "3.0",
                    "maxIterations": "20",
                    "featureColumns": [],
                    "initializationMode": "k-means||",
                    "initializationSteps": "5",
                    "modelPath": "",
                    "interceptor": "string",
                    "k": "2",
                    "runs": "3",
                    "runMode": "train"
                },
                "creator": "SYSTEM",
                "createTime": 1562751241000,
                "lastModifier": "SYSTEM",
                "lastModifiedTime": 1562751241000,
                "owner": "SYSTEM",
                "version": 1,
                "enabled": 1,
                "moduleVersion": 0,
                "tags": [
                    "Datamining",
                    "dataflow"
                ],
                "expiredPeriod": 0
            },
            {
                "id": "spark_fpgrowth",
                "name": "frequentpattern_fpgrowth",
                "type": "frequentpattern_fpgrowth",
                "group": "Datamining",
                "icon": "default.png",
                "inputCount": 1,
                "outputCount": 1,
                "inputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "outputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "otherConfigurations": {
                    "numPartitions": "1",
                    "patternColumn": "",
                    "minSupport": "0.3",
                    "frequencyColumn": ""
                },
                "creator": "SYSTEM",
                "createTime": 1562751241000,
                "lastModifier": "SYSTEM",
                "lastModifiedTime": 1562751241000,
                "owner": "SYSTEM",
                "version": 1,
                "enabled": 1,
                "moduleVersion": 0,
                "tags": [
                    "Datamining",
                    "dataflow"
                ],
                "expiredPeriod": 0
            },
            {
                "id": "spark_linearleastsquares_predict",
                "name": "regression_linearleastsquares_predict",
                "type": "regression_linearleastsquares_predict",
                "group": "Datamining",
                "icon": "default.png",
                "inputCount": 1,
                "outputCount": 1,
                "inputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "outputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "otherConfigurations": {
                    "featureColumns": [],
                    "labelColumn": "",
                    "modelPath": ""
                },
                "creator": "SYSTEM",
                "createTime": 1562751241000,
                "lastModifier": "SYSTEM",
                "lastModifiedTime": 1562751241000,
                "owner": "SYSTEM",
                "version": 1,
                "enabled": 1,
                "moduleVersion": 0,
                "tags": [
                    "Datamining",
                    "dataflow"
                ],
                "expiredPeriod": 0
            },
            {
                "id": "spark_linearleastsquares_train",
                "name": "regression_linearleastsquares_train",
                "type": "regression_linearleastsquares_train",
                "group": "Datamining",
                "icon": "default.png",
                "inputCount": 1,
                "outputCount": 1,
                "inputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "outputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "otherConfigurations": {
                    "featureColumns": [],
                    "labelColumn": "score",
                    "stepSize": "1.0",
                    "modelPath": "",
                    "trainPortion": "0.7",
                    "miniBatchFraction": "1.0",
                    "trainIteration": "100"
                },
                "creator": "SYSTEM",
                "createTime": 1562751241000,
                "lastModifier": "SYSTEM",
                "lastModifiedTime": 1562751241000,
                "owner": "SYSTEM",
                "version": 1,
                "enabled": 1,
                "moduleVersion": 0,
                "tags": [
                    "Datamining",
                    "dataflow"
                ],
                "expiredPeriod": 0
            },
            {
                "id": "spark_LogisticRegressionPredict",
                "name": "classification_logisticregression_predict",
                "type": "classification_logisticregression_predict",
                "group": "Datamining",
                "icon": "default.png",
                "inputCount": 1,
                "outputCount": 1,
                "inputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "outputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "otherConfigurations": {
                    "featureColumns": [],
                    "labelColumn": "",
                    "modelPath": ""
                },
                "creator": "SYSTEM",
                "createTime": 1562751241000,
                "lastModifier": "SYSTEM",
                "lastModifiedTime": 1562751241000,
                "owner": "SYSTEM",
                "version": 1,
                "enabled": 1,
                "moduleVersion": 0,
                "tags": [
                    "Datamining",
                    "dataflow"
                ],
                "expiredPeriod": 0
            },
            {
                "id": "spark_LogisticRegressionTrain",
                "name": "classification_logisticregression_train",
                "type": "classification_logisticregression_train",
                "group": "Datamining",
                "icon": "default.png",
                "inputCount": 1,
                "outputCount": 1,
                "inputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "outputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "otherConfigurations": {
                    "featureColumns": [],
                    "labelColumn": "score",
                    "modelPath": "",
                    "trainPortion": "0.7",
                    "regParam": "",
                    "regType": "",
                    "numClasses": "2",
                    "trainIteration": "1"
                },
                "creator": "SYSTEM",
                "createTime": 1562751241000,
                "lastModifier": "SYSTEM",
                "lastModifiedTime": 1562751241000,
                "owner": "SYSTEM",
                "version": 1,
                "enabled": 1,
                "moduleVersion": 0,
                "tags": [
                    "Datamining",
                    "dataflow"
                ],
                "expiredPeriod": 0
            },
            {
                "id": "spark_naivebayes_predict",
                "name": "classification_naivebayes_predict",
                "type": "classification_naivebayes_predict",
                "group": "Datamining",
                "icon": "default.png",
                "inputCount": 1,
                "outputCount": 1,
                "inputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "outputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "otherConfigurations": {
                    "featureColumns": [],
                    "labelColumn": "",
                    "modelPath": ""
                },
                "creator": "SYSTEM",
                "createTime": 1562751241000,
                "lastModifier": "SYSTEM",
                "lastModifiedTime": 1562751241000,
                "owner": "SYSTEM",
                "version": 1,
                "enabled": 1,
                "moduleVersion": 0,
                "tags": [
                    "Datamining",
                    "dataflow"
                ],
                "expiredPeriod": 0
            },
            {
                "id": "spark_naivebayes_train",
                "name": "classification_naivebayes_train",
                "type": "classification_naivebayes_train",
                "group": "Datamining",
                "icon": "default.png",
                "inputCount": 1,
                "outputCount": 1,
                "inputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "outputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "otherConfigurations": {
                    "featureColumns": [],
                    "labelColumn": "label",
                    "modelPath": "",
                    "trainPortion": "0.6",
                    "modelType": ""
                },
                "creator": "SYSTEM",
                "createTime": 1562751241000,
                "lastModifier": "SYSTEM",
                "lastModifiedTime": 1562751241000,
                "owner": "SYSTEM",
                "version": 1,
                "enabled": 1,
                "moduleVersion": 0,
                "tags": [
                    "Datamining",
                    "dataflow"
                ],
                "expiredPeriod": 0
            },
            {
                "id": "spark_RandomForestPredictStep",
                "name": "classification_randomforest_predict",
                "type": "classification_randomforest_predict",
                "group": "Datamining",
                "icon": "default.png",
                "inputCount": 1,
                "outputCount": 1,
                "inputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "outputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "otherConfigurations": {
                    "featureColumns": [],
                    "labelColumn": "",
                    "modelPath": ""
                },
                "creator": "SYSTEM",
                "createTime": 1562751241000,
                "lastModifier": "SYSTEM",
                "lastModifiedTime": 1562751241000,
                "owner": "SYSTEM",
                "version": 1,
                "enabled": 1,
                "moduleVersion": 0,
                "tags": [
                    "Datamining",
                    "dataflow"
                ],
                "expiredPeriod": 0
            },
            {
                "id": "spark_RandomForestTrainStep",
                "name": "classification_randomforest_train",
                "type": "classification_randomforest_train",
                "group": "Datamining",
                "icon": "default.png",
                "inputCount": 1,
                "outputCount": 1,
                "inputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "outputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "otherConfigurations": {
                    "numTrees": "1",
                    "maxDepth": "1",
                    "featureSubsetStrategy": "auto",
                    "impurity": "gini",
                    "featureColumns": [],
                    "categoricalFeaturesInfo": [
                        {
                            "featureColumn": "",
                            "categories": ""
                        }
                    ],
                    "maxBins": "1",
                    "labelColumn": "",
                    "trainPortion": "0.7",
                    "modelType": "classification",
                    "numClasses": "2"
                },
                "creator": "SYSTEM",
                "createTime": 1562751241000,
                "lastModifier": "SYSTEM",
                "lastModifiedTime": 1562751241000,
                "owner": "SYSTEM",
                "version": 1,
                "enabled": 1,
                "moduleVersion": 0,
                "tags": [
                    "Datamining",
                    "dataflow"
                ],
                "expiredPeriod": 0
            }
        ]
    },
    {
        "group": "define",
        "thisIcon": [
            {
                "id": "define_dataflow",
                "name": "definestep",
                "type": "definestep",
                "group": "define",
                "icon": "default.png",
                "inputCount": 1,
                "outputCount": 1,
                "inputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "outputConfigurations": [
                    {
                        "id": "",
                        "fields": []
                    }
                ],
                "otherConfigurations": {
                    "watermark": {
                        "watermarkColumn": "",
                        "watermarkInterval": ""
                    },
                    "columns": "",
                    "sessionCache": "",
                    "interceptor": ""
                },
                "creator": "SYSTEM",
                "createTime": 1562751241000,
                "lastModifier": "SYSTEM",
                "lastModifiedTime": 1562751241000,
                "owner": "SYSTEM",
                "version": 1,
                "enabled": 1,
                "moduleVersion": 0,
                "tags": [
                    "define",
                    "dataflow"
                ],
                "expiredPeriod": 0
            }
        ]
    }
];
