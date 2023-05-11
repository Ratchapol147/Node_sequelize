// ตั้งค่า Database
module.exports ={
    HOST:`${process.env.HOST}`,
    USER:`${process.env.USER}`,
    PASSWORD:`${process.env.PASSWORD}`,
    DB:`${process.env.DB}`,
    dialect:`${process.env.DIALECT}`,
    pool: {
        max: 5,
        min: 0,
        acquire: 300000,
        idle: 100000
      }
}


// module.exports = {
//     HOST: "localhost",
//     USER: "root",
//     PASSWORD: "ohm13112523",
//     DB: "testauth",
//     dialect: "mysql",
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     }
//   };