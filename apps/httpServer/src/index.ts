
import express, { type Request, type Response } from "express"
const app = express();

app.get("/signUp", (req: Request, res: Response) => {
    res.send("Hello from the signup")
})
app.get("/signIn", (req: Request, res: Response) => {
    res.send("Hello from the signIn") 
})
app.get("/chat", (req: Request, res: Response) => {
    res.send("Hello from the caht")
})
app.get("/", (req: Request, res: Response) => {
    res.send("Hello from the center")
})


app.listen(3001,()=>{
    console.log('Https server is running on port 3001');
})