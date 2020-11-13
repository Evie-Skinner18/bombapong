const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema()

// put real password in env file to replace <password> or do the Azure configuration
const connectionString = 'mongodb+srv://Eves:<password>@eviescluster.25kgo.mongodb.net/<dbname>?retryWrites=true&w=majority';