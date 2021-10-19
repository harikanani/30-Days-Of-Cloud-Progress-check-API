# 30-Days-Of-Cloud-Progress-check-API
30 Day Of Cloud Progress Check API to track your progress in 30-DOC.

## API Endpoints

1. `/find-data` :

    track your progress by passing `email` in body.

    >**Method:** GET

    >**Body:**
    ```javascript
    {
      "email" : "you_email"
    }
    ```


    **Response - 200 OK**
    ```javascript
      {
          "status": "success",
          "data": {
            "Track1": "2",
            "Track2": "3"
          }
      }
    ```


    **Response - 404 Not Found**
    ```javascript
      {
        "status": "error",
        "message": "Email not found"
      }
    ```

    **Response - 500 Internal Server Error**
    ```javascript
      {
	      "status": "error",
	      "message": "Something went wrong!",
      }
    ```

2. `/leaderboard` :

    Get Leaderboard of Institution
    >**Method:** GET

    **Response - 200 Ok**
    ```javascript
    {
      "status": "success",
      "data": [
          {
              "Student Name": "Student Name,
              "Student Email": "studentemail@gmail.com",
              "Institution": "Institute Name",
              "Enrolment Date & Time": "date-time timestamp",
              "Enrolment Status": "All Good",
              "Qwiklabs Profile URL": "public profile url",
              "# of Skill Badges Completed in Track 1": "6",
              "# of Skill Badges Completed in Track 2": "6",
              "totalQuest": 12
          },
          {
              "Student Name": "Student Name,
              "Student Email": "studentemail@gmail.com",
              "Institution": "Institute Name",
              "Enrolment Date & Time": "date-time timestamp",
              "Enrolment Status": "All Good",
              "Qwiklabs Profile URL": "public profile url",
              "# of Skill Badges Completed in Track 1": "5
              "# of Skill Badges Completed in Track 2": "0,
              "totalQuest": 5
          },
	    ]
    }
    ```

    **Response - 500 Internal Server Error**
    ```javascript
      {
	      "status": "error",
	      "message": "Something went wrong!",
      }
    ```
