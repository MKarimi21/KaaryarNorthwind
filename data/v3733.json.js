window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v3733","name":"Alphabetical list of products","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view \"Alphabetical list of products\" AS\r\nSELECT Products.*, Categories.CategoryName\r\nFROM Categories INNER JOIN Products ON Categories.CategoryID = Products.CategoryID\r\nWHERE (((Products.Discontinued)=0))","summary":[{"field":"Documentation","value":{"_type":"link","name":"Northwind","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"Alphabetical list of products"},{"field":"Type","value":"View"}],"columns":[{"id":"column-34408","object_id":"column-34408","name":"ProductID","name_without_path":"ProductID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34409","object_id":"column-34409","name":"ProductName","name_without_path":"ProductName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34410","object_id":"column-34410","name":"SupplierID","name_without_path":"SupplierID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34411","object_id":"column-34411","name":"CategoryID","name_without_path":"CategoryID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34412","object_id":"column-34412","name":"QuantityPerUnit","name_without_path":"QuantityPerUnit","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34413","object_id":"column-34413","name":"UnitPrice","name_without_path":"UnitPrice","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34414","object_id":"column-34414","name":"UnitsInStock","name_without_path":"UnitsInStock","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34415","object_id":"column-34415","name":"UnitsOnOrder","name_without_path":"UnitsOnOrder","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34416","object_id":"column-34416","name":"ReorderLevel","name_without_path":"ReorderLevel","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34417","object_id":"column-34417","name":"Discontinued","name_without_path":"Discontinued","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34418","object_id":"column-34418","name":"CategoryName","name_without_path":"CategoryName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":{"uses":[{"object_name":"Alphabetical list of products","object_name_show_schema":"dbo.Alphabetical list of products","object_type":"VIEW","object_id":"v3733","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"Categories","object_name_show_schema":"dbo.Categories","object_type":"TABLE","object_id":"t3719","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"Products","object_name_show_schema":"dbo.Products","object_type":"TABLE","object_id":"t3728","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[]},"imported_at":"2024-02-29 21:36"};