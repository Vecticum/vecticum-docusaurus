---
description: >-
  This page contains the example of usage 'Conditions expression' and 'Duration
  expression' of workflow step'. Inside the sections it is split by certain
  business cases.
---

# Workflow Step - Expression: Conditions, Duration

## Conditions expressions

### Execute only on Rejected status

```javascript
var statusId='${status.id}';
return statusId==='5W4yldg4vR3XcAZy5L18';
```

_status_ is a key for Select type attribute orientated for 'Lookup to object type'=Status. It will also work without exposing the attribute on the form as status is system attribute key.

'5W4yldg4vR3XcAZy5L18' is the text value for Id of Rejected status.&#x20;

The step with the  defined above Condition expression will be TRIGGERED (EXECUTED) only in the case, the document status will be set as Rejected. Otherwise such step will be skipped while processing.&#x20;

So typically such conditions will appear only for the steps which have to be executed in alternative return processing path of workflow, in the case the document has been rejected previously.&#x20;

### Execute on 1 of a few statuses&#x20;

This is the extension variant of the previous example. Additional 2 statuses are taken into the account: Pending ('SqqdcjE6DrQkeLpHIIbm') and Refused ('30LQPgRAPWUMgQd1ZyWq'). In Conditional expression they are connected with logical OR operator || and the whole returned phrase is taken in rounded brackets:

```javascript
var statusId='${status.id}';
return (statusId==='5W4yldg4vR3XcAZy5L18' || statusId==='SqqdcjE6DrQkeLpHIIbm' || statusId==='30LQPgRAPWUMgQd1ZyWq');
```

:::info
It can happen that some statuses values are duplicated. Please check the appropriate id of the status value to be included into the expression. In order to do this, you have to navigate into Administration -> Statuses, open the status card and extract it's id from the url:
:::


<figure>![](/assets/image_(327).png)></figure>

### Skip on Rejected status

```javascript
var statusId='${status.id}';
return statusId!=='5W4yldg4vR3XcAZy5L18';
```

_status_ is a key for Select type attribute orientated for 'Lookup to object type'=Status. It will also work without exposing the attribute on the form as status is system attribute key.

'5W4yldg4vR3XcAZy5L18' is the text value for Id of Rejected status.&#x20;

The step with the  defined above Condition expression will be SKIPPED only in the case, the document status will be set as Rejected. Otherwise such step will be triggered (executed) while processing.&#x20;

So typically such conditions will appear only for the steps which have to be executed in MAIN processing path of workflow, but should be omitted in every recurring loop of workflow after the document is Rejected.

### Skip on 1 of a few statuses&#x20;

This is the extension variant of the previous example. Additional 2 statuses are taken into the account: Pending ('SqqdcjE6DrQkeLpHIIbm') and Refused ('30LQPgRAPWUMgQd1ZyWq'). In Conditional expression they are connected with logical AND operator && and the whole returned phrase is taken in rounded brackets:

```javascript
var statusId='${status.id}';
return (statusId!=='5W4yldg4vR3XcAZy5L18' && statusId!=='SqqdcjE6DrQkeLpHIIbm' && statusId!=='30LQPgRAPWUMgQd1ZyWq');
```

:::info 
It can happen that some statuses values are duplicated. Please check the appropriate id of the status value to be included into the expression. In order to do this, you have to navigate into Administration -> Statuses, open the status card and extract it's id from the url:
:::


<figure>![](/assets/image_(81).png)></figure>

### Skip if employee (Select) is manager of her/his department

```javascript
const employeeIdConst = '${employeeId.id}';
const managerIdConst = '${employeeId.departmentId.managerId}';
return !managerIdConst.includes(employeeIdConst);
```

_employeeId_ is a key for Select type attribute which appoints to Object type=Person, Class=Employee

_departmentId_ is a key of Department attribute (of Typehead type, for Department lookup), which is placed on Employee form

_managerId_ is a key for Manager attribute, which is placed on department form.

:::info 
In order to get to the department definition, you have to navigate into: Administration -> Company Name -> Departments -> Open department form
:::

:::info 
The second sublevel relation: _'$\{employeeId.departmentId.managerId}'_ is allowed only in the Conditions Expressions in workflow. It will be not allowed in expressions of the attributes on the form. There is limitation up to 1 sublevel. In such case, on the form consultant is supposed to create separate attribute which appoint to the department, then use that attribute to extract managerId.
:::

### Skip if (employee or his direct manager) is a manager of the employee department

<mark>IN VERIFICATION</mark>

```javascript
const employeeIdConst = '${employeeId.id}';
const lineManagerId = '${employeeId.managerId.id}';
const managerId = '${employeeId.departmentId.managerId}';
return !managerId.includes(employeeIdConst) && !managerId.includes(lineManagerId);
```

### Skip if person (Select) is included in multi-select

```javascript
//const multiPersons = '${workflowScheme.invoiceAccountants}';
const multiPersons = '${multiPer}';
const employeeIdConst = '${employeeId.id}';
return !multiPersons.includes(employeeIdConst);
```

_employeeId_ is a key for Select type attribute which appoints to Object type=Person, Class=Employee

_multiPer_ is a key for Multi-select type attribute which appoints to Object type=Person, Class=Employee

## Duration expression
