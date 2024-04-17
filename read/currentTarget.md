1.currentTarget:::


now just fix logo for page, some design attributes and then the renaissance paintings for the enlightnment of intellectual battle of our world events

fix slides on path /lists -make them reasonably sized with overlapping sorted, good standard
--- div.swiper-slide:nth-child(1) ---className swiper-slide

--change height of swiper-wrapper ---then change swiper-button-next to no margin-top


--1solved:: removed a fix height on the .swiper, the container of all the sswiper-slides, now it moves freely, we have mid entire page with tranform translate 50% 50%, then top left posiution fixed margin 0 auto, position fixed, top 50 and left 50%

transform translate (50%, 50%)

component RenderDataExperiment in our components fetchData folder, it asks for data without checking if it has auth object control, if not signed in, this component musk avoid asking for sensitiv protected data, as that lead to firebase stopping entire application with error message missing insufficvient permission, we need to have permissions before asking for auth object

we must make it so we do not request sensitive information on landing page when we are yet to be signed in, we must wait for recognition, if context is false then we awaait redirection instead, gather all truths at top so we have full control and can change rather then having a bunch of unreachable half truths spred through system at all levels, that requires a much more complicated approach then having full power at a full truth top level truth, have a 

If we didn't have variables available, we'd have to ask the reader for their name every time we needed to use it!

The primary building block of Realtime Database Security Rules is the condition. A condition is a Boolean expression that determines whether a particular operation should be allowed or denied. For basic rules, using true and false literals as conditions works prefectly well. But the Realtime Database Security Rules language gives you ways to write more complex conditions that can:
If your app uses Firebase Authentication, the request.auth variable contains the authentication information for the client requesting data. For more information about request.auth, see the reference documentation.


    Check user authentication
    Evaluate existing data against newly-submitted data
    Access and compare different parts of your database
    Validate incoming data
    Use the structure of incoming queries for security logic


Authentication identifies users requesting access to your data and provides that information as a variable you can leverage in your rules. The auth variable contains the following information: uid : A unique user ID, assigned to the requesting user. token : A map of values collected by Authentication.


In your Firebase Realtime Database and Cloud Storage Security Rules, you can get the signed-in user's unique user ID from the auth variable, and use it to control what data a user can access.

Have a look at the Next steps section below to get the signed in user details.

This is also where you can catch and handle errors. For a list of error codes have a look at the Auth Reference Docs. 

Firebase stores data in JSON format referred to as collections.

Note

It's a good programming practice to declare all variables at the beginning of a script.
One Statement, Many Variables

You can declare many variables in one statement.

Start the statement with let and separate the variables by comma:



we know 
change wikipedia article on data set claiming of tabular, in the case of tabular data
current problem is our missing permissions when we are signed out and we hit the homepage for data, could it be asking for a certain name that causes it, we can get data, although a certain user is permission based, user object, directions dataset path to data 


38:: find the tearget that causes causing a raucous -- now have render be data, what data do we need permission for, what is being rendered, what data is rendered before permission, there is a redirect that is the source of this, redirect and before redirect render attempts async data backend database firebase

A data set is a collection of related, discrete items of related data that may be accessed individually or in combination or managed as a whole entity



The Firebase Realtime Database is a cloud-hosted database. Data is stored as JSON and synchronized in realtime to every connected client.
cloud-hosted NoSQL store and sync data---the culprit of this problem oiur problem originates from:::
renderalllevels-meaning the component called:: folder FetchData -inside of folder component:: RenderDataExperiment







if we are logged out and hard type /lists -route and then we hard type / route we are now met with errro missing or insufficient permissions on the /signIn -pagfe


current problem:: we request intel that requires permission that has been sent off by signing out, we must have all components that include requests for sensitive data to be enclosed and only fired when certain actions have been met, like auth object, we have project database connection string, config file


we have insufficient permissions for our firebase when we sign out, and then try to visit our pages that require certain data, how can we avoid our pages crashing, rather we only want a redirect and we do not need the data, when we are signed out we must not request the data, only request if auth object is present, our requests must occour only if, and also, we must create all of our routes and paths within the protected system, doing so would prevent any of this from happening, now we must have our code components with their requests within the system that before rednering components make sure that significant, vulnerable components only fire if there has been confirmed correct auth intel, from top source, all gather top source, clean and less complicated meaning we have a more robust application with less to defend, single source top, more defence on single source top with an accepted truth source, centralize the truth source for this application, then we can control the truth in our project, we must have a place so that it gives us a clear path to the truth







