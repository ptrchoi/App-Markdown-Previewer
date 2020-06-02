import React from 'react';

class Preview extends React.Component {
	render() {
		const { markedText } = this.props;
		return (
			<div className="preview-container">
				<div className="preview">
					<div className="preview-header">
						<div className="preview-title">
							<h3>
								<i className="far fa-eye header-icon" /> Live Preview
							</h3>
						</div>
					</div>
					<div id="preview" dangerouslySetInnerHTML={{ __html: markedText }} className="preview-body" />
				</div>
			</div>
		);
	}
}

export default Preview;
