/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        transpiler: 'ts',
        typescriptOptions: {
            tsconfig: true,
            module: 'system'
        },
        meta: {
            'typescript': {
                "exports": "ts"
            },
            '*.json': {
                loader: 'systemjs-json-plugin'
            }
        },
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',
            'systemjs-json-plugin': 'npm:systemjs-plugin-json',
            '@progress': 'npm:@progress',
            '@telerik': 'npm:@telerik',

            // angular bundles
            '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
            '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

            // other libraries
            'rxjs': 'npm:rxjs',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
            'ts': 'npm:plugin-typescript/lib/plugin.js',
            'typescript': 'npm:typescript/lib/typescript.js'//,
            //'jquery': 'npm:jquery/dist/jquery.min.js',
            //'tether': 'npm:tether/dist/js/tether.min.js',
            //'bootstrap': 'npm:bootstrap/dist/js/bootstrap.min.js'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            "@progress/kendo-angular-grid": { "main": "dist/cdn/js/kendo-angular-grid.js", "defaultExtension": "js" },
            "@progress/kendo-angular-inputs": { "main": "dist/cdn/js/kendo-angular-inputs.js", "defaultExtension": "js" },
            "@progress/kendo-angular-dateinputs": { "main": "dist/cdn/js/kendo-angular-dateinputs.js", "defaultExtension": "js" },
            "@progress/kendo-angular-dropdowns": { "main": "dist/cdn/js/kendo-angular-dropdowns.js", "defaultExtension": "js" },
            "@progress/kendo-data-query": { "main": "dist/cdn/js/kendo-data-query.js", "defaultExtension": "js" },
            "@progress/kendo-drawing": { "main": "dist/es/main.js", "defaultExtension": "js" },
            "@progress/kendo-file-saver": { "main": "dist/npm/main.js", "defaultExtension": "js" },
            "@progress/kendo-angular-intl": { "main": "dist/cdn/js/kendo-angular-intl.js", "defaultExtension": "js" },
            "@progress/kendo-angular-l10n": { "main": "dist/cdn/js/kendo-angular-l10n.js", "defaultExtension": "js" },

            app: {
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    });
})(this);
