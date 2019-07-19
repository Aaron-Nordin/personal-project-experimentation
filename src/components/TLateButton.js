import React, {Component} from "react"

export default class TLateButton extends Component {
    handleClick = () => {
        this.props.tLateFn(this.props.userObj.DNA)
        this.props.create(this.props.userObj)
    }

    render () {
        return (
            <button onClick={() => this.handleClick()}>Translate DNA</button>
        )
    }
}