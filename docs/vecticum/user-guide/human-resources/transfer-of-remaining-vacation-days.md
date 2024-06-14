# Transfer of remaining vacation days

:::info 
The following tutorial applies to all organizations that keep track of employee vacation days using the HR module.
:::


At the start of the year, vacation day remainders from the previous year need to be transferred to the current year for **all employees**. The Vecticum app enables users to view and control data on employee vacation day remainders through the ![](/assets/Reports_window_icon.png) feature, that can be found in the ![](/assets/HR_module_icon.png)module.

The app provides **two** types of **reports** for monitoring and controlling vacation day remainders:

1. ![](/assets/Remaining_vacation_days_report_list_item,_unselected.png) - shows the number of vacation days accumulated for the selected year.
2. ![](/assets/Transfer_of_remaining_vacation_days_Reports_list_item,_unselected.png) - shows the number of vacation days accumulated during the **previous year** and lets users transfer the remainder to the **ongoing year**.

:::warning
The ![](/assets/Transfer_of_remaining_vacation_days_Reports_list_item,_unselected.png) report only sees vacation day data from **one** previous year - from 1st January to 31st December or the 12 month period until the indicated Anniversary date (if specified in the leave type: Annual leave). The report cannot be used to transfer vacation day remainders for periods older than one previous year. If vacation day remainders have not been properly transferred for periods older than one previous year, then the report will not properly transfer vacation day remainders to the ongoing year.

Vacation day remainders can only be transferred for the previous year, for example, vacation day remainders for 2021 can only be transferred after 2021-12-31 or after the indicated Anniversary date (if specified in the leave type: Annual leave).
:::

Users that have the assigned roles: "Specialist (HR Core)", "Specialist (Absences)", "User (HR Core)" and "User (Absences)", have full access to the ![](/assets/Reports_window_icon.png) feature. Instructions on how to view and transfer employee vacation days remaining from the previous year are presented in **chapter 1** of this tutorial. Instructions on how to view the report on employee vacation days accumulated in the selected year are presented in **chapter 2** of this tutorial.

If the task to transfer employee remaining vacation days needs to be delegated to another responsible person or persons, the employees have to be assigned the roles "Specialist (HR Core)", "Specialist (Absences)", "User (HR Core)" and "User (Absences)". The assignment can be done by an employee who has the role "Company contacts administrator". The assignment of role/security groups is outside of the scope of this tutorial.

## 1. Transfer of remaining vacation days.

This chapter details how to view and transfer each employees vacation days remaining from the previous year to the ongoing year.

### 1.1. Open transfer report. <a href="#id-1.1.-open-transfer-report" id="id-1.1.-open-transfer-report"></a>

1.1.1. Click on the ![](/assets/HR_module_icon.png) module in the Vecticum app left-hand side menu and then click on![](/assets/Reports_window_icon.png) to open the Reports window.

1.1.2. In the Reports window click on the drop-down list and select the report: ![](/assets/Transfer_of_remaining_vacation_days_Reports_list_item,_selected_(1).png).


1.1.3. When the report loads for the first time it will be empty (Fig. 1).

![Figure 1. Empty HR report - Transfer of remaining vacation days.](</assets/Report_Transfer_of_remaining_vacation_days,_empty.png>)


1.1.4. To populate the report table, click on the drop-down list ![](/assets/Reports_window,_department_selection_icon.png) and check ![](/assets/Select_All_icon.png) to add employees from your whole organization. You can also filter by selecting or deselecting specific departments, but it is advised to ![](/assets/Select_All_icon.png) not to miss any employee.

### 1.2. Performing the transfer. <a href="#id-1.2.-performing-the-transfer" id="id-1.2.-performing-the-transfer"></a>

1.2.1. The column ![](/assets/Balance_to_transfer_column_header.png) contains the number of vacation days that were remaining up to the end of the previous year (Fig. 2). The number can also be negative if the employee used more than they had accumulated.

![Figure 2. Example entry of report "Transfer of remaining vacation days" - current Balance to transfer for John Doe is 10.88 days.](</assets/Example_entry_of_report_-_Transfer_of_remaining_vacation_days.png>)

1.2.2. To transfer an employee's vacation days from the previous year, click ![](/assets/Transfer_button_icon.png) that is located in the right-most column (![](/assets/Action_column_header.png)) of an employees row (Fig. 2).

1.2.3. After the transfer is performed, the employees row will become green, the ![](/assets/Transfer_button_icon.png) button will no longer be visible and the number of vacation days indicated in the ![](/assets/Balance_to_transfer_column_header.png) column will be transferred to the current year and shown in the column ![](/assets/Transferred_column_header.png)(Fig. 3).

