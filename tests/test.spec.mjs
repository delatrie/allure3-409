import { test } from "@playwright/test";

test.afterAll(() => {
  console.log("afterAll");
});

test.afterEach(() => {
  console.log("afterEach");
});

test("a failed test", () => {
  throw new Error();
});

test("a long running test to give enough time for the termination", async () => {
  await new Promise((r) => setTimeout(r, 10000));
});
