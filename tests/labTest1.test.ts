/** @jest-environment node */

import { test, expect } from '@jest/globals';

test('Products page contains the word Laptops', async () => {

  const response = await fetch('http://localhost:3000/products');

  const html = await response.text();

  expect(response.status).toBe(200);

  expect(html).toMatch("Laptops");

});