Admin Panel Issue - Product Addition
I am currently encountering an issue with my admin panel where new products are not being added and displayed on the frontend. Despite implementing the necessary backend routes and frontend logic for adding products, the data does not seem to propagate correctly to the frontend components.

Details:

The backend successfully processes the product addition request and stores the product data in the MongoDB database.
However, the newly added products are not appearing in the frontend components (NewCollections and Popular), even though the correct API endpoints are being called.
Actions Taken:

Verified the backend API endpoints to ensure they are returning the correct data.
Updated the frontend components to handle the data properly, including the use of unique keys (_id from MongoDB) for React’s rendering optimization.
Tested the application but continue to face the issue where the newly added products do not display as expected.
I will continue to troubleshoot this issue, but I wanted to make you aware of the current status. Any additional guidance or suggestions would be greatly appreciated
