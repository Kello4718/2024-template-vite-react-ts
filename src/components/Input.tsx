import { forwardRef, useImperativeHandle, useRef, useState } from "react";

type RefProps = {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    testVariable: string;
};

const Input = forwardRef<RefProps>((props, ref) => {
    const [name, setName] = useState("");
    const testVariable = "Itachi";
    const inputRef = useRef<HTMLInputElement | null>(null);
    const testRef = useRef<any>({ name: "Sergey" });
    useImperativeHandle<RefProps, RefProps>(ref, () => ({
        name,
        setName,
        testVariable,
        inputRef: inputRef.current,
    }));

    return (
        <>
            <input
                ref={inputRef}
                placeholder="Name..."
                value={name}
                onChange={(evt) => setName(evt.target.value)}
            />
            <button
                onClick={() => {
                    testRef.current = true;
                    console.log(testRef.current);
                }}
            >
                test
            </button>
            <h2>{testRef.current.name}</h2>
        </>
    );
});

export default Input;
