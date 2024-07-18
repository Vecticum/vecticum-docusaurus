---
description: >-
  On this page  there is description of the conditional expressions (which are
  defined in 'Required expression', 'Enabled expression', 'Visibility
  expression' properties of the attributes).
---

# Attribute - Expressions: Required, Enabled, Visibility

The examples are split by attribute types which are under comparison inside the syntax of expression, but not depending on the type of the attribute for which the expression is used. You can navigate by type on the right panel -> , in the section 'ON THIS PAGE'. By selecting appropriate type you will jump into conditional expressions examples, which are relevant for the types of the arguments which you are using for comparison. &#x20;

All the above expressions should return true or false. For true returned result, the condition defined  in expression is passed, and then the attribute turns into expected behavior: requirement to be filled in or enabling it on the form, or displaying it on the form.    &#x20;

## Number

### Convert Text to Number and compare

```javascript
// stringText is key for Text type attribute
// first, Text type is converted to Number type in order to perform comparison 
// numberCalc is key for Number type attribute 

(Number('${stringText}') > ${numberCalc})
```

When used as visibility expression, attribute for which it is used will be visible in the case after the conversion text value of stringText is greater than number Calc.

## Select

In similar manner for Typehead and Dropdown.

### Visible if 1 of 3 values in Select type is picked - As Visibility expression&#x20;

```javascript
var leaveType = ${leaveType.id};
if (!leaveType) return false;
return ((leaveType === 'iK5dbLDQU69DTdISLKsF') || (leaveType === 'cylo8B4LEKHs9IOdb4nr') || (leaveType === '0SUjQwAsguWPQo5hZRu0')); 
```

Darbo valandos - this leave type is marked with id : iK5dbLDQU69DTdISLKsF (1 of the 3 matching values)**.** Visibility was setup for Name attribute:

<figure>![](/assets/image_(248).png)</figure>

<figure>![](/assets/image_(283).png)</figure>

## Text

### Convert Text to Number and compare

```javascript
// stringText is key for Text type attribute
// first, Text type is converted to Number type in order to perform comparison 
// numberCalc is key for Number type attribute 

(Number('${stringText}') > ${numberCalc})
```

## Other

### Comparison operators

\===  equal

!== not equal

\=< equal or less

\=> equal or more

&#x20;\> more

< less

Please find the more detailed operator description:&#x20;

<!-- // TO DO smth here -->
<!-- {% content-ref url="javascript-operators.md" %} -->
[javascript-operators.md](javascript-operators.md)
<!-- {% endcontent-ref %} -->

## Properties definition

[Required](../forms/#required "mention")

[Visibility and protection](../forms/#visibility-and-protection "mention")
