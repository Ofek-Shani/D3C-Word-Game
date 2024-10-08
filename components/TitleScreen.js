import { Pressable, Text, View } from "react-native";
import { StyleSheet } from "react-native-web";

function GameState(newName, newPuzzle, newPuzzleKey, newPlayerWord, newOtherWord) {
  return {
    name: newName,
    puzzle: newPuzzle,
    puzzleKey: newPuzzleKey,
    playerWord: newPlayerWord,
    otherWord: newOtherWord,
  };
}

const gameStates = [
  GameState("#1: Pastry puzzle: Part 1", "I **** to *** **n**k**", "I love to eat pancakes", 4, 1),
  GameState("#2: Pastry puzzle: Part 2", "I **** to *** pancakes", "I love to eat pancakes", 3, 1),
  GameState("#3: An old internet joke: Part 1", "All **** **** are ****** to us", "All your base are belong to us", 4, 1),
  GameState("#4: An old internet joke: Part 2", "All y*** **** are ****** to us", "All your base are belong to us", 2, 1),
]

export default function TitleScreen({navigation}) {

  function loadGame(state) {
    navigation.navigate('Game', state);
  }

  const infoText = `This is a demo of the game functionality of the medicine taking companion app.
  
  In this game, you must use the keyboard to guess the word highlighted in blue. You only have 1 guess per day.
  
  Press 'ENTER' to guess. A correct guess will reveal the word, and an incorrect one will reveal a single letter.
  
  Press one of the buttons below to enter a puzzle.
  `

  let content = [];
  for(let i = 0; i < gameStates.length; i++) {
    content[i] = (
      <Pressable key={i} style={styles.navigationButton} onPress={()=>loadGame(gameStates[i])}>
        <Text style={styles.navigationText}>{gameStates[i].name}</Text>
      </Pressable>
    );
  }
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{infoText}</Text>
        {content}
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'col',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    navigationButton: {
        backgroundColor: "#3a4466",
        borderColor: "#262b44",
        borderRadius: 3,
        borderWidth:3,
        justifyContent:'center',
        margin:1,
        padding: 4,
    },
    navigationText: {
        color: '#dde',

    }
});
  