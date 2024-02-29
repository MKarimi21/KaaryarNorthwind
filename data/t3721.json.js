window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3721","name":"CustomerDemographics","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Northwind","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"CustomerDemographics"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-34322","object_id":"column-34322","name":"CustomerTypeID","name_without_path":"CustomerTypeID","description":null,"is_pk":true,"is_identity":false,"data_type":"nchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-34323","object_id":"column-34323","name":"CustomerDesc","name_without_path":"CustomerDesc","description":null,"is_pk":false,"is_identity":false,"data_type":"ntext","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_CustomerCustomerDemo","title":null,"description":null,"is_user_defined":false,"foreign_table":"CustomerCustomerDemo","foreign_table_show_schema":"dbo.CustomerCustomerDemo","foreign_table_verbose":"CustomerCustomerDemo","foreign_table_verbose_show_schema":"dbo.CustomerCustomerDemo","foreign_table_object_id":"t3720","primary_table":"CustomerDemographics","primary_table_show_schema":"dbo.CustomerDemographics","primary_table_verbose":"CustomerDemographics","primary_table_verbose_show_schema":"dbo.CustomerDemographics","primary_table_object_id":"t3721","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"CustomerTypeID","foreign_column_path":null,"foreign_column":"CustomerTypeID"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_CustomerDemographics","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"CustomerTypeID","name":"CustomerTypeID"}],"custom_fields":{}}],"triggers":[],"dependencies":{"uses":[],"used_by":[{"object_name":"CustomerDemographics","object_name_show_schema":"dbo.CustomerDemographics","object_type":"TABLE","object_id":"t3721","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"CustomerCustomerDemo","object_name_show_schema":"dbo.CustomerCustomerDemo","object_type":"TABLE","object_id":"t3720","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}]},"imported_at":"2024-02-29 21:36"};