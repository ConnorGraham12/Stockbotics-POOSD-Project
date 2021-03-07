
# Program Organization

Stockbotics will be a simplistic and easy to use program that will allow investors to do mock trading and allow for ease of mind as the program doesn't involve real money in any way.

- System Context Diagram
![UI diagram](https://user-images.githubusercontent.com/44210814/108262352-d291b500-7132-11eb-8ea7-6e9246d30d6f.png)

The System Context Diagram dives into the basic framework of how our website operates, The user will be given stocks given from the internet, which can then be setup via googles email system to update the user when a specificed stock was going up or down.

 - Container Diagram
![High Level Diagram](https://user-images.githubusercontent.com/44210814/107901700-54ef5e80-6f12-11eb-9e35-3f53727e791a.png)

The Container Diagram dives more in-depth for charts and shows off the use of the web pages and the functionality behind them. The user / investor is able to access a certain web page from the website, whcih leads into an API application that out sources its data which in our case will be stocks from Yahoo stocks database. There is another database from google that is setup through firebase for easy login access only requiring you to have a google account. The API application then leads into the mainframe investment system and again the emailing system that will update the user on certain stock data that he or she is interested in. The mainframe investment system is where we store all the information about the selected stocks.


 - Component Diagram
![component](https://user-images.githubusercontent.com/44210814/108637508-fb7ab880-7458-11eb-8b9f-d4585c1cfe60.png)

The Component Diagram dives deep into how everything on the website is being handled from a backend perspective. We branch off into three nodes which in this case for Stockbotics would be Signin Controller, Reset Password Controller, and the account summary. The first two nodes are all being handled by the firebase login system we implemented which would be on googles end however the 3rd node being the account summary provides the summary of the user / investors stock account which is handled on a seperate database. On the next layer we have  our components which in this case would be Security Component, Email Component, and the Main frame account. The security component provides functionality which is related to signing into your account, being able to change your password, and even a light form of encryption will be implemented on each account. Again the Email component will update the user / investor for certain data he or she is interested in. The main frame account holds the information of the current stock being used. The final layer which would be the source of the data or the functionality of the prior levels, for this we have the firebase and google database, the emailing system, and the how the mainframe is implemented. Firebase stores the users account information, User authentication, credentials, and access logs. The email system uses googles email system, and the main frame holds all the information of the user / investor which includes: transactions, net, profit, net lose, and total.



# Code Design

Stockbotics will be needing accounts that will branch down into investors and admins, these two inheritances will have the basic necessities of being able to create and own an account however the two will have different roles. Admins will be able to terminate investor accounts since they will have higher permissions. 

![Stockbotics UML chart](https://user-images.githubusercontent.com/44210814/107885090-40857480-6ec6-11eb-9475-177df7dc27b7.png)

# Data Design

Stockbotics uses a Firebase login, which is able to encorporate a seemless transition for login using a google authentication. We then will be encorporating APIs that will able to get live updates for our graph data to represent the stocks.

![database diagram](https://user-images.githubusercontent.com/44210814/107887536-c8727b00-6ed4-11eb-8efa-af64ec06b15e.png)

# Business Rules

Users need a valid gmail to sign up for StockBotics

Team members shall properly allocate their time to working on the Agile Process and Programming

Users data will be encrypyted via Firebase services

Team members will be present weekly sprint meetings

Team members will take turns being the Scrum master

Work will be properly divided between team members

![Agile-Scrum-Process-2](https://user-images.githubusercontent.com/44210814/107902079-65540900-6f13-11eb-9ff4-a9fcc8d2423f.png)


# User Interface Design
 
This shows off the layout of the stockbotics website.
![UI Diagram](https://user-images.githubusercontent.com/44210814/108638647-3af7d380-745e-11eb-9722-de923324d871.png)


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
