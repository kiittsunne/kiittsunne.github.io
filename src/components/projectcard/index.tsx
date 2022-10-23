import { Link } from "gatsby";
import React from "react";
import * as projectcard from "./index.module.scss";

type ProjectCardProps = {
  title: string;
  byline?: string;
  technologies?: string[];
  description?: string;
  slug?: string;
  github: string;
  demo?: string;
};

const ProjectCard = ({
  title,
  description,
  slug,
  github,
  demo,
  byline,
  technologies,
}: ProjectCardProps) => {
  return (
    <div className={projectcard.wrapper}>
      <Link to={`/projects/${slug}`}>
        <div className={projectcard.header}>
          <h2>{title}</h2>
          <h3>{byline}</h3>
        </div>
        <div className={projectcard.body}>
          <p>{description}</p>
        </div>
        <div className={projectcard.refBtns}>
          <a href={github}>
            <button>/github</button>
          </a>
          {demo && (
            <a href={demo}>
              <button>/demo</button>
            </a>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
