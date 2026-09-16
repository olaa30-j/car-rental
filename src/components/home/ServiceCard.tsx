interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

export default function ServiceCard({
  image,
  title,
  description,
}: ServiceCardProps) {
  return (
    <article
      className="
        mx-auto
        w-full
        max-w-[357px]
        h-[194px]
        p-[10.5px]
        text-center
        rounded-[var(--border-radius)]
        bg-[var(--background-color)]
        flex 
        flex-col
        items-center
      "
    >
      {/* Service Image */}
      <img
        src={image}
        alt={title}
        className="
          mx-auto
          w-[64px]
          h-[64px]
          object-cover
        "
      />

      {/* Service Title */}
      <h4 className="my-[10px]">
        {title}
      </h4>

      {/* Service Description */}
      <p
        className="
          text-[16px]
          leading-[24px]
          font-normal
        "
      >
        {description}
      </p>
    </article>
  );
}