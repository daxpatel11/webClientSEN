import React, { Component } from 'react';
import Properties from './Properties';



class App extends Component
{
    render()
    {
        return (
            <div>
                
                <div>
                <script src="bootstrap.min.js"></script>
                    <p>List of all properties</p>
                    <Properties />
                    
                </div>
            </div>
        );
    }
}

export default App;
