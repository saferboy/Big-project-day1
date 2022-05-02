import { Pool } from "pg";




let olimtoyURL = 'postgres://postgres:1234@127.0.0.1:5432/olimtoy'

let client = new Pool({
    connectionString: olimtoyURL
})

client.connect((err) => {
    console.log('DATABSE `olimtoy` is connected');
    
})

export default client