# MS Word Templates and Reports
This article describes the method of creation of synchronized report in Microsoft Word format from the Vecticum document / record. It is launched from the open Vecticum document form.

In order to configure the report you have to be granted as administrator and preform the following set of actions:

1. Navigate into: Administration -> Configuration -> Templates.

2. Press '+ New File Template' button:

<figure>![](/assets/ms_word_temp_1.png)</figure>

3. In appearing dialog, please pick 'Document Word Report Template', and confirm with 'Next' button:

<figure>![](/assets/ms_word_temp_2.png)</figure>

4. Fill in the report configuration:

<figure>![](/assets/ms_word_temp_3.png)</figure>

Name - under this item/ label the report will be visible for the user on the form of the 'Class', under 'Templates' dropdown list:

<figure>![](/assets/ms_word_temp_4.png)</figure>

Visibility expression - Should return true or false. All keys can be parsed with 
```javascript
${key}
```
 syntax. Lookup objects are parsed into expression as javascript objects,

Files - in this container, you are supposed to upload single file in MS Word format (.docx) . It should be pre-prepared in the following way:

```javascript
{cardNumber} 
```
- in 'fancy' brackets {} you place the key name appearing on the 'Class' form, from which  the report is generated. In this example cardNumber is the name of text type key.

```javascript
{typeOfFuelId.name}
```
- you can reference to basic (like id or name) properties as subkeys,

```javascript
{#ridesClassicIds} ...... {/ridesClassicIds}
```
- if you would like to itterate through collection of chldren or relation view, you should use the key for such children or relation view attribute (in this example it is: ridesClassicIds) and inside (......) the other keys. Please use the following example:

<figure>![](/assets/ms_word_temp_5.png)</figure>

This is the result of the report:

<figure>![](/assets/ms_word_temp_6.png)</figure>

Class - you should pick up a single or multiple classes, for which documents the report should be available.
Keys of lookups to expand - Get extended information from lookups at main document. Control type must be select, dropdown or typehead. Attributes can be separated by comma, for example: employeeId, contractId 

5. Press 'Save' button. The report should be available for the documents of appointed classes. In the form of the document you will find the report under the dropdown list in 'Tmeplates' button: 

<figure>![](/assets/ms_word_temp_7.png)</figure>
