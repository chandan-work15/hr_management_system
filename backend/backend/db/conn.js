const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://chandanwork15_db_user:9hJIW0uiZBqoRTNF@hrmanagementcluster.skszm08.mongodb.net/').then(()=>{
    console.log('database connected')
})