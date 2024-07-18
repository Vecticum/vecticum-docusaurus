# Import From Excel

The functionality provides possibility to import the data from the excel spreadsheet to the certain, identified by object type and class, list of the documents / records. The result of the import is creation of the new record / document or the update of the existing ones. If system finds already existing matching record then update action is trigerred. Otherwise creation is completed.   Matching is successful when the value from first column in excel spreadsheet (id key should be included in it) matches the id of the existing record.

The functionality of the import from excel is available in the toolbar under the 'Import from excel' button:

<figure>![](/assets/image_(366).png)</figure>

In order to have this button available:

* User has to be granted with 'Company administrator' role&#x20;

In the class  of the listed objects has to have in Advanced tab, there is the following parameter:

<figure>![](/assets/image_(186).png)</figure>

&#x20;but anyway administer company permission is needed.

The rules of defining the excel spreadsheet structure:

* type of the file is Microsoft Excel Worksheet (Workbook) with the extension \*.xlsx ,
* single (1) sheet should be included in the excel workbook,
* first row should contain free description of the attributes to be exported. In the below example the first row includes form attributes labels or column captions in the view (in order to easily identify the meaning of the each piece of the information),
* second row should containing the exact name of the keys for which the value of the column cell will be created / updated,
* define columns one by one, not leaving the empty gaps,
* from the 3rd row and next further others, should be included data to be exported,
* if the overall rows count to be exported is more than 400, try to split it for a few portions (separate excel wrokbooks with the same formatting rules as described in here per individual spreadsheet). Single portion to upload should contain not more than 400 records.
* If you are creating new records by import from excel, please use similar to the following structure (column A contains data to be inserted):

<figure>![](/assets/image_(87).png)</figure>

name, textComment - are the keys for the attributes appearing on the form

After pressing the button from the toolbar 'Import from Excel file', user have to appoint the root excel file and choose Open. The the rows are created automatically. In order to see them on the list  user has to choose refresh button:

&#x20;

<figure>![](/assets/image_(281).png)</figure>

For the single row in above example such document was created:

<figure>![](/assets/image_(330).png)</figure>

Please notice that the import works for the metadata but not physical files. It is used rather for import registries, dictionaries but not for document import in the meaning of upload of physical file /-s.

* If you are planning to update existing records then include in the first column id key. id is unique for every document. You can find it in url of opened document in here:

<figure>![](/assets/image_(164).png)</figure>

Clue: in order to create the excel list (for further update of existing records), you can:

1. In a view from which you will be exporting, add id key as the first column:

<figure>![](/assets/image_(288).png)</figure>

Then the view will look like:

<figure>![](/assets/image_(74).png)</figure>

2. Second, export to Excel existing view by pressing 'Excel export' button:

&#x20;&#x20;

<figure>![](/assets/image_(83).png)</figure>

3. Open the exported file. Select 2nd row and add to it new row:

<figure>![](/assets/image_(185).png)</figure>

4. In the newly added row (placed and 2nd from top), type in the key names for the columns you would like to update. Please keep in place first column with id key because on this unique value matching system will perform update. Delete the columns you will not be modifying. Add the columns with the key which you would like to update with. In our example column with key textComment was added, others not necesarry deleted:

<figure>![](/assets/image_(279).png)</figure>

4. Import prepared in such way the saved file. After the update import Text comment attribute for each of 3 documents is updated. Also signature in document footer 'Modified ... by ...' is updated System user entry.



For the attributes of simple types like Text and Number you should provide the value straight forward in excel cell. For the Number, please separate the decimal part with dot '.' character:

In red are marked up - Text type of data, in green Number type:

<figure>![](/assets/image_(256).png)</figure>

Document for after the import:

<figure>![](/assets/image_(119).png)</figure>

For the Date type of attribute (key) you should deliver the value in the format: yyyy-mm-dd . The example:

&#x20;&#x20;

<figure>![](/assets/image_(94).png)</figure>

The vecticum document after the import :

<figure>![](/assets/image_(232).png)</figure>

For the lookup (select) type of attribute in a first try, please try to deliver the value which is presented naturally after the manual selection in lookup attribute. Take for example attribute:

<figure>![](/assets/image_(229).png)</figure>

<figure>![](/assets/image_(189).png)</figure>

If we include in excel the column with this key and provide, naturally presented name of the employee in it:

<figure>![](/assets/image_(222).png)</figure>

System will successfully import the lookup value like the following:

&#x20;&#x20;

<figure>![](/assets/image_(64).png)</figure>

There is also possibility to import lookup select attributes by mapping by other key which is exposed on the lookup list. Let's take for example lookup to the currency dictionary:

<figure>![](/assets/image_(276).png)</figure>

Currency select type attribute is defined like the following:

<figure>![](/assets/image_(261).png)</figure>

<figure>![](/assets/image_(91).png)</figure>

It appoint to currency symbol (for example: GBP) stored in name key on currency form:

<figure>![](/assets/image_(78).png)</figure>

Definition of the currency form:

<figure>![](/assets/image_(204).png)</figure>

In order to map (match) by the code (but not by presented in select list name), you have define such expression in 2nd row in excel:

<figure>![](/assets/image_(289).png)</figure>

where:

\_\_lookupByKey - describes what action is taken. When matching it will be lookin up by the key

code - by this key in this example on currency form will be performed matching. System will be trying to find matching value on currency list (by code key) for the value from F3 cell

<figure>![](/assets/image_(308).png)</figure>

With orange markup on the above and earlier was marked code value for the key.

currencyId  - this is the key which we would like to fill in by this excel import. For the found matching value, system will fill in the attribute with this key on the form (according to it's definition which shows up the name but not the code).

In above and earlier shots in light green markup was selected currencyId key usage.

Please notice that in value for the Currency column in 3rd row is used 'pound' text value which is assigned in code key of the currency entry. So this could be the case that in excel to import there are different abbreviations of the currencies used (but always the same single abbreviation for the single currency). In such case you can assign for each currency as the code the abbreviation used in excel (pound phrase in our example) and use explained formula in excel.

The final result after importing the example excel is:

<figure>![](/assets/image_(358).png)</figure>

where system assigns GBP currency by matching 'pound' value by code key on currency form.

Another example is the import of the sub-objects related with the main object. The following syntax should be used:

\_\_subobject:personalEmail&#x20;

where:

\_\_subobject - is the prefix which let to system know that we are delivering the key from the form of subobject of the employee

personalEmail - in this example is the key for storing 'Personal Email' attribute, which is placed on the form 'Employee Personal Info' which is assigned to the class of subobject of Employee.

After importing such file:

&#x20;

<figure>![](/assets/image_(202).png)</figure>

The follwong employee reocord with related subobject of personal information is created:

<figure>![](/assets/image_(301).png)</figure>

<figure>![](/assets/image_(341).png)</figure>
