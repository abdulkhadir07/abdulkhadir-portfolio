type SectionHeadingProps = {
  index: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({
  index,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="text-xs font-semibold tracking-[0.28em] text-accent uppercase">{index}</p>
      <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-heading md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{description}</p>
      ) : null}
    </div>
  )
}
