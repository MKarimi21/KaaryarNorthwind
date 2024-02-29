window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v3746","name":"Sales Totals by Amount","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view \"Sales Totals by Amount\" AS\r\nSELECT \"Order Subtotals\".Subtotal AS SaleAmount, Orders.OrderID, Customers.CompanyName, Orders.ShippedDate\r\nFROM \tCustomers INNER JOIN \r\n\t\t(Orders INNER JOIN \"Order Subtotals\" ON Orders.OrderID = \"Order Subtotals\".OrderID) \r\n\tON Customers.CustomerID = Orders.CustomerID\r\nWHERE (\"Order Subtotals\".Subtotal >2500) AND (Orders.ShippedDate BETWEEN '19970101' And '19971231')","summary":[{"field":"Documentation","value":{"_type":"link","name":"Northwind","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"Sales Totals by Amount"},{"field":"Type","value":"View"}],"columns":[{"id":"column-34500","object_id":"column-34500","name":"SaleAmount","name_without_path":"SaleAmount","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34501","object_id":"column-34501","name":"OrderID","name_without_path":"OrderID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34502","object_id":"column-34502","name":"CompanyName","name_without_path":"CompanyName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34503","object_id":"column-34503","name":"ShippedDate","name_without_path":"ShippedDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":{"uses":[{"object_name":"Sales Totals by Amount","object_name_show_schema":"dbo.Sales Totals by Amount","object_type":"VIEW","object_id":"v3746","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"Customers","object_name_show_schema":"dbo.Customers","object_type":"TABLE","object_id":"t3722","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"Orders","object_name_show_schema":"dbo.Orders","object_type":"TABLE","object_id":"t3727","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"Order Subtotals","object_name_show_schema":"dbo.Order Subtotals","object_type":"VIEW","object_id":"v3739","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"Order Details","object_name_show_schema":"dbo.Order Details","object_type":"TABLE","object_id":"t3726","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[]}]}]}],"used_by":[]},"imported_at":"2024-02-29 21:36"};