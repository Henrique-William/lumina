import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Animated,
  StyleSheet,
} from "react-native";

const FilaButton: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const sliderPosition = useRef(new Animated.Value(0)).current;

  const toggleSwitch = () => {
    Animated.timing(sliderPosition, {
      toValue: isEnabled ? 0 : 1, // Move o slider entre 0 e 1
      duration: 300, // Duração da animação
      useNativeDriver: false, // False porque estamos animando "layout"
    }).start();
    setIsEnabled(!isEnabled);
  };
  return (
    <View style={{ width: '100%',flexDirection: "row", alignItems: 'center', justifyContent: 'flex-end'}}> 
      <TouchableWithoutFeedback onPress={toggleSwitch}>
        <View
          style={[
            styles.container,
            isEnabled ? styles.containerEnabled : styles.containerDisabled,
          ]}
        >
          <Animated.View
            style={[
              styles.slider,
              {
                transform: [
                  {
                    translateX: sliderPosition.interpolate({
                      inputRange: [0, 1],
                      outputRange: [2, 24], // Posição inicial e final do slider
                    }),
                  },
                ],
              },
            ]}
          />
        </View>
      </TouchableWithoutFeedback>
      {/* <Text>{isEnabled ? "Na fila" : "Fora da Fila"}</Text> */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 24,
    borderRadius: 15,
    justifyContent: "center",
    padding: 2,
  },
  containerEnabled: {
    backgroundColor: "#FF6969",
  },
  containerDisabled: {
    backgroundColor: "#828282",
  },
  slider: {
    width: 18,
    height: 18,
    borderRadius: 13,
    backgroundColor: "#fff",
  },
});

export default FilaButton;
