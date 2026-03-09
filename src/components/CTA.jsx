import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Have a product idea or redesign goal?
        <br className='sm:block hidden' />
        Let us plan and ship it.
      </p>
      <Link to='/contact' className='btn'>
        Start a Conversation
      </Link>
    </section>
  );
};

export default CTA;
