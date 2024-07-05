# Examples

This is old section. The updated section is under creation and constant update in:

<!-- TO DO PAGE REFERENCE -->
<!-- {% content-ref url="expressions-examples/" %} -->
[expressions-examples](expressions-examples/)
<!-- {% endcontent-ref %} -->

## How to setup today + 3 days as default  value for date attribute

```javascript
// 'dateTo' is an key for date type attibute
var date = new Date('${dateTo}T17:00:00+02:00');
date.setDate(date.getDate() + 3);
return date;
```

## Round to 2 decimal places

```javascript
var numb = ${totalAmount} + ${vatAmount};
numb = numb.toFixed(2);
return numb;
```

## Full name

```javascript
var firstName = '${firstName}';
var lastName = '${surname}';
var middleName='${middleName}';
if (middleName) {middleName = middleName.concat(' ');}
return firstName.concat(' ',middleName,lastName);
```

### Return date from lookup object

## Convert to Number

```javascript
return new Date(${leaveRequest.dateVacFrom});
```

```javascript
Number('${totalAmount}')>1000
```

## **How to return value from select to multiselect**

```javascript
//'incomingDocument.sender' is an select key
return [${incomingDocument.sender}];
```

## How to extract persons from groups (multiselect to multiselect)

```javascript
//Need to write in Expression
const groups = ${groups}; //key of groups attribute
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



## How to return value from multiselect to text

```javascript
//Write in Expression
//Example how to return list of recipient's emails in text attribute
const multi = ${recipients}; //key of multiselect
const emails = multi.filter(x=>!!x.email).map(x => x.email);
const emailString = emails.join(';')
return emailString;
```
