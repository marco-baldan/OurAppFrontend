import express from 'express';
import cors from 'cors';
import holidayIdeas from './routes/holidayIdeasRoutes.js';

const app = express();
app.use(cors());

try {
  app.use('/', holidayIdeas);
} catch (error) {
  console.error('Error importing holida ideas:', error);
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Promise Rejection:');
  console.error(reason);
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:');
  console.error(error);
});
