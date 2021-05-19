import React, { Component, createRef } from 'react'
import Header from '../../component/header/Header'
import MoviesList from './ChildComps/MoviesList'

import { MovieCon } from './styledMovies';

import { getMovies } from "../../api";

import {debounce} from "../../utils"

interface IState {
  data: Array<any>;
  nextPage: number;
  pageSize: number;
}

export default class Movies extends Component<{}, IState> {
  loading: React.RefObject<unknown>;
  constructor(props:any) {
    super(props)
    this.loading = createRef()
  }
  readonly state:Readonly<IState> = {
    data: [],
    nextPage: 1,
    pageSize: 18
  }

  handleScroll = debounce(() => {
    const element = this.loading.current as HTMLElement
    const bodyHeight = document.body.clientHeight || document.documentElement.clientHeight
    if(element) {
      const top = element.getBoundingClientRect().top
      if(top < bodyHeight) {
        this.getMoviesList()
      }
    }
    
  }, 1000) 

  getMoviesList = () => {
    const { nextPage, pageSize } = this.state
    getMovies(nextPage, pageSize).then(res => {
      this.setState(preState => ({
        data: preState.data.concat(res.data),
        nextPage: preState.nextPage + 1
      }))
    })
  }

  render() {
    return (
      <MovieCon className="movies">
        <Header title="电影" />
        <MoviesList data={this.state.data} ref={this.loading} handleScroll={this.handleScroll} />
      </MovieCon>
    )
  }
  componentDidMount() {
    this.getMoviesList()
  }
}
