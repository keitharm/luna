'use strict';

var React = require('react-native');
var MyApps = require('../MyApps/MyApps')
var Palette = require('../styles/Palette');
var {
  TabBarIOS,
  Text,
  View,
} = React;

console.log('oetuhoetuht');
console.log('oetuhoetuht');
console.log('oetuhoetuht');
console.log('oetuhoetuht');
console.log('oetuhoetuht');
console.log('oetuhoetuht');
console.log('oetuhoetuht');

class Navigator extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 'home',
    }
  }
  render() {
    console.log('-----------------------------');
    console.log('-----------------------------');
    console.log('-----------------------------');
    console.log('-----------------------------');
    console.log('-----------------------------');
    console.log('-----------------------------');
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
        systemIcon='featured'
        selected={this.state.selectedTab === 'home'}
        onPress = {() => {
          this.changeTab('home')
        }}>
          <Text>HOME BOYS</Text>
        </TabBarIOS.Item>
        <TabBarIOS.Item
        systemIcon='bookmarks'
        selected={this.state.selectedTab === 'bookmarks'}
        onPress = {() => {
          this.changeTab('bookmarks');
        }}>
          <Text>BOOKMAAAAAAAAAAAAARKS</Text>
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }

  isSelected(tabName) {
    return tabName === this.state.selectedTab;
  }

  changeTab(tabName) {
    console.log('changing tab to', tabName);
    this.setState({
      selectedTab: tabName
    });
  }

}

module.exports = Navigator;