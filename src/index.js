import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faFileExcel} from '@fortawesome/free-solid-svg-icons'

import { faAngleDown} from '@fortawesome/free-solid-svg-icons'

<div style={{display}}>
<AboutItem icon="world" header="Awesome icons" text="sasas"/>
<AboutItem icon="reload" header="Awesome icons" text="sasas"/>
<AboutItem icon="head" header="Awesome icons" text="sasas"/>
</div>


class Button extends React.Component{

    render(){


        return(
            
                    <div className='test' style={{  borderWidth: 2, backgroundColor:this.props.backgroundColor,
                         borderColor: this.props.borderColor, borderStyle: "solid", width: 100, height: 30, marginRight: 10,  paddingLeft: 15, paddingTop: 12 }}>
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
        <div className='container greeting-block'>
            <div className="greeting-block__logo"></div>
            <div className='hello'></div>
            <div className='privet'>
               <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center',alignItems: 'center'}}>
                    <div className='text'>
                        <h1>Web development project</h1>  
                    </div>
                    <div className='test'>
                        <p>Very suitable to support all web development projects</p>
                    </div>
                </div> 
                <div className='buttons'>
                        <Button backgroundColor="transparent" borderColor="red">Our Services</Button>
                        <Button backgroundColor="#00897b" borderColor="transparent">Hire is now</Button>
                </div>
                <div className='fal'><FontAwesomeIcon icon={faAngleDown}/></div>
            </div>
                
       </div>
        <div className='container'>
            <div className='b_about'>
                <div className="b_about__text">
                    <h1>About us</h1>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit </p>
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

