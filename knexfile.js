// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/db.sqlite3'
    },
    migrations: {
			directory: "./database/migrations",
			tableName: "knex_migrations",
		},
		seeds: {
			directory: "./database/seeds",
    },
    useNullAsDefault: true
  },

	production: {
		client: "MySQL",
		connection: {
			database: "friendBook",
			user: "user1",
			password: "user1",
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			directory: "./database/migrations",
			tableName: "knex_migrations",
		},
		seeds: {
			directory: "./database/seeds",
		},
	},
};
