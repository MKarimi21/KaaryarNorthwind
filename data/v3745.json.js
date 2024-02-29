window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v3745","name":"Sales by Category","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view \"Sales by Category\" AS\r\nSELECT Categories.CategoryID, Categories.CategoryName, Products.ProductName, \r\n\tSum(\"Order Details Extended\".ExtendedPrice) AS ProductSales\r\nFROM \tCategories INNER JOIN \r\n\t\t(Products INNER JOIN \r\n\t\t\t(Orders INNER JOIN \"Order Details Extended\" ON Orders.OrderID = \"Order Details Extended\".OrderID) \r\n\t\tON Products.ProductID = \"Order Details Extended\".ProductID) \r\n\tON Categories.CategoryID = Products.CategoryID\r\nWHERE Orders.OrderDate BETWEEN '19970101' And '19971231'\r\nGROUP BY Categories.CategoryID, Categories.CategoryName, Products.ProductName\r\n--ORDER BY Products.ProductName","summary":[{"field":"Documentation","value":{"_type":"link","name":"Northwind","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"Sales by Category"},{"field":"Type","value":"View"}],"columns":[{"id":"column-34496","object_id":"column-34496","name":"CategoryID","name_without_path":"CategoryID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34497","object_id":"column-34497","name":"CategoryName","name_without_path":"CategoryName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34498","object_id":"column-34498","name":"ProductName","name_without_path":"ProductName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34499","object_id":"column-34499","name":"ProductSales","name_without_path":"ProductSales","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":{"uses":[{"object_name":"Sales by Category","object_name_show_schema":"dbo.Sales by Category","object_type":"VIEW","object_id":"v3745","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"Categories","object_name_show_schema":"dbo.Categories","object_type":"TABLE","object_id":"t3719","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"Orders","object_name_show_schema":"dbo.Orders","object_type":"TABLE","object_id":"t3727","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"Products","object_name_show_schema":"dbo.Products","object_type":"TABLE","object_id":"t3728","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"Order Details Extended","object_name_show_schema":"dbo.Order Details Extended","object_type":"VIEW","object_id":"v3738","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"Order Details","object_name_show_schema":"dbo.Order Details","object_type":"TABLE","object_id":"t3726","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"Products","object_name_show_schema":"dbo.Products","object_type":"TABLE","object_id":"t3728","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[]}]}]}],"used_by":[]},"imported_at":"2024-02-29 21:36"};