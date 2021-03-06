import React from 'react'
import StepButton from '../stepButton'
import './styles.css'

export default class Track extends React.Component {
  playEffect() {
    // noop for now
    console.log(`${this.props.name} sound!`)
  }

  componentDidUpdate(prev) {
    if (Number.isInteger(prev.step) && prev.isPlaying) {
      const { sequence } = this.props
      if (sequence[prev.step]) {
        this.playEffect()
      }
    }
  }

  toggleStepState = async (step) => {
    const { sequence, name } = this.props
    const updatedSequence = [...sequence]
    const isPlaying = !updatedSequence[step]
    if (isPlaying) {
      this.playEffect()
    }
    this.props.toggleSequence(name, step)
  }

  renderStepButtons() {
    const { step, sequence } = this.props
    const steps = []
    for (let i = 0; i < 16; i++) {
      const playingClassname = step === i ? 'playing' : ''
      steps.push(
        <StepButton
          key={i}
          step={i}
          isOn={sequence[i]}
          playing={playingClassname}
          toggleStepState={this.toggleStepState}
        />
      )
    }
    return steps
  }

  render() {
    return (
      <div className="track">
        <h3>{this.props.name}</h3>
        <span className="step-buttons">
          {this.renderStepButtons()}
        </span>
      </div>
    )
  }
}
