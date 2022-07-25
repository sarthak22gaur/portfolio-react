import ocean from "../Assets/ocean.jpg";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
  SiGithub
} from "react-icons/si";

export function ProjectCard({
  Title,
  Description,
  Image,
  Tech,
  Livelink,
  Repolink,
}: {
  Title: string;
  Description: string;
  Image: string;
  Tech: string[];
  Livelink: string;
  Repolink: string;
}) {
  console.log(ocean);
  return (
    <div className="flex flex-col h-fit p-4 mb-8 transition-all group  ">
      <div className="w-[400px] group-hover:translate-y-0 object-cover z-10 transition-all text-gray-600 group-hover:text-primary-dark ">
        <img className="object-fill aspect-square rounded-xl lg:blur-sm lg:grayscale group-hover:blur-0 group-hover:grayscale-0 transition-all" src={Image} alt="" />
        <h1 className="text-3xl font-bold mt-2">{Title}</h1>
      </div>
      <div className="w-[400px] flex flex-col mt-4 flex-wrap scale-0 group-hover:scale-100 transition-all">
        <p className="text-xl text-justify">{Description}</p>
        <ul className="flex flex-wrap my-4 gap-4 text-gray-500">
          <ProjectStackItem label={Tech[0]} />
          <ProjectStackItem label={Tech[1]} />
          <ProjectStackItem label={Tech[2]} />
          <ProjectStackItem label={Tech[3]} />
        </ul>
        <ul className="flex gap-4 my-4">
          <ProjectCTAItem
            icon={<FaExternalLinkAlt size="16" />}
            externalLink={Livelink}
          />
          <ProjectCTAItem
            icon={<SiGithub size="16" />}
            externalLink={Repolink}
          />
        </ul>
      </div>
    </div>
  );
}

function ProjectStackItem({ label }: { label: string }) {
  return (
    <li className="pr-2">
      <span>{label}</span>
    </li>
  );
}

function ProjectCTAItem({
  externalLink,
  icon,
}: {
  externalLink: string;
  icon: React.ReactNode;
}) {
  return (
    <li>
      <a href={externalLink}>
        <div className="flex gap-2 bg-primary-dark text-black p-2 rounded hover:bg-black hover:text-white transition-all">
          <i>{icon}</i>
        </div>
      </a>
    </li>
  );
}
