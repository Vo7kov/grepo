import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { UsersService } from './users.service';

@WebSocketGateway(+process.env.API_WEBSOCKETS_PORT, {
  cors: {
    origin: process.env.HOST,
    methods: ['GET', 'POST'],
  },
})
export class UsersGateway {
  @WebSocketServer() server: Server; // Здесь мы получаем доступ к серверу WebSocket

  constructor(private readonly usersService: UsersService) {}

  @SubscribeMessage('getSessionUpdate')
  async handleSessionUpdate(
    @MessageBody() data: { email: string },
    @ConnectedSocket() client: Socket,
  ) {
    const user = await this.usersService.findOne(data.email);
    client.emit('sessionUpdated', { user });
  }

  async sendSessionUpdate(email: string) {
    const user = await this.usersService.findOne(email);

    this.server.emit('sessionUpdated', { user });
  }
}