have all replies shuffle so that they hit the correct order, and scroll to hit bottom of order
---still important:: when you add a new, original, lvl 0, independendt element then it must stay on top, the top is the single top level truth, however, when there are replies, make sure they are sorted, are they sorted on medium levels?, yes, because they increase,s still, find how to keep bottom relevant, now we have correct original source truth that is the essence of our elements, truth, experiment





















5:: make reply input active when input appears, state true, then also input active write immediately











change up the sorting of data, the sorting of data must happen on every comment, now we have multiple comments on same depth resulting in neweest comment on top



















clean up front, make minimalist setup to show data formations, have collections, use 5 posts and 5 comments in database, have a centered approach that is responsive and versatile, make it square middle, and have the conecpt shine, we know auth is good, redirect navigate, context top give from top to child,
we have data as props --- we can have all lengths be even, have all be under control, square shapes, some break free, little code, big movements, small details
data top level, clear instructions, one single point of truth for all to be  enlightened
props react, UI into independent, reusable pieaces, props are arguments given into react components, information to child components by giving the props, input access data
access data props react components
---now nature and certain space with certain hierarchy and grace


make center slide bigger, and make gray area big, and equal, both sides - swiper js




tips:: larger center image index::: 
.swiper-backface-hidden .swiper-slide {
  transform: translateZ(0); ---remove this
  backface-visibility: hidden;
}

current



cursor: pointer; --- where to deploy this 
current

have boolean for reply, if yuo click reply it will show input if it is false, otherwise it will post and hide input-- fixed, just like big shots


show target hand -- fixed











analyze the sign in with credentials and what happens, the component:: 
googleSignIn, and then we have components wrapped in our protected route component, that takes children, which it renders on context match from auth, if context confirms auth, then we render children of protected route, different ways to have conditional renders, conditional rendering

/7we have a useeffect that checks after any render, any context updates it should fir, the dependencies useEffect 

useffect gets fired off::
Initial render/mounting: When a functional component that contains a useEffect Hook is initially rendered, the code inside the useEffect block runs after the initial render of the component. This is similar to componentDidMount class components
Subsequent renders: You can pass a dependency array as the second argument to the useEffect Hook. This array contains variables or values that the effect depends on. Any change in these variables will re-render the component. If no dependency array is given, the effect will run on every render

dependency array to the useffect hook, this array contains variables or values that the effect depends on, any change in these variables, we have our context 

usecontext, state, avoid prop drilling, props to many components

problem without context:: props  through each nested component

insteadf use context, intialize it, const context = createContext ()

then context provider to wrap the tree of components that need the state context 

all components in this context tree provider tree will have access to the user context

in child component, access context in child component by using the usecontext hook,  access thge user context in all components 




useref hook allows you to persist values between renders 

store a mutable values that does not cause a re-render when updates 

dom element directly , check count on application render, on each render another render would occour because number would change since the hook counting wuold causes a re-render, a re-render causes a re-render, values renders 


react when to use context, manage state betwee nreact components 

share data between components, props can only flow in one direction, from parent compnents to child components, nad further down, state changes occour on parent elements



---note props elements, parent elements experience chage, react will re-render components that depend on those values




create a carousel on /lists endpoint:: swiper:: link:: https://swiperjs.com/

endpoint::



link::
https://codesandbox.io/p/devbox/swiper-react-default-dnfw9v?file=%2Fsrc%2FApp.jsx%3A10%2C32
link::
https://codesandbox.io/p/devbox/swiper-react-default-dnfw9v?file=%2Fsrc%2FApp.jsx%3A10%2C32

stable centered swip version 10, now we have default, this source, now include more and have overlap, coverflow effect swiper, have certain, looping



Endpoint: More specific term: An endpoint is a specific type of URL that typically refers to a resource in an API (Application Programming Interface). It defines the location where a program can interact with the API and send or receive data.

use this for swiper js:: 
https://www.youtube.com/watch?v=hdO3l6Ed8-c
https://www.youtube.com/watch?v=hdO3l6Ed8-c

