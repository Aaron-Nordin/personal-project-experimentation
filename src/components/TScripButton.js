import React, {Component} from "react"

export default class TScripButton extends Component {
    handleClick = () => {
        this.props.tScriptFn(this.props.userObj.DNA)
        this.props.create(this.props.userObj)
    }

    render () {
        return (
            <button onClick={() => this.handleClick()}>Transcribe DNA</button>
        )
    }
}