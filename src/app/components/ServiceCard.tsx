import Image from "next/image";

type ServiceCardProps = {
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
};

export default function ServiceCard({ title, description, price, duration, image }: ServiceCardProps) {
  return (
    <article
      className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className="text-left">
        <h3 className="service-title" itemProp="name">{title.toUpperCase()}</h3>
        <p className="service-desc mt-3" itemProp="description">"{description}"</p>
        <div className="service-meta mt-10">
          — {price} — {duration}
        </div>
      </div>
      <div>
        <Image
          src={image}
          alt={`${title} service`}
          width={800}
          height={600}
          className="w-full h-[320px] sm:h-[380px] object-cover rounded-lg grayscale"
        />
      </div>
    </article>
  );
}