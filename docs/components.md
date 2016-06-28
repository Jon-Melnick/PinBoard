## Component Hierarchy

**Bolded** components are associated with routes.


* **App**
  * LoginPage
    * NewUser/Session Form
      * NewUser/Information about app
  * NavBar
  * **User profile and boards**
    * ProfileInfo
    * Detail/preferences
    * All Boards attached to user
    * BoardForm (Add team members, fill out details, so on...)
  * **BoardIndex**
    * Search
    * Settings
    * Team Members
    * BoardIndexItem
  * **PinsIndex**
    * PinForm
    * PinIndexItem
    * **PinDetail**
      * PinTags


## Routes

* **component:** `App` **path:** `/`
  * **component:** `LoginPage` **path:** index
    * **component:** `NewUserForm` **path:** user/new
  * **component:** `ProfileContent` **path:** user
    * **component:** `BoardForm` **path:** user
  * **component:** `BoardIndex` **path:** board
    * **component:** `PinsIndex` **path:** `board/:boardId`
      * **component:** `PinDetail` **path:** `pin/:noteId`
