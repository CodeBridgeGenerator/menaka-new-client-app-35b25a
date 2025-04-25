const assert = require("assert");
const app = require("../../src/app");

describe("student service", () => {
  let thisService;
  let studentCreated;

  beforeEach(async () => {
    thisService = await app.service("student");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (student)");
  });

  describe("#create", () => {
    const options = {"nameyhhjd":"new value","Image":"new value"};

    beforeEach(async () => {
      studentCreated = await thisService.create(options);
    });

    it("should create a new student", () => {
      assert.strictEqual(studentCreated.nameyhhjd, options.nameyhhjd);
assert.strictEqual(studentCreated.Image, options.Image);
    });
  });

  describe("#get", () => {
    it("should retrieve a student by ID", async () => {
      const retrieved = await thisService.get(studentCreated._id);
      assert.strictEqual(retrieved._id, studentCreated._id);
    });
  });

  describe("#update", () => {
    let studentUpdated;
    const options = {"nameyhhjd":"updated value","Image":"updated value"};

    beforeEach(async () => {
      studentUpdated = await thisService.update(studentCreated._id, options);
    });

    it("should update an existing student ", async () => {
      assert.strictEqual(studentUpdated.nameyhhjd, options.nameyhhjd);
assert.strictEqual(studentUpdated.Image, options.Image);
    });
  });

  describe("#delete", () => {
  let studentDeleted;
    beforeEach(async () => {
      studentDeleted = await thisService.remove(studentCreated._id);
    });

    it("should delete a student", async () => {
      assert.strictEqual(studentDeleted._id, studentCreated._id);
    });
  });
});