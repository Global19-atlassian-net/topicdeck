/**
 * Copyright 2017 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import jscc from 'rollup-plugin-jscc';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';
import babel from 'rollup-plugin-babel';

export default {
    input: 'src/public/scripts/client.js',
    output: { 
        file: 'dist/server/public/scripts/client.js',
        format: 'iife'
    },
    plugins: [
        jscc(),
        babel({
            exclude: 'node_modules/**'
        }),
        uglify({}, minify)
    ]
};