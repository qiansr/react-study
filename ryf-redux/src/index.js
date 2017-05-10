import React from 'react'
import ReactDOM from 'react-dom'
// import { createStore } from 'redux'
// import Counter from './components/Counter'
// import counter from './reducers'
// import $ from 'jquery'
var $ = require("jquery")
import PropTypes from 'prop-types'

// const store = createStore(counter)
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
	componentDidMount(){

    // console.log(1);
    // console.log('hello',this.refs)
    // this.refs.div.appendChild('<div>2333</div>');

		setInterval(()=>{
			var opa = this.state.opacity;

			opa-=0.05;

      // console.log(opa,this.props);
			if (opa<0.1) {opa=1.0}
			this.setState({opacity:opa})
		},100)

    // this.refs.div.appendChild('<h1></h1>');
	}

  componentWillReceiveProps(nextProps){
    //接收的颜色 与 当前颜色不同时
    if (this.props.color !== nextProps.color){
      console.log('red')
    }
  }

  //  componentDidMount(){
  //   //将会触发组件重新渲染
  //   this.setState({
  //     opacity: 0.4
  //   })
  //   //对节点进行操作
  //   this.refs.div.appendChild('<h1>hhhh</h1>');
  // }
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

class A extends React.Component{
  constructor(props){
    super(props)
    this.state={init:false,data:[]}
    console.log(this.state.data)
    this.asynFetch = this.asynFetch.bind(this)
  }
  // mock asyn fetch
  asynFetch(callback){
    setTimeout(
      function(){callback([1,2,3])},3000
    )
  }

  componentWillMount() {  
        this.setState({init:true})          
        console.log('A componentWillMount');
  }
  
  componentDidMount() {
        this.setState({init:false},function() {
          console.log('callback: '+this.state.init)
        })
        console.log('A componentDidMount '+this.state.init );
        
        this.asynFetch((data)=>{
          this.setState({data:data})
        })
  }
  
  render() {
        console.log('A render '+this.state.init);
        let data = this.state.data;
        return (
          data.length?
            <ul>
              {this.state.data.map(e=><li key={e}>{e}</li>)}
            </ul>
            :
            <div>loading data ...</div>
        )  
  }
}



//组件嵌套
class Child extends React.Component{
    constructor(props){
      super(props)
      this.state={show:false}
      console.log('00','Child constructor','props:',props,'state:',this.state)
    }
  
    shouldComponentUpdate (nextProps, nextState) {
        console.log('A shouldComponentUpdate');
        return true;//返回值决定是否更新
    }

    componentWillUpdate() {
        console.log('A componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('A componentDidUpdate');
    }

    componentWillMount() {
        console.log('11','Child componentWillMount','props:',this.props,'state:',this.state)
    }
    componentDidMount() {
        console.log('33','Child componentDidMount','props:',this.props,'state:',this.state);
    }
    componentWillReceiveProps(nextProps) {
        console.log('44','This child componentWillReceiveProps',this.props,'state:',this.state, 'nextProps:',nextProps);
        if (this.props.name!==nextProps.name) {
          this.setState({show:true})
        }
    }
    render() {
        console.log('22','Child render','props:',this.props,'state:',this.state);
        return (
                this.state.show?
                <div>{this.props.name}</div>
                :
                <div>null</div>
        )
    }
};

class Parent extends React.Component{
    constructor(props){
      super(props)
      this.state={name:'xxx'}
      console.log('0','Parent constructor','props:',props,'state:',this.state)
    }
   
    componentWillMount() {        
      console.log('1','Parent componentWillMount','props:',this.props,'state:',this.state)

    }
  
    componentDidMount() {
        console.log('<3','Parent componentDidMount','props:',this.props,'state:',this.state)
        // this.setState({name:'ZZZ'},()=>{
        //     console.log('>3','Parent componentDidMount','props:',this.props,'state:',this.state)

        // })
        setTimeout(()=>{
          this.setState({name:'ZZZ'})
          console.log('=3','Parent componentDidMount','props:',this.props,'state:',this.state)
        },3000)
        // console.log('>3','Parent componentDidMount','props:',this.props,'state:',this.state)
    }
    render() {
        console.log('2','Parent render','props:',this.props,'state:',this.state)
        return <Child name={this.state.name}/>
    }
};

// ajax
class UserGist extends React.Component{
  constructor(props){
    super(props)
    this.state = {username:'',lastGistUrl:''}
  }
  componentDidMount(){
      this.server = $.get(this.props.source, function(result) {
      var lastGist = result[0];        

      this.setState({
          username: lastGist.owner.login,
          lastGistUrl: lastGist.html_url
      });
    }.bind(this));
  }
  componentWillUnmount(){
    this.server.abort();
  }
  render(){
    return(
      <div>
        {this.state.username}'s last gist is here [<a href={this.state.lastGistUrl}>{this.state.lastGistUrl}</a>].
      </div>
    )
  }
}

class B extends React.Component{
  constructor(props){
    super(props)
    this.state={name:'xxx'}
    this.asynFetch=this.asynFetch.bind(this)
  }
  asynFetch(data){
    setTimeout(()=>{
      this.setState({name:data})
    },5000)
  }
  componentDidMount() {
    // this.asynFetch('ZZZ')
    setTimeout(()=>{
      this.setState({name:'ZZZ'})
    },3000)
  }
  
  componentWillReceiveProps(nextProps) {
        console.log('This componentWillReceiveProps');
  }
  render(){
    return(
      <div name={this.state.name}>{this.state.name}</div>
      )
  }
}



//promise
class RepoList extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      error: null,
      data: null
    };
  }
  componentDidMount() {
    this.props.promise.then(
      value => this.setState({loading: false, data: value}),
      error => this.setState({loading: false, error: error}));
  }

  render() {
    if (this.state.loading) {
      return <span>Loading...</span>;
    }
    else if (this.state.error !== null) {
      return <span>Error: {this.state.error.message}</span>;
    }
    else {
      var repos = this.state.data.items;
      var repoList = repos.map(function (repo, index) {
        return (
          <li key={index}><a href={repo.html_url}>{repo.name}</a> ({repo.stargazers_count} stars) <br/> {repo.description}</li>
        );
      });
      return (
        <main>
          <h1>Most Popular JavaScript Projects in Github</h1>
          <ol>{repoList}</ol>
        </main>
      );
    }
  }
}





const render = () => ReactDOM.render(
<div>
  This is B:
  <B />

  <UserGist source="https://api.github.com/users/octocat/gists" />

  <RepoList promise={$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')} />

  <p></p>

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

  <Hello name="生命周期函数" />

  <App />

  

  <Parent />
  

 </div>,
  rootEl
)

render()

// store.subscribe(render)