![Figure 3. Example entry of report "Transfer of remaining vacation days" - John Doe's remaining vacation days have been transferred.](</assets/Example_entry_of_report_-_Transfer_of_remaining_vacation_days,_after_transfer,_green.png>)

1.2.4. Transfer the remaining vacation days for **each employee** in your organization.

1.2.5. If a different value needs to be transferred, the value shown in the column ![](/assets/Balance_to_transfer_column_header.png)can be edited by hand **before transfer**. Double click on the cell and it will change to permit entry of numbers (Fig. 4). You can enter a different value or incrementally edit the current value by clicking on ![](/assets/Arrow_keys_icon.png).

![Figure 4. Example of a cell in the Balance to transfer column being edited.](</assets/Example_of_a_cell_in_the_Balance_to_transfer_column_being_edited.png>)

1.2.6. After changing the value of a cell, click on any part of the report to temporarily save the new value. Now you can click ![](/assets/Transfer_button_icon.png) to permanently transfer the new value. Once the transfer has been completed, the value cannot be edited through the report.

1.2.7. After transfer, the column ![](/assets/Balance_to_transfer_column_header.png) will still show the old value calculated from the employees sheet. The edited value will be visible in the column ![](/assets/Transferred_column_header.png) (Fig. 5).

![Figure 5. Example entry of report "Transfer of remaining vacation days" - Jane Bloggs' remaining vacation days have been edited and then transferred.](</assets/Example_entry_of_report_-_Transfer_of_remaining_vacation_days_-_Jane_Bloggs,_green.png>)

### 1.3. Changes to employee's sheet. <a href="#id-1.3.-changes-to-employees-sheet" id="id-1.3.-changes-to-employees-sheet"></a>

1.3.1. The transfer feature adds the following leave entitlements to an employee's sheet:

1. Transferred from last year - stores the value of vacation days transferred from last year.
2. Annual leave - stores the value of vacation days to be accumulated during the ongoing year.
3. Other leave entitlements - the transfer feature also applies other leave entitlements to the employee's sheet, if they are specified in the organizations Accrual rules and the employee meets the requirements. E.g. Accrual for 5 years employed.

:::warning
Annual leave and other leave entitlements will created only if the proper accrual rules are configured in administration settings and the employee start date is specified in the ![](/assets/image_(139).png) tab of the employee card.
:::

### 1.4. Rollback of transfer.

1.4.1. If an incorrect value of remaining vacation days has been transferred to the ongoing year. The number of transferred vacation days can be changed.

1.4.2. To change the number of transferred vacation days, navigate to the employees sheet - in the ![](/assets/HR_module_icon.png) module click on ![](/assets/Employees_window_icon.png) to open the Employees window.

1.4.3. Select the employee in question to open their sheet. In the sheet click on the ![](/assets/Employee_sheet,_Leave_tab_buton_icon.png) tab.

1.4.4. To change the number of transferred vacation days, you will need to edit an entry in the leave accruals table titled "Transferred from last year" (Fig. 6).

![Figure 6. Employees sheet leave accruals table example.](</assets/image_(313).png>)

1.4.5. Click on the entry titled "Transferred from last year". The leave accrual form will open (Fig. 7). Enter the desired value in the field "Number of days/hours to accrue" and click ![](/assets/Save_icon_(1).png) or ![](/assets/Save_and_close_icon_(1).png) to save the new value.

![Figure 7. Leave accrual form example.](</assets/Leave_accrual,_transferred_from_last_year,_Peter_Smith.png>)

1.4.6. After making an edit, you will need to reload the report ![](/assets/Transfer_of_remaining_vacation_days_Reports_list_item,_unselected.png) to see the edited result. To quickly reload the report click on the drop-down list ![](/assets/Reports_window,_department_selection_icon.png), unselect all, click anywhere on the report and then select all departments again. The edited value will be visible.

### 2. Ongoing vacation day report. <a href="#id-2.-generating-reports" id="id-2.-generating-reports"></a>

This chapter details how to view the report on employee vacation days accumulated in the selected year.

### 2.1. Open vacation day report. <a href="#id-2.1.-open-vacation-day-report" id="id-2.1.-open-vacation-day-report"></a>

2.1.1. Click on the ![](/assets/HR_module_icon.png) module in the Vecticum app left-hand side menu and then click on ![](/assets/Reports_window_icon.png) to open the Reports window.

2.1.2. In the Reports window click on the drop-down list and select the report:![](/assets/Remaining_vacation_days_report_list_item,_selected.png).

2.1.3. When the report loads for the first time it will be empty (Fig. 8).

![Figure 8. Empty HR report - Remaining vacation days.](</assets/Empty_HR_report_-_Remaining_vacation_days.png>)

2.1.4. To populate the report table, click on the drop-down list ![](/assets/Reports_window,_department_selection_icon.png) and check ![](/assets/Select_All_icon.png) to add employees from your whole organization. You can also filter by selecting or deselecting specific departments (Fig. 9).

![Figure 9. Example entries of report "Remaining vacation days" - Production department employees' remaining vacation days up to the date 2021-12-09.](</assets/Example_entries_of_report_-_Remaining_vacation_days.png>)

2.1.5. The report data is filled according to the date selected in the calendar (Fig. 10). The report shows employee remaining vacation days for the year selected up to (but not including) the selected day.

![Figure 10. Calendar provided in HR Report - Remaining vacation days. The calendar is set to 2021-12-09.](</assets/Reports_window,_calendar.png>)

2.1.6. The date in the calendar (Fig. 10) can be changed by clicking on the date and selecting a new value.

2.1.7. The "Remaining vacation days" report has similar columns to the "Transfer of remaining vacation days" report. The most important columns are detailed as follows:

1. Initial balance - number of vacation days the employee had in the beginning of the selected year (beginning of January 1st or Anniversary date if specified).
2. Current balance - number of vacation days from the beginng of the year up to (but not including) the day selected in the calendar in the report window.
3. Balance at the end of the year - number of vacation days the employee will have at the end of the selected year.
