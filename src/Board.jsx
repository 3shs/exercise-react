import React from 'react'
import Square from './Square'

class Board extends React.Component {
    constructor (props) {
        super(props)
        
        this.state = {
            squares: Array(9).fill(null)
        }
    }
    render () {
        const status = 'next player: X'
        return (
            <div>
                <div className="staus">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
    renderSquare (i) {
        return <Square
                    value={ this.state.squares[i] }
                    onClick={ () => this.handleClick(i) }
                />
    }
}

export default Board