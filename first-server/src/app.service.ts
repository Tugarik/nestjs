import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getAll(): object {
    const data = { message: 'ok', status: false };
    const response = { ...data, status: true };
    return response;
  }
}
