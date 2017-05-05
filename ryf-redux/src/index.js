import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'

import PropTypes from 'prop-types';

const store = createStore(counter)
const rootEl = document.getElementById('root')

const names = [123,456,'yiqian'];

const arr = [
  <p>React</p>,
  <p>React is awesome</p>,
];

class HelloMessage extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}

class NotesList extends React.Component{
  render() {
    return (
      <ul>
      {React.Children.map(this.props.children, (e)=><li key={e}>{e}</li>)}
      </ul>
    );
  }
}


class Mytitle extends React.Component{
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <h1>
      {this.props.title}
      </h1>
    );
  }
}

Mytitle.propTypes = {title:PropTypes.string.isRequired};//设置默认type
Mytitle.defaultProps = {title:"知行合一"}//设置默认值


class Mytitle2 extends React.Component{
  constructor(props) {
    super(props);
    this.defaultProps = {title:"内圣外王",name:"000"}
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state={value:"王阳明"}

  }
  handleClick(e){
  	console.log(this,this.refs,e,e.target,e.target.value);
  	this.defaultProps.name = this.refs.myTextInput.value;
    this.setState({value:this.refs.myTextInput.value})
  	this.refs.myTextInput.focus();
  }
  handleChange(e){
  	this.refs.myTextInput2.value=e.target.value
  }
  render() {

    return (
      <div>
	      <h1>
	      {console.log("000",this)}
	      {this.props.title}{this.props.name}
	      </h1>
	      <input type="text" ref="myTextInput" onChange={this.handleChange}/>
	      <input type="button" ref="myTextInput2" value={this.state.value||"2Focus the text input"} onClick={this.handleClick} />
      </div>
    );
  }
}

class LikeButton extends React.Component{
	constructor(props){
		super(props)
		this.handleClick = this.handleClick.bind(this);
		this.state={liked:false}
	}
	handleClick(){
		this.setState({liked:!this.state.liked})
	}
	render(){
		var text = this.state.liked?'like':'haven\'t liked';
		return(
			<p onClick={this.handleClick}>
				you {text} this. Click to toggle.
			</p>
		)
	}

}

class Hello extends React.Component{
	constructor(props){
		super(props);
		this.state={opacity:1.0}
	}
	componentsDidMount(){
		this.timer = setInterval(()=>{
			var opa = this.state.opacity;
			opa-=0.05;
			if (opa<0.1) {opa=1.0}
			this.setState({opacity:opa})
		},100)
	}
	render(){
		return(
			<div style={{opacity:this.state.opacity}}>
				Hello {this.props.name}
			</div>
		)
	}
}


const AppComponent =(props)=>{
	const {data,title} = props;
	return <div>
	{console.log(props)}
	{props.title}
	</div>

}


class App extends React.Component {
  constructor(props) {
  	super(props)
    this.state= { userInput: '123' };
  }

  handleChange(e) {
    this.setState({ userInput: e.target.value });
  }

  clearAndFocusInput() {
    this.setState({ userInput: '' }, () => {
      this.refs.theInput.focus();
    });
  }

  render(){
    return (
      <div>
        <input
          ref="theInput"
          value={this.state.userInput}
          onChange={this.handleChange.bind(this)}
        />
        <input type="button" value="Click to Focus and Reset" 
        onClick={this.clearAndFocusInput.bind(this)} />
        <p>{this.state.userInput}</p>
          

      </div>
    );
  }
}



// let data = "abc";

const render = () => ReactDOM.render(
<div>
  demo01:
  <h1>hello,world!</h1>

  demo02:
  <div>{arr}1</div>

  demo03:
  {names.map(e=><h3 key={e}>hello,{e}!</h3>)}

  demo04:
  <HelloMessage name="caoyiqian!"></HelloMessage> 

  demo05:
  <NotesList>
    <span>hello</span>
    <span>world</span>
  </NotesList>

  demo06:
  <Mytitle title="a"></Mytitle>
  <Mytitle />
  <Mytitle2 title="内圣外王"/>
  <Mytitle2 />

  无状态组件：
  <AppComponent title = "222" data={"12"}/>

  <LikeButton />

  <Hello name="yiqian" />

  <App />

  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />
 </div>,
  rootEl
)

render()

store.subscribe(render)
