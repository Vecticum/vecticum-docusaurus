---
description: >-
  In class definition, in 'Toolbar' tab, there is possibility to define buttons,
  which are displayed in tollbar for the documents of the defined class. In this
  page there is description of the 'Params'.
---

# Toolbar Buttons - Params

The syntax 'Params' is different for specific functions. In this page the content consists of the examples of 'Params'. It is split by the functions defined to the button. &#x20;

## changeClass

Reclasififes document to another class of provided id. Example:

<figure>![](/assets/image.png)<figcaption></figcaption></figure>

<figure>![](/assets/image_(1).png)<figcaption></figcaption></figure>

```javascript
{
  classId:"HAB99h2lKFrWmesjkRkj"
}
```

Please notice that after button click, you have to confimr with 'Yes' appearing dialog:

&#x20;

<figure>![](/assets/image_(2).png)<figcaption></figcaption></figure>

But it is not enough just to Save or Save and Close in the terms you would like to change security according to newly assigned class. In order to trigger new security, you have to perform any change to document attribute and save (only after that new security will be successfully applied):

<figure>![](/assets/image_(3).png)<figcaption></figcaption></figure>

It is important in the case destination (newly assigned class) have different security setup than so far used.

## create

<figure>![](/assets/image_(111).png)<figcaption></figcaption></figure>

```javascript
return {
  autosave: true,
  companyId: "${destComp.id}", 
  objectTypeId: "person",
  classId: "gwZ83NWTFFPMuw2Ii1em",
  copyValues: "candidateName=>firstName, candidateFamily=>surname, candidatePhone=>mobilePhone, candidateEmail=>personalEmail, jobTitleId=>jobTitle, departmentId=>departmentId, candidateEmail=>__subobject:yZbn41nFKMWXUP6t3Sp1:candidateEmail,candidateId=>candidateId,hireDate=>hireDate,description=>__subobject:yZbn41nFKMWXUP6t3Sp1:description,addressStreet1=>__subobject:yZbn41nFKMWXUP6t3Sp1:addressStreet1,city=>__subobject:yZbn41nFKMWXUP6t3Sp1:city,province=>__subobject:yZbn41nFKMWXUP6t3Sp1:province,postalCode=>__subobject:yZbn41nFKMWXUP6t3Sp1:postalCode,country=>__subobject:yZbn41nFKMWXUP6t3Sp1:country",
  value: {
    groups: [{
      id: "CPegmt6KOwtAJ8ERRlLq",
      name: "Employee",
      objectTypeId: "groups",
      classId: "group_class"
    }]
  },
  updateAfterCreate: {
    status: {
      id: "Q2TRibhB6uyeC8Plw0rG",
      name: "Hired & Employed",
      objectTypeId: "_statuses",
      classId: "_statuses_class"
    }
  }
}
```

This is the example of the use of create function. In this above example, the button is placed on the recruitment form.  Recruitment is related with candidate by lookup relation. This example is part of the custom solution for custom recruitment management solution. After button click, from candidate, related with recruitment, new employee in different company (appointed by Lookup attribute (key = destComp) of recruitment form ) is created. Additionally the status of recruitment is changed after action for 'Hired & Employed' (this is different part of the setup, but providing additional comment: status is synchronised from recruitment to related candidate by the definition of Advanced Parameters in recruitment class:  with the use of copyValues: and update action). So by that method, status on the candidate will be changed the same manner as the status on recruitment.&#x20;

Additionally within this transfer, all candidate's related candidates Certificates & Id's are copied as employee ID's and Certificates to destination company. The root documents are remaining at place but their status changes. In order to achieve such scenario in destination vecticum company, class definition of employee, Advanced tab, there are defined Parameters:

<figure>![](/assets/image_(171).png)<figcaption></figcaption></figure>

