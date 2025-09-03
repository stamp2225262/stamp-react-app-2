export default function Hearder({messenger} : {messenger:any}){
    return(
    
    <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        {messenger}
      </h1>
     
    );
}