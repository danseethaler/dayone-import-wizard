import cp from 'child_process';
const promisify = require('es6-promisify');
const exec = promisify(cp.exec);

export { init };

async function init() {
    try {
        const pandoc = await exec('which pandoc');
        console.log('pandoc', pandoc);
    } catch (e) {}

    `sudo /Applications/Day\ One.app/Contents/Resources/install_cli.sh`;
}

function importFiles(files) {
    convert(files[0]);
}