```javascript
const candidateId = "${candidateId.id}";
if (!candidateId || candidateId === "null") {
  return {};
}

return {
  copyAndUpdateOnCreate: {
    sourceCompanyId: "SHOULBEPUTINHEREREALVALUEOFID",
    copyValues: [{
        objectTypeId: "m7U8wbZTLIuNKdVS0zJM",  // Certificates & Id's,
        toClassId: "YYfCt8Fooq5vYRu2CPJn", // ID & Certificate
        filters: [{
          key: "employeeCv.id",
          value: candidateId,
        }],
        keys: [{
            fromKey: "__self",
            toKey: "employeeId"
        },{
            fromKey: "__self",
            toKey: "employee"
        },{
            value: null,
            toKey: "employeeCv"
        }],
       sourceUpdateAfterCopy: {
         status: {
           id: "lPqlVxMhSuSYBuCgAdiA",
           name: "Archived",
           objectTypeId: "_statuses",
           classId: "_statuses_class"
         }
       }
      }]
  }
}
```

Related with root candidate IDs and certificates are copied (different class than in root candidates docs). They are related with created employee by value of "\_\_self" key. Status of root documents is changed to Archived after copying them.&#x20;



## importFromAttachedFile

In preparation 2024-01-22

From attached Microsoft Excel physical file of \*.xlsx format, placed in _files_ key on the form, performs the import of data to current document, from which the action is triggered. During the import basically 2 types of the actions can be performed:

* &#x20; the update of the values of attributes of simple types, placed on the current document; responsible setup for this is:&#x20;
  * "isSingleValuesImport": true,  &#x20;
  * "updateDocumentId": "$\{id}".
* creating rows in children type attribute placed on the main document form; responsible setup for this is:
  * &#x20; "isRowsImport": true,
  * "parentId": "$\{id}",

Please notice that in single button's params defintion, there can co-exist these above different kinds of imports.

In below example we have 3 instances of import: 2 for update of the main document attributes of simple types (header and footer) as well import of rows for children attribute,

&#x20;&#x20;

```javascript
{
    "imports": [
        {
            "updateDocumentId": "${id}",
            "objectTypeId": "yJhaSrHvVfElm497T5ci",
            "classId": "K5K0s80VDLG7IrlKX3Lm",
            "isSingleValuesImport": true,
            "name": "Importing document header",
            "sectionStartLabel": "{HEADER_START}",
            "worksheetId": 8,
            "importMap": [
                {
                    "colNo": 7,
                    "key": "contractorName",
                    "sectionStartOffset": 1
                },
                {
                    "colNo": 7,
                    "key": "legalEntityCode",
                    "sectionStartOffset": 2
                },
                {
                    "colNo": 7,
                    "key": "vatCode",
                    "sectionStartOffset": 3
                },
                {
                    "colNo": 7,
                    "key": "settlementAccountNo",
                    "sectionStartOffset": 4
                },
                {
                    "colNo": 7,
                    "key": "addressOfRegisteredOffice",
                    "sectionStartOffset": 5
                },
                {
                    "colNo": 7,
                    "key": "addressForCorrespondence",
                    "sectionStartOffset": 6
                },
                {
                    "colNo": 7,
                    "key": "contractorEmail",
                    "sectionStartOffset": 7
                },
                {
                    "colNo": 7,
                    "key": "contractorRepresentative",
                    "sectionStartOffset": 8
                },
                {
                    "colNo": 7,
                    "key": "basisOfRepresentationOfRepresentative",
                    "sectionStartOffset": 9
                }
            ]
        },
        {
            "classId": "K5K0s80VDLG7IrlKX3Lm",
            "importMap": [
                {
                    "colNo": 7,
                    "key": "startOfWork",
                    "sectionStartOffset": 2
                },
                {
                    "colNo": 7,
                    "key": "finalDeadlineforWorksCompletion",
                    "sectionStartOffset": 3
                },
                {
                    "colNo": 7,
                    "key": "settlementTerm",
                    "sectionStartOffset": 4
                },
                {
                    "colNo": 7,
                    "key": "amountOfAdvanceInPercent",
                    "sectionStartOffset": 5
                },
                {
                    "colNo": 7,
                    "key": "adavnceSumImported",
                    "sectionStartOffset": 6
                },
                {
                    "colNo": 7,
                    "key": "amountOfAdvanceSecurity",
                    "sectionStartOffset": 7
                },
                {
                    "colNo": 7,
                    "key": "amountOfGuarantee",
                    "sectionStartOffset": 8
                },
                {
                    "colNo": 7,
                    "key": "meansOfEnsuring",
                    "sectionStartOffset": 9
                },
                {
                    "colNo": 7,
                    "key": "meansOfEnsuringDefectCorrection",
                    "sectionStartOffset": 10
                },
                {
                    "colNo": 7,
                    "key": "percentageOfWithholdingPayments",
                    "sectionStartOffset": 11
                },
                {
                    "colNo": 7,
                    "key": "partOfTheAmountOfWithheldPaymentsPercentage",
                    "sectionStartOffset": 12
                },
                {
                    "colNo": 7,
                    "key": "genrankFee",
                    "sectionStartOffset": 13
                },
                {
                    "colNo": 7,
                    "key": "otherTermsOfOffer",
                    "sectionStartOffset": 14
                }
            ],
            "isSingleValuesImport": true,
            "name": "Importing document footer",
            "objectTypeId": "yJhaSrHvVfElm497T5ci",
            "sectionStartLabel": "{FOOTER_START}",
            "updateDocumentId": "${id}",
            "worksheetId": 8
        },
        {
            "classId": "wA98WqblZrC3wXjV7yjh",
            "endRowLabel": "{ROWS_END}",
            "importMap": [
                {
                    "colNo": 1,
                    "key": "__lookupByKey:itemNo:itemId"
                },
                {
                    "colNo": 2,
                    "key": "itemNameFromVendorProposal"
                },
               {
                    "colNo": 3,
                    "key": "name"
                },
                {
                    "colNo": 4,
                    "key": "detaildDescription2"
                },
                {
                    "colNo": 5,
                    "key": "unitId"
                },
                {
                    "colNo": 6,
                    "key": "qty"
                },
                {
                    "colNo": 7,
                    "key": "priceNet"
                },
                {
                    "colNo": 8,
                    "key": "sum"
                }
            ],
            "isRowsImport": true,
            "name": "Importing purchase objects",
            "objectTypeId": "kf3iDB5deZvuGybCSnmS",
            "parentId": "${id}",
            "startRowNumber": 22,
            "worksheetId": 8
        }
    ]
}
```

