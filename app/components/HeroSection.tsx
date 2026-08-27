import heroImage from '~/assets/images/download.png';

export function HeroSection() {
  return (
    <section className="hero-section">
         <img
      src={heroImage}
      alt="Hero Image"
    />
    </section>
  );
}