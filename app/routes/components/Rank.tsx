export default function Rank({ rank }: { rank: number }) {
  let color = "bg-green-500"; 

  if (rank === 1) color = "bg-yellow-400";
  else if (rank === 2) color = "bg-gray-400";
  else if (rank === 3) color = "bg-orange-600";

  return (
    <div className={`inline-block px-4 py-1 rounded-full font-bold text-white shadow ${color}`}>
      🏆 อันดับ {rank}
    </div>
  );
}
