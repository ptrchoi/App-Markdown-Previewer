import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';

import Editor from './Components/Editor';
import Preview from './Components/Preview';

import './styles/index.scss';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			input: '',
			markedText: ''
		};

		marked.setOptions({
			breaks: true,
			gfm: true
		});

		this.handleInput = this.handleInput.bind(this);
	}
	handleInput(inputText) {
		this.setState({
			markedText: marked(inputText)
		});
	}
	render() {
		return (
			<div className="main-container">
				<div className="window">
					<Editor onInput={this.handleInput} />
				</div>
				<div className="window">
					<Preview markedText={this.state.markedText} />
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
export default App;
