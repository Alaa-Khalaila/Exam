/*

PART 2 [SQL Queries]:

Type the correct SQL query below every question:

Q1) What is the query for displaying all the databases?

select * from database

Q2) What is the query for using a specific database?

use [databasename]

Q3) What is the query for creating a new database called `meraki`?

create meraki database

Q4) What is the query for deleting a database called `meraki`?

delete meraki database

Q5) What is the query for displaying all the tables for a database called `meraki`?

select * from meraki

Q6) What is the query for displaying the columns of a table called `users`?

select * from users

Q7) What is the query to insert information into a table called `users` that has four columns (name, email, password, age)?

insert into users where (name, email, password, age)values (name, email, password, age)

Q8) What is the query to update the `name` of a user that has `info@meraki-academy.org` as an email?

update users set (name = -----) where email = info@meraki-academy.org

Q9) What is the query to delete a user that has `info@meraki-academy.org` as an email?

delete users where email = info@meraki-academy.org

Q10) What is the query to perform a left join on two tables (users, posts) depending on the user_id? (user_id is a FK in `posts` table)

select * from users left join posts on posts.user_id = users.eser_id

Q11) What is the query to get all the users that their age ranges from 20-30 from the `users` table?

select * from users where users.age => 20 and users.age =< 30
*/