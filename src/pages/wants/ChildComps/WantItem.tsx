import React from "react";
import { useHistory } from "react-router-dom";
import { WantItemContainer } from "./styledChild";

interface IWantItem {
  describe: string;
  evaluate: string;
  image: string;
  introduce: string;
  movie_name: string;
  star: number;
  serial_number: number;
}

const WantItem = (props: IWantItem) => {
  const history = useHistory();
  const handleClick = () => history.push(`detail/${props.serial_number}`);
  return (
    <WantItemContainer onClick={handleClick}>
      <div className="left">
        <img src={props.image} alt="" />
      </div>
      <div className="center">
        <p className="name">{props.movie_name}</p>
        <p className="introduce">{props.introduce.replace(/\\/g, "")}</p>
        <p className="evaluate">{props.evaluate}</p>
        <p className="describe">"{props.describe}"</p>
      </div>
      <div className="right">
        <p>
          <span className="rate">{props.star}</span>
          <span>分</span>
        </p>
        {/* <p>
          <img src={want_to_see} alt="" />
          <span className="want">想看</span>
        </p> */}
      </div>
    </WantItemContainer>
  );
};

export default WantItem;
