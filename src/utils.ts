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

export default () => {};
