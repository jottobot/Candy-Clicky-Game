//     default  named
import React, { Component, Fragment } from 'react';
import PicturesCard from './components/PicturesCard';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import friends from './friends.json';
import './App.css';

// configuration - class - stateful WE CAN USE "THIS"
class App extends Component {
  // setting state to json array
  state = {
    friends,
    score: 0,
    highscore: 0,
    // using this as example to show what props can do
    spanData: 'Clicky Game: 2019',
    // title: "Clicky Game"
  };

  // api call (this case calling friends.json) - set that data to state

  endGame = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.friends.forEach(card => {
      card.count = 0;
    });
    this.setState({ score: 0 });
    return true;
  };

  clicks = id => {
    // eslint-disable-next-line array-callback-return
    this.state.friends.find((friend, index) => {
      if (friend.id === id) {
        if (friends[index].count === 0) {
          friends[index].count = friends[index].count + 1;
          this.setState({ score: this.state.score + 1 }, function() {
            console.log(this.state.score);
          });
          this.state.friends.sort(() => Math.random() - 0.5);
          return true;
        } else {
          this.endGame();
          alert("Game over. Your highscore that round was " + this.state.score + "!")
        }
      }
    });
  };

  render() {
    // define variables - define methods
    // explicit - we told it to return something
    // implied - we didn't tell it, but it returned undefined
    return (
      <Fragment>
          <Navbar title={this.state.title} score={this.state.score} highscore={this.state.highscore} /> 
          <Hero backgroundImage=" data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAADKCAMAAAC7SK2iAAAAmVBMVEX////uHCXuGyXtAADuHSbuJCz1oKLvLzHtDxb2qqvtDhD++PjtGyD60dPuIir84OHuQkP86OjuNjb1mJr5y8zvTE3829r4ubrwVFP98PDxbG74v8H0kZHydnnxSVDzhob29vbo6OioqKiDg4OLi4u9vb1vb2+ysrKdnZ3Hx8eVlZXb29uhoaHd3d23t7d3d3dmZmZRUVE9PT2gVzMKAAADy0lEQVR4nO3daZubNhQF4Jt02qbjNt0Xd5UQWEhisfP/f1yv8DKeLB/iMs9t5pw3DAEbsA7bSBiP5QUssS6AHXkJSz6HJZ/Bkp9gCRER0bPzCyy5g4XccrMugB1GR4Qc3fo8a0fuYckXsKwrk0RE9GS2sOQ3WMjvuVk3IuwwOiLk6Nb3NthBPsNb39tgR36FZV2PJiIiWt9fsORrWMhvN1o3He0wOiLkSxXWJxs78jMs+R6WdWWSiIiezAaW/A2LlyoQITdarQtgh9ERIUf/EhZybY6IiJ6rb2Ah3yhq3Wq2g1yHty6AHUZHhHxXhfUlYTvyOyxeqiAioufnD1jIf37L+vPEdpCbL9ZNRzuMjkjuXt9dd4/H3u3+0/NPuvCPfh75Orz1xyvtWFcmiYiI1vcVLOTanPW9DXaQW27WBbDD6IiQT3OvYMmfsKwrk0REROuz/pIpO8iXKl7DQm65WRfADnT0ly9u626db5VujWUg3zxm/SvGjnwLy7oySUREtL5/YCG/8WT9pp8d6EYrLOTo1p87soO81b+Dxa/BICKi58f6argd+QEW8ntu1jVpO4yOCDm69QUDO8g3j1l/GYUd2W43S1dtTv/OI6eh0zPnocvI5u0Ztm/PcHruA4v6uJGH17wqy7szPHrhx+XaXBd+u7WuRxMR0ZOxvmBgB/kvhVsXwA5yy826AHbk/tX9bd2t863SrbEM+RGW9e9Wok+LW3FC5869pe8uvfOoOw9dprO0vwz1S/fI8N4JP8TlN158yK2XGHKRQ9t7yTkUaXObtLfPx9FmH0XivlknwS1cn5PsJy2pFqLxhz4esi95cJJj8n0u6ZBd104iSR/cSZqWmTTFpDP6po9J/78WfN2YOblQp2yPD8ZGV1vJOpSLn3XdiOs0ukuG0btGy7kftSw70W7pudmnLAcvQ3IapRa5T2OrE+5SLb20RUveuFzG2ekK0fWmwqEsSwx1TBdR9m07ym7OTpPudGG73Siiud08xp2TGl0so/uhT8fA8yV6mrup1MFxGEaNHjspcSnpfl5y1e05JOnS2MiUpB+XsG8eojvdo8ssqR48cYk46Exed4Goe80YO30x8+jO6XY4RR9P+Z1uE1+Pa+e08PP1Vi/BeX/a6rrvHqPnGl28Py5R144LqcZ3GthJP+nC4uB0h2/1wbpipIn/g+ip1RxDPZmVPDWSwtgFX1o9lvXBrp6jYjgd6+3gdKompeOxHvXHJ0lFOv+wPJfbMI6hrZtdZ3AhRD3gQ+N0/qwnwJp3CBo4Bu1PoTXMTkSfjH8BDAWNOG1PUtUAAAAASUVORK5CYII=">
            <h1>Clicky Game</h1>
            <h2>Click a candy ONCE to earn points...</h2>
            <h2>if you click the same candy more than once, game over.</h2>
          </Hero>
          <Wrapper>
          {/* higher order function - takes a function as an argument or returns a function */}
          {this.state.friends.map(friend => (
            <PicturesCard
              clicks={this.clicks}
              id={friend.id}
              key={friend.id}
              image={friend.image}
            />
          ))}
        </Wrapper>
        <Footer spanData={this.state.spanData} />
      </Fragment>
    );
  }
}
export default App;