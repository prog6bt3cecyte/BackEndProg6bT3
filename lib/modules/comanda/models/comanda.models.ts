import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export interface IComanda extends mongoose.Document {  
    comanda: string;
    user: string;
}

 const ComandaSchema = new Schema(
    {
        comanda: {
            type: String,
            required: [true, 'comanda required'],
            unique: true
        },
        user:{
            type:String,
            required: [true, 'user required'],
        }
    }
    
 );

const Comanda = mongoose.model<IComanda>("Comanda", ComandaSchema);
export default Comanda;