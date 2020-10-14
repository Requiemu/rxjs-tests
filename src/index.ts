import { SplitChunksPlugin } from "webpack";

console.clear()
splitLog('basic');
require('./case/basic');

// splitLog('XmlHttpRequest');
// require('./case/xml-http-request');

// splitLog('FetchApi');
// require('./case/fetchApi');

// splitLog('ajax');
// require('./case/ajax');

// splitLog('fromEvent');
// require('./case/fromEvent');

splitLog('flatMap');
require('./case/flatMap');

function splitLog(name) {
    console.log(`==============${name}===============`);
}