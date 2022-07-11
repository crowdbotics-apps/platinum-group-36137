import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
  hr: {
    marginTop: 20,
    marginBottom: 20,
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  container: { flex: 1, height: 100, padding: 13 },
  text: { color: "black", fontSize: 20 },
  buttonPressed: { backgroundColor: "#6cd3b1" },
  buttonNotPressed: { backgroundColor: "#00ffde" },
  button: { borderRadius: 4, padding: 15, marginTop: 10 },
  buttonText: { color: "white", textAlign: "center", fontSize: 16 }
})

export const globalOptions = {
  name: "platinum_group_36137",
  url: "https://platinum_group_36137.botics.co",
  api: "https://platinum_group_36137.botics.co/api/v1"
}

export const modulesOptions = {
  "@modules/app-menu": {
    title: "Menu",
    copy: "Routes available!",
    styles: styles
  },

  undefined: {
    LOGO_URL:
      "https://crowdbotics-slack-dev.s3.amazonaws.com/media/project_component_resources/cb-icon.png",
    BACKGROUND_URL:
      "https://crowdbotics-slack-dev.s3.amazonaws.com/media/project_component_resources/halfbg.png",
    HOME_SCREEN_NAME: "Home Screen",
    validateEmail: "^[^\\s]+([.-]?\\w+)*@\\w+([.-]?\\w+)*(.\\w{2,3})+$",
    SignInNavText: "Sign In",
    SignUpNavText: "",
    SignInButtonText: "Login",
    SignUpButtonText: ""
  }
}
