import React from 'react';
import ClassComponent from './classComponent.js';
// import createElement from './createElement.js';


class App extends React.Component {
  constructor(props){
    super();

  }
  functionalComponent = () => <div>This is a functional component</div>

  render (){
    return (
      <React.Fragment>
        {React.createElement(
            'div',
            {className: 'CreateElementDiv'},
            'This Element was created with React.createElement!'
          )}
        {<div className='PureComponentDiv'>
          <p>This Component is a simple representational Component</p>
        </div>}
        <ClassComponent/>
        {this.functionalComponent()}
      </React.Fragment>
    );
  }
}

export default App;
