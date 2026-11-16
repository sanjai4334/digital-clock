import assert from "node:assert/strict";
import { afterEach, test } from "node:test";
import { getStoredItem, setStoredItem } from "../src/utils/storage.ts";

const originalWindow = Object.getOwnPropertyDescriptor(globalThis, "window");
afterEach(() => {
    if (originalWindow) Object.defineProperty(globalThis, "window", originalWindow);
    else delete globalThis.window;
});

test("reads and writes settings when storage is available", () => {
    const values = new Map();
    globalThis.window = { localStorage: {
        getItem: key => values.get(key) ?? null,
        setItem: (key, value) => values.set(key, value)
    } };
    assert.equal(getStoredItem("theme"), null);
    setStoredItem("theme", "light");
    setStoredItem("segment-color", "#123456");
    assert.equal(getStoredItem("theme"), "light");
    assert.equal(getStoredItem("segment-color"), "#123456");
});

test("handles a SecurityError from the localStorage getter", () => {
    globalThis.window = { get localStorage() {
        throw new DOMException("Storage blocked", "SecurityError");
    } };
    assert.equal(getStoredItem("theme"), null);
    assert.doesNotThrow(() => setStoredItem("theme", "light"));
});

test("handles failures from individual storage methods", () => {
    globalThis.window = { localStorage: {
        getItem() { throw new DOMException("Read blocked", "SecurityError"); },
        setItem() { throw new DOMException("Storage full", "QuotaExceededError"); }
    } };
    assert.equal(getStoredItem("segment-color"), null);
    assert.doesNotThrow(() => setStoredItem("segment-color", "#123456"));
});
