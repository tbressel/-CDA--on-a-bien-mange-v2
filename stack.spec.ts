import { describe, test, expect } from 'vitest';

class EmptyStackError extends Error {
constructor() {
    super("Stack is empty");
    this.name = "EmptyStackError";
}
}




class Stack {
    private index = 0;
    private elements: number[] = [];


    isEmpty(): boolean {
        return this.index === 0;
    }

    push(element: number): void {
        this.elements[this.index++] = element;
    }

    pop(): number {
        if (this.isEmpty()) throw new EmptyStackError();
        return this.elements[--this.index];
    }
}


describe('Stack', () => {

    test("New stack created is empty", () => {
        const stack = new Stack();
        expect(stack.isEmpty()).toBe(true);
    });

    test("New stack created is empty", () => {
        const stack = new Stack();
        stack.push(1);
        stack.pop();
        expect(stack.isEmpty()).toBeTruthy();
    });

    test("Push twice, pop once, stack is not empty", () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(1);
        stack.pop();
        expect(stack.isEmpty()).toBeFalsy();
    });

    test("Connot pop from empty stack", () => {
        const stack = new Stack();
        expect(() => stack.pop()).toThrow("Stack is empty");
    });

    test("push 99, pop return 99", () => {
        const stack = new Stack();
        stack.push(99);
        expect(stack.pop()).toBe(99);
    });

    test("pop returns the last pushed element", () => {
        const stack = new Stack();
        stack.push(99);
        stack.push(10);
        expect(stack.pop()).toBe(10);
        expect(stack.pop()).toBe(99);
        expect(stack.isEmpty()).toBeTruthy();
    });
});


