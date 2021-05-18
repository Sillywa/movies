import React, { Component, createRef } from "react";
import Header from "../../component/header/Header";
import MovieList from "./ChildComps/MovieList";

import { getMovies } from "../../api";
import { debounce } from "../../utils";

interface IState {
  data: Array<any>,
  nextPage: number,
  pageSize: number
}

export default class Movies extends Component {
  loading: React.RefObject<unknown>;
  constructor(props:any) {
    super(props)
    // 获取子元素
    this.loading = createRef()
  }
  readonly state:Readonly<IState> = {
    data: [],
    nextPage: 1,
    pageSize: 10
  };
  
  getMovieList = () => {
    const { pageSize, nextPage } = this.state
    getMovies(nextPage, pageSize).then((res) => {
      this.setState((preState:Readonly<IState>) => {
        // 追加新的数据
        const data = preState.data.concat(res.data)
        const nextPage = preState.nextPage + 1
        return {
          data,
          nextPage
        }
      });
    });
  }

  handleScroll = debounce(() => {
    // 必须将其转换成 HTMLElement 才可以调用里面的方法
    const current =  this.loading.current as HTMLElement
    const bodyHeight:number = document.body.clientHeight || document.documentElement.clientHeight
    const top = current.getBoundingClientRect().top
    // 快要出现的时候加载下一页
    if(top < bodyHeight) {
      this.getMovieList()
    }
    
  }, 1000) 

  render() {
    return this.state.data.length > 0 ? (
      <div>
        <Header title="电影" />
        {/* ref传递给子组件里面的DOM元素 */}
        <MovieList data={this.state.data} handleScroll={this.handleScroll} ref={this.loading} />
      </div>
    ) : (
      <div>Loading...</div>
    );
  }
  componentDidMount() {
    // 加载第一页
    this.getMovieList()
  }
}
