
Sequelize is the promise-based Node.js ORM tool for different type of DB like Postgres, MySQL, MariaDB, SQLite, Microsoft SQL Server, Oracle DB.
It features solid transaction support, relations, eager and lazy loading, read replication and more.


## Setup in Details

You can find the executed steps in the following snippet. You should be able to adjust those
steps according to your needs. 

#### Sequelize Setup

Now we will install all sequelize related modules.

```bash
# install ORM , CLI and psql dialect
npm install --save sequelize@6.37.3
npm install --save sequelize-cli@6.6.2
npm install --save pg@8.12.0

# generate models
node_modules/.bin/sequelize init
node_modules/.bin/sequelize model:create --name User --attributes username:string
```

You will now have a basic express application with some additional directories
(config, models, migrations). Also you will find the migrations and models which is `User`.

