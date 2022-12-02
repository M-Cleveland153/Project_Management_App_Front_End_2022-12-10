import React, {useEffect} from "react";
import "./App.css";
import {getUserData} from "./api";
import {UserForm} from './HookFormUserForm'

function App() {
    const [data, setData]= useState(null)

    useEffect(()=>{
        const fetchData = async () => {
            setData(await getUserData())
        }
        fetchData()
    }, [])

    return data ? <UserForm preloadedValues={data}/> : <div>Loading...</div>


//   const preloadedValues = {
//     firstname: "User",
//     lastname: "Userson",
//   };
//   const { register, handleSubmit } = useForm({
//     defaultValues: preloadedValues,
//   });
//   const onSubmit = (data) => {
//     alert(JSON.stringify(data));
//   };
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input
//         ref={register}
//         placeholder="First Name"
//         type="text"
//         name="firstname"
//       />
//       <input
//         ref={register}
//         placeholder="Last Name"
//         type="text"
//         name="lastname"
//       />
//       <button>Submit</button>
//     </form>
//   );
}

export default App;