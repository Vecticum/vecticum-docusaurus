---
description: Split by the business use cases.
---

# Validator - Expression

## On recruitment form check if other recruitment status, related with the same candidate is not finished with Hired status

<figure>![](/assets/image (325).png)<figcaption><p>Recrutiment form</p></figcaption></figure>

```javascript
const candStatuses=${sameCandRecs};
let sum = 0;

for (const index of candStatuses) {
  	if (index.status.id==='030qeqq9zZUzY88HIS1e' ) {
         sum += 1};
        };

let numb = false;
if (sum > 0)
{ 
numb = true
};

return numb;
```

```
sameCandRecs - is the key for relation view attribute which displays
                other recuitments related with the same candidate.

In the loop for every row from collection, system checks whether assigned 
status of recrutiment is Hired. If so increases sum by 1 up. 

Default false value of returned numb boolean type variable is changed to true
only in the case at least one record with status = Hired was found. 
```

## Validator Definition

[Validators](../forms/#validators "mention")
