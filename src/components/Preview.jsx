import React from 'react';

class Preview extends React.Component {
	render() {
		const { markedText } = this.props;
		return (
			<div>
				<h3 className="preview-header">
					<i class="far fa-eye" /> Live Preview
				</h3>
				<div id="preview" dangerouslySetInnerHTML={{ __html: markedText }} className="preview-container" />
			</div>
		);
	}
}

export default Preview;
