import React from 'react';
import Card from './Card';
import './List.css'

class List extends React.Component {

  render() {
    
    const cards = this.props.cards.map(c =>
      <Card title={c.title} content={c.content}/>
    )
    
    return (
      <section className="List">
        <header className="List-header">
          <h2>{this.props.header}</h2>
        </header>
        <div className="List-cards">
          {cards}
        </div>
      </section>
    )
  }
}

export default List;