import React, {Component} from "react"

export default class TLateButton extends Component {
    render () {
        return (
            <button onClick={() => this.props.tLateFn()}>Translate fn</button>
        )
    }
}