const request = require("supertest");
const app = require("../..");
const { clearDatabase } = require("../../db.connection");

let req = request(app);
afterAll(async () => {
  await clearDatabase();
});
let userToken;
beforeAll(async () => {
  let user1 = { name: "ali", email: "ad@gmail.com", password: "1234" };
  await req.post("/user/signup").send(user1);
  userToken = await req.post("/user/login").send(user1);
});

describe("todo", () => {
  //(/todo)

  it("should get todo[] get(/todo)", async () => {
    let res = await req.get("/todo");

    expect(res.status).toBe(200);
    expect(res.body.data).toEqual([]);
  });

  it("shouldn't add todo if not auth", async () => {
    let res = await req.post("/todo").send("eating");
    expect(res.status).toBe(401);
    expect(res.body.message).toContain("please login first");
  });

  it("should add todo when auth", async () => {
    let res = await req
      .post("/todo")
      .send({ title: "eadting" })
      .set({ authorization: userToken });
    expect(res.status).toBe(201);
    expect(res.body.data.title).toBe("eadting");
    //   expect(res.body.data.title).toBe("eating")
  });
  /* 
    headers{
    Authorization:token

    
    }
    
    */
});
