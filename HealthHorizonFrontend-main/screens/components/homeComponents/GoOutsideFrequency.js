import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity
} from 'react-native'
import React, { Component } from 'react'

const AxiDot = ({ text, option, onFocus, choose }) => {
  return (
    <TouchableOpacity
      style={[
        styles.axiDot,
        onFocus ?
          styles.axiDotOnFocus :
          styles.axiDotOnBlur
      ]}
      onPress={choose}
    >
      <Text style={[
        styles.axiDotText,
        option == 'option1' ?
          onFocus ? styles.option1OnFocus : styles.option1OnBlur :
          option == 'option2' ?
            onFocus ? styles.option2OnFocus : styles.option2OnBlur :
            option == 'option3' ?
              onFocus ? styles.option3OnFocus : styles.option3OnBlur :
              option == 'option4' ?
                onFocus ? styles.option4OnFocus : styles.option4OnBlur :
                option == 'option5' ?
                  onFocus ? styles.option5OnFocus : styles.option5OnBlur :
                  '',
        {
          color: onFocus? '#204CA1' : '#717274'
        }
      ]}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

export default class GoOutsideFrequency extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chooseOption1: false,
      chooseOption2: false,
      chooseOption3: false,
      chooseOption4: false,
      chooseOption5: false,
    }
  }

  choose1 = () => {
    this.setState({
      chooseOption1: true,
      chooseOption2: false,
      chooseOption3: false,
      chooseOption4: false,
      chooseOption5: false,
    })
  }
  choose2 = () => {
    this.setState({
      chooseOption1: false,
      chooseOption2: true,
      chooseOption3: false,
      chooseOption4: false,
      chooseOption5: false,
    })
  }
  choose3 = () => {
    this.setState({
      chooseOption1: false,
      chooseOption2: false,
      chooseOption3: true,
      chooseOption4: false,
      chooseOption5: false,
    })
  }
  choose4 = () => {
    this.setState({
      chooseOption1: false,
      chooseOption2: false,
      chooseOption3: false,
      chooseOption4: true,
      chooseOption5: false,
    })
  }
  choose5 = () => {
    this.setState({
      chooseOption1: false,
      chooseOption2: false,
      chooseOption3: false,
      chooseOption4: false,
      chooseOption5: true,
    })
  }

  render() {
    return (
      <View style={styles.frame}>
        <View style={styles.questionaire}>
          <View style={styles.questionaireLeft}>
            <Image
              style={styles.questionaireIcon}
              source={require('../../../assets/questionaire.png')}
            />
          </View>
          <View style={styles.questionaireRight}>
            <Text style={styles.questionaireText}>How often do you leave home to go outside?</Text>
          </View>
        </View>
        <View style={styles.answer}>
          <View style={styles.axi}>
            <AxiDot
              text="Not at all"
              option="option1"
              onFocus={this.state.chooseOption1}
              choose={this.choose1}
            />
            <AxiDot
              text="Rarely"
              option="option2"
              onFocus={this.state.chooseOption2}
              choose={this.choose2}
            />
            <AxiDot
              text="1-3 timea a week"
              option="option3"
              onFocus={this.state.chooseOption3}
              choose={this.choose3}
            />
            <AxiDot
              text="Almost everyday"
              option="option4"
              onFocus={this.state.chooseOption4}
              choose={this.choose4}
            />
            <AxiDot
              text="More than once a day"
              option="option5"
              onFocus={this.state.chooseOption5}
              choose={this.choose5}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.submit}>
          <Text style={{
            fontSize: 20,
            color: 'white',
            fontStyle: 'italic'
          }}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  frame: {
    width: '100%',
    height: '57.2%',
    backgroundColor: '#F5F7FA',
    borderRadius: 12,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  questionaire: {
    width: '90%',
    height: 62,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // backgroundColor: 'red'
  },
  questionaireLeft: {
    width: 54,
    height: 54,
    // backgroundColor: '#bfa',
    justifyContent: 'center',
    alignItems: 'center'
  },
  questionaireIcon: {
    width: '86%',
    height: '86%'
  },
  questionaireRight: {
    width: '72%'
  },
  questionaireText: {
    width: '100%',
    height: 40,
    fontSize: 16,
    // backgroundColor: 'white'
  },
  answer: {
    width: '92%',
    height: 50,
    // backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center'
  },
  axi: {
    width: '92%',
    height: 6,
    backgroundColor: '#5784E8',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  axiDot: {
    
    position: 'relative',
    borderRadius: 50
  },
  axiDotOnBlur: {
    top: '-1%',
    width: 12,
    height: 12,
    backgroundColor: '#204CA1',
  },
  axiDotOnFocus: {
    top: '-2.2%',
    width: 20,
    height: 20,
    backgroundColor: '#928BE3',
  },
  axiDotText: {
    width: 100,
    position: 'absolute',
    fontSize: 12
  },
  option1OnBlur: {
    bottom: '-130%',
    left: '-158%',
  },
  option1OnFocus: {
    bottom: '-60%',
    left: '-88%',
  },
  option2OnBlur: {
    top: '-148%',
    left: '-80%',
  },
  option2OnFocus: {
    top: '-74%',
    left: '-30%',
  },
  option3OnBlur: {
    bottom: '-130%',
    left: '-300%',
  },
  option3OnFocus: {
    bottom: '-60%',
    left: '-160%',
  },
  option4OnBlur: {
    top: '-148%',
    left: '-290%',
  },
  option4OnFocus: {
    top: '-76%',
    left: '-134%',
  },
  option5OnBlur: {
    width: 80,
    bottom: '-250%',
    left: '-240%',
  },
  option5OnFocus: {
    width: 80,
    bottom: '-128%',
    left: '-100%',
  },
  submit: {
    width: 120,
    height: 40,
    backgroundColor: '#5784E8',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center'
  }
})