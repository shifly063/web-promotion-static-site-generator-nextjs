import Navbar from "@/components/navbar";

export default function HomePage({data}, {children}) {
    // console.log(data);
    return (
        <>
            <Navbar data={data}/>  
            {children}      
        </>
      )}