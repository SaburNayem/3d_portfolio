import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Selected{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-600 mt-3 leading-relaxed max-w-3xl'>
        These projects represent product strategy, interface craft, and reliable
        engineering execution. Each one includes measurable outcomes and clear
        technical ownership.
      </p>

      <div className='grid lg:grid-cols-2 grid-cols-1 my-14 gap-8'>
        {projects.map((project) => (
          <article className='surface-card' key={project.name}>
            <div className='flex items-center gap-4'>
              <div className='block-container w-12 h-12'>
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={project.iconUrl}
                    alt={project.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>

              <div>
                <h4 className='text-xl font-poppins font-semibold text-slate-900'>
                  {project.name}
                </h4>
                <p className='text-xs text-slate-500 mt-1'>
                  {project.timeline} · {project.outcome}
                </p>
              </div>
            </div>

            <p className='mt-4 text-slate-600'>{project.description}</p>

            <div className='mt-4 flex flex-wrap gap-2'>
              {project.stack.map((item) => (
                <span
                  key={`${project.name}-${item}`}
                  className='px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700'
                >
                  {item}
                </span>
              ))}
            </div>

            <div className='mt-5 flex items-center gap-2 font-poppins'>
              <Link
                to={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='font-semibold text-blue-600'
              >
                View repository
              </Link>
              <img
                src={arrow}
                alt='arrow'
                className='w-4 h-4 object-contain'
              />
            </div>
          </article>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;
