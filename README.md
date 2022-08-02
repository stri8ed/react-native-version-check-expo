Fork of https://github.com/kimxogus/react-native-version-check which does not require expo-localization, and instead accepts a country parameter.

Usage:

```
VersionCheck('US').getLatestVersion()
.then(latestVersion => {
	console.log(latestVersion);    // 0.1.2
});
```
