# Toolbar examples
This page contains the examples of usage of toolbar buttons.
The properties are described in: [#toolbar](../../../tutorial-basics/congratulations.md "mention")

## Register Button

![](</assets/Screenshot_2021-03-07_132651.png>)

This is the example of deployment of Register button. Registration or custom registration can be launched on the button click, depending on the setup of registries in class of the document on which toolbar is placed. The description of the registries setup is introduced in: 


## Send notification / Start workflow Button

![](</assets/image_(365).png>)

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

Inside the workflow is added system step with send email action: 
