import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
//This comment is just to update master to test for a fix for the websocket issue IGNORE
import styled from 'styled-components';
import cliff from './img/cliff.jpg';
import me from './img/me.jpg'
import meLG from './img/meLG.jpg'
import react from './img/react.jpg'
import js from './img/JS.png'
import fb from './img/fb.png'
import node from './img/node.png'
import mysql from './img/mysql.png'
import mongo from './img/mongo.png'
import html from './img/html.png'
import racket from './img/racket.png'
import old from './img/old.png'
import beer from './img/beer.png'
import burg from './img/burg.png'
import hang from './img/hang.png'
import friend from './img/friend.png'
import git from './img/git.png'
import linked from './img/linked.png'

const Button = styled.button`
  background-color: ${props => props.backgroundColor  || "#4c84ff" } ;
  color:white;
  border-radius: ${props => props.borderRadius || "0px"};
  height: 30px;
  width: ${props => props.width || "80px"};

  &:hover{
    opacity:0.9;
  }



`

const Card = styled.section`
  height: ${props => props.height || "0px" };
  width: ${props => props.width || "0px"};
  background-color:white;
  border-radius: ${ props => props.borderRadius || "30px"};
  display: grid;
  grid-template-rows: ${props => props.gridTemplateRows || ""};
  grid-template-columns: ${ props => props.gridTemplateColumns || "1fr 2fr 1fr"};
  align-items:center;
  padding: ${props => props.padding || "0px"};
  opacity: ${props => props.opacity || "1"};
  @media only screen and (max-width: 600px) {
    width : 375px;
    length: 100%;
    }
`
const Kard = styled.section`
  height: ${props => props.height || "0px" };
  width: ${props => props.width || "0px"};
  background-color:white;
  border-radius: ${ props => props.borderRadius || "30px"};
  display: grid;
  grid-template-rows: ${props => props.gridTemplateRows || ""};
  grid-template-columns: ${ props => props.gridTemplateColumns || "1fr 2fr 1fr"};
  align-items:center;
  padding: ${props => props.padding || "0px"};
  opacity: ${props => props.opacity || "1"};
  @media only screen and (max-width: 600px) {
    width : 375px;
    length: 100%;
    grid-template-columns: 1fr;
    padding-left: 50px;
    }
`

const Profile = styled.div`
  border-radius:100%;
  height:50px;
  width:50px;
  background-image: url(${me});
  margin: 0 auto;
`


const Container = styled.section`
  display:grid;
  margin: ${props => props.margin || "0px"};
  padding: ${props => props.padding  ||  "0px 30px"};
  grid-template-columns: ${props => props.gridTemplateColumns || ""};
  grid-gap: ${props => props.gridGap || "30px" };
  boxshadow: 10px 10px;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    }
`
const Kontainer = styled.section`
display:grid;
  margin: ${props => props.margin || "0px"};
  padding: ${props => props.padding  ||  "0px 30px"};
  grid-template-columns: ${props => props.gridTemplateColumns || ""};
  grid-gap: ${props => props.gridGap || "30px" };
  boxshadow: 10px 10px;
  @media only screen and (max-width: 600px) {
  grid-template-columns: 1fr;
  }
`

const Title = styled.h1`
  margin:0;
  padding:${props => props.padding || "0px"};
  font-size:${props => props.size || "40px"};
  font-family: 'Supermercado One', cursive;
`

const Paragraph = styled.p`
  color:gray;
  margin:5px;
  padding:5px;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
`
const Img = styled.img`
border-radius: 50%;
padding: 10px;
grid-gap: 30px;
`
const Emog = styled.img`
@media only screen and (max-width: 600px) {
  width: 100px;
  height: 100px;
  margin: auto;
  }
`


class App extends Component {
  constructor(props){
    super(props)
  }




