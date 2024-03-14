import { useEffect, useRef } from "react";

const Title = () => {
    const titleRef = useRef<HTMLHeadingElement | null>(null);
    useEffect(() => {
        console.log(titleRef);
    });
    return <h1 ref={titleRef}>Заголовок</h1>;
};

export default Title;
