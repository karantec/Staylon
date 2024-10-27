
import 'bootstrap/dist/css/bootstrap.min.css';

const Testimon = () => {
  // Define an array of testimonials for Staylon Beauty Parlour
  const testimonials = [
    {
      name: "Aditi Sharma",
      text: "I had an amazing experience at Staylon Beauty Parlour! The staff was friendly and professional, and they truly understood my needs. The services they provided, from hair styling to facials, were top-notch. I left feeling rejuvenated and confident. I highly recommend Staylon Beauty Parlour!",
      designation: "Satisfied Customer",
    },
    {
      name: "Neha Gupta",
      text: "I've been going to Staylon Beauty Parlour for years, and I'm always impressed by their consistent quality. The staff is highly skilled and knowledgeable, and they use top-of-the-line products. Whether it's a haircut, manicure, or bridal makeup, they never disappoint. Staylon Beauty Parlour is my go-to place for all my beauty needs.",
      designation: "Long-time Customer",
    },
    {
      name: "Pooja Singh",
      text: "I visited Staylon Beauty Parlour for the first time, and I was blown away by the level of service. The ambiance was relaxing, and the staff made me feel welcome. The facial I received was incredibly refreshing, and the results were noticeable. I'm grateful to have discovered such a fantastic beauty parlour in Bokaro.",
      designation: "First-time Visitor",
    },
    {
      name: "Riya Patel",
      text: "I had my wedding makeup done at Staylon Beauty Parlour, and I couldn't have asked for a better experience. The makeup artist was skilled and listened to my preferences. They created a stunning look that perfectly complemented my features and outfit. I received numerous compliments throughout the day, and I felt like a princess!",
      designation: "Bride",
    },
    {
      name: "Simran Kaur",
      text: "Staylon Beauty Parlour is a hidden gem in Bokaro. I stumbled upon it by chance and was pleasantly surprised by the exceptional service. The ambiance is serene and relaxing, creating the perfect environment for self-care. The staff is highly skilled and attentive, ensuring that every visit is a delightful experience.",
      designation: "Happy Customer",
    },
    {
      name: "Sneha Reddy",
      text: "Staylon Beauty Parlour is my go-to place for skincare treatments. Their facials are absolutely divine. The estheticians are knowledgeable and passionate about what they do, and they customized the treatment to suit my skin type and concerns. After each visit, my skin feels refreshed, rejuvenated, and glowing. I can't recommend Staylon Beauty Parlour enough!",
      designation: "Skincare Enthusiast",
    },
    {
      name: "Ananya Joshi",
      text: "The hair styling services at Staylon Beauty Parlour are exceptional. I always leave with the perfect haircut and style that complements my personality. The stylists are amazing and really take the time to understand what you want.",
      designation: "Regular Customer",
    },
    {
      name: "Divya Nair",
      text: "I love the massage services at Staylon Beauty Parlour! It's the perfect way to unwind after a long week. The therapists are highly skilled and really know how to relieve stress.",
      designation: "Relaxation Seeker",
    },
    {
      name: "Kajal Mehta",
      text: "Every visit to Staylon Beauty Parlour feels like a mini-vacation. The atmosphere is calming, and I always leave feeling pampered and rejuvenated.",
      designation: "Frequent Visitor",
    },
    {
      name: "Sanya Verma",
      text: "I can't recommend their bridal packages enough! They truly cater to your needs and ensure that you look stunning on your special day.",
      designation: "Bridal Client",
    },
    {
      name: "Ragini Roy",
      text: "The staff at Staylon Beauty Parlour are so friendly and welcoming. They make you feel at home while providing top-notch services.",
      designation: "Loyal Customer",
    },
    
    {
      name: "Geeta Sharma",
      text: "Staylon Beauty Parlour exceeded my expectations! I had a great experience, and I will definitely be returning.",
      designation: "New Customer",
    },
    {
      name: "Priya Sinha",
      text: "Their hair coloring services are on point! I love the way they always achieve the perfect shade for me.",
      designation: "Coloring Client",
    },
    {
      name: "Riya Choudhary",
      text: "I've never felt more pampered! The treatments are worth every penny.",
      designation: "Satisfied Client",
    },
   
  ];

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Testimonials</h1>
      <div className="row">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <p className="card-text">"{testimonial.text}"</p>
                <h5 className="card-title">{testimonial.name}</h5>
                <h6 className="card-subtitle text-muted">{testimonial.designation}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimon;
