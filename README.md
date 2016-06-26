# PinBoard

[Heroku link][heroku] **Note:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

PinBoard is a web application that allows teams to build a board that has an interactive element with it to be able to pin notes/comments/ideas/pictures and has a drag and drop interaction. This project is built using Ruby on Rails and React.

By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README
- [ ] Pins
  - [ ] Multiple styles
  - [ ] Interactive drag/drop/bring to front
  - [ ] Range from text to pictures and videos
  - [ ] Adequate seed data to demonstrate the site's features
- [ ] PinBoards for organizing pins
  - [ ] Teams invites and creation
  - [ ] Creation of new pins by clicking a black spot of the board
  - [ ] Can see team members and interact with each others pins
  - [ ] Smooth, bug-free interaction
  - [ ] Adequate CSS styling
  - [ ] Adequate seed data to demonstrate the site's features
- [ ] Tags for pins
  - [ ] Allows sorting of the board to see the pins you want
  - [ ] Can update tags as needed
- [ ] Users interaction and interface
  - [ ] Have a settings page and a profile pic upload
  - [ ] Can interact with users and build friends and teams

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (1 day, W1 Tu 6pm)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin
- [ ] user profile page
- [ ] add to heroku

### Phase 2: Pins Model (text based), API, and basic APIUtil (1.5 days, W1 Th 12pm)

**Objective:** Pins can be created, read, edited and destroyed through
the API.

- [ ] create `Pin` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for pins (`PinsController`)
- [ ] jBuilder views for pins
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days, W1 F 6pm)

**Objective:** Pins can be created, read, edited and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each pin component, building out the flux loop as needed.
  - [ ] `PinsIndex`
  - [ ] `PinIndexItem`
  - [ ] `PinForm`
- [ ] save Pins to the DB

### Phase 4: Start Styling (0.5 days, W2 M 12pm)

**Objective:** Existing pages (including signup/signin) will get styled, along with a home splash page for new users or returning users.

- [ ] create a splash home page to signup/signin
- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Board (1 day, W2 Tu 12pm)

**Objective:** Pins belong to Board, and can be viewed by board.

- [ ] create `Board` model
- build out API, Flux loop, and components for:
  - [ ] Board CRUD
  - [ ] adding pins requires a board
  - [ ] moving pins to a different location on the board will persist with a refresh or the next login
  - [ ] viewing pins by board
- Use CSS to style new views

Phase 3 adds organization to the Pins. Pins belong to a Board,
which has its own `Index` view.

### Phase 6: Tags (1 days, W2 Th 12pm)

**Objective:** Pins can be tagged with multiple tags, and tags are searchable.

- [ ] create `Tag` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching tags for pins
  - [ ] adding tags to pins
  - [ ] creating tags while adding pins to boards
  - [ ] searching notebooks for pin(s) by tag
- [ ] Style new elements

### Phase 7: Create a friends and a team atmosphere (0.5 days, W2 Th 6pm)

**objective:** Enable teams to create a board and all have access to it.

- [ ] Integrate team boards
- [ ] Allow some users to have team manager abilities
- [ ] Each team member will have a different color/avatar

### Phase 8: Styling Cleanup and Seeding (1 day, W2 F 6pm)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Members can have private boards for themselves
- [ ] increased searching on pins
- [ ] advanced notification setting
- [ ] Better user preferences

[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md
