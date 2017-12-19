import { NativeModules, Platform } from 'react-native';
const ZKItunesApi = NativeModules.ZKItunesApi;

export default function getAppMeta(appId) {
  return new Promise((resolve, reject) => {
    if (Platform.OS !== 'ios') {
      resolve(null);
      return;
    }

    ZKItunesApi.getAppMeta(appId, (error, meta) => {
      if (error) {
        reject(error);
      } else {
        resolve(meta);
      }
    });
  });
}
