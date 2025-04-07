import {
  TextRevealCard,
} from "./ui/text-reveal-card";

const TextViewLarge = () => {
  return (
    <section className='min-w-fit'>
          <TextRevealCard
        text="Swipe For Meeting Timing"
        revealText="Upcoming Meeting: 12:30 PM"
      ></TextRevealCard>
    </section>
  )
}

export default TextViewLarge