const { ESLint } = require('eslint');
const fs = require('fs');
const path = require('path');

async function lintAndFix() {
  try {
    // Create an ESLint instance with comprehensive fixing
    const eslint = new ESLint({
      fix: true,
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      overrideConfigFile: path.resolve(__dirname, '../.eslintrc.js'),
      resolvePluginsRelativeTo: path.resolve(__dirname, '..'),
      useEslintrc: true,
    });

    // Specify the directory to lint
    const srcDir = path.resolve(__dirname, '../src');

    // Get all files to lint
    const files = await eslint.lintFiles([srcDir]);

    // Write the fixed files
    await ESLint.outputFixes(files);

    // Format results
    const formatter = await eslint.loadFormatter('stylish');
    const resultText = formatter.format(files);

    console.log(resultText);

    // Check if there are any errors
    const errorCount = files.reduce((sum, file) => sum + file.errorCount, 0);
    const warningCount = files.reduce((sum, file) => sum + file.warningCount, 0);

    console.log(`Total Errors: ${errorCount}, Total Warnings: ${warningCount}`);

    // Exit with non-zero status if there are errors
    process.exit(errorCount > 0 ? 1 : 0);
  } catch (error) {
    console.error('Lint fix failed:', error);
    process.exit(1);
  }
}

lintAndFix();
