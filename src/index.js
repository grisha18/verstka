import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'


class Button extends React.Component{

    render(){


        return(
            
                    <div style={{  borderWidth: 3, backgroundColor:this.props.backgroundColor,
                         borderColor: this.props.borderColor, borderStyle: "solid", width: 100, height: 40   }}>
                            {this.props.children}

                         </div>

        )
    }
}


class Header extends React.Component{
  render(){

    return (
    <>
        <div className='container'>
            <div className='header'>
                <div className='logo'>
                    Your logo 
                </div>
                <div className='menu'>
                    <ul className='menu-list'>
                    <li>
                        <a href='#Home'>Home</a>
                    </li>
                    <li>
                        <a href='#About'>About</a>
                    </li>
                    <li>
                        <a href='#Servicing'>Servicing</a>
                    </li>
                    <li>
                        <a href='#Portfolio'>Portfolio</a>
                        
                    </li>
                    <li>
                        <a href='#Blog'>Blog</a>
                    </li>
                    <li>
                        <a href='#Contact us'>Contact</a>
                    </li>
                    <li>
                        <div className='search'><FontAwesomeIcon icon={faSearch} /></div>
                    </li>
                    </ul>
                    
                </div>
            </div>
        </div>
        <div className='container'>

            <div className='privet'>
                <div className='text'>
                    
                </div>
                <div className='buttons'>
                    <Button backgroundColor="transparent" borderColor="red">Press me</Button>
                    <Button backgroundColor="lightblue" borderColor="transparent"/>
                </div>
            </div>
        </div>
    </>
    )

  }

  

}



const App = ()=>{


    return (

        <Header/>
    )

}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

