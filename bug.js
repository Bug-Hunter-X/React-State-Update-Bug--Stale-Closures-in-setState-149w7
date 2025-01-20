```javascript
//Incorrect way to update state using this.setState
this.setState({
  count: this.state.count + 1 //wrong, may cause unexpected behavior
});

//Correct way to update state, use functional update
this.setState(prevState => ({
  count: prevState.count + 1 //correct
}));
```