import { EventEmitter } from 'events';

export interface AddressInfo {
  port: number;
  family: string;
  address: string;
}

export interface SocketConnectOpts {
  port: number;
  host?: string;
  localAddress?: string;
  localPort?: number;
  family?: number;
  interface?: string;
  tls?: boolean;
}

export interface ServerOptions {
  pauseOnConnect?: boolean;
  tls?: boolean;
}

export class Socket extends EventEmitter {
  constructor(options?: any);

  readonly bytesRead: number;
  readonly bytesWritten: number;
  readonly connecting: boolean;
  readonly destroyed: boolean;
  readonly localAddress?: string;
  readonly localPort?: number;
  readonly remoteAddress?: string;
  readonly remoteFamily?: string;
  readonly remotePort?: number;

  connect(options: SocketConnectOpts, connectionListener?: () => void): this;
  connect(port: number, host?: string, connectionListener?: () => void): this;
  connect(path: string, connectionListener?: () => void): this;

  setEncoding(encoding?: string): this;
  write(data: string | Uint8Array, encoding?: string, cb?: (err?: Error) => void): boolean;
  end(data?: string | Uint8Array, encoding?: string, cb?: () => void): this;
  destroy(err?: Error): this;
  pause(): this;
  resume(): this;
  setTimeout(timeout: number, callback?: () => void): this;
  setKeepAlive(enable?: boolean, initialDelay?: number): this;
  setNoDelay(noDelay?: boolean): this;
  address(): AddressInfo | {};
  ref(): this;
  unref(): this;
}

export class Server extends EventEmitter {
  constructor(options?: ServerOptions | ((socket: Socket) => void), connectionListener?: (socket: Socket) => void);

  listen(port?: number, host?: string, backlog?: number, listeningListener?: () => void): this;
  listen(port?: number, host?: string, listeningListener?: () => void): this;
  listen(port?: number, listeningListener?: () => void): this;
  listen(path: string, backlog?: number, listeningListener?: () => void): this;
  listen(path: string, listeningListener?: () => void): this;
  listen(handle: any, backlog?: number, listeningListener?: () => void): this;
  listen(handle: any, listeningListener?: () => void): this;
  listen(options: any, listeningListener?: () => void): this;

  close(callback?: (err?: Error) => void): this;
  address(): AddressInfo | string | null;
  getConnections(cb: (error: Error | null, count: number) => void): void;
  ref(): this;
  unref(): this;
  readonly listening: boolean;
  maxConnections: number;
}

export function createConnection(options: SocketConnectOpts, connectionListener?: () => void): Socket;
export function createConnection(port: number, host?: string, connectionListener?: () => void): Socket;
export function createConnection(path: string, connectionListener?: () => void): Socket;

export function connect(options: SocketConnectOpts, connectionListener?: () => void): Socket;
export function connect(port: number, host?: string, connectionListener?: () => void): Socket;
export function connect(path: string, connectionListener?: () => void): Socket;

export function createServer(options?: ServerOptions | ((socket: Socket) => void), connectionListener?: (socket: Socket) => void): Server;

export function isIP(input: string): number;
export function isIPv4(input: string): boolean;
export function isIPv6(input: string): boolean;

declare const _default: {
  Socket: typeof Socket;
  Server: typeof Server;
  createConnection: typeof createConnection;
  connect: typeof connect;
  createServer: typeof createServer;
  isIP: typeof isIP;
  isIPv4: typeof isIPv4;
  isIPv6: typeof isIPv6;
};

export default _default;
