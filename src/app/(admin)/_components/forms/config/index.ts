import {BuilderInputProps} from "@/app/shared/components/form/_types";

const registerInputs : BuilderInputProps[] = [
    {
        type: "text_input",
        name: "firstname",
        label: "Firstname",
        colSize: {sm: 49},
        required: true,
    },
    {
        type: "text_input",
        name: "lastname",
        label: "Lastname",
        colSize: {sm: 49},
    },
    {
        type: "email_input",
        name: "email",
        label: "Email address",
        colSize: {sm: 100},
        required: true,
    },
    {
        type: "password_input",
        name: "password",
        label: "Password",
        colSize: {sm: 100},
        required: true,
    },
    {
        type: "link",
        name: "",
        label: "Already have an account ?",
        link: {link: "/login", linkText: "Login"},
        colSize: {sm: 100},
    },
    {
        type: "submit_button",
        label: "Register",
        colSize: {sm: 100},
        disabled: false,
        name: ''
    }
];

const loginInputs : BuilderInputProps[] = [
    {
        type: "email_input",
        name: "email",
        label: "Email address",
        colSize: {sm: 100},
        required: true,
    },
    {
        type: "password_input",
        name: "password",
        label: "Password",
        colSize: {sm: 100},
        required: true,
    },
    {
        type: "submit_button",
        label: "Login",
        colSize: {sm: 100},
        disabled: false,
        name: ''
    }
];

export {
    registerInputs,
    loginInputs,
}