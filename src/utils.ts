// export function getStorageEnable(callback?:(enabled:boolean) => void): void {
//   // get enabled, default value is true
//   chrome.storage.sync.get({ enabled: DEFAULT_EXTENSION_ENABLE }, (item: StorageItem) => {
//     const { enabled } = item;
//     console.log(`get enabled: ${enabled}`);
//     if (callback) {
//       callback(enabled);
//     }
//   });
// }

// export function setStorageEnable(enabled:boolean, callback:Function) {
//   chrome.storage.sync.set({ enabled }, () => {
//     console.log(`set enabled: ${enabled}`);
//     if (callback) {
//       callback();
//     }
//   });
// }

// 优化 console
// export function debug(...args: any) {
//   console.group('%c essay-outline: ', 'color: white;background:#1791f2;');
//   console.debug('%clog:', 'color: red', ...args);
//   console.groupEnd();
// }

export default () => {};
