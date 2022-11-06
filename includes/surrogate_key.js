function surrogate_key(dimensions) {
    return `
        md5(concat(${dimensions.map((field) => `cast(${field} as string)`).join(", ")}))
    `


}

module.exports = { surrogate_key };