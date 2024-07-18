---
description: >-
  This page contains the description of the 'Templates params' property of the
  object type, which is used for lines (which are supposed to be added from
  template)
---

# Template functionality parameters

## Introduction of functional scenario

The most representative use of this functionality is adding cost allocation lines to the purchase invoice from predefined template. The scenario includes the following steps:

1. The purchase invoice is sent to purchase invoices mailbox in Vecticum system;  then purchase invoice header is  captured and the header is recognized, including vendor and overall value of the invoice.
2. After workflow is initiated, on further stage, Author (responsible person) is receiving the task 'Allocate Invoice Costs'. At this stage responsible user is supposed to create (manually or with the use of the functionality of adding from template) cost allocation lines.
3. At this stage user can use 'Template functionality' manually. (Also instead of manual action there is possibility to execute in workflow 'Split rows by default template' system step which is described in: [Split rows by default template](expressions-examples/workflow-step-system-actions#split-rows-by-default-template "mention") ).
4. Continuing -  manual method: invoice is created, it has no cost allocation lines, in 'Other' tab - correct VAT record is already added:

<figure>![](/assets/image_(52).png)</figure>

5. User click 'From template' option over cost allocation lines:

<figure>![](/assets/image_(50).png)</figure>

6. Depending on how many templates are created in relation with the vendor appointed to the invoice header, system:

* in the case there is only single template created for the vendor in 'Invoice processing -> Templates' - system automatically adds the lines form the template to the cost allocation lines of the invoice. There is no intermediate dialog (to choose the template from) displayed,
* in the case ther is more than one template created for the vendor in 'Invoice processing -> Templates':

<figure>![](/assets/image_(48).png)</figure>

system displays intermediate dialog in where user can pick the template related with the same vendor, from which she/he would like to add cost allocation lines from, according to the emplate definition:&#x20;

<figure>![](/assets/image_(49).png)</figure>

7. After the template is chosen and the choice is confirmed with Next button, system adds the cost allocation lines from the chosen template. In our example case, for the chosen 'Test Template 2', the template definition looks like the following:

<figure>![](/assets/image_(46).png)</figure>

After adding the cost allocation lines to the invoice from the above template, the invoice cost allocation lines look, like the following:&#x20;

<figure>![](/assets/image_(47).png)</figure>

System adds up all the lines from the chosen template with all the properties (according to mapping definition which is explained in next sub chapter). All the properties are taken with straight forward mapping without changing the value, except the value of the line: it is taken as the part of the invoice value assigned to the header and multiplied by percentage/100. percentage is one of the parameters defined in template lines.

Please notice that any specific definition of the lines of the invoice can be saved like the template by 'Save as template' in order to reuse for any other similar invoice in the future from the same vendor.  While saving the template please put attention that overall sum of percentage property value, should equal to 100 for all the lines in the template.

Please notice that the above example was described according to the default parameters setup. The parameters can be adjusted according to the demands. Their are described, in details, in next chapter 'Templates params'.&#x20;

In order to deploy 'adding lines from templates' scenario from scratch (not necessarily adjusting cost allocation lines in invoices but deploying for different types of the objects), please follow the guide: [adding-lines-from-template](expressions-examples/adding-lines-from-template "mention") in where you will find description how to add recruitment tasks (as the lines to recruitment form) from the predefined recruitment tasks' templates. &#x20;

## Templates params

In the below picture is presented shortly the definition of 'Purchase Invoice Cost Allocation TEMPLATE' (this is header of the template) and the lines 'Purchase Invoice Cost Allocation TEMPLATE Line' (implemented as 'Children' type of attribute) and relation between each other are marked in light green and light blue and orange (other colors markup are used for expose relation to objects from next pictures):&#x20;

<figure>![](/assets/image_(402).png)</figure>

In the second picture, below are presented purchase invoice header (with the chosen attributes on it's form) and the cost allocation lines implementation:

<figure>![](/assets/image_(36).png)</figure>

On the next picture are shown chosen attributes on 'Purchase Invoice Cost Allocation' form. They have the same keys as attributes on  'Purchase Invoice Cost Allocation TEMPLATE Line'  form (in red):

<figure>![](/assets/image_(40).png)</figure>

In below there is full description of the 'Template params' which are setup in 'Advanced' tab of 'Purchase Invoice Cost Allocation' object type. Please put special attention to the color markup in reference to the markup in previous pictures:

<figure>![](/assets/image_(400).png)</figure>

The code view:

`{ "percentageTemplateKey": "percentage", "copyHeaderKeys": "counterparty=>counterparty,objectLogistic1Id,objectLogistic2Id,objectLogistic3Id", "amountKey": "amountNoVAT", "amountHeaderKey": "invoiceAmount", "otherAmountKeys": "corporateCurrency", "otherAmountHeaderKeys": "corporateCurrency", "templateSplitLinesKey": "templateLines", "copyTemplateLineKeys": "itemId,divisionId,objectCenterId,objectPersonId,objectLogisticsId,objectTransportId", "copyTempHeaderKeysToParent": "objectLogistic1Id,objectLogistic2Id,objectLogistic3Id,objectLogistic4Id,objectPersonId,objectTransportId", "filterByHeaderKey": "counterparty.id", "filterTemplatesByKey": "counterparty.id", "filterIncludeEmptyValues": true, "defaultTemplateKey": "defaultTemplateId" }`



```javascript
{ "percentageTemplateKey": "percentage", "copyHeaderKeys": "counterparty=>counterparty,objectLogistic1Id,objectLogistic2Id,objectLogistic3Id", "amountKey": "amountNoVAT", "amountHeaderKey": "invoiceAmount", "otherAmountKeys": "corporateCurrency", "otherAmountHeaderKeys": "corporateCurrency", "templateSplitLinesKey": "templateLines", "copyTemplateLineKeys": "itemId,divisionId,objectCenterId,objectPersonId,objectLogisticsId,objectTransportId", "copyTempHeaderKeysToParent": "objectLogistic1Id,objectLogistic2Id,objectLogistic3Id,objectLogistic4Id,objectPersonId,objectTransportId", "filterByHeaderKey": "counterparty.id", "filterTemplatesByKey": "counterparty.id", "filterIncludeEmptyValues": true, "defaultTemplateKey": "defaultTemplateId" }
```

### **`percentageTemplateKey`**

**`"percentageTemplateKey": "percentage"`**` ``- holds the definition of the key (in this example case it is: percentage, which is marked in pink (`![](</assets/image_(390).png>)`) on above pictures) which is used as the parameter of the split of the invoice sum from header to the created lines. The key should exist on template line form (in our example on:` 'Purchase Invoice Cost Allocation TEMPLATE Line' form),



### **`copyHeaderKeys`**

**`"copyHeaderKeys": "counterparty=>counterparty,objectLogistic1Id,objectLogistic2Id,objectLogistic3Id"`**` ``- holds the definition of copying the values of the keys between destination header (purchase invoice)` ![](</assets/image_(38).png>) `and destination lines (Cost Allocation Lines)` ![](</assets/image_(391).png>)`. Only this part of mapping is valid (only vendor is copied; other listed keys keys are not existing in purchase header form). In our example vendor is presented on cost allocation lines with the same values as from purchase invoice header.`



### **`amountKey`**

**`"amountKey": "amountNoVAT"`** - holds the definition of the destination key, to where the split value should be saved on the destination lines. In our example this key is placed on  'Purchase Invoice Cost Allocation' form. In color markup it is colored by dark grey ![](</assets/image_(392).png>).



### **`amountHeaderKey`**

**`"amountHeaderKey": "invoiceAmount"`**` ``- holds the definition of the purchase invoice header key, from which should be extracted invoice value in order to take it as the base value for percentage split to the created lines. So in our example this is the key: invoiceAmount , which is placed on 'Purchase Invoice' form. In colorful markup on above pictures it is marked with sand - darker yellow` ![](</assets/image_(393).png>)`.` &#x20;



<mark>**`"otherAmountKeys": "corporateCurrency",`**</mark>&#x20;

<mark>**`"otherAmountHeaderKeys": "corporateCurrency"`**</mark><mark>` `</mark><mark>`- this 'other' 2 set of keys definition is not used in our case. It holds possibility to split other keys value from the invoice header (otherAmountHeaderKeys) to the created lines in separate keys (otherAmountKeys). Currently it is invalid,  not used in the code.`</mark>



### **`templateSplitLinesKey`**

**`"templateSplitLinesKey": "templateLines"`**` ``- it holds the definition of the children key which shows up how to split by rows from the appointed and found template. In our case this is attribute 'Cost Allocations Template Lines' (key: templateLines) on 'Purchase Invoice Cost Allocation TEMPLATE' form. In our color relation markup it is marked with light green` ![](</assets/image_(394).png>)`.` &#x20;



### **`copyTemplateLineKeys`**

**`"copyTemplateLineKeys": "itemId,divisionId,objectCenterId,objectPersonId,objectLogisticsId,objectTransportId"`**` ``- the definition of the set of the keys in root template line from which it should copied to the same keys in destination invoice cost allocation lines. It copies from the same named key from root line to the same named key in destination line. On above pictures they are marked up with red color` ![](</assets/image_(395).png>)`.`



### **`copyTempHeaderKeysToParent`**

**`"copyTempHeaderKeysToParent": "objectLogistic1Id,objectLogistic2Id,objectLogistic3Id,objectLogistic4Id,objectPersonId,objectTransportId"`**` ``- not used in our example cause there is no specified key on the root template form. Is used for copying from the header keys of the template to the header keys of the destination object - purchase invoice form in our example.`



### **`filterByHeaderKey`**

**`"filterByHeaderKey": "counterparty.id"`**` ``- from which key from destination (invoice) header form, take the value for searching for the matching templates. In our case this is Vendor picked to purchase invoice header. counterparty is the key for the 'Vendor' attribute on purchase invoice form. id is the subkey of the unique value of the chosen vendor. In our color reference markup counterparty key is makred with dark brown:` ![](</assets/image_(38).png>)



### **`filterTemplatesByKey`**

**`"filterTemplatesByKey": "counterparty.id"`**` ``- to which values from source (purchase invoice cost allocation template) header, match the value from prevoious parameter ("filterByHeaderKey"). On this basis in our examples system shows up only the templates defined for the same vendor. It is marked up with skylight blue rectangular:` ![](</assets/image_(401).png>)



### **`filterIncludeEmptyValues`**

**`"filterIncludeEmptyValues": true`**` ``- determines whether the templates which do not have established the relation in attribute appointed by "filterTemplatesByKey" should be displayed for the user in intermediate dialog while he is picking the template. So in our example it determines whether templates which do not have appointed vendor should be displayed always (no matter which vendor is picked to purchase header) or never. If the value is:`

`true - then system displays in intermediate dialog the templates which are not related with any vendor (in addition to these ones related),`

`false - then system`` `**`does NOT`**` ``display in intermediate dialog the templates which are not related with any vendor (in addition to these ones related),`



### **`defaultTemplateKey`**

**`"defaultTemplateKey": "defaultTemplateId"`**` ``- this property identifies the key on the object form appointed by "filterByHeaderKey" , which should be treated like default template. So in our example case, filterByHeaderKey property appoints to the Vendor attribute on purchase invoice form. On it's form we have 'Default Template' attribute (key:`` `**`defaultTemplateId`**`)  which appoints  to '`Purchase Invoice Costs Allocation TEMPLATE`'`&#x20;

<figure>![](/assets/image_(398).png)</figure>

<figure>![](/assets/image_(399).png)</figure>

This setup does not determine any default selection when the user adds the lines from the template.

This setup is used with the execution of the workflow system step:  &#x20;

[Split rows by default template](expressions-examples/workflow-step-system-actions#split-rows-by-default-template "mention")

Other extended possibility of defining of **`"defaultTemplateKey"`**` ``is to differentiate the logic of extracting default template key from the other object then used for the filtering while choosing the template manually. Let's consider separate the example:`

```javascript
"filterByHeaderKey": "author.id",
"filterTemplatesByKey": "author.id",
"filterIncludeEmptyValues": true,
"defaultTemplateKey": "counterparty:defaultTemplateId"
```

&#x20;_In this case, filtering in the terms manual appointment of the template in the  process of adding lines from template  is performed by author's id. Let's consider the example invoice:_

<figure>![](/assets/image_(409).png)</figure>

The templates are defined in the following way:

<figure>![](/assets/image_(410).png)</figure>

_Wihile adding manually from the template, system will be suggesting in this case (while mapping by author.id) the five templates assigned to the same author as in nvoice header:_

<figure>![](/assets/image_(411).png)</figure>

_However when executing the auto system step, we still would like to  add lines from the template assigned to the vendor. So that is why after_ "defaultTemplateKey":, there is identification of the object which should be taken into the account first (which is different than the object used for filtering):&#x20;

```
counterparty:
```

and only then, the key on it's form is provided:

```
defaultTemplateId
```

So in our case different template (not related with the author) is assigned to the vendor assigned in counterparty key on purchase invoice form:

<figure>![](/assets/image_(412).png)</figure>

This template will be taken and used (lines will be added accordingly to it), when the following auto system step will be used in workflow:

[Split rows by default template](expressions-examples/workflow-step-system-actions#split-rows-by-default-template "mention")

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_



### **templateId**

**"templateId": "scheduleTemplateId"** - used in \_CORE in different scenario for 'Work schedule Rolling Cycle Setup' object type.&#x20;

In the description of our scenario with Purchase invoice header and cost allocation lines: this parameter appoints the key on the destination header form (purchase header invoice form) where to save the template id from which the lines have been added to the destination document (purchase invoice header). The appointed key should be of Select type and appoint <mark>'</mark>Purchase Invoice Costs Allocation TEMPLATE<mark>'</mark>. &#x20;



### **filterClassMap**

**"filterClassMap": { "SJz1U9hnOfLU38sOQU2z\": \"8iv8YYC0paZ445jyGN0g" }**  I have found it in different scenario for 'Work schedule Rolling Cycle Setup' object type.  It was tested and working correctly in the following way:&#x20;

"filterClassMap": { "I10spNv4pUdDN47PufV2\": \"yu684j59HcO8j2nU7lBy" } ,

* first you provide the class id of of the destination line. So in our example it I10spNv4pUdDN47PufV2 which is id of 'Purchase Invoice CA',
* as the second value you should provide the id of the class of the template header. In our case it is yu684j59HcO8j2nU7lBy which is 'Purchase Invoice Costs Allocation TEMPLATE 2'

When adding lines from the template, system will appoint on the short list, the templates of the matching (by second value) class of the template header.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_



### **copyHeaderKeys with \_\_self**

In another implementation of the template lines, where the lines are deployed like 'relation view' type in destination recruitment form  (but not like children type) the following  parameters  are taking part in the setup :

**"copyHeaderKeys": "\_\_self=>relatedCandidate"** -    \_\_self=>relatedCandidate - defines that for every created task line in recruitment form, while creating the new line, system should propagate self id of the recruitment and in this manner establish relation between created task line and the recruitment header (which is needed for relation view deployment). relatedCandidate is attribute of select type of control from recruitment task to recruitment,



### **orderKey**

**"orderKey": "order"** - order - by the value of this key in task template line, new tasks has to be added. The attribute with this key is existing in both recruitment task template line and recruitment task.

For the full description of this business scenario, please check: [adding-lines-from-template](expressions-examples/adding-lines-from-template "mention")

### classes

Please see relevant description and usage case under 'Objects As Templates' section on this page:&#x20;

[Classes](template-functionality-parameters#classes-1 "mention")

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

The described above scenario is basing on the creation the new lines with the assumption that no lines were existing before. Vecticum system has potential for individual customer requirements with the assist of the developer to enable the scenario that the single line exists in destination form of the purchase invoice and is copied as the base data while adding the new lines from the template. For more details, please contact system architect directly. &#x20;

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For the step by step description of the example implementation of functionality of 'Adding Lines From Template', please refer to:

[adding-lines-from-template](expressions-examples/adding-lines-from-template "mention")

Other related article is placed in workflow steps examples:

[Split rows by default template](expressions-examples/workflow-step-system-actions#split-rows-by-default-template "mention")

## Objects As Templates

This is the alternative way  (to above described) of  defying  the root objects (as templates) and launching mechanism of adding the lines from root object.&#x20;

The explained below example is not available on any \_CORE company functionality, but was custom deployed on company 'O..... TEST'  in 'RE Sales Contracts'.

### Functional scenario

1. There is deployed list of 'Deals' which are custom imported from external system. These are sales deals for the properties. The form of such imported deal is presented like the following:

<figure>![](/assets/image_(403).png)</figure>

On the form there are 2 attributes deployed like 'children':

* upper: Customers (key: customers) - for the storage of the customers (individuals and institutional once related with the real estate property sales deal),
* bottom:  RE Items (key: reItems) - for storage real estate properties which are the subjects of the contract deal.

These 2 attributes will play as the lines of the template. The template header is the deal.

2. On the 'RE Sales Contracts' form user is choosing the root deal in select attribute, which appoints to 'Deals' - in red below:

<figure>![](/assets/image_(29).png)</figure>

3. After the deal is picked and contract saved, there is the definition of the 2 children attributes (in green) for customers (above) and properties (RE Items) - in below:

<figure>![](/assets/image_(30).png)</figure>

4. For each of these components, standard template functionality is not used. Is used the alternative functionality of 'Objects As templates'. The appointed 'Deal' attribute specifies which object should be treated like the template header. In each of these components the functionality is triggered by  pressing 'From Deal' /  'From Deal\_' buttons, which are placed over the children attribute:

<figure>![](/assets/image_(31).png)</figure>

5. After pressing the button, system takes appointed Deal and adds items (or customers) from the appointed deal to the RE Sales contract children attribute:   &#x20;

<figure>![](/assets/image_(32).png)</figure>

### Setup

The setup is performed separately for each children attribute on 'RE Sales Contracts' form:

* The children attribute 'Customers Child' (key: customers) is setup in the following way that appoint 'Sales Contract Customer' object type:

<figure>![](/assets/image_(33).png)</figure>

in the definition of this object type, in 'Advanced' tab, there is setup of 'Templates params' in the following way:

&#x20;

<figure>![](/assets/image_(34).png)</figure>

```javascript
{ 
"objectsAsTemplates": [{
    "label":  "From Deal",
    "key": "dealId",
    "splitConfig": {
      "templateSplitLinesKey": "customers",
      "copyHeaderKeys": "erpNo", 
      "copyTemplateLineKeys": "name,companyCode,address,vatNumber,phone,email,erpNo"
    }
  }]
}
```

**"objectsAsTemplates"** - appoints by this parameter that we are using alternative templates functionality. Please notice that contrary to the standard templates functionality, other parameters like 'Template Object Type' remain empty.

**"label":  "From Deal"** - definition of the label which is responsible as 'button caption' for trigerring adding mechnism:

<figure>![](/assets/image_(404).png)</figure>

**"key": "dealId"** - appoints the select key responsible for holding the relation to the root object header (which should be treated like the header of the template). In our case, as described in functional scenario, this is 'Deal' attribute: &#x20;

<figure>![](/assets/image_(406).png)</figure>

**"splitConfig"** - holds the definition how the lines from header of the root object should be transferred to the lines of destination object.

**"templateSplitLinesKey": "customers"** - (the same attribute was used for the standard template functionality) - `it holds the definition of the children key (which appeared on the template root object header form) which shows up how to split by rows from the appointed and found template. In our case this is attribute` Customers (key: customers) `on deal form.`

**"copyHeaderKeys": "erpNo"** - (the same attribute was used for the standard template functionality) `holds the definition of copying the values of the keys between destination header (RE Sales Contrats) and destination lines. In our example it will work after such correction:` **"copyHeaderKeys": "erpId",** where **erpId** appears on destination header contract form (it is technical id of the contract):

<figure>![](/assets/image_(28).png)</figure>

&#x20;and is propagated to every created line of customer added from the Deal:

<figure>![](/assets/image_(407).png)</figure>

&#x20;**"copyTemplateLineKeys": "name,companyCode,address,vatNumber,phone,email,erpNo"** -  (the same attribute was used for the standard template functionality)  `- the definition of the set of the keys in root template line from which it should copied to the same keys in destination lines. It copies from the same named key from root line to the same named key in destination line.`

* The children attribute 'RE Items' (key: reItems) is setup in the following way that appoint 'RE Item in Contract' object type, which has the following defintion of the parameters:

<figure>![](/assets/image_(408).png)</figure>

```javascript
{ 
"objectsAsTemplates": [{
    "label":  "From Deal_",
    "key": "dealId",
    "splitConfig": {
      "templateSplitLinesKey": "reItems",
      "copyHeaderKeys": "erpNo", 
      "copyTemplateLineKeys": "name,itemCode,housenNo,initialflatNo,floor,roomsQty,initialSpace,space,orientation,parkingPlaceNo,specialMarks,storageNo,balconySpace,cadastreNo,squareMeterPrice,priceWithVat"
    }
  }]
}
```

Please comprehend the differences between this and customers child children:

* different label post fix is used ('\_' at the end),
* the same dealId key is used to identify root template object,
* in splitConfig, different value for - correct for items, templateSplitLinesKey, is used,
* different, specific for items collection of the keys in  copyTemplateLineKeys.

### classes

\[in testing now 2024-01-15] This is the new parameter which gives the possibility to setup filter for the class of the object type of the rows in children attribute. If the class matches provided class in this parameter then the url presented over the children list is displayed. Otherwise (if the class id provided in this parameter does not match the class id provided in children attribute definition for displayed lines) then the url presented over the children list is NOT displayed. So by adding this attribute to Advanced -> 'Templates params' of the object type of rows presented in children attribute, in a case you have 2 children type attributes presented on the same form and displaying rows of the same object type but different classes, you can setup that for one children attribute url for creating objects (children) from template will be available but for the 2nd children attribute it will NOT be available.

Please find example description in 'Functional scenario 2' in below.

In the case this attribute is not defined (skipped in object type of children, in Advanced -> 'Templates params') , url for creating children from template is available for every children attribute where object type of the children rows matches.

### Functional scenario 2

This is the scenario from 'O... TEST' company.

When creating development contract, in 'Items' tab, there is prepared possibility to bulk add the items from winning proposal document (from Purchase module). Assuming that development contract has been created from the purchase record and in development contract the following attributes are already filled in: Counterparty, Related Purchase, when you navigate to the 'Items' tab of development contract, you can pick first 'Vendor Proposal' :

<figure>![](/assets/image_(26).png)</figure>

Filter Expression of 'Vendor Proposal' is set in this manner that it shows valid proposal from the same vendor (as assigned for development contract), from the same purchase (as related with development contract). This vendor proposal is treated like the template.

The Children type attribute for items  (presented below 'Vendor Proposal') has a key: contractItems . In it's definition it appoints to lines of 'Contract Allocation' object type:

&#x20;

<figure>![](/assets/image_(27).png)</figure>

In the definition of the 'Contract Allocation' object type, in Advance tab we have definde template params like:

<figure>![](/assets/image_(420).png)</figure>

```javascript
{ 
"objectsAsTemplates": [{
    "label":  "Iš pardavėjo pasiūlymo",
    "key": "vendorProposalId",
    "classes":[
          "SI4mIvqVdU6aWO421k9u"
     ],
    "splitConfig": {
      "templateSplitLinesKey": "purchaseObjects",
      "copyTemplateLineKeys": "name,itemId,sum"
    }
  }]
}
```

Because of the above definition of the classes parameter, the link for adding items from proposal will be presented  above items children (in green, because it is setup for 'Cost Allocation' object class) but will not be shown for VAT records children (in red below) which presents the lines of the same object type (as Children for items) but of the different class (Contract VAT Record):

&#x20;

<figure>![](/assets/image_(25).png)</figure>
