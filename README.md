# Trips Database

API using Node.js, Express.js, MySQL, Sequelize, dotenv, bcrypt

![Node.js](https://img.shields.io/badge/16.15.0%20LTS-0?label=Node.js&style=for-the-badge&labelColor=white&color=black) ![Express.js](https://img.shields.io/badge/4.17.1-0?label=Express&style=for-the-badge&labelColor=white&color=black) ![Mysql2](https://img.shields.io/badge/2.2.1-0?label=Mysql2&style=for-the-badge&labelColor=white&color=black) ![Sequelize](https://img.shields.io/badge/6.3.5-0?label=Sequelize&style=for-the-badge&labelColor=white&color=black) ![dotenv](https://img.shields.io/badge/8.2.0-0?label=dotenv&style=for-the-badge&labelColor=white&color=black) ![bcrypt](https://img.shields.io/badge/5.0.0-0?label=bcrypt&style=for-the-badge&labelColor=white&color=black)

## Introduction

Trips Database stores a database of Trip entities, which are incidences of Travellers and Locations.

The app uses `express.js` to coordinate the routes, and `mysql2` to handle the database;

I made this app to learn about `sql` including creating, reading, updating and deleting actions via `mysql2`.

## Installation

| Steps                             | Details                                                                         |
| --------------------------------- | ------------------------------------------------------------------------------- |
| Install `Node.js `                | https://nodejs.org/en/                                                          |
| Install `Mysql`                   | https://dev.mysql.com/downloads/installer/                                      |
| Install `Insomnia`                | https://insomnia.rest/download                                                  |
| Clone this repo                   | `git clone`<br>https://github.com/leoelicos/bcs-13-trips-database.git           |
| Go inside                         | ` cd bcs-13-trips-database`                                                     |
| Rename `.env.EXAMPLE`             | ` mv .env.Example .env`                                                         |
| Input mysql credentials in `.env` | ` DB_USER={username}`<br>`DB_PW={password}`<br>_Don't forget to save the file!_ |
| Initialize database               | `cd db`<br>`mysql -u root -p`<br>`{password}`<br>`source schema.sql;`<br>`exit` |
| Install dependencies              | `cd ..`<br>`npm install`                                                        |
| Run seeds                         | `npm run seed`                                                                  |
| Test in Insomnia                  | `npm run seed`                                                                  |
| Also test on Heroku               | [Trips Database on Heroku](https://leoelicos-trips-database.herokuapp.com/)     |

## Usage

### Insomnia

| Steps                     | Details                                                                                                                                                                   |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Start the server          | `npm start`                                                                                                                                                               |
| Root endpoint             | GET `localhost:3001`                                                                                                                                                      |
| Search all travellers     | GET `/api/travellers`                                                                                                                                                     |
| Find a specific traveller | GET `/api/travellers/:id`                                                                                                                                                 |
| Search all locations      | GET `/api/locations`                                                                                                                                                      |
| Find a specific location  | GET `/api/locations/:id`                                                                                                                                                  |
| Add a traveller           | <p>POST `/api/travellers`</p><p>Body: `{`<br>`"name": STRING`<br>`"email": STRING`<br>`}`</p>                                                                             |
| Add a location            | <p>POST `/api/locations`</p><p>Body: `{`<br>`"location_name": INTEGER,`<br>`}`</p>                                                                                        |
| Add a trip                | <p>POST `/api/trips`</p><p>Body: `{`<br>`"trip_budget": INTEGER,`<br>`"traveller_amount": INTEGER,`<br>`"traveller_id": INTEGER,`<br>`"location_id": INTEGER,`<br>`}`</p> |
| Delete a traveller        | DELETE `/api/travellers/:id`                                                                                                                                              |
| Delete a location         | DELETE `/api/locations/:id`                                                                                                                                               |
| Delete a trip             | DELETE `/api/trips/:id`                                                                                                                                                   |

## Video Demo

https://user-images.githubusercontent.com/99461390/170417099-e0b73b9b-6b51-44e9-868f-2927e8ff943b.mp4

## Screenshots

### Screenshot: Insomnia GET /api/locations

![Insomnia GET locations](https://user-images.githubusercontent.com/99461390/170417348-6d0a4e0b-e463-4dff-b4f6-d17f0a28426f.jpg)

### Screenshot: Heroku Homepage

![Heroku Homepage](https://user-images.githubusercontent.com/99461390/170417410-e84da0b1-9b1e-4633-aed9-889aae47cbce.jpg)

### Screenshot: Heroku Render

![Heroku Render](https://user-images.githubusercontent.com/99461390/170417462-17359ca0-5eee-42a1-9181-44c35a0249ea.jpg)

## Credits

-  BCS Resources

## License

&copy; Leo Wong <leoelicos@gmail.com>

Licensed under the [MIT License](./LICENSE).
