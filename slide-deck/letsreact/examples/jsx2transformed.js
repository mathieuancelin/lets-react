render() {
    return (
      React.createElement("div", null,
        React.createElement("h3", null, "TODO"),
        React.createElement(TodoList, {items: this.state.items}),
        React.createElement("form", {onSubmit: this.handleSubmit},
          React.createElement("input", {onChange: this.onChange, value: this.state.text}),
          React.createElement("button", null, 'Add #' + (this.state.items.length + 1))
        )
      )
    );
  }
