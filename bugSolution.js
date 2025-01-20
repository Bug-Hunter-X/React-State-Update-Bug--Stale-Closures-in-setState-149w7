```javascript
//Correct way to update state using functional update
this.setState(prevState => ({
  count: prevState.count + 1 //correct
}));
```