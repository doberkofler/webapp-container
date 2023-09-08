import express, {Application, Request, Response} from 'express';
import 'dotenv/config'

const isInteger = (value: unknown): value is number => {
	// Check if the value is a number
	if (typeof value !== 'number') {
		return false;
	}
  
	// Check if the value is not a NaN (Not-a-Number)
	if (isNaN(value)) {
		return false;
	}
  
	// Check if the value is a finite number (not Infinity or -Infinity)
	if (!isFinite(value)) {
		return false;
	}
  
	// Check if the value is an integer by comparing it to its floored value
	return Math.floor(value) === value;
  }

const parseInteger = (value: unknown, def: number): number => {
	if (typeof value === 'string') {
		value = Number.parseInt(value, 10);
	}

	return isInteger(value) ? value : def;
};

const app: Application = express();
const port: number = parseInteger(process.env.PORT, 8888);

app.get('/', (req: Request, res: Response): void => {
	res.send('Express + TypeScript Server');
});

app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`);
});
