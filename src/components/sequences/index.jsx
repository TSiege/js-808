import React from 'react'
import './styles.css'

export default class Sequence extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props.sequences[0])
    this.state = {value: this.props.sequences[0]}
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  renderOptions() {
    return this.props.sequences.map((name, i ) => <option key={i} value={name}>{name}</option>)
  }

  render() {
    return (
      <select className="Sequence" value={this.state.value} onChange={this.handleChange}>
        {this.renderOptions()}
      </select>
    )
  }
}