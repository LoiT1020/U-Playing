import React, { Component } from "react";


class fetchgame extends Component {
  state = {
    loading: true,
    game: null,
  };

  async componentDidMount() {
    const url =
      "https://api.rawg.io/api/games?key=33761726586d462d81dbf4018fe2e169";
    const respond = await fetch(url);
    const data = await respond.json();
    this.setState({ game: data.results, loading: false });
    console.log(data.results);
  }

  render() {
    return (
      <div>
        <h2> list of game</h2>
        {this.state.loading || !this.state.game ? (
          <div>loading...</div>
        ) : (
          // other condition
          <div>
            {this.state.game.map((item) => (
              <div>
                <div>{item.name} </div>
                <div>rating:{item.rating} </div>
                <div>metacritic:{item.metacritic}</div>
                <img src={item.background_image} className="game-img"></img>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default fetchgame;