read about swiper, effects, coverflow from swiper, by default swiper exports core version without additional modules, like navigation and pagination, import and configure them too, import swiper and then nvaigation and pagination from swiper/modules, read from swiper get started 

how to swiper project carousel::
find effect coverflow, then alter it, codesandbox
import stylesheet link
cdn swiper, imamges, then, var swiper new object with properties
--imports a swiper variable, then loop= true



var swiper =  new swiper

swiper coverflow with swiper variable that has swiper loop true


var swiper = new Swiper




center image now has width, fit conet on li, li width fit content, pushes other li from ul element away, now we must have all center around 8

searched for:: keeep certain number li center react
//tranform is one thing, that is good, problem being it flows on top of other, make sure
no li elements can flow on top of each other

//create 3 widths for the carousel, we need something that aligns with our transform translate property
we have center image that is fit content on exact child, just add id, then exact target


a problem for our li item, is that our slider img class does not exist for main property,
we need slider img width 100%





li.react-multi-carousel-item:nth-child(8)  ---this must adapt to its underlying asset, which it currently does not, we have the css selector, the other li elements wont recognise the size because currently we have an li element with an overflowing object which dimensions are not recognised by its controlling elemnt

li.react-multi-carousel-item:nth-child(8)
li.react-multi-carousel-item:nth-child(8) ---we must change the width, width must be equal  or greater than its underlying asset dynamic flex


By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.
flex-wrap
 all flex items will be on one line





currentProblem::
we have a chain of images in a container
one of them is bigger, yet the other images wont move, we need perhaps a bigger container, and now overflow, and less space, they now overflow without avoiding each other, elements must avoid, display block
//problem is space, due to space resitrcitions, things overflow -- have auto widht on parent

position absolute

//problem is here::
.react-multi-carousel-list ---this must have an auto width

html body div#root div.App div.parent div.react-multi-carousel-list ul.react-multi-carousel-track li.react-multi-carousel-item.react-multi-carousel-item--active




found problem for overfloating lis horizontal line, problem was position absolute on parent li, or the overfloating,
position asbolute ignores other elements
An absolutely positioned element is an element whose computed position value is absolute or fixed
solution:: centerCapsule2 (id) must be changed from position auto, and all must be adapted so center image is center,
 other sizes can be more compact or fitted into same, other images can have position absolute, media size

 //now have something that will center all in the space avialable, or utilize all space available







we have a different index on the li elements, they have a data-index, we must use this for images, as that is unique, we must then target the exact to grow it larger
--find exact and have carousel be correct, then comment section and history section and personal profile  --have holy trinity, information and place to store own, personal, to collect and engage in war
find the flex and position to rebalance our slider with presentation






find how to mark middle image with center class to actively change that exact image
answer:: on big screens it is index 7

on mobile it is
index 6

index 6, have on different media 6 and 7, active now big and fadeeee








find a new Swiper library that works with images, perfect compatability









change this tutorial so it works, 1200 value change lower to not go outside, have 


css selector::
.swiper
html body div#root div.App div.container div.swiper.swiper_container.swiper-coverflow.swiper-3d.swiper-initialized.swiper-horizontal.swiper-watch-progress
--change it so that perspecitve is only 500px

---.swiper-wrapper
html body div#root div.App div.container div.swiper.swiper_container.swiper-coverflow.swiper-3d.swiper-initialized.swiper-horizontal.swiper-watch-progress div.swiper-wrapper
---change width to 40% without distortion include all middle position relative
display flex important combined with margin 0


---width: 40%; on swiper wrapper -- then perspective 500px on outer layer swiper swiper container
https://github.com/emetdas/Youtube-code/blob/master/web%20components/React-Swiper-Slider-3D-Coverflow/final/package.json




have image carousel, it be a div that overflows width, then by click arrows, images float in from side, have fade, any image all white, width of current, show depending on screen delta between 80vw - max 700px













 create something ,the entire thing, then it can fight for change









  id is updated on reply, we have updated id, check if reply component provides correct id, is there a   combonitaion ,  long row of numbers
 separate our commentSection and topSection

























