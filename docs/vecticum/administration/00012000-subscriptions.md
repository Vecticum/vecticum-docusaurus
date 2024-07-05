# Subscriptions

Subsrciptions are responsible for the setup of the email notifications delivery.&#x20;

There are inbuilt notifications in Vecticum platform:

* on assignment of the new workflow task - sent immediately once the task is assigned to responsible performer. In the content of the notification email there is navigation button which navigates to the document which has the new active task assigned. &#x20;

<figure>![](/assets/image_(333).png)</figure>

* group email notification delivered daily for responsible performer of the tasks. In the email notification are listed all the tasks which are near the deadline or overdue after the deadline and where recipient is responsible performer for the task. They are delivered once a day (currently: 2023-06-29, everyday at around 9:00 AM EEST — Eastern European Summer Time (UTC/GMT +3 hours) ). If  a user has created the account in different vecticum companies then separate email notification is sent per each company regarding her/his near / overdue active tasks.&#x20;

<figure>![](/assets/image_(151).png)</figure>

In addition to the inbuilt subscriprtions there is possibility to define custom subscriptions. User has to be granted with permission to administer system. Subscriptions are placed in: Administration -> Metadata -> Subscriptions

Example subscription setup:

<figure>![](/assets/image_(65).png)</figure>

Name - Will be used as notification email subject.&#x20;

Disabled - Possibility to turn off temporarily the notification.

Trigger - in this section are provided the details of the root documents / objects which are the subject of the notification as well the details of the trggerring (time moment, status).

Object type - the objects / documents of this appointed in here object type will be considered to create the notification from this subscription,

Classes -   the objects / documents of these appointed in here classes will be considered to create the notification from this subscription,

Date key to check - consultant should provide in here the key name for the date type attribute appearing on the form related to appointed above classes of appointed above object type. By that setup system will prepare the notifications based on this attribute. In the above example validToDate key represents 'Valid To' attribute:

<figure>![](/assets/image_(133).png)</figure>

Trigger before days - how many days before the value of the attribute specified in 'Date key to check' property, system should send the email notification.

Statuses - documents of which statuses should be taken while preparing notifications.

Repeat - how the notification should be repeated,

Email notification - this section defines the shape of the email message sent as notification

Message - the email massage body; what email content the notification should include

Subscribers - list of the static recipients to whom the email notification will be sent out

Subscribers taken from document keys - in here consultant should appoint the key of the lookup or multiselect (to person) type of attribute placed on the form of root document, in where are placed the contextually interested persons of receiving the notification related with the document. In the above example all the people involved  (members of 'Involved' multislelect, with key involvedIds) will receive the notification.

Subscribers Expressions - alternative way of calculating the set of recipients

Status change - in this section are setup the post action details

Change status to - after the notification is triggerred than status will be changed from current (one of those specified in Statuses property, if defined) status to this one specified in this, described in here property.&#x20;

As the illustrative case of the above example setup; the document with Valid to date for 2023-06-25 was setup; system according to the setup, one day before the upcoming date which is on 2023-06-24 , has sent the following email notification:

<figure>![](/assets/image_(177).png)</figure>

&#x20;   &#x20;

