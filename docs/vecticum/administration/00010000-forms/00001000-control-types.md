---
description: List of all control types available in the system.
---

# Control types

## Avatar

Allows to upload a person's photo.

![](/assets/image_(329).png)

## Boolean

Allows to add a Yes/No choice. Displays a checkbox in a form.

!![](/assets/image_(247).png)

## Children

Creates a child element in the form that contains the view of specified objects and allows to create a new object directly from the form.

For this control type, you have to configure [Lookup filtering](./#lookup-filtering "mention") settings.

Children are used only in the case that we want to configure dependable lines to the parent of object(-s) of single object type. It means that the children will belong always only to the parent of the object of single object type. For example we want to add health inspection records to the person form. Such record does not make sense if it is not related with the person. They always be created from the perspective of the person and the relation will not be visible as separate attribute. Also if there is no other need to observe such records from another perspective or from relation to another types of objects.&#x20;

If there will be such needs, or such records can be initiated directly from their own register but not from parent , then we will be using 'Relation view' type of control instead.

In order to configure such Children setup, following the above example of 'health inspection records related with person' you have to:

1\) Create new object type (with class and form): 'Person Health Inspection Test Object Type'. To it, assign: 'Parent Object type' = Person,&#x20;

2\) On Employee form create Children type of Control attribute. Appoint: &#x20;

'Lookup to Object type' = Person Health Inspection Test Object Type,&#x20;

'Lookup to Object class' = created class in 1) class,&#x20;

'Lookup key' = name (or any other present on 1) form).

3\) Assign the 'Key' of created Children attribute from 2) as Parent key of object type  'Person Health Inspection Test Object Type'.



<figure>![](/assets/image_(68).png)<figcaption><p>Children control example - Employee medical examinations records available from employee form </p></figcaption></figure>

When the main document is deleted also it's Children are deleted (opposite like in items in 'relation view' control).&#x20;

In the terms of the security, in class assigned to object type of Children items, you typically should define security like everybody has 'Read All' and 'Write All' permissions (by roles). But you have to take care that the access from UI to objects appointed as items in Children, is only available from the main object (like in our above example from employee card).&#x20;

Theoretically these children items can be exposed from menu item separately but as the good practice - you **should not** configure like this, cause direct change in the table of such item will not be automatically updated in children as the part of the main object.

## Choice

A system control type for built-in data. For locally configured select lists, use dropdown, select or typehead control types.

## Color

Allows to select a color that is used for objects of this type in other places of the system (calendar, workflows etc).

It is recommended to place the attribute of this type as 1st in sequence with at least 2 attributes in the same row.

<figure>![](/assets/image_(116).png)<figcaption><p>Color control example</p></figcaption></figure>

## Company

The dropdown list of single choice for the Vecticum app companies, which are available to logged in user.

<figure>![](/assets/image_(90).png)<figcaption><p>Company control type example</p></figcaption></figure>

## Companies

The dropdown list of multiselect choice for Vecticum app companies, which are available to logged in user.

<figure>![](/assets/image_(273).png)<figcaption><p>Companies control type - usage example.</p></figcaption></figure>

## Computed

Allows to write a JavaScript expression that computes attribute value. You have to fill in 'Expression' property accordingly. For this control type you are not restricted for any specific format type of returned value. The examples of correct syntaxes of 'Expression':

`// returns Number type`

`return 1;`



`// returns Number after`

`// calculation with other computed`&#x20;

`// which returns Number`

`return (${computed} + 12);`



`// returns Text type`

`return '144';`



`// returns Text type`

`return 'example text';`



`// returns text representing date`

var date = new Date();

if (!date || !date.getFullYear) \{ return ''; }

var month = '' + (date.getMonth() +1);&#x20;

var day = '' + date.getDate();&#x20;

var year = date.getFullYear();

if (month.length < 2) \{ month = '0' + month; } if (day.length < 2) \{ day = '0' + day; }

return \[year, month, day].join('-');

