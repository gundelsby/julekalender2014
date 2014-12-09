var config = module.exports;

config["Julekalender"] = {
    rootPath: "../",
    environment: "browser", // or "node"
    libs: ["lib/**/*.js"],
    sources: [
        "src/util/*.js",
        "src/**/*.js",
        "!src/luke7.js"
    ],
    tests: [
        "test/**/*-test.js"
    ]
}