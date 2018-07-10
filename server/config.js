let config = {
    dbUser: 'eminem',
    dbPassword: '3min3m',
    dbUrl: 'ds121871.mlab.com:21871/webtrekk',
    dbType: 'mongodb'
}

module.exports = {
    connectionUrl: () => `${config.dbType}://${config.dbUser}:${config.dbPassword}@${config.dbUrl}`
}