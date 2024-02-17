import mongoose from 'mongoose'

const URI ="mongodb+srv://Pedro:inter1909@banconode.9yailgl.mongodb.net/?retryWrites=true&w=majority";

const databaseConnection = async () => {
  if(!global.mongoose){
    mongoose.set('strictQuery', false)
    global.mongoose = await mongoose.connect(URI);
  }
}
export default databaseConnection
