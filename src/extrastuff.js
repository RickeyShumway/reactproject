function App() {
    return (
      <div className="App">
       <h1>Hello</h1>
      </div>
    );
  }
  function MyElement() {
    return (
      <div>
        <h1>I am a Header.</h1>
        <h1>I am a Header too.</h1>
      </div>
    );
  }
class Counter extends React.Component {
    constructor () {
      super();
      this.state = {
        count: 0,
        food: 'none',
      }
    }
  
    render() {
      console.log(this.state.count)
      return <div>
          <h2 onClick={this.countUp}>This is the count: {this.state.count}</h2>
          <h3>My favorite food is {this.state.food}</h3>
          <form>
          <input type='text' onChange={this.submitForm}></input>
          <button>Submit Food</button>
          </form>
        </div>;
    }
    countUp = () => {
      // this.count = this.count +1;
      console.log('hello', this.state.count)
      this.setState({count:this.state.count+1})
    }
    submitForm = (event) => {
      console.log('should be a food')
      this.setState({food: event.target.value})
    }
  }