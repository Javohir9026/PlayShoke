import HeroBanners from "@/components/HeroBanners";
import HeroServers from "@/components/HeroServers";

const page = () => {
  return (
    <div className="mb-10">
      <div className="hidden md:flex">
        <HeroBanners />
      </div>
      <HeroServers />
    </div>
  );
};

export default page;
