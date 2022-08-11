import express from 'express';
import userRouter from './users/user.controller';
import todosRouter from './todos/todos.controller';
const app = express();
app.use(express.json());
const PORT = process.env.HTTP_PORT || 3000;

// Your code starts here. Placeholders for methods are provided for your convenience.

app.use(userRouter);
app.use(todosRouter);

const server = app.listen(PORT).on('listening', () => {
  console.info('Listening on port', PORT);
});

export default { app, server };
