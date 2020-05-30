import React from 'react';

class Editor extends React.Component {
	constructor(props) {
		super(props);
		const exampleText = `### Github Flavored Markdown:
## h2 header
### h3 header

- Example list
  - An item
  - Another item

**Bold Text**

<a href="https://www.ptrchoi.com" target=_blank>link in a new tab</a>
[regular link](https://www.ptrchoi.com)

![React Logo w/ Text](https://goo.gl/Umyytc)
    
\`//inline code\`
\` value > 0 ? count++ : count-- \`
    
\`\`\`
//multi-line code block
if (test === true) {
  return 'success';
}
\`\`\`
    
> Block Quote`;

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
			<div className="editor-container">
				<div className="editor">
					<h3 className="editor-header">
						<i className="far fa-edit header-icon" /> Editor
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
			</div>
		);
	}
}

export default Editor;
