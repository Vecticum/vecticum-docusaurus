---
description: >-
  On this page  there is description of the definition of the value 'Expression'
  property of the attribute, which contains array processing type extraction.
---

# Attribute – Expression with Array processing

The split is not focused on returned value but presents the examples of array type processing. Such approach will be used in scenarios you would like to extract the value not from the single related object form, but rather you have to process the collection of the related records in order to extract the value, which meets your original requirement.

## Value for the salary from employee Employment & Compensation records&#x20;

The example with showing the current employee salary on the ‘variation of contract’ document where the employee was pointed in lookup attribute (Post Holder). The salary information is stored in employment and compensation records which are available in employee card under button ‘Employment & Compensation’.

<figure>![](/assets/image_(178).png)><figcaption></figcaption></figure>

It is deployed as Number type attribute ‘Salary’ with the use of the following expression:

```js
const compensations = ${compensationCollection};
let payRate = 0;
let latestEffectiveDate='0000-00-00';
const employeeId = '${employeeId.id}'; 

for (const compensation of compensations) {
   if (compensation.effectiveDate > latestEffectiveDate && compensation.employee && compensation.employee.id === employeeId) {
     payRate = compensation.payRate;
     latestEffectiveDate = compensation.effectiveDate;
  }
}

return payRate;
 ```

While defining the above expression, the required prerequisite is to create on ‘variation of contract document’ form, the 'relation view' attribute which will be showing the employment and compensation records related with the employee appointed in lookup attribute on ‘variation of contract document’ form. The ‘Relation view’ control attribute is implemented on ‘variation of contract document’ form, with the key _compensationCollection ._ This is the screenshot from the definition of it’s Lookup and filtering section:

<figure>![](/assets/image_(107).png)><figcaption></figcaption></figure>

In order to show the records related with the appointed on ‘variation of contract’ form employee, it searches for equality of the appointed on the variation form employee (in Select attribute, which is described with _employeeId_ key; in above definition relation view specifies it as ‘Relation own key’) with _employee_ key on Employment and compensation form.

With:

```javascript
let payRate = 0;
let latestEffectiveDate='0000-00-00';
const employeeId = '${employeeId.id}'; 
```

there are set initial values for variables. _employeeId_ gets the id text value of the employee appointed in Select attribute (with key _employeeId_).

By:

```javascript
if (compensation.effectiveDate > latestEffectiveDate && compensation.employee && compensation.employee.id === employeeId) {
}
```

system compares with logical AND whether the effective date extracted from current employment and compensation record is greater then initial value of effective date AND employee is assigned to the compensation record AND the current employment and compensation record is equal to variable which holds the currently selected on variation of contract form employee. &#x20;

In the case condition is met (we want to take salary from the latest employment and compensation record with the greatest effective day from the records related with certain employee), then system updates the payRate variable with the value extracted from the record and updates variable latestEffectiveDate for next iteration:

```javascript
 payRate= compensation.payRate;
 latestEffectiveDate = compensation.effectiveDate;
```

After the iterations are finished system returns the final value of the current salary:

```javascript
return payRate;
```



Please see other examples with 'array processing' in: [Multi select type](attribute-default-value-expression#multi-select-type "mention")&#x20;
