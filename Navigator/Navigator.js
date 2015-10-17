const React = require('react-native');
const MyApps = require('../MyApps/MyApps')
const Palette = require('../styles/Palette');
const Settings = require('../Settings/Settings');
const {
  TabBarIOS,
  Text,
  View,
} = React;

class Navigator extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 'home',
    }
  }

  render() {
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
          <MyApps />
        </TabBarIOS.Item>
        <TabBarIOS.Item
        systemIcon='more'
        selected={this.state.selectedTab === 'settings'}
        onPress = {() => {
          this.changeTab('settings');
        }}>
          <Settings />
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }

  changeTab(tabName) {
    this.setState({
      selectedTab: tabName
    });
  }

}

module.exports = Navigator;