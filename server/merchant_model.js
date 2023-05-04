const Pool = require('pg').Pool
const pool = new Pool({
  user: 'daniel70125',
  host: 'localhost',
  database: 'fridgeassist',
  password: 'root',
  port: 5432,
});

const getMerchants = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM recipes', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }
  const createMerchant = (body) => {
    return new Promise(function(resolve, reject) {
      const { name } = body
      pool.query('INSERT INTO animals (name) VALUES ($1) RETURNING *', [name], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`A new merchant has been added added: ${name}`);
      })
    })
  }
  const deleteMerchant = () => {
    return new Promise(function(resolve, reject) {
      const id = parseInt(request.params.id)
      pool.query('DELETE FROM merchants WHERE id = $1', [id], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`Merchant deleted with ID: ${id}`)
      })
    })
  }
  
  module.exports = {
    getMerchants,
    createMerchant,
    deleteMerchant,
  }