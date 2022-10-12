# Jolocom-challenge

Create a “Collapsible” scroll component, which behaves in the following way: during the initial state, the header is empty. As soon as the user starts scrolling the content, the title of the scrolled section should appear in the header with an animation of your choice. The content of the scroll- able component is a form which includes: a first name, last name, phone number, email and age. The focused field must be highlighted as seen in the designs. Each form field should trigger the appropriate keyboard type. When all the form fields are entered correctly, the submit button should become enabled and the submit should be initiated. Furthermore, the submit function should be a promise that randomly rejects or resolves. After submission, a “submission result” should slide in. When the user presses the ‘Start over button’, the fresh form should appear and the “submission summary” should disappear. Lastly, the attached designs should be used more as a guidance, which means you can show off your creativity as well.


# How the Application was created
Download the react-native typescript starter template

1. npx react-native init jolocom --template react-native-template-typescript


# Install application dependencies
2. npm i


# IOS Development guide
# Cd into IOS folder
3. cd ios

# Install IOS pod dependencies
4. run pod install


# Open the XCode jolocom workspace file ~ jolocom.xcworkspace
5. Choose simulator choice
6. Run the application from Xcode