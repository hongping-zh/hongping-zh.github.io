// Render scripts/og-card.html to public/og-image.png at 1200x630 via Chrome CDP.
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const CDP = 'http://localhost:29229';
const cardUrl = 'file://' + resolve('scripts/og-card.html');
const out = resolve('public/og-image.png');

const send = (ws, id, method, params = {}) =>
  new Promise((res) => {
    const onMsg = (ev) => {
      const m = JSON.parse(ev.data);
      if (m.id === id) { ws.removeEventListener('message', onMsg); res(m.result); }
    };
    ws.addEventListener('message', onMsg);
    ws.send(JSON.stringify({ id, method, params }));
  });

const targets = await (await fetch(`${CDP}/json/list`)).json();
const page = targets.find((t) => t.type === 'page' && t.webSocketDebuggerUrl);
if (!page) throw new Error('no page target available');
const { webSocketDebuggerUrl } = page;
const ws = new WebSocket(webSocketDebuggerUrl);
await new Promise((r) => (ws.onopen = r));

let id = 1;
await send(ws, id++, 'Page.enable');
await send(ws, id++, 'Emulation.setDeviceMetricsOverride', {
  width: 1200, height: 630, deviceScaleFactor: 2, mobile: false,
});
await send(ws, id++, 'Page.navigate', { url: cardUrl });
await new Promise((r) => setTimeout(r, 2500)); // let fonts + layout settle
const { data } = await send(ws, id++, 'Page.captureScreenshot', {
  format: 'png',
  clip: { x: 0, y: 0, width: 1200, height: 630, scale: 1 },
  captureBeyondViewport: true,
});
writeFileSync(out, Buffer.from(data, 'base64'));
console.log('wrote', out);
ws.close();
process.exit(0);
