/**
 * Calculator React Native App
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


class App extends Component {
  constructor() {
    super()
    this.state = {
      resultText: "",
      calculatedText: ""
    }
    this.operations = ["DEL", "+","-","*","/"];
  }

  calculateResult() {
    this.setState({
      calculatedText: eval(this.state.resultText)
    })
  }
  buttonPressed(text) {
    if(text == "=") {
      return this.calculateResult()
    }
    if(text == "0") {

    }
    this.setState({
      resultText: this.state.resultText+text
    })
  };

  operationPressed(op) {
    switch(op) {
      case "DEL":
          this.setState({
            resultText: ""
          })
          break
      default:
        let lastChar = this.state.resultText.split("").pop()
        if(this.state.resultText == "" || this.operations.indexOf(lastChar)>0) return
        this.setState({
          resultText: this.state.resultText+op
        })
        break
    }
    
  }

  render() {

    const nums = [[1,2,3],[4,5,6],[7,8,9],[".",0,"="]];
    let rows= [];
    for (let i=0; i<nums.length; i++) {
      let row= [];
      for (let j=0; j<nums[i].length; j++) {
        row.push(
        <TouchableOpacity key={nums[i][j]} style={styles.btn} onPress={()=>this.buttonPressed(nums[i][j])}>
          <Text style={styles.btntext}>{nums[i][j]}</Text>
        </TouchableOpacity>)
      }
      rows.push(<View key={i} style={styles.row}>{row}</View>)
    }
    
    let ops=[];
    for(let i =0; i<this.operations.length; i++){
      ops.push(
      <TouchableOpacity key={this.operations[i]} onPress={()=>this.operationPressed(this.operations[i])}>
        <Text style={styles.btnOperations}>{this.operations[i]}</Text>
      </TouchableOpacity>)
    }

    return (
        <View style={styles.container}>
          <View style={styles.result}>
            <Text style={styles.resultText}>{this.state.resultText}</Text>
          </View>
          <View style={styles.calculation}>
            <Text style={styles.resultText}>{this.state.calculatedText}</Text>
          </View>
          <View style={styles.buttons}>
            <View style={styles.numbers}>
              {rows}
            </View>
            <View style={styles.operations}>
              {ops}
            </View>
          </View>
        </View>
    );
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  resultText: {
    fontSize: 40,
  },
  btntext: {
    fontSize: 32,
    color: 'white'
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },

  btnOperations: {
    color: 'white',
    fontSize: 32
  },
//  calculatedText
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  result: {
    flex: 2,
    backgroundColor: 'white',
    alignItems: 'flex-end'
  },
  calculation: {
    flex:1,
    backgroundColor: '#72a6fb'
  },
  buttons: {
    flex: 7,
    flexDirection: 'row'
  },
  numbers: {
    flex: 3,
    backgroundColor: "#3b3f41",
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#5e6166',
  }
});


// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },

//   container: {
//     backgroundColor: Colors.white,
//   }

// });

export default App;
