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
			<div className="app-container">
				<div className="title-container">
					<h1 className="app-logo">
						<i className="fab fa-markdown" />
					</h1>
					<h1 className="app-title">Markdown : Real-time Editor</h1>
				</div>
				<div className="components-container">
					<div className="window">
						<Editor onInput={this.handleInput} />
					</div>
					<div className="window">
						<Preview markedText={this.state.markedText} />
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
export default App;
