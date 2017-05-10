
#  React 笔记
<!-- MarkdownTOC -->

- [一、JSX 语法](#%E4%B8%80%E3%80%81jsx-%E8%AF%AD%E6%B3%95)
- [二、组件](#%E4%BA%8C%E3%80%81%E7%BB%84%E4%BB%B6)
	- [基本概念：](#%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5%EF%BC%9A)
	- [生命周期：](#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%EF%BC%9A)
		- [组件挂载：](#%E7%BB%84%E4%BB%B6%E6%8C%82%E8%BD%BD%EF%BC%9A)
		- [组件更新：](#%E7%BB%84%E4%BB%B6%E6%9B%B4%E6%96%B0%EF%BC%9A)
		- [组件卸载：](#%E7%BB%84%E4%BB%B6%E5%8D%B8%E8%BD%BD%EF%BC%9A)
	- [事件](#%E4%BA%8B%E4%BB%B6)
	- [DOM操作](#dom%E6%93%8D%E4%BD%9C)
	- [组合组件](#%E7%BB%84%E5%90%88%E7%BB%84%E4%BB%B6)
	- [组件通信](#%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1)
	- [Mixing](#mixing)
- [三、表单](#%E4%B8%89%E3%80%81%E8%A1%A8%E5%8D%95)
- [四、动画](#%E5%9B%9B%E3%80%81%E5%8A%A8%E7%94%BB)
- [五、测试、调试](#%E4%BA%94%E3%80%81%E6%B5%8B%E8%AF%95%E3%80%81%E8%B0%83%E8%AF%95)
- [六、数据源](#%E5%85%AD%E3%80%81%E6%95%B0%E6%8D%AE%E6%BA%90)
- [七、服务端渲染](#%E4%B8%83%E3%80%81%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%B8%B2%E6%9F%93)

<!-- /MarkdownTOC -->


##  一、JSX 语法
```
class =>className    for =>htmlFor
组件 		大写开头
js表达式	{}    子组件可以作为表达式
注释		{/*注释*/} or <Nav  /*注释*/  >
自定义属性  data-
<Component {...props} />
style 属性:		 	 { CSS 属性构成的 JS 对象}
onChange 事件:	不需要 onBlur 去触发
表单的表现差异大
```


##  二、组件
###  基本概念：
props  	组件属性
state   组件可看成一个“状态机”，state组件当前状态，通过this.setState()方法更新设置state，将调用render重新渲染UI
划分状态数据（什么数据属性可以当做状态：）
无状态组件

###  生命周期：
有7个方法根据执行时机，可分为3类：（组件挂载、组件更新、组件移除）
执行时机：
Mount：已插入真实 DOM；Update：正在被重新渲染；Unmount：已移出真实 DOM
两种类型处理函数：
will 函数在进入状态之前调用，did 函数在进入状态之后调用
两个特殊状态处理函数
componentWillReceiveProps(object nextProps)：已加载组件收到新的参数时调用
shouldComponentUpdate(object nextProps, object nextState)：组件判断是否重新渲染时调用

#####  组件挂载：
componentWillMount			渲染前调用一次，这个时候DOM结构还没有渲染
componentDidMount			渲染完成后调用一次，这个时候DOM结构已经渲染了
#####  组件更新：
*componentWillReceiveProps	初始化渲染不会调用，在接收到新的props时，会调用这个方法
*shouldComponentUpdate		初始化渲染不会调用，接收到新的props或state时调用
componentWillUpdate			初始化渲染不会调用，更新前调用
componentDidUpdate			初始化渲染不会调用，更新后调用
#####  组件卸载：
componentWillUnmount			组件移除前调用（例如清除内存，解除事件的监听） 

通俗讲，React 将组件在web中的形成、修改和渲染等划分为若干个阶段，组成组件的生命周期。在一个完整的生命周期内，一个组件会经过若干个阶段，在特殊的阶段组件会调用一个特别的生命周期方法。如下：
	1. constructor(props)
	2. componentWillMount()
	3. render()
	4. componentDidMount()
	5. componentWillReceiveProps(nextProps)
	6. shouldComponentUpdate(nextProps, nextState)
	7. componentWillUpdate(nextProps, nextState)
	8. render( )
	9. componentDidUpdate(prevProps, prevState )
	10. componentWillUnmount( )


###  事件
###  DOM操作
###  组合组件
###  组件通信
###  Mixing 


##  三、表单
##  四、动画
##  五、测试、调试

##  六、数据源

##  七、服务端渲染