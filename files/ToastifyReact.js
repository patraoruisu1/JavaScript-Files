// What is react toastify?
// React toastify is one of the most popular libraries out there for creating toast notification in react.

// With react toastify you can easily create toast notifications and alerts in your react application

// Installing React Toastify
// To install the react toastify, first you need a react application. You can easily add to your react application or if you are learning you can create a new react application with create-react-app

// Then, in your react application you can install react toastify by:

// npm install --save react-toastify
// with yarn

// yarn add react-toastify
// Creating a basic toast notification
// Creating a basic toast notification is easy. In your App.Js file import react toastify and the react-toastify CSS like:

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import react toastify
// then in your App() function just create a notification

function App(){
	const notify = () => toast("This is a toast notification !");
	return (
	<div>
        <button onClick={notify}>Notify !</button>
        <ToastContainer />
      </div>
    )
}
// toast notification

// Now, we have learned how to create basic toast notifications. Let us now learn about some of the properties of toast notifications, styling characteristics and the types of toast notifications available

// Types of toast notifications
// There are 5 predefined types of toast notifications available in the react toastify
// these are:

// Default
// info
// success
// warning
// error

const notify = () => toast("This is a toast notification !");
// default toast

// Default
//This is the default, so no need to call anything here. The complete function looks like this:

