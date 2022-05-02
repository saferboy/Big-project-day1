import Brand from "../model/brand.model"
import client from "./client"

async function create(brand: Brand) {
    let sql = 'INSERT INTO brand (name) VALUES($1)'
    await client.query(sql, [brand.name]) 
}

async function findAll(): Promise<Brand[]> {
    let sql = 'SELECT * FROM brand'
    let brand = await client.query(sql)
    return brand.rows
}


export default {
    create,
    findAll
}
