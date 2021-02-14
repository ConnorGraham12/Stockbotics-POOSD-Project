Populate each section with information as it applies to your project. If a section does not apply, explain why. Include diagrams (or links to diagrams) in each section, as appropriate.  For example, sketches of the user interfaces along with an explanation of how the interface components will work; ERD diagrams of the database; rough class diagrams; context diagrams showing the system boundary; etc. Do _not_ link to your diagrams, embed them directly in this document by uploading the images to your GitHub and linking to them. Do _not_ leave any section blank.

# Program Organization

Stockbotics will be a simplistic and easy to use program that will allow investors to do mock trading and allow for 

[Model Designs]()

# Code Design

Stockbotics will be needing accounts that will branch down into investors and admins, these two inheritances will have the basic necessities of being able to create and own an account however the two will have different roles. Admins will be able to terminate investor accounts since they will have higher permissions. 

![Stockbotics UML chart](https://user-images.githubusercontent.com/44210814/107885090-40857480-6ec6-11eb-9475-177df7dc27b7.png)

# Data Design

Stockbotics uses a Firebase login, which is able to encorporate a seemless transition for login using a google authentication. We then will be encorporating APIs that will able to get live updates for our graph data to represent the stocks.

![database diagram](https://user-images.githubusercontent.com/44210814/107887536-c8727b00-6ed4-11eb-8efa-af64ec06b15e.png)

# Business Rules

You should list the assumptions, rules, and guidelines from external sources that are impacting your program design.

We are following the guideline from the LinkedIn learning and constructing the UML charts through the help of lucid charts and following their guidelines on how to format the charts.


See Code Complete, Chapter 3

# User Interface Design

You should have one or more user interface screens in this section. Each screen should be accompanied by an explaination of the screens purpose and how the user will interact with it. You should relate each screen to one another as the user transitions through the states of your application. You should also have a table that relates each window or component to the support using stories. 

insert photos of login page

See Code Complete, Chapter 3

# Resource Management

See Code Complete, Chapter 3

# Security

See Code Complete, Chapter 3

Our security is that we do not use real money, the big upside to this is that we dont need to worry about wiring money or having hackers get access to peoples sensitive banking information.

# Performance

See Code Complete, Chapter 3

# Scalability

See Code Complete, Chapter 3

# Interoperability

See Code Complete, Chapter 3

# Internationalization/Localization

See Code Complete, Chapter 3

# Input/Output

See Code Complete, Chapter 3
The input / output for this code would be the APIs calling for the google login authentication and the stock API calling for the specific data on a stock.

# Error Processing

See Code Complete, Chapter 3
For error handling we will prompt the page to show that it was an invalid search for a stock, or 

# Fault Tolerance

See Code Complete, Chapter 3

# Architectural Feasibility

See Code Complete, Chapter 3

# Overengineering

See Code Complete, Chapter 3

# Build-vs-Buy Decisions

This section should list the third party libraries your system is using and describe what those libraries are being used for.

See Code Complete, Chapter 3

# Reuse

See Code Complete, Chapter 3

# Change Strategy