  render(){
    return(
      <div>
        <Container>
          <Card width="500px" height="100px" >
            <Profile/>
            <section>
              <Title>Andrew</Title>
              <Paragraph>Portfolio</Paragraph>
            </section>
            <Button onClick={() => window.open ('https://twitter.com/littlebleed')} borderRadius="30px">Follow</Button>
          </Card>
          <Kontainer margin="30px 0px 0px 0px" padding="0px" gridTemplateColumns="1fr 1fr 1fr" >
            <Container padding="0px" gridTemplateRows="auto auto" gridGap="15px">
              <Card width="100%" height="200px" gridTemplateColumns="1fr" gridTemplateRows="1fr 1fr">
                <Title>&nbsp;&nbsp;Github&nbsp;<Tooltip title="Click Here for My GitHub" arrow><img src={git} onClick={() => window.open ('https://github.com/atocchi')}/></Tooltip>&nbsp;</Title>
                <Title>&nbsp;&nbsp;Linkedin&nbsp;<Tooltip title="Click here for my Linkedin" arrow><img src={linked} onClick={() => window.open ('https://www.linkedin.com/in/andrew-tocchi/')}/></Tooltip></Title>
                <Title size="25px" padding="20px"><a  href="mailto:andrewtocchi@gmail.com">andrewtocchi@gmail.com</a></Title>
                
              </Card>
              <Card width="100%"   height="900px" gridTemplateColumns="1fr" gridTemplateRows="1fr 1fr 1fr 1fr">
                 
                <Container gridTemplateColumns="0fr 1fr"  gridGap="15px"> 
                <Title style={{marginLeft: 5, marginTop: 10}}>Languages</Title>
                <Tooltip title="JavaScript" arrow><Emog src={js} style={{marginTop: 5}} alt={"JavaScript"} onClick={() => window.open ('https://en.wikipedia.org/wiki/JavaScript')}/></Tooltip>
                <Tooltip title="FireBase" arrow><Emog src={fb} onClick={() => window.open ('https://en.wikipedia.org/wiki/firebase')}/></Tooltip>
                <Tooltip title="Node.js" arrow><Emog src={node} onClick={() => window.open ('https://en.wikipedia.org/wiki/node.js')}/></Tooltip>
                <Tooltip title="MySQL" arrow><Emog src={mysql} onClick={() => window.open ('https://en.wikipedia.org/wiki/mysql')}/></Tooltip>
                <Tooltip title="HTML" arrow><Emog src={html} onClick={() => window.open ('https://en.wikipedia.org/wiki/html')}/></Tooltip> 
                <Tooltip title="Racket" arrow><Emog src={racket} onClick={() => window.open ('https://en.wikipedia.org/wiki/Racket_(programming_language)')}/></Tooltip>
                <Tooltip title="MongoDB" arrow><Emog src={mongo} onClick={() => window.open ('https://en.wikipedia.org/wiki/mongodb')}/></Tooltip>
        
                
                
                </Container>
                              
               
              </Card>
            </Container>
           
          
           
           
            <Card width="100%" height="1140px"gridTemplateColumns="1fr" gridTemplateRows="1fr 1fr 1fr 1fr" >
              <Img style={{margin: "auto"}}src={meLG}/>
              <Title size="30px"> &nbsp; Education <br/>
              <br />&nbsp; B.A. History<br />&nbsp; UC Berkeley 2012 <br />
              &nbsp; B.A. Art Practice<br />&nbsp; UC Berkeley 2012</Title>
            <div>
              <Paragraph> Greetings, my name is Andrew Tocchi and this is my personal bio.I have a great interest in technology, it spans the gap between things like SDR to simple networking and website design. I enjoy learning and growing when it comes to emerging tech or new fields of study. I take great pride in my ability to troubleshoot complex issues and to makes sense of chaos.</Paragraph>
              <Paragraph> I worked as an educator for several years and then worked as a buisness techinican for a major ISP. Nowadays I am working as an IT Sysadmin in the Transit Industry, and greatly enjoy the large scope of my work. I am constantly learning on the job and in my daily life and I never turn down a chance to expand my wealth of knowledge.</Paragraph>
              <Paragraph> I have worked with SDR when assessing the intergity of vast stretches of coax cable. I have worked with network diagnostic tools like wirehark as well as linux based tool kits. I have exeperience troubleshooting advanced VoIP issues, from physical PBX issues to SIP trunk failures. I have not only worked on as-builts for complex network layouts, but have personally routed, wallfished, and strung physical cables of every variety.</Paragraph>
            </div>  
            </Card>
           
           
           
           
            <Kard width="100%" height="1140px" gridTemplateColumns="1fr 1fr">
              <Title style={{marginLeft: 5}} onMouseEnter={(e)=> e.target.style.color="#89FAFA"} onMouseLeave={(e)=> e.target.style.color="#000000"} onClick={() => window.open ('https://github.com/atocchi/')}>Projects</Title>
              <Tooltip title="A sample Bootstrap Portfolio" arrow><img borderRadius="8px" border="1px, solid, #021a40;" src={old}  onClick={() => window.open ('https://atocchi.github.io/Bootstrap-Portfolio/')}/></Tooltip>
              <Tooltip title="A handlebars application that uses MySQL with CRUD functions to add and remove burgers" arrow><img borderRadius="8px" style={{marginLeft: 5}} border="1px, solid, #021a40;" src={burg} onClick={() => window.open ('https://ancient-lake-27110.herokuapp.com/')}/></Tooltip>
              <Tooltip title="A RootBeer counting game using DOM manipulation and Math, random" arrow><img borderRadius="8px" border="1px, solid, #021a40;" src={beer} onClick={() => window.open ('https://atocchi.github.io/unit-4-game/')}/></Tooltip>
              <Tooltip title="A hangman game that use array manipulation to register possible guesses" arrow><img borderRadius="8px" style={{marginLeft: 5}} border="1px, solid, #021a40;" src={hang} onClick={() => window.open ('https://atocchi.github.io/hangman/')}/></Tooltip>
              <Tooltip title="An app that uses fetch along with CRUD functions to match the user with friends" arrow><img borderRadius="8px" border="1px, solid, #021a40;" src={friend} onClick={() => window.open ('https://thawing-brushlands-79973.herokuapp.com/')}/></Tooltip>
            </Kard>
          
          </Kontainer>
          
        
        </Container>
       
      </div>
    )
  }




}



export default App;