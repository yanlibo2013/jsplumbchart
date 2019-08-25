export const flowData = {
    "id": "1f3d9266-5c61-47e5-b3b7-665ab8a87de8",
    "name": "血缘分析test2111",
    "flowType": "dataflow",
    "steps": [
        {
            "id": "source_1",
            "name": "用户基本信息表_老科学家采集工程平台",
            "type": "source",
            "x": 92,
            "y": 37,
            "otherConfigurations": {
                "schema": "users_老科学家采集工程平台",
                "schemaId": "823ca7d9-04f1-4829-8fd1-43eaa97b3a51",
                "sessionCache": "",
                "ignoreMissingPath": false,
                "datasetId": "a4af663e-7a86-45a8-8968-f7a307639ff4",
                "interceptor": "",
                "dataset": "用户基本信息表_老科学家采集工程平台"
            },
            "outputConfigurations": [
                {
                    "id": "output",
                    "fields": [
                        {
                            "type": "bigint",
                            "alias": "",
                            "description": "",
                            "column": "ID"
                        },
                        {
                            "type": "string",
                            "alias": "",
                            "description": "",
                            "column": "username"
                        },
                        {
                            "type": "string",
                            "alias": "",
                            "description": "",
                            "column": "userCode"
                        },
                        {
                            "type": "string",
                            "alias": "",
                            "description": "",
                            "column": "pinnumber"
                        },
                        {
                            "type": "string",
                            "alias": "",
                            "description": "",
                            "column": "sex"
                        },
                        {
                            "type": "string",
                            "alias": "",
                            "description": "",
                            "column": "extension1"
                        },
                        {
                            "type": "timestamp",
                            "alias": "",
                            "description": "",
                            "column": "birthday"
                        },
                        {
                            "type": "string",
                            "alias": "",
                            "description": "",
                            "column": "identityCard"
                        },
                        {
                            "type": "string",
                            "alias": "",
                            "description": "",
                            "column": "extension2"
                        },
                        {
                            "type": "string",
                            "alias": "",
                            "description": "",
                            "column": "EMAIL"
                        },
                        {
                            "type": "string",
                            "alias": "",
                            "description": "",
                            "column": "HOMEPHONE"
                        },
                        {
                            "type": "string",
                            "alias": "",
                            "description": "",
                            "column": "mobiletelephone"
                        },
                        {
                            "type": "string",
                            "alias": "",
                            "description": "",
                            "column": "address"
                        },
                        {
                            "type": "timestamp",
                            "alias": "",
                            "description": "",
                            "column": "subTime"
                        },
                        {
                            "type": "bigint",
                            "alias": "",
                            "description": "",
                            "column": "delflag"
                        },
                        {
                            "type": "bigint",
                            "alias": "",
                            "description": "",
                            "column": "truceflag"
                        },
                        {
                            "type": "bigint",
                            "alias": "",
                            "description": "",
                            "column": "sort"
                        },
                        {
                            "type": "string",
                            "alias": "",
                            "description": "",
                            "column": "description"
                        },
                        {
                            "type": "string",
                            "alias": "",
                            "description": "",
                            "column": "field1"
                        },
                        {
                            "type": "string",
                            "alias": "",
                            "description": "",
                            "column": "field2"
                        },
                        {
                            "type": "string",
                            "alias": "",
                            "description": "",
                            "column": "field3"
                        }
                    ]
                }
            ]
        },
        {
            "id": "source_2",
            "name": "兼职表0426_老科学家采集工程平台",
            "type": "source",
            "x": 85,
            "y": 176,
            "otherConfigurations": {
                "schema": "兼职表0426_老科学家采集工程平台_plurality",
                "schemaId": "ec91f34a-1c1e-42db-b87b-3822e12ca99b",
                "sessionCache": "",
                "datasetId": "922ee9fd-3fa3-4237-833e-a0186403c75e",
                "interceptor": "",
                "dataset": "兼职表0426_老科学家采集工程平台"
            },
            "outputConfigurations": [
                {
                    "id": "output",
                    "fields": [
                        {
                            "column": "ID",
                            "alias": ""
                        },
                        {
                            "column": "depID",
                            "alias": ""
                        },
                        {
                            "column": "userID",
                            "alias": ""
                        },
                        {
                            "column": "stationID",
                            "alias": ""
                        },
                        {
                            "column": "stationID2",
                            "alias": ""
                        },
                        {
                            "column": "dutyID",
                            "alias": ""
                        },
                        {
                            "column": "plurflag",
                            "alias": ""
                        },
                        {
                            "column": "isDepMgr",
                            "alias": ""
                        }
                    ]
                }
            ]
        },
        {
            "id": "source_3",
            "name": "部门信息表_老科学家采集工程平台",
            "type": "source",
            "x": 80,
            "y": 319,
            "otherConfigurations": {
                "schema": "department_老科学家采集工程平台",
                "schemaId": "72b26275-f942-4b4f-9780-d896e17b5a51",
                "sessionCache": "",
                "ignoreMissingPath": false,
                "datasetId": "ac5ddc42-5a45-4da6-a98e-315adca0942a",
                "interceptor": "",
                "dataset": "部门信息表_老科学家采集工程平台"
            },
            "outputConfigurations": [
                {
                    "id": "output",
                    "fields": [
                        {
                            "column": "depID",
                            "alias": ""
                        },
                        {
                            "column": "fatherdeptID",
                            "alias": ""
                        },
                        {
                            "column": "depName",
                            "alias": ""
                        },
                        {
                            "column": "DEPLEVEL",
                            "alias": ""
                        },
                        {
                            "column": "dep_sort",
                            "alias": ""
                        },
                        {
                            "column": "DISCRIPTION",
                            "alias": ""
                        },
                        {
                            "column": "subTime",
                            "alias": ""
                        },
                        {
                            "column": "createID",
                            "alias": ""
                        },
                        {
                            "column": "delflag",
                            "alias": ""
                        },
                        {
                            "column": "stopflag",
                            "alias": ""
                        },
                        {
                            "column": "organCode",
                            "alias": ""
                        },
                        {
                            "column": "dept1",
                            "alias": ""
                        },
                        {
                            "column": "dept2",
                            "alias": ""
                        }
                    ]
                }
            ]
        },
        {
            "id": "source_4",
            "name": "职务信息表_老科学家采集工程平台",
            "type": "source",
            "x": 78,
            "y": 436,
            "otherConfigurations": {
                "schema": "duty_老科学家采集工程平台",
                "schemaId": "3cd81544-6532-4f24-b8b2-d857a439d80d",
                "sessionCache": "",
                "ignoreMissingPath": false,
                "datasetId": "5c21bf7d-4e4f-4fd3-8b06-7f63010b2f63",
                "interceptor": "",
                "dataset": "职务信息表_老科学家采集工程平台"
            },
            "outputConfigurations": [
                {
                    "id": "output",
                    "fields": [
                        {
                            "column": "ID",
                            "alias": ""
                        },
                        {
                            "column": "dutyName",
                            "alias": ""
                        },
                        {
                            "column": "description",
                            "alias": ""
                        },
                        {
                            "column": "dutySort",
                            "alias": ""
                        },
                        {
                            "column": "organCode",
                            "alias": ""
                        },
                        {
                            "column": "subTime",
                            "alias": ""
                        },
                        {
                            "column": "delflag",
                            "alias": ""
                        }
                    ]
                }
            ]
        },
        {
            "id": "join_5",
            "name": "join_5",
            "type": "join",
            "x": 350,
            "y": 110,
            "otherConfigurations": {
                "joinType": "left_outer",
                "sessionCache": "",
                "interceptor": "",
                "joinConditions": [
                    {
                        "leftColumn": "ID",
                        "op": "=",
                        "rightColumn": "userID"
                    }
                ]
            },
            "inputConfigurations": [
                {
                    "id": "left",
                    "fields": [
                        {
                            "type": "bigint",
                            "alias": "",
                            "description": "",
                            "column": "ID"
                        },
                        {
                            "type": "string",
                            "alias": "",
                            "description": "",
                            "column": "username"
                        },
                        {
                            "type": "string",
                            "alias": "",
                            "description": "",
                            "column": "userCode"
                        },
                        {
                            "type": "string",
                            "alias": "",
                            "description": "",
                            "column": "pinnumber"
                        },
                        {
                            "type": "string",
                            "alias": "",
                            "description": "",
                            "column": "sex"
                        },
                        {
                            "type": "string",
                            "alias": "",
                            "description": "",
                            "column": "extension1"
                        },
                        {
                            "type": "timestamp",
                            "alias": "",
                            "description": "",
                            "column": "birthday"
                        },
                        {
                            "type": "string",
                            "alias": "",
                            "description": "",
                            "column": "identityCard"
                        },
                        {
                            "type": "string",
                            "alias": "",
                            "description": "",
                            "column": "extension2"
                        },
                        {
                            "type": "string",
                            "alias": "",
                            "description": "",
                            "column": "EMAIL"
                        },
                        {
                            "type": "string",
                            "alias": "",
                            "description": "",
                            "column": "HOMEPHONE"
                        },
                        {
                            "type": "string",
                            "alias": "",
                            "description": "",
                            "column": "mobiletelephone"
                        },
                        {
                            "type": "string",
                            "alias": "",
                            "description": "",
                            "column": "address"
                        },
                        {
                            "type": "timestamp",
                            "alias": "",
                            "description": "",
                            "column": "subTime"
                        },
                        {
                            "type": "bigint",
                            "alias": "",
                            "description": "",
                            "column": "delflag"
                        },
                        {
                            "type": "bigint",
                            "alias": "",
                            "description": "",
                            "column": "truceflag"
                        },
                        {
                            "type": "bigint",
                            "alias": "",
                            "description": "",
                            "column": "sort"
                        },
                        {
                            "type": "string",
                            "alias": "",
                            "description": "",
                            "column": "description"
                        },
                        {
                            "type": "string",
                            "alias": "",
                            "description": "",
                            "column": "field1"
                        },
                        {
                            "type": "string",
                            "alias": "",
                            "description": "",
                            "column": "field2"
                        },
                        {
                            "type": "string",
                            "alias": "",
                            "description": "",
                            "column": "field3"
                        }
                    ]
                },
                {
                    "id": "right",
                    "fields": [
                        {
                            "column": "ID",
                            "alias": ""
                        },
                        {
                            "column": "depID",
                            "alias": ""
                        },
                        {
                            "column": "userID",
                            "alias": ""
                        },
                        {
                            "column": "stationID",
                            "alias": ""
                        },
                        {
                            "column": "stationID2",
                            "alias": ""
                        },
                        {
                            "column": "dutyID",
                            "alias": ""
                        },
                        {
                            "column": "plurflag",
                            "alias": ""
                        },
                        {
                            "column": "isDepMgr",
                            "alias": ""
                        }
                    ]
                }
            ],
            "outputConfigurations": [
                {
                    "id": "output",
                    "fields": [
                        {
                            "column": "left_ID",
                            "alias": "left_ID"
                        },
                        {
                            "column": "left_username",
                            "alias": "username"
                        },
                        {
                            "column": "left_userCode",
                            "alias": "userCode"
                        },
                        {
                            "column": "left_pinnumber",
                            "alias": "pinnumber"
                        },
                        {
                            "column": "left_sex",
                            "alias": "sex"
                        },
                        {
                            "column": "left_extension1",
                            "alias": "extension1"
                        },
                        {
                            "column": "left_birthday",
                            "alias": "birthday"
                        },
                        {
                            "column": "left_identityCard",
                            "alias": "identityCard"
                        },
                        {
                            "column": "left_extension2",
                            "alias": "extension2"
                        },
                        {
                            "column": "left_EMAIL",
                            "alias": "EMAIL"
                        },
                        {
                            "column": "left_HOMEPHONE",
                            "alias": "HOMEPHONE"
                        },
                        {
                            "column": "left_mobiletelephone",
                            "alias": "mobiletelephone"
                        },
                        {
                            "column": "left_address",
                            "alias": "address"
                        },
                        {
                            "column": "left_subTime",
                            "alias": "subTime"
                        },
                        {
                            "column": "left_delflag",
                            "alias": "delflag"
                        },
                        {
                            "column": "left_truceflag",
                            "alias": "truceflag"
                        },
                        {
                            "column": "left_sort",
                            "alias": "sort"
                        },
                        {
                            "column": "left_description",
                            "alias": "description"
                        },
                        {
                            "column": "left_field1",
                            "alias": "field1"
                        },
                        {
                            "column": "left_field2",
                            "alias": "field2"
                        },
                        {
                            "column": "left_field3",
                            "alias": "field3"
                        },
                        {
                            "column": "right_ID",
                            "alias": "right_ID"
                        },
                        {
                            "column": "right_depID",
                            "alias": "depID"
                        },
                        {
                            "column": "right_userID",
                            "alias": "userID"
                        },
                        {
                            "column": "right_stationID",
                            "alias": "stationID"
                        },
                        {
                            "column": "right_stationID2",
                            "alias": "stationID2"
                        },
                        {
                            "column": "right_dutyID",
                            "alias": "dutyID"
                        },
                        {
                            "column": "right_plurflag",
                            "alias": "plurflag"
                        },
                        {
                            "column": "right_isDepMgr",
                            "alias": "isDepMgr"
                        }
                    ]
                }
            ]
        },
        {
            "id": "join_6",
            "name": "join_6",
            "type": "join",
            "x": 776,
            "y": 118,
            "otherConfigurations": {
                "joinType": "left_outer",
                "sessionCache": "",
                "interceptor": "",
                "joinConditions": [
                    {
                        "leftColumn": "depID",
                        "op": "=",
                        "rightColumn": "depID"
                    }
                ]
            },
            "inputConfigurations": [
                {
                    "id": "left",
                    "fields": [
                        {
                            "column": "left_ID",
                            "alias": ""
                        },
                        {
                            "column": "username",
                            "alias": ""
                        },
                        {
                            "column": "userCode",
                            "alias": ""
                        },
                        {
                            "column": "pinnumber",
                            "alias": ""
                        },
                        {
                            "column": "sex",
                            "alias": ""
                        },
                        {
                            "column": "extension1",
                            "alias": ""
                        },
                        {
                            "column": "birthday",
                            "alias": ""
                        },
                        {
                            "column": "identityCard",
                            "alias": ""
                        },
                        {
                            "column": "extension2",
                            "alias": ""
                        },
                        {
                            "column": "EMAIL",
                            "alias": ""
                        },
                        {
                            "column": "HOMEPHONE",
                            "alias": ""
                        },
                        {
                            "column": "mobiletelephone",
                            "alias": ""
                        },
                        {
                            "column": "address",
                            "alias": ""
                        },
                        {
                            "column": "subTime",
                            "alias": ""
                        },
                        {
                            "column": "delflag",
                            "alias": ""
                        },
                        {
                            "column": "truceflag",
                            "alias": ""
                        },
                        {
                            "column": "sort",
                            "alias": ""
                        },
                        {
                            "column": "description",
                            "alias": ""
                        },
                        {
                            "column": "field1",
                            "alias": ""
                        },
                        {
                            "column": "field2",
                            "alias": ""
                        },
                        {
                            "column": "field3",
                            "alias": ""
                        },
                        {
                            "column": "right_ID",
                            "alias": ""
                        },
                        {
                            "column": "depID",
                            "alias": ""
                        },
                        {
                            "column": "userID",
                            "alias": ""
                        },
                        {
                            "column": "stationID",
                            "alias": ""
                        },
                        {
                            "column": "stationID2",
                            "alias": ""
                        },
                        {
                            "column": "dutyID",
                            "alias": ""
                        },
                        {
                            "column": "plurflag",
                            "alias": ""
                        },
                        {
                            "column": "isDepMgr",
                            "alias": ""
                        }
                    ]
                },
                {
                    "id": "right",
                    "fields": [
                        {
                            "column": "depID",
                            "alias": ""
                        },
                        {
                            "column": "fatherdeptID",
                            "alias": ""
                        },
                        {
                            "column": "depName",
                            "alias": ""
                        },
                        {
                            "column": "DEPLEVEL",
                            "alias": ""
                        },
                        {
                            "column": "dep_sort",
                            "alias": ""
                        },
                        {
                            "column": "DISCRIPTION",
                            "alias": ""
                        },
                        {
                            "column": "subTime",
                            "alias": ""
                        },
                        {
                            "column": "createID",
                            "alias": ""
                        },
                        {
                            "column": "delflag",
                            "alias": ""
                        },
                        {
                            "column": "stopflag",
                            "alias": ""
                        },
                        {
                            "column": "organCode",
                            "alias": ""
                        },
                        {
                            "column": "dept1",
                            "alias": ""
                        },
                        {
                            "column": "dept2",
                            "alias": ""
                        }
                    ]
                }
            ],
            "outputConfigurations": [
                {
                    "id": "output",
                    "fields": [
                        {
                            "column": "left_left_ID",
                            "alias": "left_ID"
                        },
                        {
                            "column": "left_username",
                            "alias": "username"
                        },
                        {
                            "column": "left_userCode",
                            "alias": "userCode"
                        },
                        {
                            "column": "left_pinnumber",
                            "alias": "pinnumber"
                        },
                        {
                            "column": "left_sex",
                            "alias": "sex"
                        },
                        {
                            "column": "left_extension1",
                            "alias": "extension1"
                        },
                        {
                            "column": "left_birthday",
                            "alias": "birthday"
                        },
                        {
                            "column": "left_identityCard",
                            "alias": "identityCard"
                        },
                        {
                            "column": "left_extension2",
                            "alias": "extension2"
                        },
                        {
                            "column": "left_EMAIL",
                            "alias": "EMAIL"
                        },
                        {
                            "column": "left_HOMEPHONE",
                            "alias": "HOMEPHONE"
                        },
                        {
                            "column": "left_mobiletelephone",
                            "alias": "mobiletelephone"
                        },
                        {
                            "column": "left_address",
                            "alias": "address"
                        },
                        {
                            "column": "left_subTime",
                            "alias": "left_subTime"
                        },
                        {
                            "column": "left_delflag",
                            "alias": "left_delflag"
                        },
                        {
                            "column": "left_truceflag",
                            "alias": "truceflag"
                        },
                        {
                            "column": "left_sort",
                            "alias": "sort"
                        },
                        {
                            "column": "left_description",
                            "alias": "description"
                        },
                        {
                            "column": "left_field1",
                            "alias": "field1"
                        },
                        {
                            "column": "left_field2",
                            "alias": "field2"
                        },
                        {
                            "column": "left_field3",
                            "alias": "field3"
                        },
                        {
                            "column": "left_right_ID",
                            "alias": "right_ID"
                        },
                        {
                            "column": "left_depID",
                            "alias": "left_depID"
                        },
                        {
                            "column": "left_userID",
                            "alias": "userID"
                        },
                        {
                            "column": "left_stationID",
                            "alias": "stationID"
                        },
                        {
                            "column": "left_stationID2",
                            "alias": "stationID2"
                        },
                        {
                            "column": "left_dutyID",
                            "alias": "dutyID"
                        },
                        {
                            "column": "left_plurflag",
                            "alias": "plurflag"
                        },
                        {
                            "column": "left_isDepMgr",
                            "alias": "isDepMgr"
                        },
                        {
                            "column": "right_depID",
                            "alias": "right_depID"
                        },
                        {
                            "column": "right_fatherdeptID",
                            "alias": "fatherdeptID"
                        },
                        {
                            "column": "right_depName",
                            "alias": "depName"
                        },
                        {
                            "column": "right_DEPLEVEL",
                            "alias": "DEPLEVEL"
                        },
                        {
                            "column": "right_dep_sort",
                            "alias": "dep_sort"
                        },
                        {
                            "column": "right_DISCRIPTION",
                            "alias": "DISCRIPTION"
                        },
                        {
                            "column": "right_subTime",
                            "alias": "right_subTime"
                        },
                        {
                            "column": "right_createID",
                            "alias": "createID"
                        },
                        {
                            "column": "right_delflag",
                            "alias": "right_delflag"
                        },
                        {
                            "column": "right_stopflag",
                            "alias": "stopflag"
                        },
                        {
                            "column": "right_organCode",
                            "alias": "organCode"
                        },
                        {
                            "column": "right_dept1",
                            "alias": "dept1"
                        },
                        {
                            "column": "right_dept2",
                            "alias": "dept2"
                        }
                    ]
                }
            ]
        },
        {
            "id": "join_7",
            "name": "join_7",
            "type": "join",
            "x": 875,
            "y": 292,
            "otherConfigurations": {
                "joinType": "left_outer",
                "sessionCache": "",
                "interceptor": "",
                "joinConditions": [
                    {
                        "leftColumn": "dutyID",
                        "op": "=",
                        "rightColumn": "ID"
                    }
                ]
            },
            "inputConfigurations": [
                {
                    "id": "left",
                    "fields": [
                        {
                            "column": "left_ID",
                            "alias": ""
                        },
                        {
                            "column": "username",
                            "alias": ""
                        },
                        {
                            "column": "userCode",
                            "alias": ""
                        },
                        {
                            "column": "pinnumber",
                            "alias": ""
                        },
                        {
                            "column": "sex",
                            "alias": ""
                        },
                        {
                            "column": "extension1",
                            "alias": ""
                        },
                        {
                            "column": "birthday",
                            "alias": ""
                        },
                        {
                            "column": "identityCard",
                            "alias": ""
                        },
                        {
                            "column": "extension2",
                            "alias": ""
                        },
                        {
                            "column": "EMAIL",
                            "alias": ""
                        },
                        {
                            "column": "HOMEPHONE",
                            "alias": ""
                        },
                        {
                            "column": "mobiletelephone",
                            "alias": ""
                        },
                        {
                            "column": "address",
                            "alias": ""
                        },
                        {
                            "column": "left_subTime",
                            "alias": ""
                        },
                        {
                            "column": "left_delflag",
                            "alias": ""
                        },
                        {
                            "column": "truceflag",
                            "alias": ""
                        },
                        {
                            "column": "sort",
                            "alias": ""
                        },
                        {
                            "column": "description",
                            "alias": ""
                        },
                        {
                            "column": "field1",
                            "alias": ""
                        },
                        {
                            "column": "field2",
                            "alias": ""
                        },
                        {
                            "column": "field3",
                            "alias": ""
                        },
                        {
                            "column": "right_ID",
                            "alias": ""
                        },
                        {
                            "column": "left_depID",
                            "alias": ""
                        },
                        {
                            "column": "userID",
                            "alias": ""
                        },
                        {
                            "column": "stationID",
                            "alias": ""
                        },
                        {
                            "column": "stationID2",
                            "alias": ""
                        },
                        {
                            "column": "dutyID",
                            "alias": ""
                        },
                        {
                            "column": "plurflag",
                            "alias": ""
                        },
                        {
                            "column": "isDepMgr",
                            "alias": ""
                        },
                        {
                            "column": "right_depID",
                            "alias": ""
                        },
                        {
                            "column": "fatherdeptID",
                            "alias": ""
                        },
                        {
                            "column": "depName",
                            "alias": ""
                        },
                        {
                            "column": "DEPLEVEL",
                            "alias": ""
                        },
                        {
                            "column": "dep_sort",
                            "alias": ""
                        },
                        {
                            "column": "DISCRIPTION",
                            "alias": ""
                        },
                        {
                            "column": "right_subTime",
                            "alias": ""
                        },
                        {
                            "column": "createID",
                            "alias": ""
                        },
                        {
                            "column": "right_delflag",
                            "alias": ""
                        },
                        {
                            "column": "stopflag",
                            "alias": ""
                        },
                        {
                            "column": "organCode",
                            "alias": ""
                        },
                        {
                            "column": "dept1",
                            "alias": ""
                        },
                        {
                            "column": "dept2",
                            "alias": ""
                        }
                    ]
                },
                {
                    "id": "right",
                    "fields": [
                        {
                            "column": "ID",
                            "alias": ""
                        },
                        {
                            "column": "dutyName",
                            "alias": ""
                        },
                        {
                            "column": "description",
                            "alias": ""
                        },
                        {
                            "column": "dutySort",
                            "alias": ""
                        },
                        {
                            "column": "organCode",
                            "alias": ""
                        },
                        {
                            "column": "subTime",
                            "alias": ""
                        },
                        {
                            "column": "delflag",
                            "alias": ""
                        }
                    ]
                }
            ],
            "outputConfigurations": [
                {
                    "id": "output",
                    "fields": [
                        {
                            "column": "left_username",
                            "alias": "姓名"
                        },
                        {
                            "column": "left_sex",
                            "alias": "性别"
                        },
                        {
                            "column": "left_EMAIL",
                            "alias": "邮箱"
                        },
                        {
                            "column": "left_mobiletelephone",
                            "alias": "电话"
                        },
                        {
                            "column": "left_depName",
                            "alias": "部门名称"
                        },
                        {
                            "column": "right_dutyName",
                            "alias": "职务"
                        }
                    ]
                }
            ]
        },
        {
            "id": "sink_8",
            "name": "血缘分析test2",
            "type": "sink",
            "x": 1100,
            "y": 291,
            "otherConfigurations": {
                "schema": "血缘分析test2",
                "brokers": "",
                "columns": "",
                "groupId": "",
                "description": "",
                "sessionCache": "",
                "interceptor": "",
                "type": "HDFS",
                "nullValue": "",
                "mode": "overwrite",
                "path": "/tmp/血缘分析test2",
                "password": "",
                "datasetId": "0d854c73-47d3-4127-9545-b57b238564ea",
                "table": "",
                "schemaResourceId": "",
                "dataResource": "",
                "quoteChar": "\"",
                "escapeChar": "\\",
                "schemaResource": "",
                "datasetResourceId": "",
                "sliceTimeColumn": "",
                "partitionColumns": "",
                "format": "csv",
                "maxFileSize": "",
                "maxFileNumber": "",
                "separator": ",",
                "url": "",
                "expiredTime": "0",
                "driver": "",
                "schemaId": "87c8020d-df40-4308-9441-947531009bf4",
                "namespace": "",
                "topic": "",
                "dataset": "血缘分析test2_new",
                "user": "",
                "sliceType": "",
                "specifiedStringColumnTypes": []
            },
            "inputConfigurations": [
                {
                    "id": "input",
                    "fields": [
                        {
                            "column": "姓名",
                            "alias": ""
                        },
                        {
                            "column": "性别",
                            "alias": ""
                        },
                        {
                            "column": "邮箱",
                            "alias": ""
                        },
                        {
                            "column": "电话",
                            "alias": ""
                        },
                        {
                            "column": "部门名称",
                            "alias": ""
                        },
                        {
                            "column": "职务",
                            "alias": ""
                        }
                    ]
                }
            ]
        }
    ],
    "links": [
        {
            "name": "con_43",
            "source": "source_1",
            "sourceOutput": "output",
            "target": "join_5",
            "targetInput": "left",
            "input": "left"
        },
        {
            "name": "con_44",
            "source": "source_2",
            "sourceOutput": "output",
            "target": "join_5",
            "targetInput": "right",
            "input": "right"
        },
        {
            "name": "con_45",
            "source": "source_3",
            "sourceOutput": "output",
            "target": "join_6",
            "targetInput": "right",
            "input": "right"
        },
        {
            "name": "con_46",
            "source": "join_5",
            "sourceOutput": "output",
            "target": "join_6",
            "targetInput": "left",
            "input": "left"
        },
        {
            "name": "con_47",
            "source": "join_6",
            "sourceOutput": "output",
            "target": "join_7",
            "targetInput": "left",
            "input": "left"
        },
        {
            "name": "con_48",
            "source": "source_4",
            "sourceOutput": "output",
            "target": "join_7",
            "targetInput": "right",
            "input": "right"
        },
        {
            "name": "con_49",
            "source": "join_7",
            "sourceOutput": "output",
            "target": "sink_8",
            "targetInput": "input",
            "input": "input"
        }
    ],
    "inputs": [],
    "outputs": [],
    "dependencies": [
        {
            "name": "/app/flowconfig/jarUploadPath/save/58daf580-f734-44cc-a1bc-0e8a136960f1_mysql-connector-java-5.1.38.jar",
            "category": "ref",
            "refs": [],
            "defaultVal": "",
            "description": "'"
        }
    ],
    "oid": "$null",
    "creator": "admin",
    "createTime": 1560761771000,
    "lastModifier": "admin",
    "lastModifiedTime": 1561945971000,
    "owner": "2059750c-a300-4b64-84a6-e8b086dbfd42",
    "version": 2,
    "enabled": 1,
    "moduleVersion": 0,
    "tenant": {
        "id": "2d7ad891-41c5-4fba-9ff2-03aef3c729e5",
        "name": "default",
        "creator": "root",
        "createTime": 1532942318000,
        "lastModifier": "root",
        "lastModifiedTime": 1544078372000,
        "owner": "f8aff341-9303-4135-b393-1d322e4638e2",
        "version": 0,
        "moduleVersion": 0,
        "enabled": 1,
        "resourceQueues": [
            "default"
        ],
        "hdfsSpaceQuota": 0,
        "zid": "",
        "expiredPeriod": 0
    },
    "tableName": "merce_flow",
    "isHide": 0,
    "expiredPeriod": 0
}