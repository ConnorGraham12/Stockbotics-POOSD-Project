
# Program Organization

Stockbotics will be a simplistic and easy to use program that will allow investors to do mock trading and allow for ease of mind as the program doesn't involve real money in any way.

- System Context Diagram
![UI diagram](https://user-images.githubusercontent.com/44210814/108262352-d291b500-7132-11eb-8ea7-6e9246d30d6f.png)



 - Container Diagram
![High Level Diagram](https://user-images.githubusercontent.com/44210814/107901700-54ef5e80-6f12-11eb-9e35-3f53727e791a.png)


 - Component Diagram
![UI diagram (1)](https://user-images.githubusercontent.com/44210814/108264117-21404e80-7135-11eb-922b-c7b52395b427.png)


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


Our security is that we do not use real money, the big upside to this is that we dont need to worry about wiring money or having hackers get access to peoples sensitive banking information. For our code level security, we will be implementing a defense style coding when handling login authentication. Through the fire base, usernames and passwords will be automatically encrypted.

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

We will have advanced error handling situations, over time updating each time we create a new feature.

# Architectural Feasibility

Our architecture like mentioned earlier is very fluid and able to change, grow, and adapt to new environments.

# Overengineering

Since we have independent parts of code working together, if one part breaks the code that has no branch to the broken code will still be able to run smoothly, while the error handles the situation.

# Build-vs-Buy Decisions

We used firebase as our databse
We used fontawesome for our fonts

# Reuse

 Firebase will act as our database that we store user data - this will be integrated in our overarching architectural design as a way to store, and encrypt user data.
Fontawesome will be used to make our UI clean, and simple

# Change Strategy

Our strategy is to have a fluid coding environment in order to allow diversity and change for our code while maintaining a core structure.
