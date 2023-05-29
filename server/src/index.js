import express from "express"
import cors from "cors"
import mongoose  from "mongoose"
import { RecipesRouter } from "./routes/recipes.js"
import {UserRouter} from "./routes/users.js"

const app = express()

app.use(express.json()); 
app.use(cors());

app.use("/auth",UserRouter)
app.use("/recipes",RecipesRouter)

mongoose.connect("mongodb+srv://michaelolowoyo17:password1234@recipe.azzoonm.mongodb.net/recipe?retryWrites=true&w=majority")

app.listen(3001, ()=>console.log("SERVER STARTED"))

