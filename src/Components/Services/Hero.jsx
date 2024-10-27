
const Hero = () => {
  return (
    <section className="relative bg-cover bg-center h-96 text-white flex items-center justify-center"
             style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/71JPH2IUNvL.jpg')` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text contrast */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Experience Ultimate Relaxation</h1>
        <p className="mb-8 text-lg">Indulge in our luxurious beauty and wellness services.</p>
       
      </div>
    </section>
  );
};

export default Hero;
