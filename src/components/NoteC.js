import React from 'react';
import './notec.css'
// 5.10.2018 Osa2 2.18
class NoteC extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          date: new Date(),
        message: '... luettelo on muutettu ...',
        nakyy: true
      };
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
      this.timerIDn = setInterval(
        () => this.tickn(),
        10000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
      clearInterval(this.timerIDn);
    }
  

    tickn() {
        console.log('NoteC tickn ', this.state.nakyy)
        this.state.nakyy ?
        this.setState({nakyy: false}) : this.setState({nakyy: true})
        
      }
    
    tick() {
      console.log('NoteC tick ', this.state.nakyy)
      this.setState({
        date: new Date()
      });
    }
  
    render() {
        if (this.state.nakyy) {
            return (
                <div className = 'note'>{this.state.message}
                </div>
                )
        }      else { return null }
    }
    
  }

  export default NoteC;
  /*
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );
  */