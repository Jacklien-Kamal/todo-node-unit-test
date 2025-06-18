// supertest 
const request = require('supertest');
const app = require('../..');


let req=request(app)

describe("root route ",()=>{

// get(/)=> []

it("should get todos=[] when req get(/)",async()=>{
    let res= await req.get("/")
    expect(res.status).toBe(200)
    expect(res.body.data).toEqual([])
})


// not found

it("should get 404 and message not found get(/xxx",async()=>{
   let res=await req.get("/xxx")

   expect(res.status).toBe(404)
   expect(res.body.message).toBe("Not found")
   expect(res.body.message).toContain("Not")
})

})