import React from 'react';

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import ctx from '../context';

class App extends React.Component {

    render() {

        return (
            <div className="app">
		        Hello react/flux app
            </div>
        )
    }
}

export default DragDropContext(HTML5Backend)(App);

