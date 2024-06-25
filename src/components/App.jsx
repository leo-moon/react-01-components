import User from './User/User.jsx'
import userInfo from './user.json'

// console.log(userInfo)
const stats = userInfo.stats
// console.log(stats)
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
      <User
        username={userInfo.username}
        tag={userInfo.tag}
        location={userInfo.location}
        avatar={userInfo.avatar}
        stats={stats}
      />
    </div>
  );
};
