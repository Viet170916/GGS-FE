// // server.ts
// import { Server } from 'socket.io';
// import { createServer } from 'http';
//
// const httpServer = createServer();
// const io = new Server(httpServer, {
//   cors: {
//     origin: 'http://localhost:3000', // Thay đổi tùy theo nơi bạn triển khai ứng dụng của mình
//   },
// });
//
// io.on('connection', (socket) => {
//   console.log('A user connected');
//
//   socket.on('disconnect', () => {
//     console.log('A user disconnected');
//   });
//
//   // Thêm các sự kiện khác ở đây
// });
//
// httpServer.listen(3001, () => {
//   console.log('WebSocket Server is running on port 3001');
// });
