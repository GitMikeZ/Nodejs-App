var configValues = require('./config');

module.exports = {

    getDbConnectionString: function() {
        return 'mongodb://' + configValues.uname + 
        ':' + configValues.pwd + 
        '@ds031661.mlab.com:31661/nodetodosample';
    } 

}