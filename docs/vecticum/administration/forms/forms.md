---
description: This page contains the examples of usage of toolbar buttons.
---

# Toolbar examples

The properties are described in: [#toolbar](../object-types.md#toolbar "mention")

## Register Button

![](<../../.gitbook/assets/Screenshot 2021-03-07 132651.png>)

This is the example of deployment of Register button. Registration or custom registration can be launched on the button click, depending on the setup of registries in class of the document on which toolbar is placed. The description of the registries setup is introduced in: [#registers](../object-types.md#registers "mention")&#x20;

Alternative way of registering is through the system action step with register action: [#register](../workflows/workflow-steps.md#register "mention")     &#x20;

## Send notification / Start workflow Button

<figure><img src="../../.gitbook/assets/image (365).png" alt=""><figcaption></figcaption></figure>

By button click startWorkflow action is launched with the following parameters:

```javascript
return {
    workflowId: {
        name: "Notification on Interview in Recruitment Task Workflow",
        id: "ufCr5IQgUeEIfRYk8qvC",
        objectTypeId: "_workflows",
        classId: "_workflows_class"
    },
    workflowInitiatorId: "departmentManagerId"
}
```

name and id are describing exactly which  workflow has to be started by button click.

Inside the workflow is added system step with send email action: [#send-email](../expressions-examples/workflow-step-system-actions.md#send-email "mention")
