import img1 from "../../images/happy.svg"
import img2 from "../../images/Treasure.svg"
import img3 from "../../images/return.svg"
import img4 from "../../images/signup.svg"


export const homeObjOne = {
    id: "about",
    headline: "Access to lost items.",
    topLine: "LostFinder",
    description: `Get access to our exclusive
     app that allows you to report lost or found items 
    and retrieve lost items.`,
    buttonLabel: "Get started",
    link: "signup",
    imgStart: false,
    image: img1,
    alt: "Happy people",


}

export const homeObjTwo = {
    id: "find",
    headline: "Find lost items.",
    description: `Check if your item has been 
    found by someone.`,
    buttonLabel: "Find",
    imgStart: true,
    image: img2,
    alt: "Finding item",
    path: "/find"

}

export const homeObjThree = {
    id: "return",
    headline: "Return found items.",
    description: `Reach the owner
    of the item found by you.`,
    buttonLabel: "Report",

    imgStart: true,
    image: img3,
    alt: "Returning item",
    path: "/return"

}

export const homeObjFour = {
    id: "signup",
    headline: "Get started today.",
    description: `Create an account
    and start enjoying every service Lostfinder offers!`,
    buttonLabel: "Sign Up",
    link: "detailsSection",
    imgStart: false,
    image: img4,
    alt: "Signing up",
    path: "/signup"

}

export const formObjOne = {
        formH1: "Sign In",
        for1: "email",
        for2: "password",
        formLabel1: "Email",
        formLabel2: "Password",
        formType1: "email",
        formType2: "password",
        buttonLabel: "Sign in",
        buttonType: "submit",
        text: "Forgot Password?",
        text2: `Don't have an account yet?`,
        span: "Create an account."
}

export const formObjTwo = {
    formH1: "Sign Up",
    for1: "firstname",
    for2: "lastname",
    for3: "email",
    formLabel1: "First Name",
    formLabel2: "Last Name",
    formLabel3: "Email",
    formType1: "text",
    formType2: "text",
    formType3: "email",
    buttonLabel: "Sign up",
    buttonType: "submit",
    text: `Already have an account?`,
    span: "Sign in"
}
export const formObjThree = {
    formH1: "Retrieve Password",
    for1: "email",
    formLabel1: "Email",
    formType1: "email",
    buttonLabel: "Retrieve Password",
    buttonType: "submit",
}

export const FormObj1 = {
    heading: "REPORT AN ITEM YOU FOUND",
    infoP1 :    `Thank you for bringing items,
    kindly enter the details of thr items you found, to get it
    across to the rightful owner.`,
    infoP2: `Please, keep some details and 
    descriptions to yourself, this will help
    you to verify the rightful owner,
    as the person must describe the items in details.`,
    label1: "Name of Item",
    for1: "name",
    type1: "text",
    placeHolder1: `What is the name of the item you found?`,
    label2: "Short Description:",
    for2: "description",
    smallText: "Other users can see this description.",
    label3: "Location",
    for3: "location",
    type3: "text",
    placeHolder3:  "Where did you find this item?",
    label4: "When did you see this item?",
    for4: "date",
    type4: "date",
    label5: "Image (Optional)",
    type5: "file",
    buttonType: "submit",
    buttonLabel: "LOOK FOR OWNER"
  

}
export const FormObj2 = {
    heading: "REPORT AN ITEM YOU'RE LOOKING FOR",
    infoP1 :    `We're sorry about your lost item, kindly 
    provide the details of the item, lets find it for you.`,
    infoP2: `Before your item gets returned to you, 
    you must describe the items in details.`,
    label1: "Name of Item",
    for1: "name",
    type1: "text",
    placeHolder1: `What is the name
 of the item you're looking for?`,
    label2: "Short Description:",
    for2: "description",
    smallText: "Other users can see this description.",
    label3: "Location",
    for3: "location",
    type3: "text",
    placeHolder3:  "List all posible places you could have lost it.",
    label4: "When last did you see this item?",
    for4: "date",
    type4: "date",
    label5: "Image (Optional)",
    type5: "file",
    buttonType: "submit",
    buttonLabel: "FIND",


}

