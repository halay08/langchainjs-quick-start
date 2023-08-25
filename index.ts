import * as fs from 'fs';

const file = process.argv[2];
if (!file) {
  console.log('Please provide a specific example file!');
  process.exit(1);
}

if (!fs.existsSync(`./examples/${file}.ts`)) {
  console.log('Invalid example file path!');
  process.exit(1);
}

require(`./examples/${file}.ts`);
