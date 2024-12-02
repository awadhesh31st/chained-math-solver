# Chained Math Solver

Welcome to the Chained Math Solver, a web application where users can input a mathematical equation and chain multiple functions together to calculate the result. Each function is linked in a fixed ordered chain, and users can modify the equations for each function.

The application is designed to accept mathematical equations using basic arithmetic operators and exponents. The chained functions are executed in a fixed order (1 → 2 → 4 → 5 → 3), with the result passed from one function to the next.

## Live Demo

You can try out the application here:

[Chained Math Solver](https://chained-math-solver.vercel.app/)

<img width="1710" alt="image" src="https://github.com/user-attachments/assets/5601cf28-e91d-4b1a-9ed3-bb920b43604b">

## Features

- **Function Cards:**  
  The UI displays 5 cards, each representing a function in the chain. Users can modify the mathematical equations in the cards, and the results will be calculated sequentially through the fixed chain of functions.
  
- **Validator:**  
  Each function card contains a text input for the mathematical equation. The input is validated to only accept basic arithmetic operations (addition, subtraction, multiplication, division) and exponents.

- **Chaining Representation:**  
  The functions are visually chained with connected lines, representing the flow of data from one function to the next. This chaining is fixed in the order 1 → 2 → 4 → 5 → 3.

- **Dropdowns (Disabled):**  
  A disabled dropdown is provided for each function to show the next function in the chain. Users cannot change the order of the functions.

- **Initial Value Input:**  
  Users can input an initial value (x), which will be passed to function 1. The result of the calculations will flow through all the functions, and the final output (y) will be displayed after the last function (function 3).

## Function Execution Order

The functions will be executed in the following fixed order:

1. **Function 1**  
2. **Function 2**  
3. **Function 4**  
4. **Function 5**  
5. **Function 3**

The input value (x) starts at function 1 and flows through each function until the final result is displayed at function 3.

## Getting Started

### Prerequisites

- Node.js and npm installed on your local machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/chained-math-solver.git
