import User from './User';
import UserClass from './UserClass';
import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log('Parent Constructor called');
  }

  componentDidMount() {
    console.log('Parent componentDidMount() called');
  }

  render() {
    console.log('Parent render() called');

    return (
      <div>
        <h1 className="font-bold py-4 text-lg">About</h1>
        {/* <User
          name={'Sathish-Function'}
          location={'Chennai-Function'}
          contact={'@be.sathish'}
        /> */}
        <div className="flex items-center">
          <UserClass
            name={'First'}
            location={'Chennai-Class'}
            contact={'@akshaymarch7'}
            profile={'akshaymarch7'}
          />
          <UserClass
            name={'Second'}
            location={'Chennai-Class'}
            contact={'@be.sathish'}
            profile={'gsathishkumar'}
          />
        </div>
      </div>
    );
  }
}
export default About;
