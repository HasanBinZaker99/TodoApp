import React, { useState } from "react";

/*
import is a keyword used to bring in other modules or libraries to use their functionality.
React is a JavaScript library used for building user interfaces, especially for web and mobile apps.
"react" is the name of the library you are importing.
*/
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";
import Todo from "./Todo";

const TodoList = () => {
  const [title, setTitle] = useState("TodoList");
  const [text, setText] = useState();
  const [list, setList] = useState(["Hello World"]);

  // Add item
  const addItem = () => {
    const updatedList = list;
    updatedList.push(text);
    setList(updatedList);
    setText("");
  };

  // Delete Item
  const deleteItem = (index) => {
    const updatedList = list.filter((todo) => todo !== index);
    setList(updatedList);
  };
  return (
    <View style={{ width: "80%", marginBottom: 60 }}>
      <Text style={[styles.align, styles.font]}>{title}</Text>
      <ScrollView>
        {list.map((x, index) => (
          <Todo key={index} item={x} index={index} delete={deleteItem} />
        ))}
      </ScrollView>
      <View>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <Button title="Add Item" onPress={addItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  align: {
    alignSelf: "center",
  },
  font: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
  },
});

export default TodoList;
