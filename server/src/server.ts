import express from "express";
import cors from "cors";
import mysql from 'mysql';
import bcrypt from 'bcryptjs';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}))
const db = mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'',
    database:'sujet'
});


// GET LES FORMATEURS A PARTIR DE TABLE FORMATEUR

app.get("/getFormateurs",(req,res)=>{
    db.query('SELECT * FROM formateur',(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(result);
        }
    })
})

//GET LES FORMATIONS A PARTIR DU TABLE FORMATION

app.get("/getFormations",(req,res)=>{
    db.query('SELECT * FROM formation',(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(result);
        }
    })
})

//GET QUELQUE COLONNE DU TABLE FORMATEUR

app.get("/getFormateursDetails",(req,res)=>{
    db.query('SELECT id,name,surName FROM formateur ',(err,result)=>{
        if(err)
        {
            console.log(err);
            
        }
        else
        {
            res.send(result);
        }
    })
})

//GET LES INFORMATIONS DE L'ADMINISTRATEUR DU TABLE ADMIN

app.get("/getAdmin",(req,res)=>{
    db.query('SELECT * from admin WHERE id=1',(err,result)=>{
        if(err)
        {
            console.log(err); 
        }
        else
        {
            res.send(result);
        }
    })
})


//AJOUTER UN FORMATEUR


app.post("/createFormateur",(req,res)=>{
    const {name, age, surName, adr, mail,phoneNum} = req.body
    db.query('INSERT INTO formateur(name,age,surName,adr,mail,phoneNum) VALUES (?,?,?,?,?,?)',[name,age,surName,adr,mail,phoneNum],(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(result);
        }
    })
});


//AJOUTER UNE FORMATION


app.post("/createFormation",(req,res)=>{
    const {name,date,duration,formateur} = req.body;
    db.query('INSERT INTO formation(name,date,duration,formateur) VALUES (?,?,?,?)',[name,date,duration,formateur],(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(result);
        }
    })
})


//MODIFIER LE MDP DE L'ADMIN


app.put("/updateAdminPassword",(req,res)=>{
    const id=req.body.id;
    const password=req.body.password;
    db.query('UPDATE admin SET password=? WHERE id=?',[password,id],(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(result);
        }
    })
})


//MODIFIER UN FORMATEUR


app.put("/updateFormateur",(req,res)=>{
    const id=req.body.id;
    const name=req.body.name;
    const age=req.body.age;
    const surName=req.body.surName;
    const adr=req.body.adr;
    const mail=req.body.mail;
    const phoneNum=req.body.phoneNum;
    db.query('UPDATE formateur SET name=?,age=?,surName=?,adr=?,mail=?,phoneNum=? WHERE id=?',[name,age,surName,adr,mail,phoneNum,id],(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(result);
        }
    })
})


//MODIFIER UNE FORMATIONS


app.put("/updateFormation",(req,res)=>{
    const id=req.body.id;
    const name=req.body.name;
    const duration=req.body.duration;
    const date=req.body.date;
    const formateur=req.body.formateur;
    db.query('UPDATE formation SET name=?,duration=?,date=?,formateur=? WHERE id=?',[name,duration,date,formateur,id],(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(result);
        }
    })
})


//SUPPRIMER UN FORMATEUR


app.delete("/deleteFormateur/:id",(req,res)=>{
    const id=req.params.id;
    db.query('DELETE FROM formateur WHERE id=?',id,(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(result);
        }
    })
})


//DELETE UNE FORMATION


app.delete("/deleteFormation/:id",(req,res)=>{
    const id=req.params.id;
    db.query('DELETE FROM formation WHERE id=?',id,(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(result);
        }
    })
})



//CREATION D'UN COMPTE USER


app.post("/userSignuP",async (req,res)=>{
    const {fullname,age,mail,password} = req.body;
    const hash= await bcrypt.hash(password,10);
    db.query('INSERT INTO users(fullname,age,mail,password) VALUES (?,?,?,?)',[fullname,age,mail,hash],(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(result);
        }
    })
})


//AUTHENTIFICATION D'UN USER


app.post("/userLogIn",(req,res)=>{
    const mail=req.body.mail;
    db.query('SELECT * FROM users WHERE mail=?',mail,async (err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(result);
        }

    })
})


//GET USER A PARTIR D'UN ID


app.post("/userID",(req,res)=>{
    const id=req.body.id;
    db.query('SELECT fullname,age,mail,id FROM users WHERE id=?',id,(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(result);
        }
    })
})



const port = 5000;
app.listen(port,()=>{
    console.log("Website served on port "+5000);
})