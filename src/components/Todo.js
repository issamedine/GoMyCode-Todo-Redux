import React, { Component } from "react";
import "./Todo.scss";
import { connect } from "react-redux";
import { add, deleted, complete } from "../redux/actions";

class Todo extends Component {
  state = {
    text: ""
  };


 

  render() {
    const { add, deleted, remindersReducer, complete } = this.props;
    return (
      <div className="todo-list">
        <h2 className="title-todo">Daily Todo Lists</h2>
        <div className="wrapper-btn-input">
          <input
            type="text"
            placeholder="entre your text"
            onChange={e => this.setState({ text: e.target.value })}
            value={this.state.text}
            className="input-add"
          />

          <i
            className="fas fa-plus btn-add"
            onClick={() => {
              add(this.state.text);
              this.setState({ text: "" });
            }}
          ></i>
        </div>
        <div>
          {remindersReducer.map(el => {
            return (
              <div className="affichage">
                <span key={el.id} style={{textDecoration: el.isComplete? "line-through":"none"}}>{el.text}</span>
                <p className="wrapper-item">
                  <span onClick={()=> complete(el.id)}>
                    <i className="far fa-edit"></i>
                  </span>
                  <span className="mr-4" onClick={() => deleted(el.id)}>
                  <i class="far fa-trash-alt"></i>
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = reminders => {
  return {
    remindersReducer: reminders
  };
};
// const mapDispatchToProps = dispatch => ({
//     add: () => {
//         dispatch(add())
//     }
// });

export default connect(mapStateToProps, { add, deleted, complete })(Todo);
