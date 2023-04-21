# cave-a-vin-frontend
Live link: https://cave-a-vin-frontend.herokuapp.com/
CAVE A VIN (Wine cellar in French)
A virtual wine cellar, where you can find, view, edit, add and delete wines. The application is a wine search and discovery platform built using the MERN-stack. Similar to Yelp, but specifically for wines, a virtual winery.

# Technologies used:
MERN-Stack:
- Node.js
- Mongoose
- Express
- React
- Bootstrap
- Flexbox
- Heroku 

# Approach:
Adhered to the MVCR file structure: Models, Views, Controllers, and Routes
Full CRUD operations.
Included a third party API - https://sampleapis.com/api-list/wines/red and https://sampleapis.com/api-list/wines/white seeded in Atlas
Deployed online and accessible to the public via Heroku
Used Trello to help organize our workflow.
Used two git repositories (ONE for frontend and ONE for backend code)

# Wine Schema includes:
- Winery: String
- Wine: String
- Image: String url
- Location: String
- Average Rating : Number
- Number of Ratings: Number

# Routes:
Index: .get/wines/ Lists all of the current wines including Winery, wine and image
Show: .get/wines/:id Show's wine information including an image for each wine, winery, location and rating
Create: .post/wines/ creates a new wine
Update: .put/wines/:id/edit Changes values of a wine
Delete: .delete/wines/:id Removes a wine from the database
Home: .get/ Home route with a welcome message

# User Stories
- A user can view and explore database of wines and attributes.
- A user can create a new wine and add and image.
- A user can edit a wine in the cellar.
- A user can delete a wine entry.
- A user can view information about a specific wine.


# Wireframe pages when starting the project
HOME PAGE
![Screenshot 2023-04-18 at 8 51 15 PM](https://user-images.githubusercontent.com/119354325/232938190-b3c2bd66-b544-4d3d-93d2-067fd0e54df0.png)

ABOUT PAGE
![Screenshot 2023-04-18 at 8 51 33 PM](https://user-images.githubusercontent.com/119354325/232938209-4f607bc7-8295-4003-8e76-ed256cf44997.png)

INDEX PAGE
![Screenshot 2023-04-18 at 8 51 48 PM](https://user-images.githubusercontent.com/119354325/232938212-a5b867eb-f17d-455d-83c9-60209eabf48d.png)

SHOW PAGE
![Screenshot 2023-04-18 at 8 52 01 PM](https://user-images.githubusercontent.com/119354325/232938232-39a0ed6c-e4bb-424b-8f80-cc8f5e9048a7.png)

NEW PAGE
![Screenshot 2023-04-18 at 8 52 16 PM](https://user-images.githubusercontent.com/119354325/232938247-d94b4f1f-fbbb-4502-b60a-1bb997217589.png)

REGISTER/LOG IN PAGE
![Screenshot 2023-04-18 at 8 52 29 PM](https://user-images.githubusercontent.com/119354325/232938257-69cb0fae-2ba1-4dd8-9aca-98945f043302.png)


# The actual app after completing it.

<img width="1431" alt="Screenshot 2023-04-18 at 8 44 22 PM" src="https://user-images.githubusercontent.com/119354325/232937712-ce3e580f-93e6-40c2-9435-afda256a85c9.png">
<img width="1423" alt="Screenshot 2023-04-18 at 8 45 26 PM" src="https://user-images.githubusercontent.com/119354325/232937819-de947612-9b42-4477-a4fe-3f2de516c131.png">
<img width="1427" alt="Screenshot 2023-04-18 at 8 45 54 PM" src="https://user-images.githubusercontent.com/119354325/232937852-5ff4a825-a577-4a17-b612-f690e290e783.png">
<img width="1400" alt="Screenshot 2023-04-18 at 8 46 10 PM" src="https://user-images.githubusercontent.com/119354325/232937769-bff74192-c15e-412c-995c-f5ba524c00fb.png">
<img width="1420" alt="Screenshot 2023-04-18 at 8 47 16 PM" src="https://user-images.githubusercontent.com/119354325/232937783-242461dc-5acf-439d-a9cf-6785209eff7f.png">
<img width="1424" alt="Screenshot 2023-04-18 at 8 47 38 PM" src="https://user-images.githubusercontent.com/119354325/232937792-73d506e6-160d-4763-a89e-3b0426ed9ebe.png">


# Design:
CSS was used to design the project, along with flexbox and Bootstrap. 
All pages have the same header and footer to allow for ease of navigation.
Text animation was included along with the ability to enlarge images.
Media Query was used to create a more responsive design.

# Next Steps:
Create a search feature to filter the index page for a user based on the wine name.
User authentication to allow for favoriting wines and controlling access to delete and update.


# Deployed Link:

Deployed via Heroku:
- Frontend: https://cave-a-vin-frontend.herokuapp.com/
- Backend: https://cave-a-vin-backend.herokuapp.com/