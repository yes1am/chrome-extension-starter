import Utils from './utils';

function main() {
  console.log('i am content-script.ts');
}

Utils();

window.addEventListener('load', () => {
  main();
});
