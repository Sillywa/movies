import React from "react";
import ComItem from "./ComItem";
import { CommentListCon } from "./styledComment";
import Panel from "@c/panel/Panel";
type IComment = {
  name: string;
  date: string;
  star: string;
  content: string;
}

type IProps = {
  comments: Array<IComment>;
}

export default function ComList({ comments }: IProps) {
  return (
    <CommentListCon>
      <Panel title="精选评论">
        {comments.map((item, i) => (
          <ComItem {...item} key={i} />
        ))}
      </Panel>
    </CommentListCon>
  );
}
