# Sanji Profile Card

<img src="https://user-images.githubusercontent.com/880569/42014956-a0d954e0-7ad7-11e8-8337-63ce840d3c90.png" width="400px" />

## Example usage

```js
import {sjProfileCard} from 'sanji-profile-card';

angular.module('myApp', [sjProfileCard]);

class DemoController {
  
  $onInit() {
    this.title = 'Profile 1';
    this.hashtagNum = '1';
    this.profileMessage = `
      <ul>
        <li>APN Auth</li>
        <li>Username: TestUser</li>
        <li>Password: ******</li>
      </ul>
    `;
    this.keyValuePairs = [
      {key: 'APN Type', value: 'Static'},
      {key: 'Authentication Type', value: 'Both'},
      {key: 'APN', value: 'internet'},
      {key: 'SIM', value: 'Slot 1'},
      {key: 'Pin Code', value: '0000'}
    ];
  }
}

const DemoComponent = {
  controller: DemoController,
  template: `
    <sanji-profile-card card-title="$ctrl.title"
      hashtag-num="$ctrl.hashtagNum"
      profile-message="$ctrl.profileMessage"
      key-value-pairs="$ctrl.keyValuePairs"></sanji-profile-card>
  `
};
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
