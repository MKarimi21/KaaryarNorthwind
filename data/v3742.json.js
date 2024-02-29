window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v3742","name":"Products Above Average Price","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view \"Products Above Average Price\" AS\r\nSELECT Products.ProductName, Products.UnitPrice\r\nFROM Products\r\nWHERE Products.UnitPrice>(SELECT AVG(UnitPrice) From Products)\r\n--ORDER BY Products.UnitPrice DESC","summary":[{"field":"Documentation","value":{"_type":"link","name":"Northwind","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"Products Above Average Price"},{"field":"Type","value":"View"}],"columns":[{"id":"column-34485","object_id":"column-34485","name":"ProductName","name_without_path":"ProductName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34486","object_id":"column-34486","name":"UnitPrice","name_without_path":"UnitPrice","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":{"uses":[{"object_name":"Products Above Average Price","object_name_show_schema":"dbo.Products Above Average Price","object_type":"VIEW","object_id":"v3742","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"Products","object_name_show_schema":"dbo.Products","object_type":"TABLE","object_id":"t3728","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[]},"imported_at":"2024-02-29 21:36"};