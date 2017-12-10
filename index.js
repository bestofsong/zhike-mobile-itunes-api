import { NativeModules } from 'react-native';
const ZKItunesApi = NativeModules.ZKItunesApi;

export default function getAppMeta(appId) {
  return new Promise((resolve, reject) => {
    ZKItunesApi.getAppMeta(appId, (error, meta) => {
      if (error) {
        reject(error);
      } else {
        resolve(meta);
      }
    });
  });
}
