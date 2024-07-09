import Profile from './components/Profile/Profile.jsx'
import userInfo from './components/Profile/user.json'
import Statistics from 'components/Statistics/Statistics.jsx';
import data from './components/Statistics/data.json';
import FriendList from './components/FriendList/FriendList.jsx'
import friends from './components/FriendList/friends.json'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile

        username={userInfo.username}
        tag={userInfo.tag}
        location={userInfo.location}
        avatar={userInfo.avatar}
        stats={userInfo.stats}
      />
      <Statistics
        title="Upload stats" stats={data}
      />
      <FriendList friends
        // avatar={friends.avatar}
        // name={friends.name}
        // isOnline={friends.isOnline}
        // id={friends.id}
      />
    </div>
  );
};
