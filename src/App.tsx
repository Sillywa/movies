import TabBar from "./component/tabbar/TabBar";
import TabBarItem from "./component/tabbar/TabBarItem";

import movies from "./asset/imgs/movies.svg";
import movies_active from "./asset/imgs/movies_active.svg";
import want from "./asset/imgs/want.svg";
import want_active from "./asset/imgs/want_active.svg";
import profile from "./asset/imgs/profile.svg";
import profile_active from "./asset/imgs/profile_active.svg";

import "./asset/styles/base.css";

import Movies from "./pages/movies/Movies";
import Wants from "./pages/wants/Wants";
import Profile from "./pages/profile/Profile";

const App = () => (
  <div id="app">
    <TabBar defaultActiveKey="1">
      <TabBarItem
        tabKey="1"
        icon={movies}
        activeIcon={movies_active}
        title="电影"
      >
        <Movies />
      </TabBarItem>

      <TabBarItem 
        icon={want} 
        activeIcon={want_active} 
        title="想看" 
        tabKey="2"
      >
        <Wants />
      </TabBarItem>

      <TabBarItem
        icon={profile}
        activeIcon={profile_active}
        title="我的"
        tabKey="3"
      >
        <Profile />
      </TabBarItem>
    </TabBar>
  </div>
);

export default App;
