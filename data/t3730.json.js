window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3730","name":"Shippers","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Northwind","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"Shippers"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-34390","object_id":"column-34390","name":"ShipperID","name_without_path":"ShipperID","description":null,"is_pk":true,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34391","object_id":"column-34391","name":"CompanyName","name_without_path":"CompanyName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34392","object_id":"column-34392","name":"Phone","name_without_path":"Phone","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"24","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_Orders_Shippers","title":null,"description":null,"is_user_defined":false,"foreign_table":"Orders","foreign_table_show_schema":"dbo.Orders","foreign_table_verbose":"Orders","foreign_table_verbose_show_schema":"dbo.Orders","foreign_table_object_id":"t3727","primary_table":"Shippers","primary_table_show_schema":"dbo.Shippers","primary_table_verbose":"Shippers","primary_table_verbose_show_schema":"dbo.Shippers","primary_table_object_id":"t3730","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"ShipperID","foreign_column_path":null,"foreign_column":"ShipVia"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_Shippers","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"ShipperID","name":"ShipperID"}],"custom_fields":{}}],"triggers":[],"dependencies":{"uses":[],"used_by":[{"object_name":"Shippers","object_name_show_schema":"dbo.Shippers","object_type":"TABLE","object_id":"t3730","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"Invoices","object_name_show_schema":"dbo.Invoices","object_type":"VIEW","object_id":"v3737","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"Orders","object_name_show_schema":"dbo.Orders","object_type":"TABLE","object_id":"t3727","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}]},"imported_at":"2024-02-29 21:36"};