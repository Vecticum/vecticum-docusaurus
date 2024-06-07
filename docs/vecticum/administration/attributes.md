# Attributes

## List of system attributes

| Key                | Object/Class | Description                                            |
| ------------------ | ------------ | ------------------------------------------------------ |
| managerId          | Person       | Person or Employee line manager.                       |
| status             | All          | Document Status                                        |
| id\_classId        | All          | Class Name                                             |
| id\_registrationNo | All          | Registration number                                    |
| isOOONow           | Person       | boolean - shows whether person is Out of Office or not |
| substituteId       | Person       | lookup - shows OOO substitute person                   |
| id\_created        | All          | Timestamp, date document created                       |
| id\_modified       | All          | Timestamp, last document update date                   |

<!-- Please find the additional information related with attributes in [forms](forms/ "mention") section below., especially in [#form-attributes](forms/#form-attributes "mention") -->

## Lookup & filtering

This is old document section. The updated one is under creation and constant update in:

<!-- {% content-ref url="expressions-examples/" %} -->
<!-- [expressions-examples](expressions-examples/) -->
<!-- {% endcontent-ref %} -->
<!-- Pakeisti nuorodą į galiojančią -->
You can find the additional information on Lookup & filtering properties in:

<!-- &#x20; [#lookup-filtering](forms/#lookup-filtering "mention")  settings description -->

### Filter MY records

```javascript
employeeId.id==[Me]
```

In the class definition in 'Filtered views' tab, in attribute 'Filters for views' - there is definition of the conditionally filtered views. When you define the view, you should put the 'Filter Expression' in json format, for example (for lookup):

```json
return [{
  key: 'recruiterId.id',
  value: [Me]
}];
```

&#x20; in where _recruiterId_ - is the key for Recruiter attribute, of Select type which appoints the person. Such defined filtered view will show only the documents in where my user is assigned as Recruiter.

## Multiselect & filtering

In the class definition in 'Filtered views' tab, in attribute 'Filters for views' - there is definition of the conditionally filtered views. When you define the view, you should put the 'Filter Expression' in json format, for example (for multiselect):

```json
return [{
  key: '_id_performsRecruitment.'+[Me],
  value: true
}];
```

In this case there is placed on the form the multiselect type attribute with the key _performsRecruitment_ . It returns as example - when 2 persons are appointed:

```
[
	{
		"objectTypeId":"person",
		"classId":"gwZ83NWTFFPMuw2Ii1em",
		"id":"92OEWfCoP3jWciNR9XkL",
		"name":"Aaron Burden"
	},
	{
		"id":"dr0qWgrhztq2f5036crz",
		"objectTypeId":"person",
		"name":"Jim Smith",
		"classId":"person_class"
	}
];
```

In this case we are using, by applying the above filter code, additionally created by the system key:

```
_id_performsRecruitment: {
92OEWfCoP3jWciNR9XkL: true,
dr0qWgrhztq2f5036crz: true
}
```

## Value

### Expressions

#### Get Date from Lookup Key

Control should be set as Computed

```javascript
${parentId.dateBtFrom}
```

#### Get Lookup value from Lookup Key

Control should be Typehead or Dropdown. Attribute  "Lookup to Object type" set to Lookup Value table, "Lookup key" to the Attribute to be shown.

```javascript
${parentId.employeeId}
```

### Set the date from date range attribute

Control type - Computed.

```javascript
var dateFromString = '${datesRange.to}';
if (!dateFromString) {
    return dateFromString;
}

var date = new Date(dateFromString);
var month = '' + (date.getMonth() + 1);
var day = '' + date.getDate();
var year = date.getFullYear();

if (month.length < 2) {
    month = '0' + month;
}
if (day.length < 2) {
   day = '0' + day;
}

var dateString = [year, month, day].join('-');
return dateString ;
```

## Get date

```javascript
return new Date(${employeeId.hireDate}) 
```

## Data Range control

Selecting date form

```javascript
${keyname.from}
```

Selecting date to

```javascript
${keyname.to}
```

## Visibility Expression Examples

Attribute visibility is true if one of 3 Lookup values are true:

```javascript
var leaveType = ${leaveType.id};
if (!leaveType) return false;
return ((leaveType === 'BU8g5B996L5a8XNs5Hk1') || (leaveType === 'cylo8B4LEKHs9IOdb4nr') || (leaveType === '0SUjQwAsguWPQo5hZRu0')); 
```

## Additional information

This above is old document section on expressions. The updated one is under creation and constant update in:

<!-- {% content-ref url="expressions-examples/" %}
[expressions-examples](expressions-examples/)
{% endcontent-ref %} -->

<!-- Please find the additional information related with attributes in [forms](forms/ "mention") section below. -->
