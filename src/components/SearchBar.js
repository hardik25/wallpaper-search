import React from 'react';

class SearchBar extends React.Component {

  state = { term: '' };

  onSubmitForm = (event) => {
    event.preventDefault();
    //console.log(this.state.term);
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
          <form onSubmit={this.onSubmitForm} className="ui form">
              <div className="ui field">
                  <label>Image Search Term</label>
                  <input type="text" value={this.state.term} onChange={ (e) => this.setState({ term: e.target.value }) } />
                  <button type="submit" style={{ marginTop: '1%'}} className="ui blue button">Search</button>
              </div>
          </form>
      </div>
    );
  }

}

export default SearchBar;
