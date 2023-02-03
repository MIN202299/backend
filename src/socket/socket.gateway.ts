import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  ConnectedSocket,
  MessageBody,
  OnGatewayInit,
  OnGatewayDisconnect,
  OnGatewayConnection
} from "@nestjs/websockets";
import { Server, Socket } from 'socket.io';
import { ActionType } from '../utils/enum';

@WebSocketGateway(3001,{ cors: true })
export class SocketGateway implements OnGatewayInit, OnGatewayDisconnect, OnGatewayConnection{

  @WebSocketServer()
  socketServer: Server

  @SubscribeMessage('message')
  onMessage(@ConnectedSocket() client: Socket, @MessageBody() body: unknown) {}

  afterInit(server: any): any {
    console.log('socket 初始化')
  }

  handleConnection(client: any, ...args): any {
    console.log(`建立连接客户端id:${client.id}`)
  }

  handleDisconnect(client: any): any {
    console.log(`断开连接客户端id:${client.id}`)
  }

  sendToAllClient<T>(type: ActionType | string, data: T) {
    this.socketServer.emit(type, data)
  }
}