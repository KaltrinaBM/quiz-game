<h1 align="center">General Knowledge Quiz</h1>

This is a General Knowledge Quiz game website which has questions with single correct answer. This website tests user's knowledge and let users have fun.

## User Experience (UX)

-   ### User stories

    -   #### First Time Visitor Goals

        1. As a First Time Visitor, I want to see the information for the game, with scores for the correct answers.
        2. As a First Time Visitor, I want to be able to easily navigate throughout the site to find the options of the game.
        3. As a First Time Visitor, I want to have more questions and knowledge while having fun with this quiz which has a timer to answer the questions.

    -   #### Frequent User Goals
        1. As a Frequent User, I want to check to see if there are any newly added questions and challenge myself.
        2. As a Frequent User, I want to check to see if the website has been updated with new categories.

-   ### Design
    -   #### Colour Scheme
        -   The two main colours used are teal and flax.
    -   #### Typography
        -   The Lato font is the main font used throughout the whole website with Sans Serif as the fallback font in case for any reason the font isn't being imported into the site correctly.
    -   #### Imagery
        -   A small background image is added to catch the user's attention. 

*   ### Wireframes

    -   Home Page Wireframe

    ![wireframe](/assets/images/wireframe.png)

    -   Mobile Wireframe 

    ![phone](/assets/images/phone.png)

## Technologies Used

### Languages Used

HTML, CSS, JavaScript.

### Frameworks, Libraries & Programs Used

1. [Hover.css:](https://ianlunn.github.io/Hover/)
    - Hover.css was used on the buttons.
1. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import fonts used on this website.
1. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used for the icons.
1. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
1. [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the [wireframes](https://github.com/) during the design process.
    
## Features

-   Responsive on all device sizes

![responsive](/assets/images/responsive.PNG)

-   Interactive elements

### Existing Features

- __The quiz heading and logo__

  - The heading and the logo are easy to see when user enter the page.

![Logo](/assets/images/Logo.PNG)

- __The Game Area__

  - This section has the question and 4 clickable buttons under the question, so the user can select one which will be checked if the answer was correct or not. If the answer is correct, the score will be increased by 1, if the answer is incorrect the score will be the same and the correct answer will be provided for the user. Also, there is 20 minutes countdown time for 20 questions to be completed.

![game](/assets/images/game.PNG)

- __The Score Area and Number of the Questions__

  - The scores will be updated each time user selected correct answer, and the number will show how many questions are left.

![score](/assets/images/score.PNG)

- __The Help PopUp and Reset Button__
   - The user can click on the help icon to see a Pop up with infomration about the game, and click on Reset button to reset to default state.
![help_reset](/assets/images/help_reset.PNG)

### Features Left to Implement

- To have an option so user can enter a username and scores to be stored when returning.

## Testing

- HTML
    - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fkaltrinabm-quizgame-fppqhtd3fg4.ws-eu77.gitpod.io%2F#textarea)
- CSS
    - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator#css)
- JavaScript
    - No errors were found when passing through the official [Jshint validator](https://jshint.com/)
      - The following metrics were returned: 
      - There are 22 functions in this file.
      - Function with the largest signature take 3 arguments, while the median is 0.
      - Largest function has 18 statements in it, while the median is 3.5.
      - The most complex function has a cyclomatic complexity value of 3 while the median is 1.

- Lighthouse results

![lighthousePP2](/assets/images/lighthousePP2.PNG)

### Testing User Stories from User Experience (UX) Section

-   #### First Time Visitor Goals

    1. As a First Time Visitor, I want to see the information for the game, with scores for the correct answers.

        Upon entering the site, the user has 4 options to select the correct answer based on the question, has the reset button to reset the time and the questions, and has the help button for the information about the quiz.

    2. As a First Time Visitor, I want to be able to easily navigate throughout the site to find the options of the game.

        It is easy to navigate throughout the site, there are few options clearly labeled and infomration on the game.

    3. As a First Time Visitor, I want to have more questions and knowledge while having fun with this quiz which has a timer to answer the questions.
        The quiz has 20 questions and a timer with 20 minutes. New question are being added from Trivia Api each time the website is refreshed.

-   #### Returning Visitor Goals

    1. As a Frequent User, I want to check to see if there are any newly added questions and challenge myself.
        Random questions are added each time user refreshes the page

    2. As a Frequent User, I want to check to see if the website has been updated with new categories.
        New categories for the quiz may be added in the future.

### Further Testing

-   The Website was tested on Google Chrome and Internet Explorer.
-   The website was viewed on a variety of devices such as Desktop, Laptop, Andorid phones.
-   A large amount of testing was done to ensure that all functions are working as intended.
-   Family members were asked to review and play the game to point out any bugs and/or user experience issues.

### Known Bugs

-   On some mobile devices the help icon and reset buttons are not in line, and the background image was removed due to bugs.
-   Question number couldn't be pushed to the middle of the page because of the image position. There were bugs with Javascript functions not perfroming as expected, and those have been fixed one by one. 


### Unfixed Bugs

-   There are features that could not be implemented due to the deadline, and some bugs with the CSS file that should be fixed. Also the responsive design for different devices should be improved.

## Deployment

The live link can be found here - https://kaltrinabm.github.io/quiz-game/

## Credits

### Code

-   Questions are being retrieved from [The Trivia Api](https://the-trivia-api.com/docs/)
-   The resource of the code for countdown time can be found here: (https://contactmentor.com/build-30-minutes-countdown-timer-js-sound/)
-   The icons in the footer were taken from [Font Awesome] (https://fontawesome.com/)

### Media
-   The small background image and logo are free to use and no authour could be found.

### Acknowledgements

-   My Mentor for continuous helpful feedback.

-   Tutor support at Code Institute for their support.