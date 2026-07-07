import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.name + 'Child Constructor called');
    this.state = {
      userInfo: {
        name: 'Dummy',
        location: 'Dummy',
        avatar_url: 'http://dummy-photo.com',
      },
    };
  }

  async componentDidMount() {
    // console.log(this.props.name + 'Child componentDidMount() called');
    const data = await fetch(
      'https://api.github.com/users/' + this.props.profile,
    );
    const json = await data.json();
    // console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    // console.log(this.props.name + 'Child componentDidUpdate() called');
  }

  componentWillUnmount() {
    // console.log(this.props.name + 'Child componentWillUnmount() called');
  }

  render() {
    // console.log(this.props.name + 'Child render() called');
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card p-4 m-4 bg-gray-100 hover:bg-gray-300 rounded-lg">
        <h2 className="font-bold">{name}</h2>
        <h3 className="italic">{location}</h3>
        <img className="rounded-lg" src={avatar_url} />
      </div>
    );
  }
}

export default UserClass;
