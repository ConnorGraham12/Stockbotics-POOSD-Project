Populate each section with information as it applies to your project. If a section does not apply, explain why. Include diagrams (or links to diagrams) in each section, as appropriate.  For example, sketches of the user interfaces along with an explanation of how the interface components will work; ERD diagrams of the database; rough class diagrams; context diagrams showing the system boundary; etc. Do _not_ link to your diagrams, embed them directly in this document by uploading the images to your GitHub and linking to them. Do _not_ leave any section blank.

# Program Organization

Stockbotics will be a simplistic and easy to use program that will allow investors to do mock trading and allow for ease of mind as the program doesn't involve real money in any way.

![High Level Diagram](https://user-images.githubusercontent.com/44210814/107901700-54ef5e80-6f12-11eb-9e35-3f53727e791a.png)


# Code Design

Stockbotics will be needing accounts that will branch down into investors and admins, these two inheritances will have the basic necessities of being able to create and own an account however the two will have different roles. Admins will be able to terminate investor accounts since they will have higher permissions. 

![Stockbotics UML chart](https://user-images.githubusercontent.com/44210814/107885090-40857480-6ec6-11eb-9475-177df7dc27b7.png)

# Data Design

Stockbotics uses a Firebase login, which is able to encorporate a seemless transition for login using a google authentication. We then will be encorporating APIs that will able to get live updates for our graph data to represent the stocks.

![database diagram](https://user-images.githubusercontent.com/44210814/107887536-c8727b00-6ed4-11eb-8efa-af64ec06b15e.png)

# Business Rules

For our business rules, instead of using the traditional waterfall method,  we are following the scrum layout for organizing each week into a sprint, which involves user stories, requirments, and code for each week.

![Agile-Scrum-Process-2](https://user-images.githubusercontent.com/44210814/107902079-65540900-6f13-11eb-9ff4-a9fcc8d2423f.png)


# User Interface Design
 
This explains what stockbotics is and shows off a clear landing page.
![landingpage](https://user-images.githubusercontent.com/44210814/107903186-8702bf80-6f16-11eb-84d8-d10006e8647a.png)


# Resource Management

Since we will be connecting to 2 data bases in our code, we will be conserving our resources by using only one API call from the first time you log in, after that the website will remember you and you won't need to login again. For our second data-base, for our stocks we will be doing only 5 API calls a minute.

# Security


Our security is that we do not use real money, the big upside to this is that we dont need to worry about wiring money or having hackers get access to peoples sensitive banking information. For our code level security, we will be implementing a defense style coding when handling login authentication.

# Performance

We will be implementing performance enhancing features at the cost of memory. We want our users to get an endepth dive of what its like to trade on the stock market. The data internally externally will be stored from data bases while the internal data will be stored on the fire base data base, using react hooks.

# Scalability

We have a fluid architecture that is able to enhance the farther along we get through the design and building phase. Our site will be able to handle an influx of new users by using the fire base data base, which would lead to more transactions, bandwidth, and traffic to the website.

# Interoperability

We will not be sharing our data with outside sources, we want to use this site as a safe space for users to learn the stock market.

# Internationalization/Localization

Since Stockbotics uses the US market data, as of now we don't plan on doing translations or branching out of the US.

# Input/Output

The input / output for this code would be the APIs calling for the google login authentication and the stock API calling for the specific data on a stock.

# Error Processing

See Code Complete, Chapter 3
For error handling we will prompt the page to show that it was an invalid search for a stock, or if a web page isnt valid, we would inform the user that this was an invalid page and send them back to the landing page.

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

