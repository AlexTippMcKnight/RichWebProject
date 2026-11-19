/** @jest-environment node */

import { test, expect } from '@jest/globals';

test('Add Product page contains the word Model', async () => {

  const response = await fetch('http://localhost:3000/addProduct');

  const html = await response.text();

  expect(response.status).toBe(200);

  expect(html).toMatch("Model");
  // expect(html).toMatch("potatoe");

});