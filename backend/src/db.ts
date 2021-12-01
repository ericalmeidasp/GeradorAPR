const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId
// import { MongoClient } from 'mongodb'
import { APR, Risk } from './typagem'

const uri =
  'mongodb+srv://root:dbapr@clusterapr.ruq25.mongodb.net/db_apr?retryWrites=true&w=majority'
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// funções APRs

export async function deleteAll() {
  try {
    await client.connect()
    const dbName = 'db_aprs'
    const db = client.db(dbName)
    const col = db.collection('apr_list')
    const myDoc = col.deleteMany()
  } catch (error) {
    console.log(error)
  }
}

export async function getNumber(id: string) {
  try {
    await client.connect()
    const dbName = 'db_aprs'
    const db = client.db(dbName)
    const col = db.collection('apr_list')
    const o_id = new ObjectId(id)
    const myDoc = await col.findOne({ _id: o_id })
    console.log(myDoc)
    return myDoc
  } catch (err) {
    console.log(err)
  } finally {
    await client.close()
  }
}

export async function getAllAPRs() {
  try {
    await client.connect()
    console.log('Connected correctly to server')
    const dbName = 'db_aprs'
    const db = client.db(dbName)
    const col = db.collection('apr_list')
    const myDoc = await col.find().sort({ number: -1 }).toArray()

    return myDoc
  } catch (err) {
    console.log(err)
  } finally {
    await client.close()
  }
}

export async function GetNewAprOnDB(dataApr: APR) {
  try {
    await client.connect()
    console.log('Connected correctly to server')

    const dbName = 'db_aprs'
    const db = client.db(dbName)
    const col = db.collection('apr_list')
    const p = await col.insertOne(dataApr)
    let y: any

    return new Promise(resolve => {
      setTimeout(() => {
        y = `${p.insertedId}`
        resolve(y)
      }, 1200)
    })
  } catch (err) {
    console.log(err)
  }
}

// FUNÇÕES RISCOS

export async function getAllRisks() {
  try {
    await client.connect()
    console.log('Connected correctly to server')
    const dbName = 'db_aprs'
    const db = client.db(dbName)
    const col = db.collection('risks')
    const myDoc = await col.find().toArray()
    return myDoc
  } catch (err) {
    console.log(err)
  } finally {
    await client.close()
  }
}

export async function PostNewRiskOnDB(risk: Risk) {
  try {
    await client.connect()
    console.log('Connected correctly to server')

    const dbName = 'db_aprs'
    const db = client.db(dbName)
    const col = db.collection('risks')
    const p = await col.insertOne(risk)

    return risk
  } catch (err) {
    console.log(err)
  }
}
