# Dynamic Tables (Expression in Relation View)

This functionality provides possibility to execute Expression and display returned by expression result in 'Relation view' type attribute on vecticum document form on demand (button click), example of use:

<figure>![](/assets/image_(422).png)</figure>

It is not performance impacting because expression is not executed on every form renewal but only on demand ('Update result' button click). This approach effectively uses all the possibilities offered by the expression framework; you can use in expressions: &#x20;

* values of the keys appearing on the form, including collections like children or relation views,
* you define in 'Expression data' the static document for example Workflow Scheme document (from which you need to take global settings) or the document view (which can be treated like the list, table; the view can be conditionally narrowed by definition of 'Lookup key' and 'Relation own key' (which operates on keys from the form) and in view's expression you can deploy other narrowing logic) .&#x20;

Both approaches can be used in composition of the Expression syntax.&#x20;

By that means you can create the report combining any data from the system with the use of the attributes appearing on the same form (they can play like report parameters).

Example - configuration of the (different than above shot) report which will show the current consumption of the budget assigned per item in chosen project / warehouse.

Configuration steps:

1. I have already created:&#x20;

* 'Control report' - object type of 'User data' type,
* 'Control report' - class under above object type,
* 'Control report' - form assigned to above class. On the form there is only single attribute of text type with key: name.

2. Create new object type which will represent the resulted rows from expression. 'Data type' should be 'User data':

<figure>![](/assets/image_(23).png)</figure>

3. Create the form which will be assigned for the class, created in next step under above object type. The form should contain attributes:

<figure>![](/assets/image_(15).png)</figure>

Please pay attention that select type attribute with key: parentDocumentId , appoints to the object type of the document (form) on which dynamic table will be created. The idea is that on 'Control report' form, will be placed the report in dynamic table.&#x20;

Please ALWAYS use parentDocumentId key (this is hardcoded part).

4. Under created object type 'Purchase Test Expression for Control Report', create the class. Please assign above 'Purchase Test Expression For Control Report' form to the class.

<figure>![](/assets/image_(424).png)</figure>

5. Create the Expression which will be containing the logic of the report presented in relation view attribute. We will create first simple expression to start with, which will be enriched further on with additional logic.

A. First on 'Control report' form we will need attribute in where user will pick warehouse / project for which the report will be generated. Please create it in the following way:

<figure>![](/assets/image_(18).png)</figure>

<figure>![](/assets/image_(19).png)</figure>

The result is:

<figure>![](/assets/image_(20).png)</figure>

B. We will create expression which will show the budget items recorded with budget value for the chosen warehouse/project.

On the warehouse form items are stored in relation view attribute with the key: itemsRelationView

&#x20;

<figure>![](/assets/image_(21).png)</figure>

In Administration -> Metadata ->Expressions , please create new expression:

&#x20;

<figure>![](/assets/image_(22).png)</figure>

In created expression, in 'Expression data', please add new documents view which will be showing items of selected warehouse. The definition of the view should be like:

<figure>![](/assets/image_(17).png)</figure>

Please notice that in this case the same key warehouseId is used to keep relation between item and warehouse (Lookup key) and we have the same name of the key on 'Control report' form (Relation own key). This way the value of the attribute will be playing as the report parameter.

C. Let's start with the syntax of the expression like the following:



```javascript
let nowaDiff;
const columns =[  
{"prop": "id", "label": "Id", "color": "red"}, 
{"prop": "itemNumber", "label": "Item Number"}, 
{"prop": "itemName", "label": "Item Name"}, 
{"prop": "totalBudget", "label": "Total Budget"}
];

const expressionResult = {
columns: columns , 
items: [],
summary: [ ] ,
runTime: new Date()
}

// definition of collection of all budget items for warehouse
const warehouseBudgetItems = $data{budgeyItemsRelatedWithWarehouseViewTest}; 

// creating empty table for result
let finalResult = [];

let zmienna = 0;

for (const warehouseBudgetItem of warehouseBudgetItems) {
finalResult.push( {
id: warehouseBudgetItem.itemId.id,
itemNumber: warehouseBudgetItem.itemNumber,
itemName: warehouseBudgetItem.itemName,
totalBudget: warehouseBudgetItem.priceNet
});
zmienna = Number(zmienna) +1;
}



let mkTotalBudget = 0;

for (const singleResult of finalResult) {
mkTotalBudget = Number(mkTotalBudget) + Number(singleResult.totalBudget);
}

expressionResult.items = finalResult;

expressionResult.summary = {
//      totalBudget: {value: totalBudget},
totalBudget: mkTotalBudget.toFixed(2) 
    };


//return zmienna;

//return finalResult;
return  expressionResult;
```

Returned expressionResult is split for 4 parts: colums, items, summary,  runTime. It displays 4 columns. Prices is summed up in summary. Here is test result of the expression:

<figure>![](/assets/image_(425).png)</figure>

6. Then we have to create relation view attribute on 'Control form' in where we will place our expression result:

This is definition of the relation view attribute:

<figure>![](/assets/image_(11).png)</figure>

<figure>![](/assets/image_(12).png)</figure>

Please notice that it uses the object and class we created earlier, as well the same Lookup key is used as the one who hold the relation on expression form.

Very important part of setup of this attribute is section Params:

<figure>![](/assets/image_(14).png)</figure>

```javascript
{
"expressionId": "JvG8N0fDHw8DDrfuZN2c",
"resultObjectTypeId":"ah65qyA03wYRuV7S9bpa",
"resultClassId":"oh4LnrGziMeoOw3Z6uDd",
"markNegativeValues": true
}
```

expressionId - provide id of your created expression's id,

resultObjectTypeId - provide id of your created object type (the one in Lookup to Object type ),

resultClassId -  - provide id of your created (the one in Lookup to Object class)

markNegativeValues - if set as true, it colors in yellow background negative numeric values for items section&#x20;

After successful definition and 'Update result' button click the attribute is presented like the following:

<figure>![](/assets/image_(426).png)</figure>

Runtime notes:

* please make sure that the view assigned to the class of returned expression - in our case for class 'Purchase Test Expression for Control Report' contains only the keys which are returned in expression for items; it looks like the following:

<figure>![](/assets/image_(427).png)</figure>

* Set appropriate security for result expression class (in our case 'Purchase Test Expression for Control Report' ) so the user can create / edit / delete the records.

In next steps we will modify the expression which feeds dynamic table that it will showing the budget consumption.

&#x20;7\. Creation of 'Documents View', in  'Expression data' of our created view.

This collection will be reflecting all the development contracts documents in which are placed the items in lines. By the definition of this documents view, we will gather all the dev. contracts which are not marked as disabled (key: \_disabled), which are of status : Booked or Signed. The definition of the view:

&#x20;&#x20;

<figure>![](/assets/image_(428).png)</figure>

8. In next step the view used in relation view for presenting the expression result was extended by 2 additional columns (for amount as consumed value and the difference between assumed value and consumption):

<figure>![](/assets/image_(9).png)</figure>



9. Along the above change the expression syntax is changed:

* additional 2 columns are added in columns section,
* creating the collection of all the items appearing in developement contracts (which met above conditions mentioned in 7.) related with the same project / warehouse. Then cumulating the value of the items per item code. (this is code section in between markup : //START this is extended part 2024\_01\_19 and //END extended part 2024\_01\_19),
* while creating entries in finalResult  , also filling in 2 new attributes,
* matching the finalRessult items with itemsGroupedFromDevContr and in the case there is match: increasing amount and decreasing difference. This is the section in between: //---------------------------------------- and //----------------------------------------
* working out summing in result for newly added columns: amount and difference.

Here is the updated expression:

```javascript
let nowaDiff;
const columns =[  
{"prop": "id", "label": "Id", "color": "red"}, 
{"prop": "itemNumber", "label": "Item Number"}, 
{"prop": "itemName", "label": "Item Name"}, 
{"prop": "totalBudget", "label": "Total Budget"},
{"prop": "amount", "label": "Amount"}, 
{"prop": "difference", "label": "Difference"}
];

const expressionResult = {
columns: columns , 
items: [],
summary: [ ] ,
runTime: new Date()
}

// definition of collection of all budget items for warehouse
const warehouseBudgetItems = $data{budgeyItemsRelatedWithWarehouseViewTest}; 


//START this is extended part 2024_01_19

// definition of collection of all development contracts related with the same warehouse, which are not disabled and of status signed or booked
const  developmentContracts = $data{developmentContractsRelatedViewNew};

//creating arrays for resulted grouped items from dev contracts
let itemsGroupedFromDevContr = []; // for grouped item in dev contratcs
let itemsInDecContracts = [];
let itemsInDecContractsObj=[];

let counter =0;
let isExceeded =0;

//START loop on dev contracts
developmentContracts.forEach((dc) => {

//taking only collection of lines
itemsInDecContracts = dc.contractItems;

//converting into real array from object values
itemsInDecContractsObj = Object.values(itemsInDecContracts);


//START on items in dev ctr ARRAY
itemsInDecContractsObj.forEach((iidc) => {
//check if item exists in result array
const indexx = itemsGroupedFromDevContr.findIndex(
(element) => element.id == iidc.itemId.id
);
//if NO 
if (indexx == -1) {
// creating item 
 itemsGroupedFromDevContr.push( {
id: iidc.itemId.id,
amount: Number(iidc.amountNoVAT)
});
} else {
//IF YES - then increasing the amount by the value of current object
itemsGroupedFromDevContr[indexx].amount = Number(itemsGroupedFromDevContr[indexx].amount) + Number(iidc.amountNoVAT);
};
counter = counter +1;
});
//STOP on items in dev ctr


});
//STOP loop on dev contracts

//END extended part 2024_01_19

// creating empty table for result
let finalResult = [];

let zmienna = 0;

for (const warehouseBudgetItem of warehouseBudgetItems) {
finalResult.push( {
id: warehouseBudgetItem.itemId.id,
itemNumber: warehouseBudgetItem.itemNumber,
itemName: warehouseBudgetItem.itemName,
totalBudget: warehouseBudgetItem.priceNet,
amount: 0,
difference:  warehouseBudgetItem.priceNet
});
zmienna = Number(zmienna) +1;
}

//----------------------------------------
itemsGroupedFromDevContr.forEach((consum) => {
const itemId = consum.id;
//check if item exists in result array
const index = finalResult.findIndex(
(item) => item.id == itemId
);
//if YES 
if (index !== -1)  {
//IF YES - then increasing the amount by the value of current object
finalResult[index].amount = Number(finalResult[index].amount) + Number(consum.amount);
finalResult[index].difference = (Number(finalResult[index].difference)  - Number(consum.amount)).toFixed(2);
}
})
//----------------------------------------

let mkTotalBudget = 0;
let mkAmount =0;
let mkDifference=0;

for (const singleResult of finalResult) {
mkTotalBudget = Number(mkTotalBudget) + Number(singleResult.totalBudget);
mkAmount = Number(mkAmount) + Number(singleResult.amount);
mkDifference = Number(mkDifference) + Number(singleResult.difference);
}

expressionResult.items = finalResult;

expressionResult.summary = {
//      totalBudget: {value: totalBudget},
totalBudget: mkTotalBudget.toFixed(2),
amount:  mkAmount.toFixed(2),
difference:  mkDifference.toFixed(2),
    };


//return zmienna;

//return finalResult;
return  expressionResult;
```

&#x20;And this is the final result:

<figure>![](/assets/image_(432).png)</figure>

<figure>![](/assets/image_(431).png)</figure>
