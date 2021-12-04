# Payroll-Management-System

a. Group F
b. Group Member Details (Name & Matric No).
Nur Ain Binti Ishak (1810052)
Nurul Jannah Binti Hussain (1811252)
Muhammad Afiq Bin Munir (1818931)
Nurul Ain Syamina binti Noorafandi (1814584)
Iman Nurzawani Binti Osman (1814246)

c. The assigned tasks for each group member.
Build a simple table component in React Native which consists of 7 columns and 6 rows. Inside the state, we declared the tableHead, tableName and tableData. For the render() method part, we set the table view and add custom styling classes to style the table. (Nur Ain Binti Ishak (1810052))
Create updateEPF function and updateNetSalary function. Create the buttons for both functions. (Nurul Jannah Binti Hussain - 1811252)
Create table data for user to insert the data manually. This features will take user value and store for the salary, EPF, and net salary calculation. Muhammad Afiq Bin Munir
Styling for table and calculate button. The height  for head and  name styles are 40 and 28 respectively. While the flexdirection for the wrapper is set as a row. There are 3 buttons for calculation with the width 30 % and 3 different colors consisting of  blue,red, and green. (Nurul Ain Syamina Noorafandi (1814584)
Create the function for the updateSalary using a basic multiply calculation from hours and rate where users enter it manually in the table.  Create the buttons for the Calculate Salary where it will show the answer below the button. (Iman Nurzawani binti Osman - 1814246)

d. Brief Description of the case study
	For this case study we are required to build a payroll management system. We utilized react-native-table-component to build a table. It consists of a table header with 7 columns namely: ‘Name', 'Days Worked', 'Hours Worked', 'Pay Rate', 'Gross Salary', 'Deduct', and 'Net Salary'. The table also consists of five rows  for each employee. The employee is subjected to 11% contribution to employee provident fund (EPF) and the payable rate is fixed at RM 6 per hour and weekends are not counted. 
We assumed that the hours worked per day is 8 hours (9-5) and the number of days they come to work is already stated in the table. We need to insert the hours worked, pay rate, gross salary, deduct and net salary manually in the table. 

Steps:

step 1: Multiply 8 hours with the number of days then insert the answer in the ‘Hours Worked’ column of the employee. 
step 2: Insert 6 under the ‘Pay Rate’ column then click on ‘Calculate Salary’ to count the gross salary. The answer will appear under the button. Insert the answer under the ‘Gross Salary’ column of the employee.
step 3: Next, we can get the EPF and net salary by simply clicking the ‘Calculate EPF’ and ‘Net Salary’ buttons respectively. The answers will appear under the buttons.
step 4: Insert the EPF amount under the ‘Deduct’ column and net salary under the ‘Net Salary’ column of the employee.
step 5: Repeat steps 1-4 for all the other rows and once all the cells in the table are filled in, it is complete.

