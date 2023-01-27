# LIDP Full Stack Challenge 2023:

## How to Run the Application:
1. Start the backend:
   - Change directory to `/server`
   - Run: 
   `gradle build`
   - Navigate to and run the main method of: `ChallengeApplication.java`     
         (Located on server/src/main/java/com/example/challenge/ChallengeApplication.java)
   - Populate database: Navigate to `http://localhost:9690/h2-management-console/` and manually populate the database with the 2 tables by running the SQL code from `schema.sql` (first) and `data.sql` (second).       
        (These SQL files are located on server/src/main/resources/)
    
    
2. Start the frontend:
   - Change directory to `/ui`
   - Run: `gradle ngServe`
    
    
3. Navigate to: `http://localhost:9090/`


## Functionality:
1. Browsing through posts:
   Scroll through the horizontal list of posts. Posts are loaded 4 at a time for scalability. As you scroll, more groups of 4 posts are loaded in.
   ![image](https://user-images.githubusercontent.com/40399062/215124141-811767bd-98c3-4139-8b1c-7f01b97a44f4.png)

   
2. Comment on posts:
   Adding a comment on posts can be done on their "light" view (on the default small card) and on the "focus" view (activated for each post when their "View Post" button is pressed). A username can also be added (optional, if none is added, the default is "AnonymousUser"). Comments are visible on the "focus" view.     
   Comments are also loaded 4 at a time for scalability. As you scroll through a post's comments, more groups of 4 are loaded in.
   ![image](https://user-images.githubusercontent.com/40399062/215124313-af815554-39aa-4a02-84fb-16562d3e1717.png)

   
3. Replying and Deleting comments:
   Comments have a corner for user actions. If you hover over a comment's top-right corner (where their timestamp is displayed), it will change to display the possible actions for a comment: Deletion and replying. Only top-level comments can be replied to. All comments can be deleted. Deleting a parent comment will automatically delete any children (reply) comments beneath it.
