# Week 6 practice assessment

(This is a markdown .MD file, if you are reading this in vs-code, right click the file and select `Open Preview`)

## What are we building?

We are building a webapp where people can have their own space and post stories in it. It is called `Cool story bro`. It has multiple pages

- Signup & Login pages (already implemented in the starter kit)
- A home page with a list of spaces of different users
- A detail page for a space where you can view a users' stories
- A page where you can view your own space and stories
- A form where you can edit your space
- A form where you can post a story

## Templates

As a starting point, you must use the following react-redux & express templates where the login / signup flow has already been implemented.

Instructions on how to use the templates can be found on the repositories themselves:

- [Frontend starter](https://github.com/Codaisseur/react-redux-template)
- [Backend starter](https://github.com/Codaisseur/new-express-template)

## Wireframe

You will be provided with a wireframe that shows an overview of the app along with this README.

## Database Entities

### Space

| key             | data type | required | notes                                                               |
| --------------- | --------- | -------- | ------------------------------------------------------------------- |
| id              | Integer   | yes      | Already added by model:generate                                     |
| title           | String    | yes      |                                                                     |
| description     | Text      | no       |                                                                     |
| backgroundColor | String    | no       | This will always be a hexcode and default should be #ffffff (white) |
| color           | String    | no       | This will always be a hexcode and default should be #000000 (black) |
| createdAt       | Date      | yes      | Already added by model:generate                                     |
| updatedAt       | Date      | yes      | Already added by model:generate                                     |
| userId          | Integer   | yes      | Foreign key (references a user)                                     |

**Relations:**

- space belongs to user
- user has one space

---

### Story

| key       | data type | required | notes                            |
| --------- | --------- | -------- | -------------------------------- |
| id        | Integer   | yes      | Already added by model:generate  |
| name      | String    | yes      |                                  |
| content   | Text      | no       |                                  |
| imageUrl  | String    | no       |                                  |
| createdAt | Date      | yes      | Already added by model:generate  |
| updatedAt | Date      | yes      | Already added by model:generate  |
| spaceId   | Integer   | yes      | Foreign key (references a space) |

**Relations:**

- story belongs to space
- space has many story

---

| Criteria                                                                                          | Points |
| ------------------------------------------------------------------------------------------------- | ------ |
| Server contains sequelize models and migrations for Space & Story                                 | 2      |
| Records should not be allowed to be created if the fields marked as required contain empty values | 2      |
| User, Space and Story models are correctly related                                                | 2      |
| Seeders are present to create at least 2 spaces and 4 stories                                     | 2      |
| Total                                                                                             | 8      |

✅ Once you done setting up models, migrations, seeds and relations, you don't need to read this file anymore.
