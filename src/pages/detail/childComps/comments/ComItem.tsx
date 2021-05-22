import React from 'react'
import {CommentItemCon} from "./styledComment"

interface IProps {
  name: string;
  date: string;
  star: string;
  content: string;
}

export default function ComItem({name, date, star, content}:IProps) {
  return (
    <CommentItemCon>
      <header>
        <p className="name">{name}</p>
        <p className="date">{date}</p>
        <p className="star"> <span>{star}</span> 有用</p>
      </header>
      <div className="content">
        <p>{content}</p>
      </div>
    </CommentItemCon>
  )
}
