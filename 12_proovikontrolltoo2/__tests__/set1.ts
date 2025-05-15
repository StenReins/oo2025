import { Word } from "../wordcounter";

let word: Word

test ("a, p ja e sõnas 'pere'", () => {
    expect(new Word("pere").countLetter("a")).toBe(0);
    expect(new Word("pere").countLetter("p")).toBe(1);
    expect(new Word("pere").countLetter("e")).toBe(2);
});