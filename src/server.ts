import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import express from 'express';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');

const server = express();

/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/**', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

/**
 * Serve static files from /browser
 */
server.use(express.static(browserDistFolder, {
  maxAge: '1y',
  index: false,
  redirect: false,
}));

/**
 * Handle all other requests by serving index.html
 */
server.use('*', (req, res) => {
  res.sendFile(resolve(browserDistFolder, 'index.html'));
});

/**
 * Export the Express app for Angular SSR
 */
export const app = server;
