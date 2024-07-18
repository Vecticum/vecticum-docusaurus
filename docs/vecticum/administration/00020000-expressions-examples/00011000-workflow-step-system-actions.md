---
description: >-
  On this page  there is description of the example setup for system actions
  which can be triggered by executing workflow system step.
---

# Workflow Step System - Actions

The examples are split by action type. You can navigate by type on the right panel -> , in the section 'ON THIS PAGE'. By selecting appropriate action type you will jump into conditional expressions examples. &#x20;

## Add file from template

<figure>![](/assets/image_(84).png)</figure>

To attribute with fileid key system adds the physical file extracted from 'Test MK Template'. It was defined as 'File Template' (while crating the template). In the content of the attached docx file there were defined expression as standard text in the following manner:

&#x20;&#x20;

<figure>![](/assets/image_(75).png)</figure>

nominatedId is select type key which appoints to the person. After adding from template, the content is synchronized and is presented as the following:

<figure>![](/assets/image_(254).png)</figure>

Please find more information in: [Add file from template](../workflows/workflow-steps#add-file-from-template "mention")

## Create

Creates automatically any system object of the provided object type and class. By delivering in 'Value expression' collection you can setup the value of attributes of created object. Example of the definition:

<figure>![](/assets/image_(340).png)</figure>

```javascript
return {
name: 'example name', 
textArea: '${name}'
}
```

As it is provided in above example - into textArea key on the new object is delivered the text value from name key from the document on which workflow is executed.

Please find more information in: [Create](../workflows/workflow-steps#create "mention")

## Convert to PDF

Converts the file attachment of picture type (\*.jpg) into the file attachment in \*.pdf format. Original file is deleted and the newly created pdf file is placed instead. The convertion is performed for attribute which is appointed in _actionKeys_ property of the step:

<figure>![](/assets/image_(216).png)</figure>

In the above example: in attribute of file type of control, indentyfied by _fileId_ key, placed on the form of the document over which workflow is running, system replaced the \*.jpg file with \*.pdf file with the same name:

&#x20;

<figure>![](/assets/image_(339).png)</figure>

Please find more information in: [Convert to pdf](../workflows/workflow-steps#convert-to-pdf "mention")

## Delay

This type of the action is used to put on hold (wait) with workflow process execution. When system goes to this type of the step it becomes active immediately; but it gets completed automatically depending on additional setup. The interval can be defined in days in _Duration_ property (from the moment it is executed - becoming active) or should be calculated in _Duration expression_.&#x20;

<figure>![](/assets/image_(231).png)</figure>

When appointed by interval or calculated in duration expression moment comes, it is automatically completed. Let's consider a few examples:

When Duration=0 then system completes the task in the first moment of occurrence of automatic processor run (in below example 11 minutes after it was activated):

<figure>![](/assets/image_(298).png)</figure>

When Duration=0,5 then system completes the task in the first moment of occurrence of automatic processor run (in below example 1 hour after it was activated):

<figure>![](/assets/image_(124).png)</figure>

When Duration=1 then, then  system completes the task in 23-24 hours (=1 day):

<figure>![](/assets/image_(338).png)</figure>

[Delay](../workflows/workflow-steps#delay "mention")

## E-signing



[E-signing](../workflows/workflow-steps#e-signing "mention")

## Join to PDF

Joins the content of the \*.pdf physical files uploaded to the attribute of Files type of control and saves it as the content of single existing \*.pdf file (in fact attaches to one of already existing files).  Other files from which content was extracted, are deleted. As the result in the attribute of Files type of control there is placed single \*.pdf file which contains joined content of itself and contents of the other pdf files which originally existed before executing this step.  &#x20;

Example of the definition:

<figure>![](/assets/image_(271).png)</figure>

_fileIds_ - is the key for Files type of the control attribute 'Attachments'; before executing of the step 'Attachments' contained 2 pdf files , each with 1 page content:

<figure>![](/assets/image_(286).png)</figure>

After executing the step, to the content of file 1, there is added content of file 2 and file 2 is deleted:

<figure>![](/assets/image_(93).png)</figure>

[Join-to-pdf](../workflows/workflow-steps#join-to-pdf "mention")

## Match items

This functionality is used typically to map the captured purchase invoice items in invoice lines from the vendor codes to internal vecticum items'  codes.&#x20;

The example definition of the step:

&#x20;

<figure>![](/assets/image_(270).png)</figure>

&#x20; _childrenKey: 'costAllocations'_ - appoints to the lines of the purchase invoice. _costAllocations_ is the key for the Children type attribute in where the lines of the purchase invoices are stored. This attribute is typically placed on 'Purchase Invoice (By Items)' vecticum system form, which is used for the class 'Items Purchase Invoice' of the 'Invoice' object type.

_matchFromKeys: 'ocrItemNo,ocrName'_ - this is the definition of the keys of attributes on cost allocation line form ('Purchase Invoice Item' form assigned to the class 'Purchase Invoice Item' of object type 'Purchase Invoice Costs Allocation' - for these object type and class is orientated described above childrenKey). In this example the marked up in red attributes are appointed (this is item line of invoice):

<figure>![](/assets/image_(161).png)</figure>

By default system will place the result of the mapping in orange marked above attribute - select to item card.

It is possible to appoint other then default destination attribute for establishing the result of matching in the following way; with the use of below code, instead of _itemId_ you should appoint other lookup key which appoints to items:

```
return { 
childrenKey: 'costAllocations',
matchFromKeys: 'ocrItemNo,ocrName',
mappedKeys: 'itemId' 
}
```

When system executes the step, then in addition to the keys _matchFromKeys: 'ocrItemNo,ocrName'_  it always uses the vendor (placed on lines the same manner (propagated from header) as for invoice header) attribute (hardcoded) for mapping.

The mapping (matching items and assigning) is performed from invoice lines, though intermediate register of id ='UDPVVnIXZwQbxzyZRC20'; you should call it through:

[https://app.vecticum.com/administration/view/UDPVVnIXZwQbxzyZRC20](https://app.vecticum.com/administration/view/UDPVVnIXZwQbxzyZRC20)&#x20;

<figure>![](/assets/image_(163).png)</figure>

Example entry:

<figure>![](/assets/image_(326).png)</figure>

As the result of mapping - matching through the above table system system sets up on invoice cost allocation line the lookup attribute connection to the item (in orange):

<figure>![](/assets/image_(362).png)</figure>

Please read related system action 'Save matching items' in below in this paragraph.

Please find more information in: [Match items](../workflows/workflow-steps#match-items "mention")

## Propagate read access to related objects



[Propagate read access to related documents](../workflows/workflow-steps#propagate-read-access-to-related-documents "mention")

## Recalculate document expressions

This action is typically used in the case when the document is not created / updated manually but by system action.  For example  the values of other keys (from which depend values of other attributes by setup of their expressions) are changed by actions performed in workflow system steps. Another example can be creation of the document by api.&#x20;



[Recalculate document expressions](../workflows/workflow-steps#recalculate-document-expressions "mention")

## Recalculate workflow

<figure>![](/assets/image_(352).png)</figure>

Please find more information in: [Recalculate workflow](../workflows/workflow-steps#recalculate-workflow "mention")

## Register

Performs the registration of the document:

<figure>![](/assets/image_(274).png)</figure>

More information on the registration process: [Registers](../object-types#registers "mention")

## Rename file

Changes the name of the file. Extension is not changed. Change of the name is setup in property 'Value expression'. You can use standard calculation from the value of the attributes (keys) appearing on the form; which means that you can include in the destination name of the file information that you specify in attributes.

The basic example is:

&#x20;

<figure>![](/assets/image_(337).png)</figure>

Before executing the step:

<figure>![](/assets/image_(349).png)</figure>

After executing the step, system changes the name of the file, taking the name as the value of name key::

<figure>![](/assets/image_(344).png)</figure>

[Rename file](../workflows/workflow-steps#rename-file "mention")

## Save matched items

This functionality is related with 'Match items' system action describe above in this paragraph.

In the case not all the items have automatically been matched successfully by system as the result of execution of 'Match items' system step in workflow, user manually performs matching (picking item in lookup attribute) of the items in cost allocation invoice lines. In order to reuse this mapping for any future auto matching, these performed manually matches can be automatically transferred into mapping table:

[https://app.vecticum.com/administration/view/UDPVVnIXZwQbxzyZRC20](https://app.vecticum.com/administration/view/UDPVVnIXZwQbxzyZRC20)

by executing system step of 'Save matching items' action:

<figure>![](/assets/image_(332).png)</figure>

Typically this system step is added at the end of purchase invoice processing with items workflow, after the auto matching step (of action 'Match items').

Related section: [Save matched items](../workflows/workflow-steps#save-matched-items "mention")

## Set field value

The below examples are split by the control type of the attribute which value is set within this system step.&#x20;

### Date

#### Set Financial Approval Date as current date

For 'Action keys' is appointed the key for Date type attribute.

Value expression:

```javascript
var date = new Date();

if (!date || !date.getFullYear) {
   return '';
}

var month = '' + (date.getMonth() +1 );
var day = '' + date.getDate();
var year = date.getFullYear();

if (month.length < 2) {
  month = '0' + month;
}
if (day.length < 2) {
  day = '0' + day;
}

return [year, month, day].join('-');
```
:::info 
Please note that date.getMonth() returns the value of the calendar month starting from 0 that is why additional incrementation by 1 is applied.&#x20;
:::

:::info 
If you would like to display more precise information in addition, it is recommended to deploy Computed / Text type attribute `and Read Only option` and set it's value in workflow with:

`var date = new Date();`

`if (!date || !date.getFullYear) { return ''; }`

`var month = '' + (date.getMonth() +1); var day = '' + date.getDate(); var year = date.getFullYear(); var hour = '' + (date.getHours()+3); var minutes = '' +date.getMinutes(); var seconds = '' +date.getSeconds();`

`if (month.length < 2) { month = '0' + month; }`&#x20;

`if (day.length < 2) { day = '0' + day; }`&#x20;

`if (hour.length < 2) { hour = '0' + hour; }`&#x20;

`if (minutes.length < 2) { minutes = '0' + minutes; }`&#x20;

`if (seconds.length < 2) { seconds = '0' + seconds; }`&#x20;

`var fullDate = [year, month, day].join('-');`&#x20;

`var fullHour = [hour, minutes, seconds].join(':');`

`return [fullDate, fullHour].join(' ');`
:::

#### Set Financial Approval Date to null

For 'Action keys' is appointed the key for Date type attribute.

Value expression:

```javascript
return null;
```

### Select

#### Set the Select type attribute  (placed on Candidate form) which appoints to Candidate with the value of the same candidate

Workflow is running over candidate.

```javascript
return {"id":"${id}", "name":"${name}", "objectTypeId":"wTSKselJ4tBuYXbWf9ME", "classId":"AgzCGaqM4BV0pe7rq475"};
```

It is delivered as technical prerequisite in the scenario we would like to propagate the values from related with candidate recruitment to the candidate. In such scenario we are creating first relation view type of attribute on recruitment form which will list the related candidate. In order to create such relation view attribute you have to appoint Select type attribute in which candidate is appointed. In order to do so, we are crating such Select type attribute on candidate form (which appoints to candidate), running the workflow on candidate creation and filling the Select attribute in workflow system step with the own candidate value (with the introduced above expression). When such relation view attribute is successfully created on recruitment form, you have to define in advanced parameters of recruitment class how to propagate the values of the attributes from recruitment form to candidate form with the use of described above relation view attribute on recruitment form which sows related candidate. The setup of recruitment class parameters is exposed in **Example 2**, under: [Class advanced parameters](../object-types#class-advanced-parameters "mention")

### Property definition

Link to the property definition description: [Set field value](../workflows/workflow-steps#set-field-value "mention")

## Set substitution status to canceled

This action is efficient in result, only if run for leave request cancelation. On Leave request form (available in Absences -> Leaves) there is 'Cancelation' tab from which you can create  Cancel Leave Request for the certain Leave request.  When leave cancelation is finalized in the process, then the system step with this action should be called to cancel all substitutions (object type: Substitutions, class: Substitution by document) on main document - leave request.&#x20;

The example of usage:

There is created and approved leave request:

<figure>![](/assets/image_(109).png)</figure>

From 'Cancelation' tab on leave request form is created new cancelation document:

<figure>![](/assets/image_(179).png)</figure>

In the workflow run over cancelation leave request, after it's approval (this step was skipped in below example):

<figure>![](/assets/image_(63).png)</figure>

system runs step 55:

<figure>![](/assets/image_(228).png)</figure>

Before executing the step, the related Substitution to document looked like (Approved status):

<figure>![](/assets/image_(92).png)</figure>

After executing this step, related Substitution by document is changed to Cancelled:

&#x20;

<figure>![](/assets/image_(110).png)</figure>

Please find the related description in User Guide part: [substitutions](../../user-guide/absences/substitutions "mention")

[Set substitution status to cancelled](../workflows/workflow-steps#set-substitution-status-to-cancelled "mention")

## Send email

#### Notification to participants on the scheduled meeting

Example is taken from workflow for task in recrutiment module.

Value expression:

```javascript
{
  to: '${emailsOfInterviewers}', 
  from: 'hello@mail.vecticum.com', 
  bcc: '${departmentManagerEmail}',
  subject: 'recruitment interview meeting invitation',
  body: 'Hello, \r\n' + 'You are invited to recruitment interview meeting, regarding related candidate: ${candidateId.fullName} \n\r',
  attachmentKeys: ''
}
```

emailsOfInterviewers - is Text type attribute which holds the extraction of the emails of patricipants, separated by semicolons; it's Expression is:

```javascript
let emails=${membersOfInterview}
if (emails===null){return ''}
emails=emails.filter(x=>x.email).map(x=>x.email) 
let correctEmails=''; 
for (let index=0;index<emails.length;index++){ 
    correctEmails+=emails[index]+';' 
} 
return correctEmails
```

membersOfInterview is key for Multi-select for Persons

from - after that parameter is defined label for sender (static string in our example),

after bcc is appearing the key departmentManagerEmail which is Text type attribute with expression : $\{departmentManagerId.email} . It extracts email from appointed in lookup department manager.

after subject parameter is presented the email message subject as static string

body - defines email message content. Inside of it system extracts the fullName attribute from candidate card appointed by Select type attribute with key candidateId.

#### Definition of property

Link to the property definition description: [Send email](../workflows/workflow-steps#send-email "mention")

## Split files as separate documents

There are 2 scenarios of working depending on whether appointed key will be (exactly): files of files control type.&#x20;

Scenario 1:

Appointed for the step key is: files (of files control type). Then:

Creates the copy of the root document as many times as placed in appointed in files key physical attachments; but each created new document has single, different from each attachment attached and the facet is updated with the counter like: i.e. 1/3, 2/3, 3/3.

Example:

Root document:

<figure>![](/assets/image_(71).png)</figure>

Definition of the system step is:

<figure>![](/assets/image_(306).png)</figure>

After executing the steps, such new documents are created:

<figure>![](/assets/image_(345).png)</figure>

and:

<figure>![](/assets/image_(184).png)</figure>



Scenario 2:

Appointed for the step key is DIFFERENT THAN: files (of files control type). Then:

Creates the full copy of the document as many times as placed in appointed in step definition key, physical attachments.

Example of the definition:

<figure>![](/assets/image_(359).png)</figure>

From 1 document with 2 physical files placed in attribute 'fileIds' of Files type of control, system creates 2 new files, each containing the same 2 physical files in fileIds. After executing the step there are 3 vecticum documents with the same metadata and attachments set.

[Split files and separate documents](../workflows/workflow-steps#split-files-and-separate-documents "mention")

## Split rows by default template

It is used for cost allocation lines in invoice processing. It splits the total value of the invoice by creating and adding the new lines after this action is executed. If there were added lines already before executing the step, original lines remains in place in allocation lines without changes. The split is performed by checking the default vendor template assigned to the vendor which is assigned to the invoice. System adds the template lines (this is children type of control) to the invoice. It creates new cost allocation lines with the full metadata set as defined in line of the template. The only exception is line amount - in newly created line it is equal to original amount of the invoice multiplied by 'Percents'/100. 'Perecents' is the percentage part of the split of original amount - it is setup for every line in template. Typically in vendor template, for each considered item, there are appearing a few rows which 'Perecents' sum equal to 100.  Let's go through the example:

There is defined test template in the following way:

<figure>![](/assets/image_(62).png)</figure>

For 'New counterparty' vendor, the same item is added twice with different dimensions assignment in metadata, but different 'Percentage' (the same as on form 'Percents').

For this vendor the above template is assigned as default:



<figure>![](/assets/image_(86).png)</figure>

For created purchase invoice for the same vendor, in cost allocation lines can be present or not the lines. In this case there is already one (however system will always add the new lines from template, no matter if the item exists or no already in the invoice):

<figure>![](/assets/image_(156).png)</figure>

After executing the workflow step with described action, 2 new lines are created according to the matching template (by default template of the same vendor; recognition of the key which identifies of the matching as well definition of the key for default template is part of the configurable setup and is described in [template functionality parameters](../template-functionality-parameters "mention")). This is the only matching. System is not checking existing already items:

&#x20;&#x20;

<figure>![](/assets/image_(252).png)</figure>

Lines in red have been added. Dimensions (Divisio, Center, ...) are taken from template line. Total amount for added line is taken like percentage (defined in line of the template) part of the original amount of the invoice. Already existing lines are not changed in any way. Typical scenario is that no lines are added before execution of the step. In fact system splits to rows original value of the invoice but do not split the rows.

[Split rows by default template](../workflows/workflow-steps#split-rows-by-default-template "mention")

For the detailed description of the parameters pleaese check:

[Template functionality parameters](../template-functionality-parameters "mention")

## Stamp file

Provides the stamps to the content of the physical files in the appointed keys.

[Stamp file](../workflows/workflow-steps#stamp-file "mention")&#x20;

## Start process on related object

Starts the workflow for the related object/-s which are appointed by key's (defined by step setup) values. The example definition:

<figure>![](/assets/image_(335).png)</figure>

The started workflow is the default one assigned to the class of the document over which workflow is running.&#x20;

In the above example the step was designed in order to manipulate with erpId of the customer which is in fact erpId of contract created on ERP system side by exporting separately current contract document per each customer assigned in Children type of attribute, in the key customers.&#x20;

Another simpler example was deployed in the following way:

In custom Recruitment configuration on button click 'Complete this task and activate next' on recruitment task form, the workflow is initiated.&#x20;

<figure>![](/assets/image_(203).png)</figure>

Within this workflow current task changes the status to Completed and system activates the next task which is scheduled in order for execution and it's status is Pending. This task is technically delivered by 'Start process on related object'. Definition of the step:

&#x20;&#x20;

<figure>![](/assets/image_(80).png)</figure>

The key nextTaskPenM is the key for attribute of Select type: 'Next Pending**'.** This attribute is placed on the form of the current task and appoints to next pending task in order of processing. Within the workflow run over next task, it's status changes from Pending to Active and email message as notification is sent out to assigned responsible performer/-s.&#x20;

Summary: related object can be single or multiple.  In the executed workflow on related object you can deploy custom logic by conditional manipulating with the value of attribute (Set attribute value system steps). This type of step can trigger workflows execution and performing the changes on related objects.

See also in below chapter 'Stop parent process' for related example.

[Start process on related object](../workflows/workflow-steps#start-process-on-related-object "mention")

## Stop parent process

When this step is executed on the child (Children control type of the relation) object, then on it's parent object (typically document) it stops from the running, current active workflow. &#x20;

Does not work for lookup type attribute appointed related object. It works correctly for Children type of control; this is the meaning of the parent.&#x20;

The example of usage:

1\) on the main document is configured in workflow the step for starting workflow on related objects:

<figure>![](/assets/image_(214).png)</figure>

So after the FIRST TASK is completed manually, then the following Workflow Step System is executed:&#x20;

<figure>![](/assets/image_(67).png)</figure>

In 'Action keys' property is appointed attribute key: childsTest. On the main document form Children attribute with such key is placed:

<figure>![](/assets/image_(354).png)</figure>

&#x20;System starts for every child of the main document (member of the Children collection), their own workflow (assigned as default to their class).

After step 'Start wfl on related object' is completed, the workflow on the main document is starting the next manual step 'STEP2'.

The workflow executed for the child is setup in the following way that after completion of it's first manual step, is triggered 'Stop parent process' system action:

<figure>![](/assets/image_(319).png)</figure>

This is the example definition:

<figure>![](/assets/image_(144).png)</figure>

So after 'test manual step' is completed on 'Test Child Document', system automatically executes the workflow system step with system action 'Stop parent process'. As the result of the execution the workflow running on the parent document to the child (which had active 'STEP2') is stopped. This is the trace from the task log; active STEP2  has been stopped:

<figure>![](/assets/image_(190).png)</figure>

[Stop parent process](../workflows/workflow-steps#stop-parent-process "mention")

## Switch workflow

Stops the currently running workflow and starts the new one over the same document. The new one is appointed in setup of the setup. In the below example, after completiion of the 'FIRST TASK' in main workflow, system step with 'Switch workflow' action is executed:

<figure>![](/assets/image_(73).png)</figure>

This is the definition of this step:

<figure>![](/assets/image_(153).png)</figure>

In 'Value expression' property you have to identify which workflow has to be started after current is turned off.

```javascript
return {
    workflowId: {
        name: "WORKFLOW TEST MK",
        id: "VahJ8AekVHY92I3knGB7",
        objectTypeId: "_workflows",
        classId: "_workflows_class"
    },
    workflowInitiatorId: "departmentManagerId"
}
```



Current one workflow is stopped and the new one is started. According to the setup, as you can see in above log, the first task from the new workflow is assigned 'A. TASK IN CHANGED WORKFLOW'. After all the tasks in new workflow are completed (another following one task: 'B. TASK IN CHANGED WORKFLOW') then system does not return to previous workflow. There is no active workflow:

<figure>![](/assets/image_(148).png)</figure>

Please note that by the appropriate  setup you will be able to configure returning to the main  workflow, exactly to the same place where from you switched to another workflow. You can do it in the following way:&#x20;

1. In the main workflow tasks in orange:

<figure>![](/assets/image_(159).png)</figure>

&#x20;have condition expression:

```javascript
'${hasTheWorkflowBeenSwitched}' != '1'
```

hasTheWorkflowBeenSwitched is technical Number attribute which identifies siwtching from main to other workflow.

So in the beginning orange steps are executed as hasTheWorkflowBeenSwitched is empty or by default value can be set to 0. After them workflow is switched and violet tasks, from new workflow, are queued:

<figure>![](/assets/image_(85).png)</figure>

After manual completion of tasks A. and B. systems sets technical flag of the key hasTheWorkflowBeenSwitched to 1. After that in the second workflow appears the step of switching workflow from 2nd to back - to the same one workflow from which we started. The definition of the step:

<figure>![](/assets/image_(162).png)</figure>

So after returning back to execution of the main worfkflow again, system starts it's execution from beginning, but this time omits 2 first steps because they have condition expression on hasTheWorkflowBeenSwitched (that is why we previously was setting up the value for this attribute to 1). So the log after returning back to the main workflow looks like the following:

<figure>![](/assets/image_(158).png)</figure>

First 2 steps (in blue) in main workflow were skipped, so 1st effectively active step in main workflow after return is 'STEP2' , which is the following one in order after we returned back exactly to the same place where from we switched the workflow for the first time. After completion of STEP2, there is another system step which assigns value of the key hasTheWorkflowBeenSwitched back to 0, in order not omit 2 first steps in the case main workflow will be once again started after it finishes current run .

[Switch workflow](../workflows/workflow-steps#switch-workflow "mention")

## Update related objects

On every related object from Children type of attribute appointed in definition of the step, system performs the update of the single attribute (key) appointed in the value expression with the value of the same key, placed on the main document form.&#x20;

It is possible to define of the single key to be changed per step. That is why you have to define a few steps of described type, each step per key. In the following example we have workflow containing 3 steps of 'Update related objects' action:

<figure>![](/assets/image_(272).png)</figure>

Definition of the steps is analogical (dfferying with changed key in value expression, but in all steps  the same children attribute is appointed in Action keys:

<figure>![](/assets/image_(257).png)</figure>

<figure>![](/assets/image_(183).png)</figure>

<figure>![](/assets/image_(246).png)</figure>

Before executing the workflow the main document with Children type of attribute (name: Children, key: childsTest) have the following values (the  attributes: Valid, Status, Other Text - are existing on the main form as well on the children form  - are represented by the same keys which were  appointed in Value expressions of above examples definition of the steps):

<figure>![](/assets/image_(260).png)</figure>

After execution of the workflow containing  above system steps, the values of the attributes for each child were changed in the following way from the same attribute value on the main document:

&#x20; &#x20;

<figure>![](/assets/image_(259).png)</figure>

Colored action appoint the direction of the value propagation (from main to children) as well the order of the change in workflow.

Another example is of usage of this action is to update the status of all related Substitutions by document, related with leave request:

<figure>![](/assets/image_(305).png)</figure>



[Update related objects](../workflows/workflow-steps#update-related-objects "mention")
