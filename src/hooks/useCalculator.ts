import { useState } from "react";

type Operation = "add" | "subtract" | "multiply" | "divide" | "power";

const operations: Record<Operation, (a: number, b: number) => number> = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
    power: (a, b) => {
        let result = 1;

        if (b < 0) {
            for (let i = 0; i > b; i--) {
                result = result / a;
            }
        } else {
            for (let i = 0; i < b; i++) {
                result = result * a;
            }
        }

        return result;
    },
};

export default function useCalculator() {
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [output, setOutput] = useState<number | string>("");

    function calculate(operation: Operation) {
        const a = Number(first);
        const b = Number(second);

        if (first.trim() === "" || second.trim() === "") {
            setOutput("Enter two valid numbers.");
            return;
        }

        if (operation === "divide" && b === 0) {
            setOutput("Cannot divide by zero.");
            return;
        }

        setOutput(operations[operation](a, b));
    }

    function clearCalculator() {
        setFirst("");
        setSecond("");
        setOutput("");
    }

    return {
        first,
        setFirst,
        second,
        setSecond,
        output,
        calculate,
        clearCalculator,
    };
}