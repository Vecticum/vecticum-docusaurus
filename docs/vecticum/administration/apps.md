# Apps

An app is a small program designed to fulfill a very specific business task. In Vecticum, you can configure your own apps from the predefined building blocks (object types, forms, views, workflows, user roles, etc).

To create a new app, go to Administration > Metadata > Apps and select **New App**.

First, edit general settings of the app.

| Setting                   | Description                                                                                                                                                                                                                                                                                                                                  |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name                      | Name of the app.                                                                                                                                                                                                                                                                                                                             |
| Icon                      | <p>You can specify an icon that will be used for this app.</p><p>To choose an icon, go to Font Awesome (<a href="https://fontawesome.com/icons?d=gallery&#x26;m=free">https://fontawesome.com/icons?d=gallery&#x26;m=free</a>) and search for the icon you want. Open the icon and copy here the icon class name, e.g., far fa-file-alt.</p> |
| Description               | Details about the app.                                                                                                                                                                                                                                                                                                                       |
| Objects included into app | Here you have the list of all object types - built-in and user-created - that are available to you. Select those that you want to include in the app.                                                                                                                                                                                        |

Once the general settings are saved, sections for configuring navigation items for the app, app buttons, app stats and app roles will be displayed.

### Navigation items

In this section, you'll configure how your app will be accessed from the main menu of your company's system. When you edit the general settings of the app and save them, the app is created but not yet visible in the menu. To make the app displayed in the menu and visible for users, you have to create navigation items and specify which user roles will have the access to them.

To create a new navigation item, select **New Navigation Item**.

| Setting           | Description                                                                                                                                                                                                                                                                                                             |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Label             | Name of the navigation item. This name will appear in the menu.                                                                                                                                                                                                                                                         |
| Navigation type   | <p>Choose what will be displayed when a navigation item is opened.</p><ul><li>View - displays specified objects in a list view. Specify object type and class in the fields below.</li><li>Feature - allows to navigate to other system location by setting a route to it. Define a route in the field below.</li></ul> |
| Object type       | Object type that will be opened by this navigation item. See more in [Object Types](https://docs.vecticum.com/administration/object-types).                                                                                                                                                                             |
| Class             | Class that will be opened by this navigation item. See more in [Classes](https://docs.vecticum.com/administration/object-types#classes).                                                                                                                                                                                |
| View              | View of objects that will be displayed when this navigation item is selected. See more in [Views](https://docs.vecticum.com/administration/views).                                                                                                                                                                      |
| Route             | A route to another location of the system. For details, please contact system administrator.                                                                                                                                                                                                                            |
| Order             | Sequence number of the navigation item (1st, 2nd etc).                                                                                                                                                                                                                                                                  |
| Visible for roles | <p>Specify roles which will be able to access this navigation item. You can create dedicated app roles (see below) or use existing one.<br><strong>Important.</strong> Note that if no role is set here, no one will be able to see the navigation item in the menu.</p>                                                |

### App buttons

App buttons are displayed in the Home page for easy access of app features that you need most often. You can add several buttons of different apps in the Home page.

To create a new app button, select **New App Button**. &#x20;

| Setting     | Description                                                                                                                                                                 |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Label       | Name of the button.                                                                                                                                                         |
| Object type | Object type that the button refers to.                                                                                                                                      |
| Class       | Class that the button refers to. When selected, the button will open a form that is specified in the class.                                                                 |
| Order       | <p>Sequence number of the button (1st, 2nd, etc). <br>If there are several buttons, they are all positioned in one line. With sequence number you can edit their order.</p> |

### App stats

App stats are small widgets that calculate statistical data. These widgets are displayed in the Home page for easy access of most commonly used statistical data. You can add several stat widgets of different apps in the Home page.

To configure new app stats, select **New App Stats**.

| Setting | Description                                                                                                                                                                            |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name    | Name of the stats counter                                                                                                                                                              |
| Type    | Choose one of available stats.                                                                                                                                                         |
| Order   | Sequence order of the stats counter (1st, 2nd, etc).                                                                                                                                   |
| Params  | <p>JSON object that will be calculated for app stats.</p><p>If there are several stat widgets, they are all positioned in one line. With sequence number you can edit their order.</p> |

### App roles

For each app you can create dedicated roles and use them to control who can see and access app features.&#x20;

When a role is created here, you have to do two things: set this role for a navigation item and assign the role to users. When assigning a role to a navigation item, you control which group of users will be able to access this part of the system. When assigning a role to users, you create this control group.

To create a new role for the app, select **New Role**.

| Setting     | Description                                                           |
| ----------- | --------------------------------------------------------------------- |
| Name        | Name of the role.                                                     |
| App         | App for which you are creating a role. Current app is set by default. |
| Description | Details about the role.                                               |
