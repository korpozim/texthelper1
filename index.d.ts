declare global {
    interface String {
        endpoint(): string;
        firstup(): string;
        wordsfirstup(): string;
        doublequotes(): string;
        singlequotes(): string;
        brackets(): string;
        blabla(): string;
        camelcase(): string;
        pascalcase(): string;
        snakecase(): string;
        kebabcase(): string;
        reverse(): string;
        removenumber(): string;
        removespace(): string;
        password(): string;
        reset(): string;
        question(): string;
        exclamation(): string;
        parentheses(): string;
        braces(): string;
        anglebrackets(): string;
        isurl(): boolean;
        isnullorempty(): boolean;
    }
}

export { }