our array must be sorted, something happens with the sorting::
now top level stays the same, from firebase, we must sort it after, ALSO::
comment component is currently adding faulty data values to our database, this causes chaos because some data is outside of render due to faulty values, values without syunchronization, we must create correct ID updates to match firebase tree structure in our leveled dataset, level tree, add comments pure add ddata pure, comments component faulty, callback if this then after that, mutate array

A callback is a function passed as an argument to another function. 

 const collectionRef = collection(db, "commentSection7");

    // Add a new document in collection "cities"
    //removed a param from the setDoc :: , "newValueCCDawn2" - nmow auto id
    Promise.resolve(
      await addDoc(collectionRef, data)
        //Promises are a crucial feature in JavaScript that simplifies and enhances the handling of asynchronous operations.

        // It contains the result of the operation, such as data fetched from a server.
        //promise has the state fulfilled, when the operation is successful, a promise transition to the resolved state, contains result of the operation
        .then( async function(docRef) {
          console.log("Document written with ID: ", docRef.id);
          //function results in error unless promise resolve properly, on promis resolve we both have id update and resolve promise by adding to top level database, all link database
          //right after we do this, unique ID ther will be regardless, id and then sorted, parentId
            await updateDoc(docRef, {
              ID: docRef.id,
            })













no document to update, something about cl and id targetting update, likebutton, possibly a problem with id of uploaded comments, any update that is added 
ID problem













 currently we are logging immediately on update from within our renderData, we must have direct returns from our database, otherwise we can link to returns that do not exsist, only on client side, server datbaase side linked glbobal must be correct, we have state update, useEffect, useEffect do something after render, side effects, we now have snapshot listener:::
 

    const unsubscribe = onSnapshot(
      collection(db, "commentSection7"), 
      (snapshot) => {
        console.log(snapshot)
      },
      (error) => {
        // ...
      });



wwith error, from within snapshot and collection snapshot with snapshot on parenthesis, we have data, now add data drom snapshot to state, data snapshot is confirmed atabase server link




 we must have instant update, we must rerun state and call if array is not complete, array can be stopped if we duplicate, but entire function must rerun if we add something to database and the coun() aggregation runs, our array is not complete when we run reply, if reply then our state complete is false, we delete entire array and add again, or we add exact that does not match, we run entire array, add only outlier id



have instant change state and update array , and have like, we send to backend, update frontend questionable

//have array change completely


 have a component send create array and use destructured state of top level component, change that state nad hvae values top level









we give state to child and child updates state on real instant udpates firebase database listener top array link







querySnapshot.forEach((doc) => {
    itemArray = [...itemArray, doc.data()];
  });

  setRandomItem(
    itemArray[Math.floor(Math.random() * itemArray.length)]
  );
const data = {



}










 we now have data structure, recursive function, now we upload our current most pristine example onto our github to eternalize it for the exact cc dawn pitch economics free platform playgorund monet5ary policy





we have a flat data structure that we want to recreate as a tree
what we do::
find match for current cl level, then find first match for that
//when we find match we alwys continue, if not we fall back, until no matches, then function recalled until no cl 0 has no further array values

















experimentArray.map((data) => {
     const {cl, ID, parentId} = data;
    
    
      if(cl == 0) {
    
           
       console.log(  experimentArray.map((lvl) => lvl.parentId == ID))
       //now we have all matches for lvl 0, now we need to do the same with the next, problem is, we must only render things once
       //we have an array that removes values as it adds,  on a lvl1 with two matches we render cl1, then a match, then back to cl 1, then match, then back to cl 1, no match then begin next original
          
      }


      we have rcrusive with fallback that stop recursivness match













 currentTarget::  render originalComment cl:0 top level original with all depths of matches for the original object
                    //all renders check for their respective matches 

                    creation of:::: we must render all, then just sort it based on level and match, render date, then render all cl levels that are higher and match underneath original, this goes for the uinclduyed elements as well, callback until array fully











 we musst have a function that checks the depths of any iteration for any matches, iteration stops when all iterations are checked for matches, then top level iteration changes big page, all small iterations happen before top level root changes, it is endless match until iteration scans entire array for matches, then next iteration happens, each iteration is just a check for entire array and current id, flat array, we have current id and parentId to match---meaning we can also control by adding cl to levels, we know branch level on original root with linkage, there must be minimum one level different for bracnh to connect top level


//we need to render all links, what we have is a tree, the tree will render all big branches, but not without full detail, big tree happens, then single branch with full linkage, full linkage is first level branch sets new currentId, with new currentId we set all new linkage. then end of array, and currentId is now current Top level id, we have top level depending on level that renders, toplevel decides on intial load, then all other levels change currentId within their lesser system, top level id is top for level 1 branch, within level 1 branch repsons we change current ID, top level id and lesser levels current id, small processes reach end of array match then top level begins again from top level

 --for first branch iteration to stop we reach end of array, on end of array next map iteration happens









we want a function that finds matches for current top level iteration plus matches for its own current iterations

that means:: a function that renders a match, then it checks that current on each iteration, it must do it in depth

problem:: we have a function that calls first, then on next it checks all






 current target::  we need to call something that tests itself, I imagine two functions, we can have cl levels, on cl 0 we render all cl 1 that match, we do this on each cl 0, then we move to all cl 1, they get rendered with their repsective cl 2 target match









 we now have context from multiple levels, now RenderComments, we have permissions database link config initialize with config app levels

1. solution:: About Protected Route

In web applications, routing is the process of determining how to respond to a client request for a specific URL. In React, this is typically accomplished using the React Router library.
Write the following code in the ProtectedRoute.js file.

import React from 'react'
import {useSelector} from "react-redux"
import {Navigate, useLocation} from "react-router-dom"

const ProtectedRoute = ({children}) => {
    const user = useSelector((state) => state.user);
    let location = useLocation();

    if(!user.state.isAuthenticated) {
        return <Navigate to="/login" state={{ from: location}} replace />
    }
 return children

};

export default ProtectedRoute;

As seen in the code above, we first import our useSelector from our react-redux package, which will allow us to access our user object that is stored on our redux.

After that, as you can see, we write some logic to check if isAuthenticated is true, and if it is, we should return the user to the Home screen if its not then the user should be Navigated to the login.
In the following section, we will wrap our protected Route module.

1. solution stop stop stop


protected route:: when signed in context is up, we then redirect to home page, otherwise redirect to login page

previousTargets:: 
1.have only exact functions:: fetchImportantdata, authDirective
2. i have removed any components i dont need, this included any objet that was not directly linked to our target functions of signing in user with protected routes and loading data from datbase, now all data is either fetch or database auth object, we have folders for each of these categories, fetchdata folder and auth folder, we hcange state at top level with useeffect for component mount, then top level state, always top level data flow, unobstructed free flow data, where update, state top level deconstruct parameters functions parenthesis

3::i have now made catch error and setstate with error, on netwrokerror we now have error return, we also have status when return, 200 ok, we have catch with same syntax also curly braces try on expressin argumensts 
function keyword can be used to defina a function inside an esxpression 

const getRectArea = function (width, height) {
  return width * height;
};

console.log(getRectArea(3, 4));
// Expected output: 12



function keyword, expression constgertERecarea, function arrow syntax fedine functino expression 

const getRectArea = function (width, height) {
  return width * height;
};

console.log(getRectArea(3, 4));
// Expected output: 12


Named function expression

If you want to refer to the current function inside the function body, you need to create a named function expression. This name is then local only to the function body (scope). This avoids using the deprecated arguments.callee property to call the function recursively.
js

const math = {
  factit: function factorial(n) {
    console.log(n);
    if (n <= 1) {
      return 1;
    }
    return n * factorial(n - 1);
  },
};

math.factit(3); //3;2;1;



here we havea named function expression, with a factorial, that is factorial of something , facrtorial amthematics, product of all positive integers less than or equal to a give npostive integer denoted by that integer an an deexclamation point factorial 7!

//link:: https://www.mathnstuff.com/math/spoken/here/2class/90/binom3.htm

p (x)
n top ! count of number of ways event can occour, then x deletes duplications, proabalitily, failure probability, nm factorial, n indpendent,  n things, we have an event with event and we divide event can occour and divided by duplication  and succsesss, and failure expressed with p n x



comment level:: render all levels of comment with three different arrays, then send of rendering each level until array empty, then next array that now links all matches until array match for current level is empty, on emppty now add all //error, we do not add on end, we add values as we have each original or slightly original level, then any match renders together, each original render deserves all levels rendered from it