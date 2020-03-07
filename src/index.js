import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faFileExcel, } from '@fortawesome/free-solid-svg-icons'

import { faAngleDown, faEllipsisH} from '@fortawesome/free-solid-svg-icons'


class Button extends React.Component{

    render(){

        
        return(
            
                    <div className='test' style={{ ...this.props,  borderWidth: 2, backgroundColor:this.props.backgroundColor,
                         borderColor: this.props.borderColor, 
                         borderStyle: "solid", width: this.props.width ? this.props.width : 100, height: 30, marginRight: 10,  paddingLeft: 15, paddingRight: 10, paddingTop: 12 }}>
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
                        <a href='#Contact us'>Contact us</a>
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
                     <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                        <div className='text'>
                            <h1>Web development project</h1>  
                      </div>
                    <div className='test'>
                        <p>Very suitable to support all web development projects</p>
                    </div>
                </div> 
                <div className='buttons'>
                        <Button backgroundColor="transparent" borderColor="white">Our Services</Button>
                        <Button backgroundColor="#00897b" borderColor="transparent">Hire is now</Button>
                </div>
                <div className='fal'><FontAwesomeIcon icon={faAngleDown}/></div>
            </div>
                
       </div>
        <div className='container'>
            <div className='b_about'>
                <div className="b_about__text">
                    <h1>About us</h1>
                    <div className='word'>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                    </div>
                </div>

                     <div className='iconki'>
                         <div className='far'>
                             <img src='./image/dici.png'/>
                         </div>

                        <div className='fat'>
                             <img src='./image/landing page.png'/>
                       </div>
                
                        <div className='fas'>
                            <img src='./image/ui_ux.png'/>
                        </div>
                     </div>

                     <div className='conors'>

                         <div className='zagolovok'>
                             <h1>Our Services</h1>
                         </div>
                         <div className='cirkle'>
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>

                         </div>
                        <div className='kartinka'>
                           <img src='./image/1file.png'/>
                       </div>
                       <div className='kar'>
                           <img src='./image/2file.png'/>
                       </div>
                       <div className='kart'>
                           <img src='./image/3file.png'/>
                       </div>
                       <div className='karti'>
                           <img src='./image/4file.png'/>
                       </div>
                       <div className='kartin'>
                           <img src='./image/5file.png'/>
                       </div>
                       <div className='kartink'>
                           <img src='./image/6file.png'/>
                       </div>
                       
                           
                       
                 </div>
                
                
                
                
                     
            </div>
               </div>      
                        


                     <div>
                <div>
                    
        
        <div className='container'>
            <div className="latest_works">
                <div className='latest_works__text'>
                    <div className='topic'>
                        <h1>Latest Works</h1>
                    </div>
                    <div className='article'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor<br/>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                    </div>
                </div>
                <div className='latest_works__buttons'>
                    <div className='knopka'>
                        <Button color={'#282828'} backgroundColor="#00897b" borderColor="transparent">ALL</Button> 
                    </div>
                    <div  className='knopka'>
                        <Button color={'#282828'} width={190} backgroundColor="transparent" borderColor="#00897b">WEB DESIGN</Button>
                    </div>
                    <div className='knopka'>
                        <Button color={'#282828'} width={190} backgroundColor="transparent" borderColor="#00897b">UI/UX WEB DESIGN</Button>
                    </div>
                    <div className='knopka'>
                        <Button color={'#282828'} backgroundColor="transparent" borderColor="#00897b">MOCKUPS</Button>
                    </div>
                </div>
            </div>
        </div>
        <div className='container'>
            <div className='karusel'>
                <div className='karusel__image'>
                    
                    <img src='./image/Rectangle.png'/>
                </div>
                
                <div className='karusel__image'>
                    <img src='./image/intro.png'/>
                </div>
                <div className='karusel__image'>
                    <img src='./image/layer.png'/>
                </div>
                <div className='karusel__image'>
                    <img src='./image/rect.png'/>
                </div>
                <div className='karusel__image'>
                    <img src='./image/abstract.png'/>
                </div>
                <div className='karusel__image'>
                    <img src='./image/layout.png'/>   
                </div>
            </div>
        </div>
        <div className='container'>
            <div className='prices'>
                <div className='snap'>
                    
                    <Button backgroundColor="#00897b" borderColor="transparent">VIEW ALL</Button> 
                </div>
                <div className='ron'>
                    <div className='rubric'>
                        <h1>Pricing Plan</h1>
                    </div>
                    <div className='pan'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor<br/>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                    </div>
                    {/* <div className='con'></div>
                    <img src ='./image/free.png'/>
                
                    <div className='com'>
                        <img src ='./image/baisc.png'/>
                    </div> 
                    <div className='cob'>
                            <img src ='./image/ultimates.png'/>
                    
                    </div> */}
                    <div className='prices_card prices_card-selected'>
                        <div className='prices_card__header'>
                            <h3>Free Trail</h3>
                            <div style={{display: "flex", flexDirection: "row"}}><sup>$</sup><h1 className='prices_card__header__price'>00</h1>per month</div>
                        </div>
                        <div className='prices_card__body'>
                            <div className='prices_card__body___form'></div>
                            <div className='button'></div>
                        </div>
                        

                    </div>
                </div>
            </div>
        </div>


                        
                            
                    <div className='container'>
                        <div className='ban'>
                            <h1>Our Team Member</h1>
                        </div>
                      <div className='item'>
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor<br/>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>   
                    </div>  
                        </div>  
                    <div className='container'>
                        <div className='one'>
                            <img src='./image/member.png'/>
                        </div>
                       <div className='two'>
                           <img src='./image/members.png'/>
                           </div> 
                          <div className='three'>
                               <img src='./image/membe.png'/> 
                            </div> 
                               <div className='faw'><FontAwesomeIcon icon={faEllipsisH}/></div>     
                        </div>
                             <div className='comment'>
                                 <div className='titl'>
                                     <h1>Blog</h1>
                                 </div>
                                 <div className='paq'>
                                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor<br/>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                                 </div>
                                 <div className='imgs'>
                                     <img src ='./image/bg and image.png'/>
                                 </div>
                                 <div className='headl'>
                                     <h2>SEO Quis Vestibulum</h2>
                                 </div>
                                 <div className='mouse'>
                                     <img src='./image/mouse point.png'/>
                                 </div>
                                 <div className='happy'>
                                     <img src='./image/happy.png'/>
                                 </div>
                                 <div className='birthday'>
                                     <h4>14.0702017</h4>
                                 </div>
                                 <div className='file'>
                                     <img src='./image/file.png'/>
                                 </div>
                                 <div className='develop'>
                                     <h3>Development</h3>
                                 </div>
                                 <div className='pae'>
                                     <p>Dolore magna aliqua. Ut enim ad minim veniam,quis nos-<br/>trud exercitation ullamco laboris nisi ut aliquip ex ea com-<br/>modo consequat... </p>
                                 </div>
                                    <div className='bg'>
                                        <img src ='./image/bg.png'/>
                                    </div>
                                    <div className='bal'>
                                        <h2>SEO Quis Vestibulum</h2>
                                    </div>
                                    <div className='bk'>
                                        <img src='./image/happy.png'/>
                                    </div>
                                    <div className='hd'>
                                        <h4>14.0702017</h4>
                                    </div>
                                    <div className='fl'>
                                        <img src='./image/file.png'/>
                                    </div>
                                    <div className='xl'>
                                        <h3>Development</h3>
                                    </div>
                                    <div className='para'>
                                    <p>Dolore magna aliqua. Ut enim ad minim veniam,quis nos-<br/>trud exercitation ullamco laboris nisi ut aliquip ex ea com-<br/>modo consequat... </p>
                                        <div className='images'>
                                            <img src ='./image/become.png'/>
                                        </div>
                                        <div className='hate'>
                                            <h2>SEO Quis Vestibulum</h2>
                                        </div>
                                        <div className='vol'>
                                            <img src='./image/happy.png'/>
                                        </div>
                                        <div className='money'>
                                            <h4>14.0702017</h4>
                                        </div>
                                        <div className='mon'>
                                            <img src='image/file.png'/>
                                        </div>
                                        <div className='headn'>
                                            <h3>Development</h3>
                                        </div>
                                        <div className='pant'>
                                            <p>Dolore magna aliqua. Ut enim ad minim veniam,quis nos-<br/>trud exercitation ullamco laboris nisi ut aliquip ex ea com-<br/>modo consequat...</p>
                                        </div>
                                        <div className='new'>
                                            <Button backgroundColor='#00897b' borderColor='transparent'>MORE VIEW</Button>
                                        </div>
                                    </div>
                                    <div className='footer'>
                                        <div className='contact'>
                                            <img src='./image/contact area.png'/>
                                        </div>
                                        <div className='connected'>
                                            <h1>Contact Us</h1>
                                        </div>
                                        <div className='parag'>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor<br/>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                                        </div>
                                        <div className='adress'>
                                            <img src='./image/adress.png'/>
                                        </div>
                                        <div className='email'>
                                            <img src='./image/email_send.png'/>
                                        </div>
                                        <div className='send'>
                                            <img src='./image/button.png'/>
                                        </div>
                                        <div className='reserved'>
                                            <h3>All rights Reserved 2017</h3>
                                        </div>

                                    </div>
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

