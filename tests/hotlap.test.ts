import { Client } from "../src";

describe("list", function() {
  it("fetch", function() {
    let client = new Client("86934fae-6d96-4145-82f3-3d61589e7c16");
    let result = client.hotlap.list({});
    console.log(result);
    console.log("Hello");
    //expect(result).equal(7);
  });
});
