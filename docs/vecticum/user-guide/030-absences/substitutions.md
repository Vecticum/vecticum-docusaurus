---
description: How it works and how to setup
---

# Substitutions
How it works and how to setup
### Substitution variable types

Substitution document consists of these variables:

* **Employee (required)** - person who will be absence
* **Substitution person (required)** - person who will substitute employee
* **Date from (required)** - date since when employee will be out of office
* **Date to (required)** - date until when employee will be out of office
* **Reason** _(optional)_ - reason
* **Related document (required for substitution by document type)** - lookup to leave, business trip, training document

### So how it works?&#x20;

When substitution document is created it receives **"Approved"** status.&#x20;

![](</assets/image_(321).png>)

Once the "Date from" equals to present or already past date (document was created with the past "Date From' date) system trigger will run and set "Out off Office" as true and "Substitution" as "Substitution person"

![](</assets/image_(128).png>)

When "Date to" passed system will automatically trigger changes, substitution status will be changed to **"Archived"**, 'Out of office' set to false, 'Substitution' removed.

## Substitutions types

### Manual substitution

&#x20;Manual substitution can be set through personal information card, to enable manual substitutions company settings requires to have "Enable substitutions?" ticked. Here is where you can find it:

![](</assets/image_(241).png>)

Once the tick is in place and user will go to personal information card, will click on "Out of Office" button, manual substitution popup should appear.

![](</assets/image_(234).png>)

When all the required fields are filled and user clicks save substitution document will be created.

### Substitution by document

#### How to create substitution by document?

Substitution by document can be created for different absences, for example: leaves, business trips, trainings, etc. To make substitutions work consultants needs to set it up in the **Workflow Step System** for each document and use **Create** action.&#x20;

Example of how value expression code should look like:

```
const employee = ${employee};
const substitutePerson = '${substitutePerson}' ? JSON.parse('${substitutePerson}') : '';
const datesRange = ${datesRange};
const reason = '${leaveType}';
// const registrationNumber



const documentToCreate = {};
documentToCreate['employee'] = employee;
documentToCreate['substitutePerson'] = substitutePerson;
documentToCreate['dateFrom'] = datesRange[0];
documentToCreate['dateTo'] = datesRange[1];
documentToCreate['relatedDocument'] = {
id: '${id}',
name: '${_facet}',
objectTypeId: '${id_objectTypeId.id}',
classId: '${id_classId.id}'
}

return documentToCreate;
```

Example of filled **Workflow Step System:**

![](</assets/image_(239).png>)

#### How to cancel substitution by document?

When absence needs to be canceled it should be managed through cancelation document **Workflow Step System** step with '**Set substitution status to canceled**' action

Example of how it should look like:

![](</assets/image_(237).png>)