<figure>![](/assets/image_(117).png)<figcaption><p>Computed type attribute presenting date in string</p></figcaption></figure>

## Date

Provides a calendar popup and allows to select a date. The date format is: mm/dd/yyyy.

<figure>![](/assets/image_(76).png)<figcaption><p>Date type attribute</p></figcaption></figure>

## Dates (multi-select)

Possibility to pick up a few date types values from calendar. They are presented in separate rows.

<figure>![](/assets/image_(245).png)<figcaption><p>Dates (multi - select) attribute</p></figcaption></figure>

## Date range

Provides a calendar popup and allows to set from & to dates.

<figure>![](/assets/image_(219).png)<figcaption><p>Date range type attribute</p></figcaption></figure>

## Date ranges (multi-select)

Provides a calendar popup and allows to set a collection of ranges (from - to) of dates. Selected ranges are presented in separate rows.

<figure>![](/assets/image_(348).png)<figcaption></figcaption></figure>

## Dropdown

Provides a list of items and allows to select one item. No filtering is applied as you type. While typing a letter (e.g. : 'a', for dropdown for Status) system selects on the dropdown list the first position which value starts with the letter ('Active'). Pressing the same letter again selects 2nd position starting with the letter, in the example case 'Applied'. So by repeating typing of the first letter user can navigate on the list. Pressing other letter (like 'p' after 'a'), will result in selection of the first value starting from 'p' (Pateiktas).

