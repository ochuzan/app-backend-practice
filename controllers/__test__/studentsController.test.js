const app = require("../../app");
const supertest = require("supertest");


describe("returns json data for all students", () => {
    it('returns an object with all students', async () => {
        await supertest(app).get("/students")
            .expect(200)
            .then((res) => {
                expect(res.body.students).toBeInstanceOf(Array);
                expect(res.body.students.length).toBe(25);
            });
    });

    it("returns an object with a number of students equal to or less than a limit", async () => {
        await supertest(app).get("/students?limit=10")
            .expect(200)
            .then((res) => {
                expect(res.body.students).toBeInstanceOf(Array);
                expect(res.body.students.length).toBe(10);
            });
        await supertest(app).get("/students?limit=35")
            .expect(200)
            .then((res) => {
                expect(res.body.students).toBeInstanceOf(Array);
                expect(res.body.students.length).toBe(25);
            });
    });
});

// modify this api so that it takes a min and max id and returns all students by id in that range 
// /students?min=3&max=10 
// returns all students with ids >= 3 and <=10