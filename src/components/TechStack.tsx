import Tilt from "react-parallax-tilt";
import { FaNodeJs, FaGitAlt, FaFigma } from "react-icons/fa";
import { } from "react-icons/cg";
import { TbBrandNextjs } from "react-icons/tb";
import { SiCsharp, SiVercel, SiVisualstudiocode, SiGnubash, SiCplusplus, SiTailwindcss, SiDotnet, SiReact, SiTypescript, SiPostman } from "react-icons/si";
import { } from "react-icons/di";
import { GrMysql } from "react-icons/gr";


function TechCard({ icon, label }: { icon: React.ReactNode; label: string }) {
      return (<div className="w-fit lg:w-40 m-4">
        <Tilt>
          <div className="bg-black text-white rounded-xl flex flex-col p-4 lg:p-8 w-full text-2xl jusify-center items-center hover:text-primary-dark">
            <i className="">{icon}</i>
            <span className="mt-4 hidden lg:block">{label}</span>
          </div>
        </Tilt>
      </div>
      );
  }

function TechStack() {
  return (
    <div className="flex flex-row flex-wrap w-full justify-around items-center gap-0 mt-12 py-4">
        <TechCard icon={<FaNodeJs size="50" />} label="Nodejs" />
        <TechCard icon={<SiCplusplus size="50" />} label="C++" />
        <TechCard icon={<SiCsharp size="50" />} label="CSharp" />
        <TechCard icon={<TbBrandNextjs size="50" />} label="Next.js" />
        <TechCard icon={<SiTypescript size="50" />} label="TypeScript" />
        <TechCard icon={<SiDotnet size="50" />} label="DotNet" />
        <TechCard icon={<SiTailwindcss size="50" />} label="TailwindCSS" />
        <TechCard icon={<GrMysql size="50" />} label="MySQL" />
        <TechCard icon={<SiReact size="50" />} label="React" />
        <TechCard icon={<FaGitAlt size="50" />} label="Git" />
        <TechCard icon={<SiPostman size="50" />} label="Postman" />
        <TechCard icon={<SiGnubash size="50" />} label="Bash" />
        <TechCard icon={<SiVisualstudiocode size="50" />} label="VSCode" />
        <TechCard icon={<FaFigma size="50" />} label="Figma" />
        <TechCard icon={<SiVercel size="50" />} label="Vercel" />
    </div>
  );
}

export default TechStack;