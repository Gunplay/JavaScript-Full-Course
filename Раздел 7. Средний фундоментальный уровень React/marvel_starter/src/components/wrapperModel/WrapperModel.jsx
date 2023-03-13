import React, {Component} from 'react';

class WrapperModel extends Component {
  constructor (props) {
    super(props)
  }
  render() {
    const { charInfo, onClose } = this.props;

    return (
      <>
        {charInfo && (
          <div>

            <button className="btnModalClose" onClick={onClose}>Close</button>

            {this.props.children}
          </div>
        )}
      </>
    );
  }
}

export default WrapperModel;