The above example consists of 3 imports: header, footer and the row for children type of attribute. This is the example of button params definition:

<figure>![](/assets/image_(8).png)<figcaption></figcaption></figure>

In every case files key includes more \*.xlsx files or single, the dialog with question to appoint the file to be imported is displayed:

&#x20;

<figure>![](/assets/image_(6).png)<figcaption></figcaption></figure>

<figure>![](/assets/image_(7).png)<figcaption></figcaption></figure>

Description of the properties:

```javascript
// Description in comments remaining attributes

{
    "imports": [
        { // start of the first instance of import. Header update.
            "updateDocumentId": "${id}", // which document has to be updated. Self appointed.
            "objectTypeId": "yJhaSrHvVfElm497T5ci", // objectTypeId of the updated document. In this case is the same object type as object type of document from which action is trigerred. Because we are updating the header attributes of the same document.
            "classId": "K5K0s80VDLG7IrlKX3Lm", // classId of the updated document. In this case is the same class as class of document from which action is trigerred. Because we are updating the header attributes of the same document.
            "isSingleValuesImport": true, // in this instance of the import 
            "name": "Importing document header", // this is the status text displayed when system performs this instance of the import after execution the action by button click and confirmation of selection of physical file, 
            "sectionStartLabel": "{HEADER_START}", // When system finds this value in cell from A column in imported excel file, then it understands that the data to be imported in this import instance start from this place         "worksheetId": 8,
            "importMap": [ //start of the mapping section for the data to be imported. Please see the printsceen below this code 
                {
                    "colNo": 7, // it is appointing to column G as 7th from left in root excel file for the import. Please see the printsceen below this code 
                    "key": "contractorName", // which attribute will be updated in udpated document
                    "sectionStartOffset": 1 // 1 cell down from the row where "{HEADER_START}" is placed
                },
                {
                    "colNo": 7,
                    "key": "legalEntityCode",
                    "sectionStartOffset": 2
                },
                {
                    "colNo": 7,
                    "key": "vatCode",
                    "sectionStartOffset": 3
                },
                {
                    "colNo": 7,
                    "key": "settlementAccountNo",
                    "sectionStartOffset": 4
                },
                {
                    "colNo": 7,
                    "key": "addressOfRegisteredOffice",
                    "sectionStartOffset": 5
                },
                {
                    "colNo": 7,
                    "key": "addressForCorrespondence",
                    "sectionStartOffset": 6
                },
                {
                    "colNo": 7,
                    "key": "contractorEmail",
                    "sectionStartOffset": 7
                },
                {
                    "colNo": 7,
                    "key": "contractorRepresentative",
                    "sectionStartOffset": 8
                },
                {
                    "colNo": 7,
                    "key": "basisOfRepresentationOfRepresentative",
                    "sectionStartOffset": 9
                }
            ]
        }, // finish of the first instance of import. Header update.
        { // start of the second instance of import. In fact this is also header update - import of the issued document. But it is called footer import cause it takes from footer section of the root imported excel file. 
            "classId": "K5K0s80VDLG7IrlKX3Lm",
            "importMap": [
                {
                    "colNo": 7,
                    "key": "startOfWork",
                    "sectionStartOffset": 2
                },
                {
                    "colNo": 7,
                    "key": "finalDeadlineforWorksCompletion",
                    "sectionStartOffset": 3
                },
                {
                    "colNo": 7,
                    "key": "settlementTerm",
                    "sectionStartOffset": 4
                },
                {
                    "colNo": 7,
                    "key": "amountOfAdvanceInPercent",
                    "sectionStartOffset": 5
                },
                {
                    "colNo": 7,
                    "key": "adavnceSumImported",
                    "sectionStartOffset": 6
                },
                {
                    "colNo": 7,
                    "key": "amountOfAdvanceSecurity",
                    "sectionStartOffset": 7
                },
                {
                    "colNo": 7,
                    "key": "amountOfGuarantee",
                    "sectionStartOffset": 8
                },
                {
                    "colNo": 7,
                    "key": "meansOfEnsuring",
                    "sectionStartOffset": 9
                },
                {
                    "colNo": 7,
                    "key": "meansOfEnsuringDefectCorrection",
                    "sectionStartOffset": 10
                },
                {
                    "colNo": 7,
                    "key": "percentageOfWithholdingPayments",
                    "sectionStartOffset": 11
                },
                {
                    "colNo": 7,
                    "key": "partOfTheAmountOfWithheldPaymentsPercentage",
                    "sectionStartOffset": 12
                },
                {
                    "colNo": 7,
                    "key": "genrankFee",
                    "sectionStartOffset": 13
                },
                {
                    "colNo": 7,
                    "key": "otherTermsOfOffer",
                    "sectionStartOffset": 14
                }
            ],
            "isSingleValuesImport": true,
            "name": "Importing document footer",
            "objectTypeId": "yJhaSrHvVfElm497T5ci",
            "sectionStartLabel": "{FOOTER_START}",
            "updateDocumentId": "${id}",
            "worksheetId": 8
        }, // finish of 'footer import'
        { // start of 'lines import'
            "classId": "wA98WqblZrC3wXjV7yjh", // of what class destination objects has to be created from imported rows 
            "endRowLabel": "{ROWS_END}", // whensysten finds this string it means that rows import section ends
            "importMap": [ // see shot below 
                {
                    "colNo": 1, // column A
                    "key": "__lookupByKey:itemNo:itemId" // keeping import syntax standard; see chapter 'Import From Excel'
                },
                {
                    "colNo": 2,
                    "key": "itemNameFromVendorProposal"
                },
               {
                    "colNo": 3,
                    "key": "name"
                },
                {
                    "colNo": 4,
                    "key": "detaildDescription2"
                },
                {
                    "colNo": 5,
                    "key": "unitId"
                },
                {
                    "colNo": 6,
                    "key": "qty"
                },
                {
                    "colNo": 7,
                    "key": "priceNet"
                },
                {
                    "colNo": 8,
                    "key": "sum"
                }
            ],
            "isRowsImport": true, // indicates import of the rows (creation of new related objects)
            "name": "Importing purchase objects", // status caption displayed for user performing import
            "objectTypeId": "kf3iDB5deZvuGybCSnmS", // of what object type destination rows should be created
            "parentId": "${id}", // how to relate such every created object. If they are Children type of attribute on the main document form, then you should appoint self id (like in this example), in order to relate with current document evey created line
            "startRowNumber": 22, // not by starting caption but by row number you should setup where from system should first read rows in order to create them as related new objects   
            "worksheetId": 8
        } // finish of 'lines import'
    ]
}
```

