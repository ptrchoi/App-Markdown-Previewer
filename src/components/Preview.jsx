import React from 'react';

class Preview extends React.Component {
	render() {
		const { markedText } = this.props;
		return (
			<div className="preview-wrapper">
				<h3 className="preview-header">
					<i className="far fa-eye" /> Live Preview
				</h3>
				<div id="preview" dangerouslySetInnerHTML={{ __html: markedText }} className="preview-body" />
			</div>
		);
	}
}

export default Preview;
