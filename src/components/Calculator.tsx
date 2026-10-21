import useCalculator from "../hooks/useCalculator";

export default function Calculator() {
    const {
        first,
        setFirst,
        second,
        setSecond,
        output,
        calculate,
        clearCalculator,
    } = useCalculator();

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
                    <button type="button" onClick={() => calculate("add")}>+</button>
                    <button type="button" onClick={() => calculate("subtract")}>-</button>
                    <button type="button" onClick={() => calculate("multiply")}>*</button>
                    <button type="button" onClick={() => calculate("divide")}>/</button>
                    <button type="button" onClick={() => calculate("power")}>**</button>
                    <button type="button" onClick={clearCalculator}>Clear</button>
                </div>
                <p className={`output${typeof output === "number" && output < 0 ? " negative" : ""}`} aria-live="polite">
                    {output}
                </p>
            </div>
        </div>
    );
}