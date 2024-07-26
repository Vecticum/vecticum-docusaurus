---
description: >-
  This is old section. The updated section is under creation and constant update
  in:
---

# Processes

You can find relevant workflow step expressions examples in:

[workflow step expression conditions duration](expressions-examples/workflow-step-expression-conditions-duration "mention")

and in:

[workflow step system actions](expressions-examples/workflow-step-system-actions "mention")

## How to write a Conditional Expression?

Set a conditional step depending in the status of the Object.&#x20;

```javascript
var status='${status.id}';
return status==='5W4yldg4vR3XcAZy5L18';
```

Usually used while setting a loop step for rejected tasks.

### Condition to skip the task if employee is a manager of the department.

```javascript
const employee = '${employee.id}';
const managerId = '${employee.departmentId.managerId}';
return !managerId.includes(employee);
```

### Condition to skip the task if (author or his direct manager) is a manager of the department of the author.

```javascript
const author = '${author.id}';
const lineManagerId = '${author.managerId.id}';
const managerId = '${author.departmentId.managerId}';
return !managerId.includes(author) && !managerId.includes(lineManagerId);
```

## Skip step by checking value in multiselect attribute

```javascript
const accountants = '${workflowScheme.invoiceAccountants}';
const authorId = '${author.id}';

return !accountants.includes(authorId);

```
