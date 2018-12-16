import React from 'react';
import SearchBar from './SearchBar';
import ListImages from './ListImages'
import unsplash from '../api/apiUnsplash';


class App extends React.Component {

  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '2%' }}>
        <SearchBar onSubmit={ this.onSearchSubmit }/>
        <ListImages images={ this.state.images } />
      </div>
    );
  }
}

export default App;
