window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f134","name":"GetQueryResultByTimeRange","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Northwind","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"GetQueryResultByTimeRange"},{"field":"Type","value":"Function"}],"script":"CREATE FUNCTION dbo.GetQueryResultByTimeRange\r\n(\r\n    @StartTime DATETIME,\r\n    @EndTime DATETIME\r\n)\r\nRETURNS TABLE\r\nAS\r\nRETURN\r\n(\r\n    SELECT *\r\n    FROM dbo.device\r\n    WHERE productiondatetime >= @StartTime AND productiondatetime <= @EndTime\r\n);","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"table type","custom_fields":{}},{"name":"StartTime","description":null,"mode":"IN","data_type":"datetime","custom_fields":{}},{"name":"EndTime","description":null,"mode":"IN","data_type":"datetime","custom_fields":{}}],"dependencies":{"uses":[{"object_name":"GetQueryResultByTimeRange","object_name_show_schema":"dbo.GetQueryResultByTimeRange","object_type":"FUNCTION","object_id":"f134","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"device","object_name_show_schema":"dbo.device","object_type":"TABLE","object_id":"t3723","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[]},"imported_at":"2024-02-29 21:36"};