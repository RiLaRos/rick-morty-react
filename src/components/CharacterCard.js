import React from "react";

class CharacterCard extends React.Component {
  render() {
    return (
      <div
        className="CharacterCard"
        style={{ backgroundImage: `url(${this.props.character.image})` }}
      >
        <div className="CharacterCard__name-container text-truncate">
          {this.props.character.name}
        </div>
      </div>
    );
  }
}

export default CharacterCard;
