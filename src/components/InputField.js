import React from "react"

class InputField extends React.Component {
    state = {
        input: " "
    }

    render() {
        const onInput = event => {
            this.setState({
                input:event.target.value
            })
        }

    const onSubmit = e => {
        e.preventDefault()
        this.props.onSubmit(this.state.input)
        this.setState({
            input: " "
        })
    }

    return(
        <form className = "groceries-input" onSubmit = {onSubmit}>

            <input
                placeholder = "type your grocery here..."
                type ="search"
                onChange = {onInput}
                value = {this.state.input}
                className = "new-input"
            ></input>

            <button className = "button-new-input" type="submit"> Add </button>

        </form>
    )
}
}

export default InputField