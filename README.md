Fork of https://github.com/kimxogus/react-native-version-check which does not require expo-localization, and instead accepts a country parameter.

Usage:

```
import VersionCheck from 'expo-react-native-version-checker';

VersionCheck('US').getLatestVersion()
.then(latestVersion => {
	console.log(latestVersion);
});
```
