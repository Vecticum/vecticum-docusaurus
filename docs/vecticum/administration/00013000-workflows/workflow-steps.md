# Workflow Steps

## Workflow steps system - Actions

### Add file from template

Attaches to File or Files type of control attribute specified in 'Action keys', the file template extracted from template document appointed in 'Template'.&#x20;

&#x20;

<figure>![](/assets/image_(217).png)</figure>

The templates are stored in Administration -> Metadata -> Templates. File content synchronization is performed once while adding the file from template.

The example is described in: [#add-file-from-template](../expressions-examples/workflow-step-system-actions.md#add-file-from-template "mention")

### Create

Creates automatically any system object of the provided object type and class. By delivering in 'Value expression' collection you can setup the value of attributes of created object.&#x20;

The example is described in: [#create](../expressions-examples/workflow-step-system-actions.md#create "mention")

### Convert to PDF

Converts the file attachment of picture type (\*.jpg) into the file attachment in \*.pdf format. Original file is deleted and the newly created pdf file is placed instead. The convertion is performed for attribute which is appointed in _actionKeys_ property of the step.

The example is described in: [#convert-to-pdf](../expressions-examples/workflow-step-system-actions.md#convert-to-pdf "mention")

### Delay

This type of the action is used to put on hold (wait) with workflow process execution. When system goes to this type of the step it becomes active immediately; but it gets completed automatically depending on additional setup.&#x20;

[#delay](../expressions-examples/workflow-step-system-actions.md#delay "mention")

### E-signing



[#e-signing](../expressions-examples/workflow-step-system-actions.md#e-signing "mention")

### Join - to - PDF

Joins the content of the \*.pdf physical files uploaded to the attribute of Files type of control and saves it as the content of single existing \*.pdf.

[#join-to-pdf](../expressions-examples/workflow-step-system-actions.md#join-to-pdf "mention")

### Match items

This functionality is used typically to map the captured purchase invoice items in invoice lines from the vendor codes to internal vecticum items'  codes.&#x20;

The example is described in: [#match-items](../expressions-examples/workflow-step-system-actions.md#match-items "mention")

### Propagate read access to related documents



[#propagate-read-access-to-related-objects](../expressions-examples/workflow-step-system-actions.md#propagate-read-access-to-related-objects "mention")

### Recalculate workflow

Refreshes the workflow steps in the meaning of recalculation of responsible performers.

<figure>![](/assets/image_(170).png)</figure>

&#x20;It is especially useful in the situation when the performer of the next step to be executed in workflow is calculated from the attribute appointed by it's key (by the setup like in below) &#x20;

<figure>![](/assets/image_(355).png)</figure>

in the scenario that it likely that the value of the root attribute changes during the workflow execution. For example in the loop iteration can be the change of the approver in another iteration.

Applying in advance (with smaller Step No.) workflow system step with the use of this action, ensures that system will use current values of the attributes from which responsible performers of the next step are dynamically extracted.

[#recalculate-workflow](../expressions-examples/workflow-step-system-actions.md#recalculate-workflow "mention")

### Recalculate document expressions

This action is typically used in the case when the document is not created / updated manually but by system action.  For example  the values of other keys (from which depend values of other attributes by setup of their expressions) are changed by actions performed in workflow system steps. Another example can be creation of the document by api.&#x20;

[#recalculate-document-expressions](../expressions-examples/workflow-step-system-actions.md#recalculate-document-expressions "mention")

### Register

Performs the registration of the document over which the workflow is executed. Should be set up according to the pattern:

<figure>![](/assets/image_(238).png)</figure>

More information on the registration process: [#registers](../object-types.md#registers "mention")

### Rename file

Changes the name of the file. Extension is not changed.&#x20;

[#rename-file](../expressions-examples/workflow-step-system-actions.md#rename-file "mention")

### Save matched items

This functionality is related with 'Match items' system action describe above in this paragraph.&#x20;

In the case not all the items have automatically been matched successfully by system as the result of execution of 'Match items' system step in workflow, user manually performs matching (picking item in lookup attribute) of the items in cost allocation invoice lines. In order to reuse this mapping for any future auto matching, these performed manually matches can be automatically transferred into mapping table.

Example of usage: [#save-matched-items](../expressions-examples/workflow-step-system-actions.md#save-matched-items "mention")

### Send email

The action of sending email message as the result of executing system step related with this action. Sender, recipient, subject and body of the delivered email are defined in Value expression.

You can find the representative example in: [#send-email](../expressions-examples/workflow-step-system-actions.md#send-email "mention")

### Set field value

Sets the value of the attribute placed on document form, over which workflow is running and step is system executed. Please see the different examples of usage in: [#set-field-value](../expressions-examples/workflow-step-system-actions.md#set-field-value "mention")&#x20;

### Set substitution status to cancelled

This action is efficient in result, only if run for leave request cancelation. On Leave request form (available in Absences -> Leaves) there is 'Cancelation' tab from which you can create  Cancel Leave Request for the certain Leave request.  When leave cancelation is finalized in the process, then the system step with this action should be called to cancel all substitutions (object type: Substitutions, class: Substitution by document) on main document - leave request.&#x20;

### [#set-substitution-status-to-canceled](../expressions-examples/workflow-step-system-actions.md#set-substitution-status-to-canceled "mention")

### Split files as separate documents

There are 2 scenarios of working depending on whether appointed key will be (exactly): files of files control type.&#x20;

Scenario 1: Appointed for the step key is: files (of files control type). Then: Creates the copy of the root document as many times as placed in appointed in files key physical attachments; but each created new document has single, different from each attachment attached and the facet is updated with the counter like: i.e. 1/3, 2/3, 3/3.

Scenario 2: Appointed for the step key is DIFFERENT THAN: files (of files control type). Then: Creates the full copy of the document as many times as placed in appointed in step definition key, physical attachments. Each created document contains all physical files - attachments from the root document.&#x20;

[#split-files-as-separate-documents](../expressions-examples/workflow-step-system-actions.md#split-files-as-separate-documents "mention")

### Split rows by default template

It is used for cost allocation lines in invoice processing. It splits the total value of the line by creating the new lines after this action is executed. Original line remains in place in allocation lines. The split is performed by checking the default vendor template assigned to the vendor which is assigned to the invoice. System searches in the template lines (this is children type of control) for the same item as the item used in cost allocation line. If it matches it created new cost allocation line with the full metadata set as defined in line of the template. The only exception is line amount - in newly created line it is equal to original amount multiplied by 'Percents'/100. 'Perecents' is the percentage part of the split of original amount - it is setup for every line in template. Typically in vendor template, for each considered item, there are appearing a few rows which 'Perecents' sum equal to 100.

Example is available in:

[#split-rows-by-default-template](../expressions-examples/workflow-step-system-actions.md#split-rows-by-default-template "mention")

### Stamp file

When using stamp there are 2 possible scenarios:

* Use default stamp
* Use custom stamp

**Default stamp** does not need any configuration and it will look like this:

![](</assets/image_(334).png>)

**Custom stamp** requires some configuration: This action has these params:

1. header - **REQUIRED** - STRING - stamp header
2. body - _OPTIONAL_ - STRING - stamp body, it can contain multiple lines, every new line should be separated with '\n' e.g. : 'line1text\nline2text', this text would be converted to :\
   'line1text\
   line2text'
3. footer - _OPTIONAL_ - STRING - stamp'o footeris
4. timezone - _OPTIONAL_ - STRING - default 'Europe/Vilnius'
5. dateFormat - _OPTIONAL_ - STRING - default 'D/M/YY HH:mm:ss'
6. fontSize - _OPTIONAL_ - STRING - default 8
7. color - _OPTIONAL_ - STRING - default blue
8. showPerformers - _OPTIONAL_ - BOOLEAN - default true, no brackets&#x20;
9. showPerformerJobTitle - _OPTIONAL_ - BOOLEAN - default true, no brackets&#x20;
10. showPerformerDate - _OPTIONAL_ - BOOLEAN - default true, no brackets&#x20;
11. tasksToStamp - _OPTIONAL_ - ARRAY - example: \['10', '20']
12. stampOnLastPage - _OPTIONAL -_ BOOLEAN - default false, no brackets&#x20;

Configuration example:&#x20;

![](</assets/image_(142).png>)

Example how it may look:

![](</assets/image_(191).png>)

[#stamp-file](../expressions-examples/workflow-step-system-actions.md#stamp-file "mention")

### Start process on related object

Starts the workflow for the related object/-s which are appointed by key's (defined by step setup) values.

[#start-process-on-related-object](../expressions-examples/workflow-step-system-actions.md#start-process-on-related-object "mention")

### Stop parent process

When this step is executed on the child (Children control type of the relation) object, then on it's parent object (typically document) it stops the running workflow. &#x20;

[#stop-parent-process](../expressions-examples/workflow-step-system-actions.md#stop-parent-process "mention")

### Switch workflow

Stops the currently running workflow and starts the new one over the same document.&#x20;

[#switch-workflow](../expressions-examples/workflow-step-system-actions.md#switch-workflow "mention")

### Update related objects

On every related object from Children type of attribute appointed in definition of the step, system performs the update of the single attribute (key) appointed in the value expression with the value of the same key on the main document.

[#update-related-objects](../expressions-examples/workflow-step-system-actions.md#update-related-objects "mention")

###
