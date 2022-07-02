const path = require("path");

module.exports = {
    // Root entry file of the project
    entry: './src/app.ts',
    output: {
        filename: 'bundle.js', // Output file name
        path: path.resolve(__dirname, "dist") // construct an absolute path to the dist folder
    },
    devtool: "inline-source-map", // adds for a better debugging experience
    module: {
        rules: [
            {
                test: /\.ts$/, // checks for files ending with .ts
                use: "ts-loader", // any typescript file that is found should be handeled by the typescript loader
                exclude: /node_modules/ // Excluding node_modules
            }
        ]
    },
    resolve: {
        // Telling typescript what extensions it adds to the imports it finds
        extensions: [".ts", ".js"] // Look for both .ts and .js files
    }
}; 