For this control type, you have to configure  [Lookup filtering](./#lookup-filtering "mention") settings.

This kind of control is used rather in the case , there is smaller list of the available values and the user will be making choice by pointing manually one of them from the list, on which every available value is displayed. From the angle of navigation through the items on the list, it is recommended to use it for short, single word values.

<figure>![](/assets/image_(146).png)<figcaption><p>Dropdown type attribute</p></figcaption></figure>

## File

Allows to add one file to an object (select from file explorer or drag and drop). Depending on the file format, the added file is automatically previewed (.pdf-s, .jpg-s, ...) on the right part of the screen. For not previewed formats (like for example .txt), user have to click on the name of uploaded file in order to open it, in new browser tab.

<figure>![](/assets/image_(173).png)<figcaption><p>File type of attribute - example with previewed format (*.jpg)</p></figcaption></figure>

## Files

Allows to add multiple files to an object (select from file explorer or drag and drop). There is possibility to multiselect more than 1 file while adding and upload a few files at the same time.&#x20;

<figure>![](/assets/image_(346).png)<figcaption><p>Files type of attribute </p></figcaption></figure>

## Multi-select

A select field that allows you to select multiple items.

For this control type, you have to configure [Lookup filtering](./#lookup-filtering "mention")  settings. When you insert the cursor in the value part of this attribute, the list will extend. When start typing the presented list will be filtered in a way that remaining values will contain (not only start with) inserted phrase.



<figure>![](/assets/image_(122).png)<figcaption></figcaption></figure>

## Number

Allows to enter numbers (integers and decimal). No letters are allowed. Dot (.) represents decimal separator. There is additional property for this control type 'Thousand Separator' (is placed just after 'Control'=Number), which defines whether the thousands part of the number value should be separated with space or no.

<figure>![](/assets/image_(106).png)<figcaption><p>Number type attribute</p></figcaption></figure>

## Relation view

Allows to create a new object of the selected type directly from the form.

For this control type, you have to configure [Lookup filtering](./#lookup-filtering "mention")  settings.

Contrary to the Children type of control (which can only create parent's own dependable children), Relation view holds evident, open and configurable definition of the rules of displaying the items in the view. It is more flexible than Children. You can see the attributes of items displayed in relation view which create the relation with main object - which is beneficial in comparison to Children where the relation is not transparent from the side of the child. Also in  relation view you can define the relation between items displayed and main object in more complex way; not only pointing the main object itself from item but also with possibility to setup rules like: from main object show the items which in attribute x, contain the same value as parent object contains in attribute y. Let's work out in below the 2 examples of configuring the relation view.



1\) Configuring relation view that appoints main object directly (similar to Children possibility but with transparent relation of related item to main object):



On Employee form we would like to create nested view with the use relation view type of control attribute for 'Internal corporate awards'.



A. Creating new object type 'Personal Corporate Award'. Leaving empty: Parent Object type, Parent key.

B. Create new form which will contain only 4 attributes:

* Name (Text), Key=name,
* Status, Key=status, (Dropdown for: Lookup to Object type=Status, Lookup to Object class=leave empty, Lookup key=name ). You can additionally insert filter on for certain statuses, like (for Pending and Approved): `id.IN('`SqqdcjE6DrQkeLpHIIbm','rgROxbNneK2HRScy3Ytf'`)`&#x20;
* Nominated Person, Key=nominatedId, (Select for: Lookup to Object type=Person, Lookup to Object class=leave empty, Lookup key=name ). By this attribute we will establish relation from item to main object.
* File,&#x20;

In below there is example of such document:

<figure>![](/assets/image_(79).png)<figcaption></figcaption></figure>



C. To Object type 'Personal Corporate Award', create the class with the use of form from B.

D. Create on Employee form the attribute of 'Relation view' in the following way:

Label = Awards Won and Nominations,

Key = awardsRelView,

Control = Relation view,

Tab = General,

Lookup to Object type = Personal Corporate Award

Lookup to Object class=from C.

Lookup key=nominatedId  (by pointing this attribute we would like to establish the viewing rule; when current is appointed as value in this key)



After this, on Employee form of Edwin van der Saar in our above example, will be shown up appropriate related nomination:



<figure>![](/assets/image_(155).png)<figcaption></figcaption></figure>

When from main object side, creating the new item (+New), then attribute which holds the relation is automatically filled in ('Nominated Person' in our example). &#x20;



2\) Configuring relation view in more complex way like: from main object show the items, which in attribute x, contain the same value as main object contains in attribute y.&#x20;



Continuing the above example with 'Personal Corporate Award'-s, let's assume there is the business requirement to show up on the form (which will be playing role as a kind of dashboard) all the objects of type 'Personal Corporate Award' with the status Approved. It will mean that all the awards given by corporation to employees  (approved nominations) will be listed. The second rather technical reason for deploying such relation view can come as intermediate method for meeting other business requirement; in this case it will be business requirement to count all awards given and present the result on the form. Technical method of computing such result implicates the technical need of placing such relation view attribute (collection of awards) as the source parameter for counting their quantity. &#x20;

A. Let's create new object type: 'Awards dashboard' with the class and the empty form.

B. On the form created in A., add the tab, add to it:



a. Status, Key=statusDash, (Dropdown for: Lookup to Object type=Status, Lookup to Object class=leave empty, Lookup key=name ). You can additionally insert filter on for certain statuses, like (for Pending and Approved): `id.IN('`SqqdcjE6DrQkeLpHIIbm','rgROxbNneK2HRScy3Ytf'`)`



&#x20;b. the relation view type of control attribute, with the use of the following setup:



Label = Awards Given (All)

Key = awardsRelView

Control = Relation view

Lookup to Object type = Personal Corporate Award

Lookup to Object class = Personal Corporate Award

Lookup key =status  (values from this item attribute will be compared to qualify items to be displayed)

Relation own key =statusDash  (value from the main object (own) attribute will be taken for comparison to qualify items to be displayed)



The result of creating single Dashboard document will look like the following (which presents all status=Approved awards):&#x20;

<figure>![](/assets/image_(108).png)<figcaption></figcaption></figure>



Another part of the setup will be to take care by security restrictions to create only single dashboard and expose it under menu item.  &#x20;

## Select

Select attribute allows user to select one item.

For this control type, you have to configure  [Lookup filtering](./#lookup-filtering "mention")  settings.

When you insert the cursor in the value part of this attribute, the list will extend. When start typing the presented list will be filtered in a way that remaining values will contain (not only start with) inserted phrase.



<figure>![](/assets/image_(206).png)<figcaption></figcaption></figure>

It is recommended to assign the Key as _nameofthepointedobjectId_ , for example when we select person, personId.&#x20;

## Text

One-line attribute where user can enter any text. After choosing this control type, additional property appears: 'Max length', in where you can define maximal length of text string that you can insert and save. Another appearing property for this control type is 'Input type'; available options:

* Text - standard text box, without any buttons,

<figure>![](/assets/image_(102).png)<figcaption></figcaption></figure>

* Email - on right size of the edit field, envelope button appears which launches creation of the new email message for the recipient address specified as the value of the attribute,

&#x20;&#x20;

<figure>![](/assets/image_(242).png)<figcaption></figcaption></figure>

* URL - on right size of the edit field, open url button appears which opens in browser the url,

<figure>![](/assets/image_(302).png)<figcaption></figcaption></figure>

## Text area

An expandable text area where you can enter any text. A few line are possible to be inserted.

<figure>![](/assets/image_(82).png)<figcaption></figcaption></figure>

## Typehead

Typehead control is a select field that filters the list while you type. Only one item can be selected.

For this control type, you have to configure  [Lookup filtering](./#lookup-filtering "mention")  settings.

In comparison to Select type of control, it additionally bolds out matching part of the presented value on the list.

<figure>![](/assets/image_(280).png)<figcaption></figcaption></figure>

## WYSIWYG editor

Adds a WYSIWYG editor to a form.&#x20;

<figure>![](/assets/image_(134).png)<figcaption></figcaption></figure>

## Multi relations



This type of control is used to define many to many relationship. In system it is possible to manipulate it from both sides. For example we would like to create such type of relationship between Training and Group of the employees. The set of Trainings (a few trainings) will be dedicated for the certain Group of employees as destination audience. A few Groups of the employees can be related with the single Training. &#x20;

The representative example is on \_CORE company. Under Company Documents -> Employee Groups. On the form of employee group in 'Assigned Training' tab, we have the following Multi relations attribute:

<figure>![](/assets/image_(244).png)<figcaption></figcaption></figure>

which presents the trainings assigned to opened employee group. After you press Add / Remove on the top, you will be able to manipulate the groups:&#x20;

<figure>![](/assets/image_(310).png)<figcaption></figcaption></figure>

If the group would be  added to the training form, from analogical 'multi relations' attribute placed on training form, then the training also will be visible from the group form perespective (presented on the above shots).

The trainings are available in Training -> Training list. When you open the Training form and navigate to 'Employees Groups' tab, you will find multi relations type of attribute where the related with training groups are displayed:

<figure>![](/assets/image_(316).png)<figcaption></figcaption></figure>

The technical setup of the illustrative above example:

<figure>![](/assets/image_(126).png)<figcaption></figcaption></figure>

The markup in colors is presented in order to identify the dependencies.&#x20;



In the left column: on the training form, there is presented the definition of multi relations attribute 'Assigned Employee Groups'. In the standard Lookup definition - it points to 'Employees Groups' objects. But in the additional 'Relations' section, it uses the intermediate - relationship table (presented in center column)  of object type 'Training and Group Relation'. In 'Relation Own Key' in left column, there is appointed which column in relation table is used for relating with 'my object' (from the side of the training). In 'Relation linked Object Key' in left column, there is appointed which column in relation table is used to relate linked object (light blue mark up - appoints employee group (also which can be  identified as training program for the group of employees) ). On the right column there is analogical definition of multi relation type of attribute 'Assigned Trainings' on form assigned to 'Employees Groups' object type.

Both 'multi relations' attributes (from left and right column) operate (read, add, remove) on the same relations table. So the manipulation from one multi relations attribute, will also have the effect on the presented list in the 2nd one multi relations attribute and vice versa.&#x20;

Part of the setup is described in [Lookup filtering](./#lookup-filtering "mention")&#x20;

