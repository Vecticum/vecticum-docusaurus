---
description: >-
  In the class definition in 'Filtered views' tab, in attribute 'Filters for
  views' - there is definition of the conditionally filtered views.
---

# Filtered View - Filter Expression

When you define the view, you should put the 'Filter Expression' in json format.

### Lookup - My documents in filtered view with Lookup (Select, Typehead, Dropdown) relation - as Filter Expression in view

```javascript
return [{
  key: 'recruiterId.id',
  value: [Me]
}];
```

_recruiterId_ - is the key for Recruiter attribute, of Select type which appoints the person. Such defined filtered view will show only the documents in where my user is assigned as Recruiter.

<figure>![](/assets/image_(174).png)</figure>

### Multi-select  - My documents in filtered view with Multi-select relation - as Filter Expression in view

```javascript
return [{
  key: '_id_performsRecruitment.'+[Me],
  value: true
}];
```

In this case there is placed on the form the multiselect type attribute with the key _performsRecruitment_ . It returns as example - when 2 persons are appointed:

```json
[
	{
		"objectTypeId":"person",
		"classId":"gwZ83NWTFFPMuw2Ii1em",
		"id":"92OEWfCoP3jWciNR9XkL",
		"name":"Aaron Burden"
	},
	{
		"id":"dr0qWgrhztq2f5036crz",
		"objectTypeId":"person",
		"name":"Jim Smith",
		"classId":"person_class"
	}
];
```

In this case we are using, by applying the above filter code, additionally created by the system key:

```json
_id_performsRecruitment: {
92OEWfCoP3jWciNR9XkL: true,
dr0qWgrhztq2f5036crz: true
}
```

and it's created subkeys (whether the one exists for your user with true value) like: \_id\_performsRecruitment.92OEWfCoP3jWciNR9XkL, \_id\_performsRecruitment.dr0qWgrhztq2f5036crz

<figure>![](/assets/image_(209).png)</figure>

### A few keys filter - type of the task is meeting (Select) and I am involved in participants (Multi-select)

```javascript
return [{
  key: '_id_membersOfInterview.'+[Me],
  value: true
},
{
  key: 'typeRecTask.id',
  value: '02INTERVl5quZl3v5uuI'
}
];
```

Used as alternative (filtered view) in tasks in Recruitment module (Class Filtered View 'I PARTICIPATE').

### Number - documents with number key equal to value

```javascript
return [
        {
            key: 'plannedWeek',
            value: '10'
        }
];
```

PS. After adding Number type of attribute without any value expressionn it is stored in database as text.

### Number - documents with number key less than the value

There is recommended to be deployed data preparation scenario. Deploy the Boolean type flag with the Value Expression  which is depending on the Number types attribute.  Boolean will return true or false and the filter to the view will be applied for this boolean type attribute.

Example case: show in separate view only the recruitments when plannedWeek attribute (means planned week for hiring of the candidate) is less than 12 week of the year.&#x20;

On recruitment form there is 'Planned Week' Numeric type attribute:

<figure>![](/assets/image_(104).png)</figure>

First there is deployed Boolean type attribute ifBelow12&#x20;

<figure>![](/assets/image_(193).png)</figure>

with the expression:

```javascript
const amount = ${plannedWeek}; 
if (amount < 12) { 
return true; 
} 
else 
{ 
return false; 
};
```

In the case  Planned Week is less than 12, it returns true. Otherwise it returns false.

Next step is to deploy filtered view with the following expression:

```javascript
return [
        {
            key: 'ifBelow12',
            value: true
        }
];
```

ifBelow12 is the key for the boolean type attribute ifBelow12. The view shows up only these recruitments which has this flag marked (auto calculated by expression from Planned Week):

<figure>![](/assets/image_(207).png)</figure>

So the only 1 of 2 documents is presented in above view; all docs:

<figure>![](/assets/image_(125).png)</figure>

### Number - documents with number key greater or equal to the value

Please review previous example before further reading as it is analogical example. The filter is basing on the same  boolean type attribute ifBelow12. But it is setup for the reverse false value:

```javascript
return [
        {
            key: 'ifBelow12',
            value: false
        }
];
```

It shows up the documents which planned week is greater or equal to 12th week of the year:

<figure>![](/assets/image_(105).png)</figure>

PS. Implementation of 'If After 12 Week' attribute (appearing on screenshots for illustrative reasons) is not recommended from performance reasons. It is good enough to deploy only  boolean type attribute ifBelow12 with expression.&#x20;

## Filtered View Definition

[Filtered views](../object-types#filtered-views "mention")

