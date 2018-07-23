const $inject = ['$scope'];

class ProfileCardController {

  constructor(...injects) {
    $inject.forEach((item, index) => (this[item] = injects[index]));
  }

  $onInit() {
    this.setData();
    this.$scope.$watch('$ctrl.keyValuePairs', () => this.setData());
  }

  setData() {
    this.keyValuePairs = this.keyValuePairs || [];
    this.firstPair = this.keyValuePairs[0];
    this.pairsArr = this.keyValuePairs.slice(1)
      .reduce((res, value, index, arr) => {
        if (index % 2 === 0) {
          res.push(arr.slice(index, index + 2));
        }
        return res;
      }, []);
  }
}

ProfileCardController.$inject = $inject;

const ProfileCardComponent = {
  bindings: {
    hashtagNum: '<',
    profileMessage: '<',
    cardTitle: '<',
    keyValuePairs: '<'
  },
  controller: ProfileCardController,
  template: `
    <div class="profile-card-container">
      <div class="profile-card">
        <div class="profile-card__icon-box">
          <ng-md-icon class="profile-card__icon md-button md-fab" icon="assignment"></ng-md-icon>
        </div>
        <div class="profile-card__info">
          <div class="profile-card__row profile-card__row--line">
            <div class="profile-card__title">{{$ctrl.cardTitle}}</div>
            <div class="profile-card__group">
              <div ng-if="$ctrl.firstPair" class="profile-card__prop">{{$ctrl.firstPair.key}}</div>
              <div ng-if="$ctrl.firstPair" class="profile-card__value">{{$ctrl.firstPair.value}}</div>
            </div>
          </div>
          <div ng-repeat="pairs in $ctrl.pairsArr" class="profile-card__row profile-card__row--line">
            <div class="profile-card__group" ng-repeat="pair in pairs">
              <div class="profile-card__prop">{{pair.key}}</div>
              <div class="profile-card__value">{{pair.value}}</div>
            </div>
          </div>
        </div>
      </div>
      <div ng-if="$ctrl.hashtagNum" class="profile-card-container__hashtag-num"># {{$ctrl.hashtagNum}}</div>
      <div ng-if="$ctrl.profileMessage" class="profile-card-container__account-box">
        <md-tooltip class="profile-card-container__tooltip"
          ng-bind-html="$ctrl.profileMessage"></md-tooltip>
        <ng-md-icon icon="account_box"></ng-md-icon>
      </div>
    </div>
  `
};

export default ProfileCardComponent;
