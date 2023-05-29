
import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
    username:{
        type:String, required:true, unique:true
    },
    ingredients:[{
        type:String, required:true
    }],
    instructions:{
        type:String, required:[true,"enter the instruction to cook"]
    },
    imageUrl:{
        type:String, required:true
    },
    cookingTime:{
        type:Number, required:true
    },
    userOwner:{
        type:mongoose.Schema.Types.ObjectId, required:true, ref:"users"
    },

})

export const RecipeModel = mongoose.model("recipes", RecipeSchema)