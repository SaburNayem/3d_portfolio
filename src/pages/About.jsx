import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, services, skills, stats } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Building products with{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          precision and personality
        </span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-600'>
        <p>
          I am Md Nayem Hossen, a software engineer focused on performant, production-ready
          web experiences. I blend product thinking with clean engineering to
          ship features that are both useful and maintainable.
        </p>
      </div>

      <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 mt-10'>
        {stats.map((item) => (
          <div key={item.label} className='surface-card'>
            <p className='text-3xl font-poppins font-semibold text-slate-900'>{item.value}</p>
            <p className='text-sm text-slate-600 mt-1'>{item.label}</p>
          </div>
        ))}
      </div>

      <div className='py-14 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-10 flex flex-wrap gap-8'>
          {skills.map((skill) => (
            <div className='surface-card min-w-[180px] flex items-center gap-4' key={skill.name}>
              <div className='block-container w-16 h-16'>
                <div className='btn-back rounded-xl' />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
              <div>
                <p className='font-poppins font-semibold text-slate-900'>{skill.name}</p>
                <p className='text-xs text-slate-500'>{skill.type}</p>
                <p className='text-xs text-sky-700 mt-1'>{skill.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='pb-8'>
        <h3 className='subhead-text'>Core Services</h3>
        <div className='mt-6 grid md:grid-cols-2 gap-4'>
          {services.map((service) => (
            <article key={service.title} className='surface-card'>
              <h4 className='font-poppins text-lg font-semibold text-slate-900'>
                {service.title}
              </h4>
              <p className='text-slate-600 mt-2'>{service.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className='py-12'>
        <h3 className='subhead-text'>Work Experience</h3>
        <div className='mt-4 flex flex-col gap-3 text-slate-600'>
          <p>
            Each role strengthened my ability to turn product goals into reliable,
            user-focused systems.
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                  <p className='text-sm text-slate-600 mt-2'>{experience.summary}</p>
                  <p className='text-sm font-semibold text-sky-700 mt-2'>{experience.impact}</p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/70 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;