function Toastify(){
  const notify = () => toast.error("This is a toast notification !");
  return (
    <div>
    <button onClick={notify}>Notify !</button>
    <ToastContainer />
  </div>
  )

// Info

// info notification react toastofy
 const notify = () => toast.info("This is a toast notification !");
//toast.info
// The complete function looks like

function Toastify(){
  const notify = () => toast.info("This is a toast notification !");
  return (
    <div>
    <button onClick={notify}>Notify !</button>
    <ToastContainer />
  </div>
  )
}
// Success

// success toast notification
const notify = () => toast.success("This is a toast notification !");
// success toast notification
// the complete function looks

function Toastify(){
  const notify = () => toast.success("This is a toast notification !");
  return (
    <div>
    <button onClick={notify}>Notify !</button>
    <ToastContainer />
  </div>
  )
}
// Warning

// Warning toast notification
const notify = () => toast.warning("This is a toast notification !");
function Toastify(){
  const notify = () => toast.warning("This is a toast notification !");
  return (
    <div>
    <button onClick={notify}>Notify !</button>
    <ToastContainer />
  </div>
  )
}

//Error

// Error toast notification
const notify = () => toast.error("This is a toast notification !");
function Toastify(){
  const notify = () => toast.error("This is a toast notification !");
  return (
    <div>
    <button onClick={notify}>Notify !</button>
    <ToastContainer />
  </div>
  )
}
// Setting the Toast Notification position
//You can set the Toast notification position from a variety of pre set positions available in the react toastify library

// the available positions are:

// top-left
// top-right
// top-center
// bottom-left
// bottom-right
// bottom-center
// Here is how the positional notification looks like in each of the position and the code to implement the position

// To add the position setting you need to edit the ToastContainer and set the position property like

<ToastContainer
position="top-right" />
// In our example you can set it like

function Toastify(){
  const notify = () => toast.error("This is a toast notification !");
  return (
    <div>
    <button onClick={notify}>Notify !</button>
	    <ToastContainer
    	position="top-right"
    	/>
  </div>
  )
}

// you can set other settings like so:

// <ToastContainer position="top-left"/>

// <ToastContainer
// position="top-right"
// />
    
// <ToastContainer
// position="top-center"
// />
    
// <ToastContainer
// position="bottom=left"
// />

// <ToastContainer
// position="bottom-right"
// />
    
// <ToastContainer
// position="bottom-center"
// />


// Toast Container position settings
// The different positions look like this

// top-left

// Top left notification toastify library
// top-right

// top right notification react toastify library
// top-center

// top-center notification react toastify library
// bottom left

// bottom left notification react toastify
// bottom-right

// bottom right notification react toastify
// bottom-center

// bottom center notification react toastify
// Custom Styling the notification with HTML and CSS
// You can custom style the toast notification with HTML and CSS, here is how you can customize the notification

// There are bunch of CSS variables that are exposed by the react toastify library. You can override them and do customization that most will work for most people.

// Here are the variables that you can override:

:root {
  --toastify-color-light: #fff;
  --toastify-color-dark: #121212;
  --toastify-color-info: #3498db;
  --toastify-color-success: #07bc0c;
  --toastify-color-warning: #f1c40f;
  --toastify-color-error: #e74c3c;
  --toastify-color-transparent: rgba(255, 255, 255, 0.7);

  --toastify-icon-color-info: var(--toastify-color-info);
  --toastify-icon-color-success: var(--toastify-color-success);
  --toastify-icon-color-warning: var(--toastify-color-warning);
  --toastify-icon-color-error: var(--toastify-color-error);

  --toastify-toast-width: 320px;
  --toastify-toast-background: #fff;
  --toastify-toast-min-height: 64px;
  --toastify-toast-max-height: 800px;
  --toastify-font-family: sans-serif;
  --toastify-z-index: 9999;

  --toastify-text-color-light: #757575;
  --toastify-text-color-dark: #fff;

  //Used only for colored theme
  --toastify-text-color-info: #fff;
  --toastify-text-color-success: #fff;
  --toastify-text-color-warning: #fff;
  --toastify-text-color-error: #fff;

  --toastify-spinner-color: #616161;
  --toastify-spinner-color-empty-area: #e0e0e0;

  // Used when no type is provided
  // toast("**hello**")
  --toastify-color-progress-light: linear-gradient(
    to right,
    #4cd964,
    #5ac8fa,
    #007aff,
    #34aadc,
    #5856d6,
    #ff2d55
  );
  // Used when no type is provided
  --toastify-color-progress-dark: #bb86fc;
  --toastify-color-progress-info: var(--toastify-color-info);
  --toastify-color-progress-success: var(--toastify-color-success);
  --toastify-color-progress-warning: var(--toastify-color-warning);
  --toastify-color-progress-error: var(--toastify-color-error);
}
// CSS variables you can easily modify | React Toastify library
// If changing variables is not enough for you. You can override existing class. Here are the classes that you can easily override

/** Used to define container behavior: width, position: fixed etc... **/
.Toastify__toast-container {
}

/** Used to define the position of the ToastContainer **/
.Toastify__toast-container--top-left {
}
.Toastify__toast-container--top-center {
}
.Toastify__toast-container--top-right {
}
.Toastify__toast-container--bottom-left {
}
.Toastify__toast-container--bottom-center {
}
.Toastify__toast-container--bottom-right {
}

/** Classes for the displayed toast **/
.Toastify__toast {
}
.Toastify__toast--rtl {
}
.Toastify__toast-body {
}

/** Used to position the icon **/
.Toastify__toast-icon {
}

/** handle the notification color and the text color based on the theme **/
.Toastify__toast-theme--dark {
}
.Toastify__toast-theme--light {
}
.Toastify__toast-theme--colored.Toastify__toast--default {
}
.Toastify__toast-theme--colored.Toastify__toast--info {
}
.Toastify__toast-theme--colored.Toastify__toast--success {
}
.Toastify__toast-theme--colored.Toastify__toast--warning {
}
.Toastify__toast-theme--colored.Toastify__toast--error {
}

.Toastify__progress-bar {
}
.Toastify__progress-bar--rtl {
}
.Toastify__progress-bar-theme--light {
}
.Toastify__progress-bar-theme--dark {
}
.Toastify__progress-bar--info {
}
.Toastify__progress-bar--success {
}
.Toastify__progress-bar--warning {
}
.Toastify__progress-bar--error {
}
/** colored notifications share the same progress bar color **/
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error {
}

/** Classes for the close button. Better use your own closeButton **/
.Toastify__close-button {
}
.Toastify__close-button--default {
}
.Toastify__close-button > svg {
}
.Toastify__close-button:hover,
.Toastify__close-button:focus {
}


