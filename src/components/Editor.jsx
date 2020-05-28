import React from 'react';

class Editor extends React.Component {
	constructor(props) {
		super(props);
		const exampleText = `### MARKDOWN EXAMPLES:

![React Logo w/ Text](https://goo.gl/Umyytc)
    
# h1 header
## h2 header
<a href="https://www.freecodecamp.com" target=_blank>link in a new tab</a>
[regular link](https://www.freecodecamp.com)

\`//inline code\`
\` value > 0 ? count++ : count-- \`
    
\`\`\`
//multi-line code block
if (test === true) {
  return 'success';
}
\`\`\`
    
> Block Quote
- My list
  - An item
  - Another item

**Bold Text**`;

		this.state = {
			defaultText: exampleText
		};

		this.handleChange = this.handleChange.bind(this);
	}
	componentDidMount() {
		this.props.onInput(this.state.defaultText);
	}
	handleChange(e) {
		e.preventDefault();
		this.props.onInput(this.refs.inputText.value);
	}
	render() {
		return (
			<div className="editor-wrapper">
				<h3 className="editor-header">
					<i className="far fa-edit" /> Editor (Github flavored)
				</h3>
				<textarea
					id="editor"
					ref="inputText"
					value={this.props.input}
					className="editor-body"
					onChange={this.handleChange}
					defaultValue={this.state.defaultText}
				/>
			</div>
		);
	}
}

export default Editor;
