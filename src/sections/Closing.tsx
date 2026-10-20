import Reveal from '../components/Reveal'
import { closingMessage } from '../data/site'

export default function Closing() {
  return (
    <section id="message" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <div className="surface relative overflow-hidden rounded-[2rem] px-8 py-16 text-center md:px-16 md:py-24">
          <p className="text-xs font-semibold tracking-[0.28em] text-accent uppercase">
            {closingMessage.eyebrow}
          </p>
          <p className="font-display mx-auto mt-6 max-w-4xl text-3xl leading-tight font-bold tracking-tight text-heading md:text-5xl">
            “{closingMessage.statement}”
          </p>
        </div>
      </Reveal>
    </section>
  )
}
