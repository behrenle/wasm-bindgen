let wasm;
export function __wbg_set_wasm(val) {
    wasm = val;
}

/**
 * Manually documented function
 *
 * @param {number} arg - This is my arg. It is mine.
 * @returns to whence I came
 */
export function docme(arg) {
    const ret = wasm.docme(arg);
    return ret >>> 0;
}

/**
 * Regular documentation.
 * @param {number} arg
 * @returns {number}
 */
export function i_has_docs(arg) {
    const ret = wasm.i_has_docs(arg);
    return ret >>> 0;
}

