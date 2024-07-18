---
description: >-
  On this page  there is description of the value orientated expressions (which
  are defined in 'Default value' and 'Expression' properties of the attributes).
---

# Attribute - Default value, Expression

The examples are split by type of attribute for which expression you are defining. You can navigate by type on the right panel -> , in the section 'ON THIS PAGE'. By selecting appropriate type you will jump into value expressions examples, which are relevant for the type of the attribute of your interest.&#x20;

## Date type

### Current day - as Default value for Date type attribute&#x20;

```javascript
[Today]
```

### Certain calendar date - as Default value for Date type attribute&#x20;

```javascript
return '12/31/2022';
```

### Current day plus 5 days - as Default value for Date type attribute&#x20;

Should be deployed in Expression with the Calculation type = 'Once':

```javascript
var date = new Date(); 
date.setDate(date.getDate() + 5 ); 
return date;
```

### Date from related (by Select type attribute) object - as Expression for Date type attribute

```javascript
// personIdd is the key for Select type attribute which appoints to employee
// on employee card there is Date type attribute with the key hireDate
return new Date(${personIdd.hireDate});
```

## Multi-Select type

### Extraction of persons from multiselect - as Expression for Multi-select type&#x20;

```javascript
const groups = ${groupIds}; // groupIds is key of Multi-select attribute
const persons = [];
for(const group of groups) {
  const groupPersons = group.persons || [];
  for (const groupPerson of groupPersons) {
    if (!persons.find(x => x.id === groupPerson.id)) {
      persons.push(groupPerson);
    }
  }
}
return persons;
```

<figure>![](/assets/image_(194).png)</figure>

Extracts the persons  from Multi-select type attribute for Groups and fills in another multiselect with extracted persons.

### Extraction of positions (vacancies) from related with candidate recruitments - as Expression for Multi-select type of attribute (for Positions) on candidate card

```javascript
const recrutiments = ${recruitimentCampain};
let positions = [];

for (const recruitment of recrutiments) {
        positions.push(recruitment.vacancyId);
}
return positions;
```

<figure>![](/assets/image_(277).png)</figure>

It is possible to add recruitment only from relation view attribute 'Recruitments and Migrations' which is placed on Candidate form.

```
recruitimentCampain - is the key for relation view type attribute which exposes recrutiments related with candidatee
```

For single recruitment row in every iteration, extracted position id is added to the array of positions, which is finally returned.  &#x20;

You can find other description example of 'array type processing' in:  [attribute-expression-with-array-processing.md](attribute-expression-with-array-processing.md "mention")

##

## Number type

### Round to 2 decimal places - as Expression for Number type attribute

```javascript
// numberVar is the key for another Number type attribute
var numb = ${numberVar};
numb = numb.toFixed(2);
return numb;
```

<figure>![](/assets/image_(113).png)</figure>

## Select type

Analogical approach for Typehead and Dropdown.

### Default value of status attribute (Select on Statuses)&#x20;

```javascript
{"id":"001u9dc0w27PPFLUJeeu", "name":"Interview", "objectTypeId":"_statuses", "classId":"_statuses_class"}
```

Status value of Select type of control is setup for 'Interview' value. If you will be trying to adjust to your own status value, you have to swap both: id and name.  It is used as Default value for Status attribute (key: status), for Status object type. Using select type attribute for Status object type makes sense from 2 reasons: 1) you do not want give permissions to users to administer document and manipulate statuses in top right corner but instead deploying Select type attribute for Status object which is synchronized automatically with status of document (with the use of key: status), 2) you want to propagate the status value by applying to the class Parameters (in Advanced tab), from your document form to related document with the current.    &#x20;

### Lookup from related (by Select type attribute) object - as Expression for Select type attribute

```javascript
// Some code
${personIdd.managerId}
```

<figure>![](/assets/image_(353).png)</figure>

<figure>![](/assets/image_(118).png)</figure>

_personIdd_ - is a key for Select type attribute for Person

_managerId_ - is a key for Typehead attribute 'Direct manager' placed on Person form.&#x20;

## Text type

### Concatenation of strings - as Expression for Text type attribute

```javascript
var firstName = '${firstName}';
var lastName = '${surname}';
var middleName='${middleName}';
if (middleName) {middleName = middleName.concat(' ');}
return firstName.concat(' ',middleName,lastName);
```

Is placed on Employee form with calculation type Always.

<figure>![](/assets/image_(165).png)</figure>

### Date TO from Date range type attribute - as Expression for Text type attribute

```javascript
// comp2 is a key for Date range type attribute
var dateFromString = '${comp2.to}';
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

<figure>![](/assets/image_(121).png)</figure>

### Date from related (by Select type attribute) object - as Expression for Text type attribute

```javascript
// personIdd is the key for Select type attribute which appoints to employee
// on employee card there is Date type attribute with the key hireDate
return ${personIdd.hireDate};
```

<figure>![](/assets/image_(218).png)</figure>

### Static string - as Default value for Text type attribute &#x20;

```javascript
this is the example default text value
```

<figure>![](/assets/image_(88).png)</figure>

### Static string - as returned value from Expression for Text type attribute

```javascript
return 'this is the example returned text value from expression';
```

<figure>![](/assets/image_(201).png)</figure>

### Text from Multiselect - as returned value from Expression for Text type attribute

```javascript
// performsRecruitment is the key for multiselect which appoints to persons
// email is the key for Texp type attribute on person form

let emails=${performsRecruitment};
if (emails===null){return ''};
emails=emails.filter(x=>x.email).map(x=>x.email);
let correctEmails='';
for (let index=0;index<emails.length;index++){
    correctEmails+=emails[index]+';'
};

return correctEmails;
```

<figure>![](/assets/image_(115).png)</figure>

### Text from Select - as returned from Expression for Text type attribute

```javascript
// personIdd is the key of Select type attribute which appoints to employee
// employeeNo is the key of the Text type attribute on employee form
return ${personIdd.employeeNo};
```

<figure>![](/assets/image_(132).png)</figure>

## Properties definition

[Value](../forms/#value "mention")
