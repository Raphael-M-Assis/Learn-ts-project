import express from 'express';
import { routes } from './routes';

const app = express();
app.use(routes);
app.use(express.json());
const PORT = 3021;

app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}`));
