module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'pineland_music_school',
    // To Stas
    // you might need to change the user name to use it
    // Insert your mySql database user name, normally it is root
    user: process.env.DB_USER || 'root',
    // Insert your mySql database password
    // Use your own password, this one might not suitable for you
    password: process.env.DB_PASS || '',
    options: {
      dialect: process.env.DIALECT || 'mysql',
      host: process.env.HOST || 'localhost',
      storage: './pineland_music_school.sql'
    }
  }
}
