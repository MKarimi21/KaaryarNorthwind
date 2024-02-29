window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v3747","name":"Summary of Sales by Quarter","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view \"Summary of Sales by Quarter\" AS\r\nSELECT Orders.ShippedDate, Orders.OrderID, \"Order Subtotals\".Subtotal\r\nFROM Orders INNER JOIN \"Order Subtotals\" ON Orders.OrderID = \"Order Subtotals\".OrderID\r\nWHERE Orders.ShippedDate IS NOT NULL\r\n--ORDER BY Orders.ShippedDate","summary":[{"field":"Documentation","value":{"_type":"link","name":"Northwind","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"Summary of Sales by Quarter"},{"field":"Type","value":"View"}],"columns":[{"id":"column-34504","object_id":"column-34504","name":"ShippedDate","name_without_path":"ShippedDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34505","object_id":"column-34505","name":"OrderID","name_without_path":"OrderID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34506","object_id":"column-34506","name":"Subtotal","name_without_path":"Subtotal","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":{"uses":[{"object_name":"Summary of Sales by Quarter","object_name_show_schema":"dbo.Summary of Sales by Quarter","object_type":"VIEW","object_id":"v3747","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"Orders","object_name_show_schema":"dbo.Orders","object_type":"TABLE","object_id":"t3727","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"Order Subtotals","object_name_show_schema":"dbo.Order Subtotals","object_type":"VIEW","object_id":"v3739","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"Order Details","object_name_show_schema":"dbo.Order Details","object_type":"TABLE","object_id":"t3726","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[]}]}]}],"used_by":[]},"imported_at":"2024-02-29 21:36"};