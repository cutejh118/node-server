import { Context } from 'koa';

const Koa = require('koa');

const app = new Koa();

app.use((ctx: Context) => {
  ctx.body = '2022년 5월 19일';
});


app.listen(4000, () => {
  console.log('Listening to port 4000');
});