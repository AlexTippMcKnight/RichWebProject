/** @jest-environment node */

import { test, expect } from '@jest/globals';

test('home page contains the word view', async () => {

  const response = await fetch('http://localhost:3000/');

  const html = await response.text();

  expect(response.status).toBe(200);

  expect(html).toMatch("view");
  // expect(html).toMatch("potatoe");

});