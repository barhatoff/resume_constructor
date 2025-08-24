import { helpers } from "../helpers/helpers";
import LinkImg from "../img/link.png";

type Props = {
  links: { url: string; label: string }[];
};
export default function UILinks({ links }: Props) {
  let gropedLinks = helpers.chunkArray(links, 2);
  return (
    <div className="flex flex-col text-xs md:flex-row">
      <img src={LinkImg} className="h-5 w-5" alt="links" />
      <div className="flex flex-col">
        {gropedLinks.map((chunk, i) => (
          <div className="flex flex-col md:flex-row" key={`link_group_${i}`}>
            {chunk.map((elem, i_chunk) => (
              <div key={`link_${i_chunk}_group_${i}`}>
                {i_chunk === chunk.length - 1 && (
                  <span className="hidden ml-2 md:inline">•</span>
                )}
                <a
                  className="underline md:ml-2"
                  href={elem.url}
                  target="_blank"
                >
                  {elem.label}
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
