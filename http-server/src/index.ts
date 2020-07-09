import { IncomingMessage, ServerResponse } from 'http';
import path from 'path';
import https = require('http');

import fs = require('fs');

const server = https.createServer(((req: IncomingMessage, res: ServerResponse) => {
  // const url = req.url
  res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
  const html = fs.readFileSync(path.join(__dirname, '..', 'static/index.html'));
  res.end(html);
}));

server.listen(3200);
