window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3732","name":"Territories","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Northwind","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"Territories"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-34405","object_id":"column-34405","name":"TerritoryID","name_without_path":"TerritoryID","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34406","object_id":"column-34406","name":"TerritoryDescription","name_without_path":"TerritoryDescription","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34407","object_id":"column-34407","name":"RegionID","name_without_path":"RegionID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t3729","name":"Region","name_show_schema":"dbo.Region"}]}],"relations":[{"name":"FK_Territories_Region","title":null,"description":null,"is_user_defined":false,"foreign_table":"Territories","foreign_table_show_schema":"dbo.Territories","foreign_table_verbose":"Territories","foreign_table_verbose_show_schema":"dbo.Territories","foreign_table_object_id":"t3732","primary_table":"Region","primary_table_show_schema":"dbo.Region","primary_table_verbose":"Region","primary_table_verbose_show_schema":"dbo.Region","primary_table_object_id":"t3729","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"RegionID","foreign_column_path":null,"foreign_column":"RegionID"}],"custom_fields":{}},{"name":"FK_EmployeeTerritories_Territories","title":null,"description":null,"is_user_defined":false,"foreign_table":"EmployeeTerritories","foreign_table_show_schema":"dbo.EmployeeTerritories","foreign_table_verbose":"EmployeeTerritories","foreign_table_verbose_show_schema":"dbo.EmployeeTerritories","foreign_table_object_id":"t3725","primary_table":"Territories","primary_table_show_schema":"dbo.Territories","primary_table_verbose":"Territories","primary_table_verbose_show_schema":"dbo.Territories","primary_table_object_id":"t3732","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"TerritoryID","foreign_column_path":null,"foreign_column":"TerritoryID"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_Territories","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"TerritoryID","name":"TerritoryID"}],"custom_fields":{}}],"triggers":[],"dependencies":{"uses":[{"object_name":"Territories","object_name_show_schema":"dbo.Territories","object_type":"TABLE","object_id":"t3732","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"Region","object_name_show_schema":"dbo.Region","object_type":"TABLE","object_id":"t3729","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[{"object_name":"Territories","object_name_show_schema":"dbo.Territories","object_type":"TABLE","object_id":"t3732","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"EmployeeTerritories","object_name_show_schema":"dbo.EmployeeTerritories","object_type":"TABLE","object_id":"t3725","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}]},"imported_at":"2024-02-29 21:36"};