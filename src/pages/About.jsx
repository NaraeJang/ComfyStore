const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nam
        excepturi modi, ut obcaecati consectetur tempore atque itaque
        consequuntur nemo reiciendis delectus iusto doloremque fugit rerum hic.
        Reprehenderit, quod sint.
      </p>
    </>
  );
};
export default About;
