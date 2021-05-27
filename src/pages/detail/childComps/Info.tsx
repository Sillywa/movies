import React from "react";
import Star from "@/pages/movies/ChildComps/Star";

import { addWant } from "@/pages/wants/actions";

import { InfoContainer } from "./styledInfo";
import { connect } from "react-redux";

import want_to_see from "@a/imgs/want_to_see.svg";
import like from "@a/imgs/like.svg";
type IState = {
  tabReducer: string;
  wantReducer: Array<IWanted>;
}
type IWanted = {
  serial_number: number;
  [propertyName: string]: any;
}
type IProps = {
  image: string;
  movie_name: string;
  times: number;
  date: Array<string>;
  evaluate: string;
  star: number;
  director: string;
  writer: string;
  type: Array<string>;
  actors: Array<string>;
  handleClick?: Function;
  describe: string;
  introduce: string;
  serial_number: number;
  wantedMovies?: Array<IWanted>;
}
function Info({
  movie_name,
  times,
  date,
  evaluate,
  star,
  director,
  writer,
  type,
  actors,
  image,
  handleClick,
  serial_number,
  wantedMovies,
}: IProps) {
  return (
    <InfoContainer image={image.replace(/\\/g, "")}>
      <div className="abstract">
        <header>{movie_name}</header>
        <p>
          <span>{times}</span>分钟
        </p>
        <p>{date[0]}</p>
        <p>{evaluate}</p>
        <div className="img">
          {wantedMovies &&
          wantedMovies.some((item) => item.serial_number === serial_number) ? (
            <div className="want_btn">
              <p className="want">已想看</p>
            </div>
          ) : (
            <div
              className="want_btn"
              onClick={() => handleClick && handleClick()}
            >
              <img className="icon" src={want_to_see} alt="" />
              <p className="want">想看</p>
            </div>
          )}

          <div className="want_btn">
            <img className="icon" src={like} alt="" />
            <p className="want">看过</p>
          </div>
          <img src={image} alt="" />
        </div>
      </div>
      <div className="content">
        <div className="title">{movie_name}</div>
        <div className="star-content">
          <span className="name">评分</span>
          <Star star={star} />
          <span>{star}</span>
        </div>
        <div>
          <span className="name">导演</span>
          <span>{director}</span>
        </div>
        <div>
          <span className="name">编剧</span>
          <span>{writer}</span>
        </div>
        <div>
          <span className="name">类型</span>
          <span>{type.join("/")}</span>
        </div>
        <div>
          <span className="name">演员</span>
          <span>{actors.join("/")}</span>
        </div>
      </div>
    </InfoContainer>
  );
}

const mapStateToProps = (state: IState) => {
  return {
    wantedMovies: state.wantReducer,
  };
};

const mapDispatchToProps = (dispatch: Function, ownProps: IProps) => {
  const {
    movie_name,
    evaluate,
    star,
    introduce,
    describe,
    image,
    serial_number,
  } = ownProps;
  return {
    handleClick: () => {
      dispatch(
        addWant({
          movie_name,
          evaluate,
          star,
          introduce,
          describe,
          image,
          serial_number,
        })
      );
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Info);
