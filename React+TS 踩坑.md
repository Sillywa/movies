# React+TS 踩坑

1. **不能直接去获取一个DOM元素的属性或者方法，需要在这之前进行类型转换**

   如下所示，我们给元素绑定 ref，然后获取到该元素并转换成 HTMLElement

   ```jsx
   this.loading = createRef()
   <p className="loading" ref={ref}>加载中...</p>
   
   const current =  this.loading.current as HTMLElement
   ```

2. **使用 this.props.children 渲染的组件如何传递属性？**

   ```js
   React.Children.map(this.props.children, (child) => {
       return React.cloneElement(child as React.ReactElement<any>, {
                                 handleClick: this.handleClick,
                                 activeKey: this.state.activeKey,
                                 });
   });
   ```

   使用 React.Children 里面的方法去遍历 this.props.children，然后返回使用 React.cloneElement 后的组件，在 React.cloneElement 里面可以进行参数传递。

3. **如何封装一个 TabBar 组件**

   ```tsx
   import React, { Component } from "react";
   import { TabBarContainer } from "./StyledTab";
   interface IState {
     activeKey: string;
   }
   interface IProps {
     defaultActiveKey?: string;
     onChange?: Function;
   }
   
   // 将接口赋给组件，传入组件的属性和组件自身的state必须满足接口的标准
   class TabBar extends Component<IProps, IState> {
     // 设置只读的 state
     readonly state: Readonly<IState> = {
       activeKey: this.props.defaultActiveKey || "1",
     };
   
     handleClick = (key: string) => {
       const { onChange } = this.props;
       return () => {
         // console.log(index, this.state.activeTab);
         if (key !== this.state.activeKey) {
           this.setState({
             activeKey: key,
           });
           onChange && onChange(key);
         }
       };
     };
   
     renderHeader = () =>
       // 因为我们需要将父组件的 state 往下传给 this.props.children，如果直接渲染的话，没办法传递属性，因此使用如下办法
       React.Children.map(this.props.children, (child) => {
         return React.cloneElement(child as React.ReactElement<any>, {
           handleClick: this.handleClick,
           activeKey: this.state.activeKey,
         });
       });
   
     renderContent = () =>
       React.Children.map(this.props.children, (child) => {
         let element = React.cloneElement(child as React.ReactElement<any>);
         // 当前选中哪个就渲染那个的内容
         if (element.props.tabKey === this.state.activeKey) {
           // 返回子组件的子元素
           return element.props.children;
         }
       });
   
     render() {
       return (
         <>
           <div>{this.renderContent()}</div>
           <TabBarContainer>{this.renderHeader()}</TabBarContainer>
         </>
       );
     }
   }
   
   export default TabBar;
   ```

   使用方法如下：

   ```tsx
   <TabBar defaultActiveKey="1">
       <TabBarItem
           tabKey="1"
           icon={movies}
           activeIcon={movies_active}
           title="电影"
           >
           <Movies />
       </TabBarItem>
   
       <TabBarItem 
           icon={want} 
           activeIcon={want_active} 
           title="想看" 
           tabKey="2"
           >
           <Wants />
       </TabBarItem>
   
       <TabBarItem
           icon={profile}
           activeIcon={profile_active}
           title="我的"
           tabKey="3"
           >
           <Profile />
       </TabBarItem>
   </TabBar>
   ```

   

