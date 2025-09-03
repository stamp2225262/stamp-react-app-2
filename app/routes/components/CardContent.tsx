import Rank from "./Rank";
export default function Card({city} : {city:any}){

     return (
                <div
                  className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-700"
                >
                  <img
                    src={city.Cover}
                    alt={city.Name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-1">{city.Name}</h2>
    
                    <div className="my-2">
                      <Rank rank={city.Rank} />
                    </div>
    
                    <p className="text-gray-600 text-sm mt-2">{city.Description}</p>
    
                    <div className="mt-10 text-gray-500 text-sm space-y-1 font-semibold">
                      <p>Code:{city.Code}</p>
                      <p>Rank:{city.Rank}</p>
                      <p>Author: {city.Author}</p>
                      <p>Source: {city.Source}</p>
                      <p>Location: {city.Location}</p>
                      <p>Rating: {city.Rating} ล้านคนนักท่องเที่ยวที่เข้ามาภายในประเทศ</p>
                      <p>Top3:{(city.Rank >= 1 && city.Rank <= 3) ? "✅ true" : "❌ false"}</p>
                    </div>
                  </div>
                </div>
              );
}