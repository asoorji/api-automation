
const { test, expect } = require('@playwright/test');

test('Verify GET request for a post by ID', async ({ request }) => {
  // Perform a GET request to fetch a specific post
  const response = await request.get('/posts/1'); 

  // Check if the response status is OK (200)
  expect(response.ok()).toBeTruthy();

  // Parse the response body as JSON
  const data = await response.json();

  // Verify the content of the response
  expect(data).toBeDefined();
  expect(data.id).toBe(1);
  expect(data.title).toBeTruthy(); // Check that the title field exists and is non-empty
});