<figure>![](/assets/image_(433).png)<figcaption></figcaption></figure>

<figure>![](/assets/image_(4).png)<figcaption></figcaption></figure>

## register

<figure>![](/assets/image_(303).png)<figcaption></figcaption></figure>

<figure>![](/assets/image_(331).png)<figcaption></figcaption></figure>

This is the example of deployment of  button responsible for assigning unique number for the candidate in custom recruitment solution. Registration or custom registration can be launched on the button click, depending on the setup of registries in class of the document on which toolbar is placed. The description of the registries setup is introduced in: [Registers](../object-types#registers "mention")&#x20;

Alternative way of registering is through the system action step with register action: [Register](../workflows/workflow-steps#register "mention")   &#x20;

## startWorkflow

<figure>![](/assets/image_(336).png)<figcaption></figcaption></figure>

<figure>![](/assets/image_(169).png)<figcaption></figcaption></figure>



```javascript
return { 
workflowId: { 
name: "Task Email Notification on Root Task", 
id: "P8U0gKTVxky3dOBpmZ4E", 
objectTypeId: "_workflows", 
classId: "_workflows_class" }, 
workflowInitiatorId: "departmentManagerId" 
}
```

This is the example of sending notification button from custom solution of recruitment - in recruitment task form.  There are provided appropriate properties of the workflow. As the result of pressing the button - the appointed workflow is started in which there is defined system action step with 'Send email' action; you can find related description in here:

[Send email](../workflows/workflow-steps#send-email "mention")

There is also additional thing to mention. In above example by the definition of:   

```javascript
,
workflowInitiatorId: "departmentManagerId"
```
system is updating the attribute identified by the key departmentManagerId, which is placed on the task recruitment form, with the value of the user who is workflow initiator, which means the user who presses the button. You should be aware of this mechanism. In the case it is not needed you should omit this parameter and the button definition will look like the following:

```javascript
return { 
workflowId: { 
name: "Task Email Notification on Root Task", 
id: "P8U0gKTVxky3dOBpmZ4E", 
objectTypeId: "_workflows", 
classId: "_workflows_class" }
}
```
Otherwise, in the case the line exists but the attribute with such key is not present on the form, then workflow will not be started successfully.

There is possibility to start the workflow with the appointed step. The following example illustrates the case; in startFromWorkflowStepId you have to provide as lookup the workflow step from which the workflow should be started:

```javascript
return {
  workflowId: {
    id: "VyQY13KVA28S3eFeEVUD",
    name: "Purchase Contract Processing",
    objectTypeId: "_workflows",
    classId: "_workflows_class"
  },
startFromWorkflowStepId: {
id: "YMIUKEAu54vvmDIfrpnm",
name: "Sign Document",
objectTypeId: "workflowSteps",
classId: "workflowSteps_class"
}
}
```

&#x20;

## update

This is the example of implementation of forcing the changes of the attributes values of related objects. It is performed in backend - it will be scheduled to be processed in the queue, regardless the user action like closing the form, in the case there is lots of data to be updated.

The following example is from custom recruitment functionality configuration. The button 'Propagate Updated Recruiters' is placed on the position form. In this custom solution position is  treated like first level of dependency structure like: Position -> Candidate -> Recruitment Process -> Recruitment Tasks

Another, parallel dependency is: Position -> Candidate -> Candidates' documents

To the position card are assigned multiple recruiters in Multiselect type attribute. When creating from position candidate, system propagates by appropriate setup the value of Recruiters. By that mean appointed recruiters will be privilliged to all candidates, which are applying for the position which is assigned to recruiters.&#x20;

The described case is for the situation list of recruiters for the position is extended. User is supposed to update 'Recruiters' attribute on the position form and save position. In order to propagate new changed set of recruiters to all candidates applying for the position (and in this way gurantee them access to candidaites cards): user should click 'Propagate Updated Recruiters' button:

<figure>![](/assets/image_(300).png)<figcaption></figcaption></figure>

The implementation of the button is:

&#x20;   &#x20;

<figure>![](/assets/image_(315).png)<figcaption></figcaption></figure>

```javascript
{
  autosave: true,
  copyValues: [
    {
      objectTypeId: "wTSKselJ4tBuYXbWf9ME",
      filters: [{
        key: "vacancyId.id",
        value: "${vacancyId.id}"
      }],
      keys: [{
          fromKey: "recruiterIds",
          toKey: "recruiterIds"
      }]
    },
    {
      objectTypeId: "DoEf2wdRi0Stka6XwOWM",
      filters: [{
        key: "vacancyId.id",
        value: "${vacancyId.id}"
      }],
      keys: [{
          fromKey: "recruiterIds",
          toKey: "recruiterIds"
      }]
    },
    {
      objectTypeId: "qbug63QCyvPKfaled91u",
      filters: [{
        key: "vacancyId.id",
        value: "${vacancyId.id}"
      }],
      keys: [{
          fromKey: "recruiterIds",
          toKey: "recruiterIds"
      }]
    },
    {
      objectTypeId: "m7U8wbZTLIuNKdVS0zJM",
      filters: [{
        key: "vacancyId.id",
        value: "${vacancyId.id}"
      }],
      keys: [{
          fromKey: "recruiterIds",
          toKey: "recruiterIds"
      }]
    }
  ]
}
```

In above example there are a few destination objects for the change. Let's focus on the main change Position -> Candidate

&#x20;Let's consider related part of the code:

```javascript
{
      objectTypeId: "wTSKselJ4tBuYXbWf9ME",
      filters: [{
        key: "vacancyId.id",
        value: "${vacancyId.id}"
      }],
      keys: [{
          fromKey: "recruiterIds",
          toKey: "recruiterIds"
      }]
    }
```

wTSKselJ4tBuYXbWf9ME - is the id for the object type of candidate which is destination for the change,

In filters section you should ensure how the objects for change should be found. So on destnation (candidate) key: vacancyId.id, system will take the values which are parsed from current (position) object form:  $\{vacancyId.id}.

in fromKey and toKey - you should define the mapping in the understanding: form which key on the root object (position),  value should be copied and updated to which key in destination object (candidate).

## updateRelated

Performs the update of the related objects from the perespective of the main object. In the following example; the problematic was for the user, to update manually in every automatically created cost allocation line, the division and the object. So the proposed solution was:

1. Add exactly the same (as existing on cost allocation lines' from) attributes to ' Items Purchase Invoice' - item invoice header form, for Division and Object.&#x20;
2. Deploy in class toolbar, the toolbar button with described action. After clicking the button the values from the header of the invoice will be transferred to every related cost allocation lines. The implementation has been prepared in the following way:

<figure>![](/assets/image_(59).png)<figcaption></figcaption></figure>



```javascript
{
  "autosave": true,
   "recalculate": true,
  "relationKeys": [{
   "costAllocations": [{
              "fromKey": "divisionId",
               "toKey": "divisionId",
                "overwrite": true
          }, {
              "fromKey": "objectId",
               "toKey": "objectId",
                "overwrite": true
          }] 
    }]
}
```

&#x20;costAllocations - is the key for children type of attribute which display cost allocation lines, on item invoice form,

fromKey, toKey - provide the mapping between root and destination attributes to transfer the values. In this example the same key names have been used on item invoice header and cost allocation lines forms.

The illustrative example of this implementation:

<figure>![](/assets/image_(60).png)<figcaption></figcaption></figure>

&#x20;
