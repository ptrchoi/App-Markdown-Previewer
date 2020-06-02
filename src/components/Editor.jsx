import React from 'react';
import $ from 'jquery';

class Editor extends React.Component {
	constructor(props) {
		super(props);
		const exampleText = `## What is Github Flavored Markdown?
Markdown is a way to style text on the web. You control the display of the document; formatting words as bold or italic, adding images, and creating lists are just a few of the things we can do with Markdown. Mostly, Markdown is just regular text with a few non-alphabetic characters.

Github Flavored Markdown can be used on Github for:
- Readme Files with the .md or .markdown extension
- Comments in Issues and Pull Requests
- Gists


## Syntax Guide:

### Headers
# This is an 'h1' tag
## This is an 'h2' tag
###### This is an 'h6' tag

### Emphasis
*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

_You **can** combine them_

### Lists
#### Unordered
* Item 1
* Item 2
  * Item 2a
  * Item 2b

#### Ordered
1. Item 1
1. Item 2
1. Item 3
	1. Item 3a
	1. Item 3b

### Images
<img src="https://goo.gl/Umyytc" width="240" height="240">

### Links
<a href="https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf" target=_blank>Click to find out more</a>

### Inline Code
\` value > 0 ? count++ : count-- \`
    

### Multi-line code block
\`\`\`
if (test === true) {
  return 'success';
}
\`\`\``;

		this.state = {
			defaultText: exampleText
		};

		this.handleChange = this.handleChange.bind(this);
		this.resetContent = this.resetContent.bind(this);
	}
	componentDidMount() {
		this.props.onInput(this.state.defaultText);
	}
	handleChange(e, resetContent = null) {
		let input = this.refs.inputText.value;

		// If resetContent, pass in reset content
		if (resetContent !== null) input = resetContent;

		this.props.onInput(input);
	}
	copyContent() {
		$('#editor')[0].select();
		document.execCommand('copy');
	}
	resetContent() {
		let content = this.state.defaultText;

		$('#editor')[0].value = content;
		this.handleChange(null, content);
	}
	clearContent() {
		$('#editor')[0].select();
		document.execCommand('delete');
	}
	render() {
		return (
			<div className="editor-container">
				<div className="editor">
					<div className="editor-header">
						<div className="editor-title">
							<h3>
								<i className="far fa-edit header-icon" /> Editor
							</h3>
						</div>
						<div className="button-container">
							<button id="resetBtn" className="editor-button" onClick={this.resetContent}>
								<i className="fas fa-history" /> <span className="button-label">reset</span>
							</button>
							<button id="copyBtn" className="editor-button" onClick={this.copyContent}>
								<i className="far fa-copy" /> <span className="button-label">copy</span>
							</button>
							<button id="clearBtn" className="editor-button" onClick={this.clearContent}>
								<i className="far fa-file" /> <span className="button-label">clear</span>
							</button>
						</div>
					</div>
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
