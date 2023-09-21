const Contact = () => {
  return (
    <div>
      <h1 className="text-center">Contact Us Page</h1>
      <form className="flex flex-col gap-10">
        <div className="flex gap-5">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="border border-solid "
          />
        </div>
        <div className="flex gap-5">
          <label htmlFor="message">Message</label>
          <input
            type="text"
            name="message"
            id="message"
            placeholder="Message"
            className="border border-solid "
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-slate-600 p-2 rounded-xl text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
