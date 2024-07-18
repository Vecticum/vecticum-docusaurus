---
description: >-
  The description provided on this page is relevant for all these control types
  of attributes, in which definition Filter or Removable filter or Filter
  Expression appear.
---

# Attribute - Filter, Removable filter, Filter Expression

Typically it would be relevant for the below types:

[children](../forms/control-types#children "mention")

[dropdown](../forms/control-types#dropdown "mention")

[multi-select](../forms/control-types#multi-select "mention")

[relation-view](../forms/control-types#relation-view "mention")

[select](../forms/control-types#select "mention")

[typehead](../forms/control-types#typehead "mention")

[multi-relations](../forms/control-types#multi-relations "mention")

for which [Lookup filtering](../forms/#lookup-filtering "mention") section is configurable.

### Show on the select list only the records of the class which is picked on another select type attribute (dependable filtering). Deployed as Filter.

&#x20;On purchase cost allocation line, user selects first type of item (in fact appoints the class in select 'Type Of Line'):

<figure>![](/assets/image_(120).png)</figure>

'Item'  attribute of lookup select type, is showing up only the objects of the class picked in 'Type of Line' .

'Type Of Line' attribute is represented by the key typeOfLine . It appoints to the class object type:



<figure>![](/assets/image_(137).png)</figure>

&#x20;and has limited possibility to choose from (by above filter definition):

<figure>![](/assets/image_(200).png)</figure>

Item is select type attribute. It has deployed the following setup with Filter:

<figure>![](/assets/image_(167).png)</figure>

As the parameter to the applied filter is used the id of the class appointed in 'Type Of Line' . In this manner we can achieve 'dependable filtering', in where selection in second lookup 'Item' is determined by the prior selection in 'Type Of Line'. Please notice that the 'Lookup to Object Class' property of the 'Item' attribute is not chosen because it is deliverd within the filter.

### Show on the list of values to pick, only my documents - as Filter property for Select type

Can also be deployed for other filter types and other control types, including Lookup & filtering section. &#x20;

```javascript
nominatedId.id==[Me]
```

In the example above, Select type  attribute  (placed on the form, assigned to the class of 'Custom object type') is orientated for custom object type 'Personal Corporate Award', and class 'Personal Corporate Award'.  On the form assigned to this class, there is attribute with the key nominatedId which is of Select type, appointing to person and providing the information with which person the nomination document is related. We are setting up it's Filter property of the attribute of   document of 'Custom object type', in away to be able to pick only the nominations related with 'my user'.  Please notice that the Filter operates on the keys of attributes on destination form of objects whihc user is picking.&#x20;

<figure>![](/assets/image_(269).png)</figure>

<figure>![](/assets/image_(196).png)</figure>

### Show on the list ID\&Certificates Types which are marked as Active - as Filter property for Multi-select type

In the described example, the form assigned to the class: 'ID\&Certificates Type' is extended with the Bolean type attribute: Active, key=activeCert.&#x20;

`Filter expression:`

`activeCert==true`

On the list will be available only these types which are marked as Active.&#x20;

### Show on the select list only the departments which match their code by 6 first characters of the code assigned to the object which is chosen on another lookup - as Filter Expression to Select type.

On the cost allocation line for the purchase invoice, after choosing 'Object', system filters the departments list in 'Department.' lookup by matching 6 first characters of the code from object to the code of the department:

<figure>![](/assets/image_(371).png)</figure>

'Object' attribute is deployed like the Select type to Object (Center):

<figure>![](/assets/image_(240).png)</figure>

<figure>![](/assets/image_(264).png)</figure>

On the Object (Center) form, under _name_ key is stored Object code:

<figure>![](/assets/image_(323).png)</figure>

The 'Department.' attribute is deployed like select type to departments:

<figure>![](/assets/image_(66).png)</figure>

<figure>![](/assets/image_(263).png)</figure>

It has defined 'Filter expression' in the following way:

```javascript
const code='${objectId.name}';
const codeInDepartment  = '$lookup{code}';
const code6 = code.substring(0, 6);
return code6 === codeInDepartment;
```

For the code constant is assigned code (under name key) from assigned in object 'Object' attribute.

codeInDepartment constant - takes the value of the code key from current row in department, from departments list

code6 constant takes 6 first characters from code constant (from 1st line)

In the case code6 matches with codeInDepartment then the true is returned and the department with matching code is displayed. Otherwise it is returned false and  the department with not matching code is not displayed.

This is the example of the implementation of dependable filtering with matching different than by the same picked in object&#x20;

### Show on the multiselect list for classes only the ones assigned in setup

The task is to achieve the scenario that there should be shorten, predefined in setup, list of the classes available for appointing in multiselect attribute 'Document Types' attribute on folder object (DMS functionality).&#x20;

<figure>![](/assets/image_(413).png)</figure>

On the same folder's object from, there is assigned, in select attribute, workflow performance scheme which is treated like the setup entry:

&#x20;

<figure>![](/assets/image_(414).png)</figure>

In this 'setup record' there are assigned the available classes:

<figure>![](/assets/image_(415).png)</figure>

In the Filter Expression of 'Document Types' attribute we have:

<figure>![](/assets/image_(417).png)</figure>

```javascript
const classIdInClasses  = '$lookup{id}';
const idsFromSetup = ${workflowPerformenaceScheme.documentClassessInFolders};
for (const idd of idsFromSetup) {
if (idd.id === classIdInClasses) {
return true;
}
}
```

Constant _classIdInClasses_ takes the value of the currently checked class id from the classes full list.

Constant  _idsFromSetup_ takes the value as the collection of the classes assigned to default workflow performance scheme record, in 'Default classes included into folders'.

In 'for' loop system iterates per each class in the collection from _idsFromSetup ._ If the value of currently checked class (from _classIdInClasses_ ) matches the id of the current class from collection  (idd.id) then system returns true  and such class is available on the multiselect list:

<figure>![](/assets/image_(418).png)</figure>

##

## Properties definition

[Lookup filtering](../forms/#lookup-filtering "mention")
