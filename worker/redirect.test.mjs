/**
 * Unit tests for the canonical-host rules.
 *
 * These run in Node (`npm test`) because wrangler dev cannot exercise them:
 * it binds the local server to the route host, so a www request never reaches
 * the Worker locally.
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';

import { canonicalRedirect, readClientProtocol } from './redirect.ts';

test('www is redirected to the apex, keeping path and query', () => {
  assert.equal(
    canonicalRedirect('https://www.hcentlab.com/about/?ref=x', 'https'),
    'https://hcentlab.com/about/?ref=x',
  );
});

test('www over plain http is upgraded in the same hop', () => {
  assert.equal(
    canonicalRedirect('http://www.hcentlab.com/zh/', 'http'),
    'https://hcentlab.com/zh/',
  );
});

test('plain http on the apex is upgraded', () => {
  assert.equal(canonicalRedirect('http://hcentlab.com/services/', 'http'), 'https://hcentlab.com/services/');
});

test('https on the apex is left alone', () => {
  assert.equal(canonicalRedirect('https://hcentlab.com/', 'https'), null);
});

test('local development is never redirected', () => {
  // wrangler dev sends no x-forwarded-proto, and rewrites the host to the route.
  assert.equal(canonicalRedirect('http://hcentlab.com/', null), null);
  assert.equal(canonicalRedirect('http://localhost:8787/', null), null);
  assert.equal(canonicalRedirect('http://127.0.0.1:8787/', 'http'), null);
});

test('other hosts are untouched', () => {
  assert.equal(canonicalRedirect('https://hcentlab-homecent.example.workers.dev/', 'https'), null);
  assert.equal(canonicalRedirect('https://example.com/', 'http'), null);
});

test('readClientProtocol normalises the header', () => {
  assert.equal(readClientProtocol('http'), 'http');
  assert.equal(readClientProtocol('HTTPS'), 'https');
  assert.equal(readClientProtocol('http, https'), 'http');
  assert.equal(readClientProtocol(null), null);
  assert.equal(readClientProtocol(''), null);
});
