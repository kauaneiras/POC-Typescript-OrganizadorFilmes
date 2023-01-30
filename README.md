# projeto18-poc-ts

Proof of concept for TypeScript.

<h2>About</h2>

This project is a Back-End API for a movie organizer with which you can add to a wishlist the movies you want to watch and rate those you've already watched.

<h2>How to run for development</h2>

1. Clone this repository
2. Install all dependencies

```bash
npm i
```

3. Create a local database using the `dump.sql` file
4. Configure the `.env` file using the `.env.example`
5. Run the back-end application using the command `npm run dev`

<h2>How to test the routes</h2>

1. Open the ThunderClient, Imsonia or your preferrable extesion to test routes.
2. First, you need to sign-up:

  • POST:`/signup`
    
    Body: {
      "name": "Zeno",
      "email": "zeno@email.com",
      "password": "123456",
      "confirmPassword": "123456"
      }
    
3. Then, you need to sign-in:

  • POST: `/signin`
  
    Body: {
      "email": "zeno@email.com",
      "password": "123456"
      }
    
4. After your logged in, you can access all routes from the API:

  All routes must be accessed using the following Headers, where token is the token received in the sign-in:

    ```
    Headers: {
      Authorization: Bearer token
    }
    ```

  • GET: `/movies`
  
  
  • POST: `/wishlist`

    ```
    Body: {
      "movie_id": 5
    }
    ```

  • GET: `/wishlist`
  
    Here you can see the movies that have been added to the wishlist. If the movie is watched in the future, it will be deleted from the wishlist. If you don't have anything, do a POST first.
    
    
  • POST: `/watched`

   ```
    Body: {
      "movie_id": 5
    }
    ```
  
    Here you add the movie you watched and it will be automatically deleted from the wishlist.
