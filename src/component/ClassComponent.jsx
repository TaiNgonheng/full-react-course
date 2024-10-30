import React from 'react';
class ClassComponent extends React.Component{
    render(r) {
        return (
            <h1>Hello {this.props.namee} from <mark>class Component</mark></h1>
        );
    }
}
export default ClassComponent;