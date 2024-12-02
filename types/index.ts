type FunctionItem = {
	id: number | null;
	equation: string;
};

type FunctionCardProps = {
	cardNumber: number;
	id: number | null;
	equation: string;
	onEquationChange: (id: number | null, equation: string) => void;
}

type InputOutType = {
	lable: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	type: "input" | "output";
};