import Mongoose from "mongoose";
import {mongodb} from './keys';

Mongoose.connect(mongodb.URI,{
  useNewUrlParser:true,
})
  .then(db => console.log('DB is connect'))
  .catch(err => console.log(err, ('DB id error')));