// // supertest
// const request = require("supertest");
// const app = require("../..");
// const { clearDatabase } = require("../../db.connection");

// let req = request(app);
// afterAll(async()=>{
//    await clearDatabase()
// })

// describe("user route", () => {
//     let user1 = { name: "Ali", email: "al@gmail.com", password: "1234" };
//   it("get user=[] when req get(/user)", async () => {
//     let res = await req.get("/user");

//     expect(res.status).toBe(200);
//     expect(res.body.data).toEqual([]);
//   });

   
//   it("should  add new user /user/signup", async () => {
//     let res = await req.post("/user/signup").send(user1);
//     expect(res.status).toBe(201);
//     expect(res.body.data.email).toBe("al@gmail.com");
//   });


//   it("shouldn't login if user isn't auth",async()=>{
//   let res=await  req.post("/user/login").send({email:user1.email,password:"xxxx"})
//   expect(res.status).toBe(401)
//   expect(res.body.message).toContain("Invalid")


//   })

// it("should login if user auth",async()=>{
//   let res=await  req.post("/user/login").send(user1)
//   expect(res.status).toBe(200)
//   expect(res.body.data).toBeTruthy()
// }
// )

// });
