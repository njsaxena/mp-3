import { useState } from "react";
import { add, divide, multiply, power, subtract } from "../calculator";

export default function Calculator() {
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [output, setOutput] = useState<number | string>("");

    function getNumbers(): [number, number] | null {
        const a = Number(first);
        const b = Number(second);

        if (first.trim() === "" || second.trim() === "") {
            setOutput("Enter two valid numbers.");
            return null;
        }

        return [a, b];
    }

    function addition() {
        const numbers = getNumbers();
        if (numbers) setOutput(add(numbers[0], numbers[1]));
    }

    function subtraction() {
        const numbers = getNumbers();
        if (numbers) setOutput(subtract(numbers[0], numbers[1]));
    }

    function multiplication() {
        const numbers = getNumbers();
        if (numbers) setOutput(multiply(numbers[0], numbers[1]));
    }

    function division() {
        const numbers = getNumbers();
        if (!numbers) return;
        if (numbers[1] === 0) {
            setOutput("Cannot divide by zero.");
            return;
        }
        setOutput(divide(numbers[0], numbers[1]));
    }

    function exponentiation() {
        const numbers = getNumbers();
        if (numbers) setOutput(power(numbers[0], numbers[1]));
    }

    function clearCalculator() {
        setFirst("");
        setSecond("");
        setOutput("");
    }

    return (
        <div className="calculator">
            <h2>JavaScript Calculator</h2>
            <div className="calculator-box">
                <div className="calculator-inputs">
                    <label htmlFor="first-number">First number
                        <input id="first-number" type="number" value={first} onChange={(event) => setFirst(event.target.value)} />
                    </label>
                    <label htmlFor="second-number">Second number
                        <input id="second-number" type="number" value={second} onChange={(event) => setSecond(event.target.value)} />
                    </label>
                </div>
                <div className="calculator-buttons">
                    <button type="button" onClick={addition}>+</button>
                    <button type="button" onClick={subtraction}>-</button>
                    <button type="button" onClick={multiplication}>*</button>
                    <button type="button" onClick={division}>/</button>
                    <button type="button" onClick={exponentiation}>**</button>
                    <button type="button" onClick={clearCalculator}>Clear</button>
                </div>
                <p className={`output${typeof output === "number" && output < 0 ? " negative" : ""}`} aria-live="polite">
                    {output}
                </p>
            </div>
        </div>
    );
}