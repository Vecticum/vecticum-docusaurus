---
description: This chapter contains the description of 'Expressions' functionality.
---

# Expressions

## Introduction

'Expressions' are setup in: Administration -> Metadata -> Expressions.

The 'Expressions' can be triggered by 'Workflow Step System' execution, they are chosen in 'Action' section. In the 'Action keys', you specify the key of the attribute which should get the value returned from expression.

<figure>![](/assets/image_(58).png)</figure>

You can design the solution that expression is executed by running workflow automatically, manually or on button click: [startWorkflow](expressions-examples/toolbar-buttons-params#startworkflow "mention")

List of unique, powerful features of 'Expressions':

* they are executed in back end, apart from processing expressions on the form attributes, on user actions related with form display and processing. This is performance effective,
* expression - in inside definition can contain a few collections (called 'Document view') which are not directly related by the key from the document, from which perespective the workflow (with auto system execution step for the expression) is running. This is convenient, because you can query any collections of the objects from the system, without mandatory inclusion of such definition of the collection as relation view or children type attributes on the document form which would be performance impacting. In order to achieve it, please, when defining 'Documents Views', leave 'Lookup key' and 'Relation own key' empty, then it returns full list of the objects:

<figure>![](/assets/image_(54).png)</figure>

&#x20;You have to refer to it, in syntax of expression definition with: \$data\{keyForDocumentView}.

* Expressions have testing interface - which can let you test the way how the expression is executed and what result it returns without running the workflow.

In the bottom section of you appoint testing document:

<figure>![](/assets/image_(56).png)</figure>

and with the upper button you run the test:

<figure>![](/assets/image_(57).png)</figure>

Other, not unique, but very useful features are:

* in syntax of the expression you can refer to existing on the form of main document, attributes' keys - including collection like Children type of attributes\
  You have to refer to it in syntax of expression definition with: $\{keyForAttributeOnMainDocumentForm} to get data directly from document, but not from defined in the Expression object 'Document views'.

***

* there is also another method of the rendering the collection with the matching relation between 'Lookup key' and 'Relation own key' (later description will be provided in here after careful testing)

***

Description of the definition of Expression (properties):&#x20;

<figure>![](/assets/image_(373).png)</figure>

Name - name of the expression. Under this name it will be available when assigning to 'Set field value', workflow system step,

Key - the key for the expression,

Expression data - in this collection you define the supportive single objects and collections of objects on which you would like to iterate while performing calculation in 'Expression' property of the Expression,

Expression - includes the syntax for the expression

## Usage example of the 'Expressions':&#x20;

There is the need to include in multiselect attributes for persons in invoice header form, the collection of the users which will be responsible for additional approval step in workflow. In this simplified example system should iterate through cost allocation lines of the invoice, check the assigned department (whether is marked appropriately as 'Level' = '1'), if so take the assigned manager. If no, go to 1 department up (parent department), do the same checking. If no also go another level up and do the same checking again. There was deployed the following syntax for this case:

&#x20;

```javascript
const lines = ${costAllocations};
const deps = $data{departmentId};
let itterations = 0;
let depFound='';
let toRet='';
let departmentInLoop='';
let persons=[];
let dalej=0;
const  odLevel = Number(${invoiceCategoryId.limitFrom});

for (let line of lines){
  if (line.itemId && line.amountNoVAT >= odLevel ){
    itterations = itterations +1;
    depFound = line.departmentId.id;
    toRet=depFound;
    
departmentInLoop= line.departmentId.id;

    for (let dep of deps){
                    if(dep.id === departmentInLoop){ 
                               if(dep.level === "1"){
                                     persons.push(dep.managerId); 
                                     dalej=0;
                                      break;
                                 } else {
                                                departmentInLoop = dep.parentId.id;
                                                dalej=1;
                                                break;
                                             } 
                               
                                                                             }    
                                       }

// 1up
if(dalej === 1) {

    for (let dep of deps){
                    if(dep.id === departmentInLoop){ 
                               if(dep.level === "1"){
                                     persons.push(dep.managerId); 
                                     dalej=0;
                                      break;
                                 } else {
                                                departmentInLoop = dep.parentId.id;
                                                dalej=1;
                                                break;
                                             } 
                               
                                                                             }    
                                       }
} 
     
// 2up
if(dalej === 1) {

    for (let dep of deps){
                    if(dep.id === departmentInLoop){ 
                               if(dep.level === "1"){
                                     persons.push(dep.managerId); 
                                     dalej=0;
                                      break;
                                 } else {
                                                departmentInLoop = dep.parentId.id;
                                                dalej=1;
                                                break;
                                             } 
                               
                                                                             }    
                                       }
} 

   
   }
}

//return persons;
return persons.filter((elem, pos, array) => {
  if (elem === "") return false;
  return array.findIndex(x => x.id === elem.id) === pos;
});


```

Constant lines get as the value collection of the cost allocation lines. Because of the prefix ${} it takes the value from the Children type key costAllocations which is placed on the invoice form.  Constant deps get collection of all the records defined under documents view:

<figure>![](/assets/image_(53).png)</figure>

which is the full list of departments.

In the main loop system iterates through cost allocation lines. For each line it searches for the department (another loop) which is assigned to the department found for the cost allocation line. If the Level = '1' is found then it saves assigned manager to this department to persons array and breaks the loop, assigns dalej variable that another department loop will not be executed. Otherwise it assigns for variable departmentInLoop the parent department of already checked and performs the analogical checking - for two level ups (2 other department loops). At the end, after all iterations of cost allocation lines,  it reduces duplicates from persons array and return it. It is also worthy to mention that that there are taken only the cost allocation lines, which value is greater than the lower value (from) of the assigned category level (line.amountNoVAT >= odLevel).&#x20;

## Extensions

### Possibility to appoint a few properties for documents view resolution in expression

This new feature has been deployed as the workaround for retrieving in 'Documents view' in Expression, full list of documents with all properties like:

`const allConstructionInvoicesVar = $data{allConstructionInvoices};`

where allConstructionInvoices is the key for Documents view in expression

In the case it was huge collection of documents of certain object type and class (for example purchase invoices) with all properties, we experienced performance and other issues and documents view was not resolved correctly in expression. There used to be the only alternative solution to appoint only single property in 'Documents view's reference like:

`const allConstructionInvoicesVar = $data{allConstructionInvoices.costAllocations};`

But in some business cases it was not sufficient in order to deploy some more extensive logic of processing 'Documents view' in expression.

Newly added option is:   &#x20;

to select fixed keys from views by splitting them by comma:

Old style (still available)

**$data\{documentsView}** - return all properties\
**$data\{documentsView.name}** - return one property as array of values

New option\
**$data\{documentsView.id,name,amount}** => returns array of objects, where every object has fixed number of keys and values (3 in example)&#x20;

New way of implementation of the above example is to pass to constant 2 properties separated by coma:

`const allConstructionInvoicesVar = $data{allConstructionInvoices.contractNo,costAllocations};`



