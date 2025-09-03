import { Cities } from "./data/Cities";
import Header from "./components/Header";
import Card from "./components/CardContent";
import Footer from "./components/Footer";


export default function HomePage() {
  return (
    <div className="min-h-screen py-10 px-6 bg-gradient-to-br from-blue-50 via-white to-white">
      
      <Header messenger="🌏 5 อันดับเมืองที่มีนักท่องเที่ยวเข้ามามากที่สุดในโลก ในปี 2024🌏"/>

      <div className="grid lg:grid-cols-5 gap-6">
        {Cities.map(city => {
        
          return ( 
            
            <Card city={city} />  

          );
        })}
        <Footer />
      </div>
    </div>
  );
}
