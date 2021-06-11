import TabBar from "@c/tabbar/TabBar";
import TabBarItem from "@c/tabbar/TabBarItem";

import movies from "@a/imgs/movies.svg";
import movies_active from "@a/imgs/movies_active.svg";
import want from "@a/imgs/want.svg";
import want_active from "@a/imgs/want_active.svg";
import profile from "@a/imgs/profile.svg";
import profile_active from "@a/imgs/profile_active.svg";

import Movies from "@/pages/movies/Movies";
import Wants from "@/pages/wants/Wants";
import Profile from "@/pages/profile/Profile";
import Detail from "@/pages/detail/Detail";

import { connect } from "react-redux";

import { Route, Switch, Redirect } from "react-router-dom";

import { changeTab } from "./appActions";

type IState = {
  tabReducer: string;
  wantReducer: Array<Object>;
}

type IProps = {
  defaultActiveKey: string;
  onClick?: Function;
}

const App = ({ defaultActiveKey, onClick }: IProps) => (
  <div id="app">
    <Switch>
      <Route path="/home">
        <TabBar defaultActiveKey={defaultActiveKey} onChange={onClick}>
          <TabBarItem
            tabKey="1"
            icon={movies}
            activeIcon={movies_active}
            title="主页"
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
      </Route>
      <Route path="/detail/:id">
        <Detail></Detail>
      </Route>
      <Redirect from="/" to="/home" />
    </Switch>
  </div>
);

const mapStateToProps = (state: IState) => {
  return {
    defaultActiveKey: state.tabReducer,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onClick: (key: string) => {
      dispatch(changeTab(key));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
