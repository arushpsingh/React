import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Deepesh"
          time="Today at 6"
          blog="Hello"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Arush"
          time="Today at 7"
          blog="Welcome!!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Ayush"
          time="Today at 8"
          blog="Bye bye"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Aman"
          time="Today at 9"
          blog="No blog"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
}
ReactDOM.render(<App/>, document.querySelector('#root'))