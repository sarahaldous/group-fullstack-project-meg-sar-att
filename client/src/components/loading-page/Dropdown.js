import React, {Component} from "react"
import {withPlayer} from "../../context/PlayerProvider";
import {Link} from "react-router-dom";

class Dropdown extends Component {
    constructor(){
        super();
        this.state = {
            displayMenu: false,
        };
        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    };

    componentDidMount() {
        this.props.getPlayerData()
    }

    showDropdownMenu(e) {
        e.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });
    }

    render() {

        return (
            <div  className="user-select-dropdown">
                <div className="user-select-button" onClick={this.showDropdownMenu}> Select player </div>

                { this.state.displayMenu ? (
                        <ul>
                            {this.props.players.map(player =>{
                                return <li key={player._id} >
                                    <Link to={`site/user/${player._id}`}> {player.name}</Link>
                                </li>
                                })}
                        </ul>
                    ):
                    (
                        null
                    )
                }

            </div>

        );
    }
}

export default withPlayer(Dropdown)