import { watch } from 'chokidar';

const ensureArray = array => {
    if (array.isArray) return array;
    else if (typeof array === 'string') return `[${array}]`; 
    return console.error('String or array expected');
}


/**
 * 
 * @param {string|array|glob}
 */
export default (source='', dotFiles=false) => {
    source = ensureArray(source);
    const watcher = watch(source);
    
    watcher.on('add', (path, stats) => {
       const worker = new Worker('workers/add');
    });
    
    watcher.on('change', (path, stats) => {
       const worker = new Worker('workers/change');
    });
    
    watcher.on('unlink', (path, stats) => {
       const worker = new Worker('workers/unlink');
    });
}