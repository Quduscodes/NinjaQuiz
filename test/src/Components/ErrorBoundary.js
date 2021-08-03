import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError: false,
        }
    }

    static getDerivedStateFromError(error){
        return {
            hasError: true,
        }
    }    
    
    
    render() {
        const myStyle={
            color: 'red',
        }
        return (
          this.state.hasError ? <p className='todoItem' style={myStyle}>Ooops! something went wrong</p> : this.props.children
        )
    }
}

export default ErrorBoundary

