import express from "express";
import cors from "cors";
import { APR, User } from "./typagem";
import { generatePlan } from "./generateAPR/makeAPR";
import { deleteAll, getAllAPRs, GetNewAprOnDB, getNumber } from "./db";

const app = express();

app.use(express.json());
app.use(cors());

const dataApr: APR[] = [];

const users: User[] = [];

// ROTAS APRS

app.get("/deleteall", (req, res) => {
  deleteAll()
  return res.json({msg: 'deletedAll'})
} )

app.get("/download/:number", (request: any, response: any) => {
  let number = request.params.number;
  let url = `./src/generateAPR/APRs/${number}/APR${number}.ods`;
  return response.download(url);
});

app.get("/aprs", async (request: any, response: any) => {
  const aprs = await getAllAPRs()
  return response.json(aprs)
})

app.get("/apr/:id", async (request: any, response: any) => {
  let apr = await getNumber(request.params.id)
  response.json(apr)
})

app.post("/newapr", async (request: any, response: any) => {
  const { local, equip, description, epis, risks } = request.body;

  const newDate = new Date();
  const date: string =
    newDate.getDate() +
    "/" +
    (newDate.getMonth() + 1) +
    "/" +
    newDate.getFullYear();

  const APR: APR = { date, local, equip, description, epis, risks };
  console.log(APR)
  const idApr:any = await GetNewAprOnDB(APR);
  const newAprWithNumber = await getNumber(idApr)
  generatePlan(newAprWithNumber);

  return response.json(newAprWithNumber);
});

// ROTAS RISKS

app.get("/risks", async (request: any, response: any) => {
  const risks = [{
    name: 'oi',
    acidente: 'ola',
    protecao: 'oie'
  },
  {
    name: 'o1i',
    acidente: 'ol1a',
    protecao: 'o1ie'
  },
  {
    name: 'o2i',
    acidente: 'o2la',
    protecao: 'o2ie'
  }]
  return response.json(risks)
})



app.listen("3333", () => {
  console.log("Backend start");
});
