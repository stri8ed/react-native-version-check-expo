import { Platform } from 'react-native';
import Constants from 'expo-constants';

let RNVersionCheck;
const { manifest = {} } = Constants;
  const {
    version = null,
    android: { versionCode = null, package: androidPackageName = null } = {},
    ios: { bundleIdentifier = null, buildNumber = null } = {},
  } = manifest;
  let country;
  
  RNVersionCheck = {
    currentVersion: version,
    country,
    currentBuildNumber: Platform.select({
      android: versionCode,
      ios: buildNumber,
    }),
    packageName: Platform.select({
      android: androidPackageName,
      ios: bundleIdentifier,
    }),
  };

const COUNTRY = RNVersionCheck.country;
const PACKAGE_NAME = RNVersionCheck.packageName;
const CURRENT_BUILD_NUMBER = RNVersionCheck.currentBuildNumber;
const CURRENT_VERSION = RNVersionCheck.currentVersion;

export default function(country) {
	return {
	  getCountry: () => Promise.resolve(country),
	  getPackageName: () => PACKAGE_NAME,
	  getCurrentBuildNumber: () => CURRENT_BUILD_NUMBER,
	  getCurrentVersion: () => CURRENT_VERSION,
	};
};
