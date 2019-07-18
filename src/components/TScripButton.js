import React, {Component} from "react"

export default class TScripButton extends Component {
    render () {
        return (
            <button onClick={() => this.props.tScripFn()}>Transcripe fn</button>
        )
    }
}