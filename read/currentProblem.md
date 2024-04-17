



currentProblem:::


our SignIn.jsx component now throws "missing or insuffcient permissions" , it happens after loading the error console log i made on top of the component, before any of the firebase methods are in place













one of the swiper.js slied dissapear, urgency:::: lvl green (not very high)

another problem::: make container for slide less high -- urgency orange -quite high -we must overwrite inline styling on main container, .swiper className, overwrite original styling,
--solved::: swiper.height	number	

Height of container


currentProblem stop stop stop


our commentSection has the problem that the deepest level reply will not appear at the bottom, it will appear above an older reply, we need to sort the deepest replies by data

swiper.height	number	

Height of container





about swiper, variable swiper className swiper:::
Methods & Properties

After we initialize Slider we have its initialized instance in variable (like swiper variable in example above) with helpful methods and properties:
Properties
swiper.a11y	any	
swiper.activeIndex	number

swiper.width	number	

Width of container









have react multi carousel altered to have big center image, center active unique class
--have the images expand as much as container, so that number of images is only either 3, or 5- have same width so that we can control center and have odd number middle always be exact center with same proportions, ratio aspect ratio





we need carousell that only display odd numbers, then it is easy to center, and that one number between five from loop iteration, that is exact number, a number in between always, current iteration are these numbers:: 1, 2 ,3 4, 5, then we know it is three, -we must find middle nubmer, always active, we render 5, we have center image, then on smaller phone we render 3 with faders on sides, we ahve number and middel , now with soft overlay transcend










slider, we want one main image, then on next, we have one higlighted post, all others except top active class will be smaller, one main for prestigoue, have active on one chosen, just selected for mid top showing






















when we reply -adding a comment - and then like that new comment without refreshing the application the id is not of the latest










checking our current id on event explained that there is a large number on our id, we must remove and have blank values before we continue with updating, we must totally mutate all to have change that is recognised
with this event checker we are through::
console.log("LikeIDproblem", idValue)

An array is a collection of similar data elements stored at contiguous memory locations. It is the simplest data structure where each data element can be accessed directly by only using its index number.

For simplicity, we can think of an array as a flight of stairs where on each step is placed a value (let’s say one of your friends). Here, you can identify the location of any of your friends by simply knowing the count of the step they are on. 

array location of data, stored at contigious memory locations, data structure

we add our value to our reply, our reply updates, perhaps our reply updates our top level array too early, when we reply and then -without refreshing application- like a comment we have no document to update, probably caused by wrong id reference meaning reference was unavailable, meaning our database has no such reference as our fresh reply comment







  wwe e must sort array, we have comment component that adds object with database firebase google,

Firebase Realtime Database
Firebase
https://firebase.google.com › docs › database
Store and sync data with our NoSQL cloud database.

nosql, relational, we have data in objects scattered, objects with properties, properties 


now we have top big value sort, howeever it stays the same on our render from our component, top level big apps unaltered, 
there might be something with how state reads a mutation of array, perhaps change is insufficient, perhaps blue skies


create a sorting on any update of state, is update listener, have any update be with the newest top, how change can happen without the reference of any component, we have a necessary updat, data, sort bi finding greatest value priority, a first before b value, we have a method param, a b





to have our correct id on our comment additions our object property must be update corretly according to firebase id before push to top global level, on accept we have database connection anyhow:: here, have data be something different, a new value derived from update:::
         .then(

          placeholderArray =  [...stateValue, data],
          
         )
        



currently it is a problem that on direct upload of object to database we do not update our object property id to the ocrrect firebase id although it has happened in the database, our proeprty id is actually the same as firebase database creation, problem is it happens after, we must deliver only the rightous one, after update, then we send array


our fireebase collection ids must match our document id within objects, property ids must match given to entire document, that interlinks the two worlds, firebase ecosystem and visual studio code document with add doc and then params that we set depending on the document


""we have our comment function, it adds comments without id, then auto id is added, our problem is that before refrehsing application id is registered wrong, we must only add object with updates to our global top array








food not intrinsic value because it relies on movement, energy, storage, health, and the receptiability, must be welcomed, keep you alive, many things can get in the way of that 

5::


5.1:: we must get our value from a place of sessionstorage for example, safest is authetnciation endpoint checkm we have listener, we  can check that our signIn component is updated with latest context , meaning it can redirect instantly, some components are checking different values and making decisions based on the first value , we can have async and  change state, 
   const [loading, setLoading] = useState<boolean>(true);


   export const AuthProvider = ({ children }) => {
   const [authed, setAuthed] = useState<boolean>(false);
	 // Store new value to indicate the call has not finished. Default to true
   const [loading, setLoading] = useState<boolean>(true);

   // Runs once when the component first mounts
   useEffect(() => {
         fakeAsyncLoginCheck().then((activeUser) => {
            if (activeUser) {
               console.log("fake async login check called");
               setAuthed(true);
               setLoading(false);
            } else {
							 setAuthed(false);
               setLoading(false);
            }
         });
      }
   }, []);


   we must have function that decided loading pattern to await our value that changes on sign in atuh endpoiunt server api request

5.2 our current problem is that our component ProtecteedRoute only checks false value because our updated "true" value relies on an api call to server  An API call, or API request, is a message sent to a server asking an API to provide a service or information. -- we only have false value for protected route because protected routes render immediately without consideration for our later updated tru api call return absolute value

4.1:: are we acutally updating our global Context, where is global universal value for all to adapt/consume, we need global vlaue that all can reach for latest update simultaneously
check:: reach of global value througout all components, re-render when important value chantges top value truth

 our protected routes does not re-render 


 //function that signs in a user can be asynchronous, problem being the change of our context is asynchronous

4:: set context of global application from listenAuthChanges component, we try to setContext, yet nothing happens  ---we now have true context and we have false context, depending on authListener logging listenauthchanges logs when we have event from database config


2:: we are unable to update our state context dstructured context obhject useContext, it stays false, we want true
:: answer this is context on component listenauthchanges::         console.log(Context._currentValue)
        console.log(Context._currentValue)

        destructure const {._currentValue} = Context











current problem:: context change is set up, yet nothing happens for this event, we have a problem with context from topl evel being altered by our new companionship 






1:: we must allow for functions to be called in other functions, we can import and object as params in a function function functionName({{param1, param2}})  ---param2 can be a function, we can call a function, have it fire from another palce in application, we have context provider providing us iwth object and links to function, now call anything from another place , import function, update import function from app.js with context provider into listenautchange that listens for auth database object


avoid wasting re-render of sibling or bigger components 
return various elements or components depending on the value of state 






problem notes::: we have a context, but context state is not being updated, context with capital C is being updated on the global front, we are not changing state locally



















level problem, structure, array double render 

we must create a new div for each original comment, then each orginal comment renders their match -sorted by date - an array of matches, sorted by date, interlinked by ovbious id link parentId, cl level increase, each comment looks for higher cl level and matching id with their parentId