import CustomLayout from "./wrapPageElement"
import "./static/styles/fonts.css"
import "./static/styles/normalize.css"
import Amplify, { Auth } from "aws-amplify"
import awsConfig from "./src/aws-exports"
Amplify.configure(awsConfig)

export const wrapPageElement = CustomLayout
