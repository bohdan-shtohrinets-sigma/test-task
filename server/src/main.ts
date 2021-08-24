import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

async function main() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(4000);
}
main();
