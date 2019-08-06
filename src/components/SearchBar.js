import React from "react";
import Autosuggest from "react-autosuggest";

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = (namesList, value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : namesList.filter(
        value => value.name.toLowerCase().slice(0, inputLength) === inputValue
      );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => <div>{suggestion.name}</div>;

class SearchBar extends React.Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: "",
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(this.props.namesList, value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    console.log(value);
    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: "Type a tech name",
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
      <>
        <label style={{ display: "block" }} htmlFor="searchbar">
          Search Name:
        </label>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => {
            console.log(value);
            this.props.setFieldValue("techName", value);
            this.props.setTechName(value);
          }}
        >
          Choose
        </button>
      </>
    );
  }
}

export default SearchBar;
