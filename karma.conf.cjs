// karma.conf.cjs
// Configuración de Karma: abre un navegador real, carga las pruebas de Jasmine y muestra resultados.
// Es .cjs porque Karma lee su configuración con require() (CommonJS) y el proyecto es "type": "module".
module.exports = function (config) {
  const coverage = process.argv.includes('--coverage')

  config.set({
    frameworks: ['jasmine', 'webpack'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-webpack'),
      require('karma-jasmine-html-reporter'),
      require('karma-junit-reporter'),
      ...(coverage ? [require('karma-coverage')] : []),
    ],
    files: [
      'src/test/setup.js',
      { pattern: 'src/**/*.spec.js', watched: false },
      { pattern: 'src/**/*.spec.jsx', watched: false },
    ],
    preprocessors: {
      'src/test/setup.js': ['webpack'],
      'src/**/*.spec.js': ['webpack'],
      'src/**/*.spec.jsx': ['webpack'],
    },
    webpack: {
      mode: 'development',
      devtool: 'inline-source-map',
      resolve: { extensions: ['.js', '.jsx'] },
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            type: 'javascript/auto',
            use: {
              loader: 'babel-loader',
              options: {
                babelrc: false,
                configFile: false,
                presets: [['@babel/preset-react', { runtime: 'automatic' }]],
                plugins: coverage
                  ? [['istanbul', { exclude: ['**/*.spec.{js,jsx}', 'src/test/**'] }]]
                  : [],
              },
            },
          },
        ],
      },
    },
    reporters: ['progress', 'kjhtml', 'junit', ...(coverage ? ['coverage'] : [])],
    junitReporter: {
      outputDir: 'test-results',
      useBrowserName: false,
      outputFile: 'junit.xml',
    },
    coverageReporter: {
      dir: 'coverage',
      subdir: '.',
      reporters: [{ type: 'text' }, { type: 'html' }, { type: 'lcovonly' }],
      check: {
        global: { statements: 80, branches: 80, functions: 80, lines: 80 },
      },
    },
    client: { jasmine: { random: true }, clearContext: false },
    browsers: ['ChromeHeadless'],
    customLaunchers: {
      ChromeHeadlessCI: { base: 'ChromeHeadless', flags: ['--no-sandbox'] },
    },
    restartOnFileChange: true,
  })
}
