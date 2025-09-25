import SingleLineInput from './SingleLineInput';

const Contact = () => {
  return (
    <>
      <p>
        {' '}
        if you are interested in getting in touch with me, to raise your project
        to the next level, please dont hesitate to ask!
      </p>
      <p>E-mail: info@bastidev.com</p>
      <p> or use this amazing form:</p>
      <div className="flex flex-col gap-5">
        <div className="flex flex-row gap-5 w-full">
          {/* Linke Spalte */}
          <div className="flex flex-col gap-5 flex-1">
            <SingleLineInput label="Name" required={true} />
            <SingleLineInput label="E-mail" required={true} />
          </div>
          {/* Rechte Spalte */}
          <div className="flex flex-col gap-5 flex-1">
            <SingleLineInput label="Company" required={false} />
            <SingleLineInput label="Phone number" required={false} />
          </div>
        </div>
        <div className="w-full">
          <form className="flex flex-col items-start gap-2 w-full">
            <label
              className="font-bold font-sans text-left text-blue-900"
              htmlFor="message"
            >
              Your Message:
            </label>
            <textarea
              className="rounded-lg bg-blue-100 shadow-lg shadow-blue-500/50 pl-3 py-2 w-full"
              id="message"
              name="message"
              rows={5}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
