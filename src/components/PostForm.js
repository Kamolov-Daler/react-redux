import React from "react";
import {connect} from 'react-redux'
import { createPost, showAlert } from "../redux/actions";
import { Alert } from "./Alert";

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  submithandler = (event) => {
    event.preventDefault();

    const {title} = this.state

    if (!title.trim()) {
      return this.props.showAlert('Название поста не может быть пустым')
    }

    const newPost = {
        title, id: Date.now().toString()
    }

    this.props.createPost(newPost)
    this.setState( {title: ''})
    
  };

  changeInputHandler = (event) => {
      event.persist()
    this.setState((prev) => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }));
  };

  render() {
    return (
      <form onSubmit={this.submithandler}>
        {this.props.alert && <Alert text={this.props.alert}/>}
        <div className="form-group">
          <label htmlFor="title">Заголовок поста</label>
          <input
            type="text"
            className="form-control mt-3"
            id="title"
            value={this.state.title}
            onChange={this.changeInputHandler}
            name="title"
          />
        </div>
        <button className="btn btn-success mt-3" type="submit">
          Создать
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  createPost,showAlert,
}

const mapStateToProps = state => {
  return {
    alert: state.appReducer.alert
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);