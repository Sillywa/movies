import React from 'react'
import ComItem from "./ComItem"
import {CommentListCon} from "./styledComment"
interface IComment {
  name: string;
  date: string;
  star: string;
  content: string;
}

interface IProps {
  comments: Array<IComment>;
}

export default function ComList({comments}:IProps) {
  return (
    <CommentListCon>
      <header>精选评论</header>
      {comments.map((item, i) => (
        <ComItem {...item} key={i} />
      ))}
    </CommentListCon>
  )
}
