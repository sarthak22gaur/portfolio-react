import Tilt from "react-parallax-tilt";

function TechCard({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="w-40 m-4">
      <Tilt>
        <div className="bg-black text-white rounded-xl flex flex-col p-8 w-full text-2xl jusify-center items-center hover:text-primary-dark">
          <i>{icon}</i>
          <span className="mt-4">{label}</span>
        </div>
      </Tilt>
    </div>
  );
}

export default TechCard;
