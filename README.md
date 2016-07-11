# My PinBoard

[My Pinboard live][mypinboard]

[mypinboard]: http://www.mypinboard.site

My PinBoard is a web application that allows you to create reminders, notes, ideas, quotes, collaborations, share pictures and much more all on a cork board interface. It has been developed using Ruby on Rails as the backend and with React and Flux framework on the front.

## Features & Implementation


### Single-Page App

My Pinboard app has been created to be a single page app with hashhistory pushes and using ajax calls to the db and storing the information in stores on the front end for quicker interface reactions. This allows the app to be more responsive as any further requests for information is done so in a compact json data request, making the site generally faster.


### Profile Page

  The dashboard allows you to update your user color preferences, choose the cork board background of your profile page, upload a user image, create private or team boards, get quick details of your current active boards, and delete them or hide them to clean up your dash.

  Browsing your active boards are done seamlessly and when you're ready to start another project or collaboration its as easy as filling out the form that appears when you click 'New Board'. If you don't invite anyone else you will be able to see it in your private board section, otherwise it will be with the Team board. Hovering over any of the board pop up a quick detail pain for a breif overview of its members, the tile, and the description of the board.

  Using the power of react and flux, any creation of boards or altering of your preferences are done quickly and little rendering is required to make the changes.

  When a user is created and put into the User table they also create a linked user preference row in the appropiate table. User nav color and board are automatically set but the user color is randomly generated.
  Boards can be but not required to be created with a title and a body. They too are set at a default background but you can choose your preference before its created. Its linked to the creator but any member you add, along with the creator, are put into a team members table to create association to the board.


### Boards and the pins

  From within the board interface you are greeted with a sidebar that allows you to see members and invite more on the fly, create a new pin, search/filter the pins, and change the settings of the board (such as title, description, add members, and change the color of the background). Clicking on the the members name just takes you to their profile page where you only see their profile details and picture, nothing more.

  Pins come currenlty in two forms; text and pictures. When choosing either one you can write a title, body, pick a color for the tack, and add tags. The difference from their is that with a text pin you get to choose between 15 background images. For the image pins you can choose to either upload a portrait or landscape format and then using cloudinary you can pin the picture to the board. The pins have a few functions themselves. You can drag and drop them anywhere within the border of the corkboard, as long as you hold it by the tack. double clicking the pin itself will bring it to the front, you can zoom into any pin incase the body was too long or if you want a close up of a picture. Lastly you may edit the details of any pin that is yours, or delete it.

  The search function allows you to search the pins by team member, date of creation, type (text or picture), and lastly by tags.

  In the database boards have all their preferences already, and they have an association to each pin that has a foreign key with their id. This allows quick and easy grabbing of the boards pins. When a pin is created it has a default position, and its zIndex is the current highest one. After letting the pin go it updates its position and zIndex in the db allowing it to persist if you need to refresh the page or come back. When the pin is created, all the tags are created in the pins controller class so it uses only one ajax request to the database instead of two.



## Future Directions for the Project

I feel as there is always more to do and more features that some people would like to have. I m=plane to implement a comments section soon and shortly after that allowing boards to be public so anyone can see them and contribute to them.

Few other features I plan to implement is to allow people to friend and be able to quickly add them to your board, see notifications of what is new on the boards such as a quick note on your dashboard in the details pane of the board and also in the team members section of the board navbar.

Also more customizations, specifically the collection of boards on your profile. Would be nice to be able to choose their order and the graphic for the board thumbnail graphic.
