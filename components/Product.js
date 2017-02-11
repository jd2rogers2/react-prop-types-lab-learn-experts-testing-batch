const React = require('react');

class Product extends React.Component{
  render(){
    return (
      <p>{this.props.name}</p>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

var range = [...Array(301).keys()].splice(80, 221);

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: React.PropTypes.oneOf(range).isRequired
}

module.exports = Product;