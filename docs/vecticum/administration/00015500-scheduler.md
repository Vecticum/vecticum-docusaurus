# Scheduler
This page contains description of Scheduler functionality with the setup parameters.

Scheduler displays different types of the records of all the classes of 'Absence' object type. In other words we can see in calendar interface in Scheduler employees' leave requests, sickness absences and other leaves.

Scheduler is displayed in main menu in bottom part:  

<figure>![](/assets/scheduler_1.png)</figure>

The setup responsible for turning it on globally is located in:

Administration ->  Company_name -> Company Info -> Settings (button) -> Scheduler (tab) -> Show Scheduler in navigation menu = Yes   

<figure>![](/assets/scheduler_2.png)</figure>

When it is turned on, by default it presents all the employee from the same department as logged in user (filter on the left side is set up like this):

<figure>![](/assets/scheduler_3.png)</figure>

However, user can freely change filter of the departments to display (on the left side) or individual employees (on the right side):

<figure>![](/assets/scheduler_4.png)</figure>

If you need to configure in more restricted way, you have to:

A) tick: Administration ->  Company_name -> Company Info -> Settings (button) -> Scheduler (tab) -> Enable Scheduler department visibility permissions = Yes:

<figure>![](/assets/scheduler_5.png)</figure>

B) Navigate into: Administration -> Configuration -> Scheduler -> Permissions and add the setup record /-s and add new setup record (New). 

<figure>![](/assets/scheduler_6.png)</figure>

The record is responsible for providing the access to the appointed employees to certain departments in Scheduler.

<figure>![](/assets/scheduler_7.png)</figure>

So after creation of above record the 'Admin K' user will have in Scheduler only the access to 'CONSTRUCTION' department (on the filter on left side) and employees in this department (on the filter on right side):

<figure>![](/assets/scheduler_8.png)</figure>

Another 2 options responsible for scheduler setup are:

<figure>![](/assets/scheduler_9.png)</figure>

'Show task complete button' is responsible for visibility of task approval button in scheduler:

<figure>![](/assets/scheduler_10.png)</figure>

'Classes for events filter' - if defined, additional filter on the right side in Scheduler is available. By using it you can quickly see only the events of appointed from dropdown list class. The defintion on this list is equal to list of the available items in filter dropdown:

<figure>![](/assets/scheduler_11.png)</figure>

When this parameter is turned on, then the option 'Hide employees without documents' becomes visible.

Additional related with this functionality setup is configured on the class form of displayed records, for example in leave request class there is turned on parameter:

<figure>![](/assets/scheduler_12.png)</figure>

'Can be created from calendar' - is responsible for enabling possibility of creation in this example leave request from Scheduler interface.  If user double left mouse clicks on certain day in scheduler, then new form appear with selection of this date (range of dates should be adjusted) and current user.

Another property to define is configurable in 'Advanced' tab of the class. It is 'Scheduler event information from key'. When it is empty - Scheduler shows Class name, if key is filled in - scheduler shows information from appointed key.   

For the class of the records which are supposed to be displayed in Scheduler, you need to configure creation of related ledger entries (in 'Ledger' tab of the class). As the pattern you should take leave request or sickness absence class.