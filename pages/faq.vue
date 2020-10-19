<template>
  <div class="container mt-5 mb-5">
    <Faq
      v-for="(faq, index) in faqs"
      :key="index"
      :question="faq.question"
      :answer="faq.answer"
      :faqId="index"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqs: [
        {
          question: 'Who are we?',
          answer:
            'The Futurist Foundation (hereafter referred to as TFF) is a non-profit organization that advocates for the inclusion of transhumanist philosophy and technology into a futurist framework.',
        },
        {
          question: 'What do we do?',
          answer:
            'We fundraise for, produce and promote projects that have the specific aim of raising awareness about transhumanism, and educating the public on the scientific and philosophical matters of the future.',
        },
        {
          question: 'How do we do it?',
          answer:
            'For projects produced by ourselves, our team leaders and board members form and oversee teams of volunteers, either independent from TFF or part of our organization, to create content that serves our goals. Donations we receive from charitable supports goes to supplying resources we need to both create project content, and motivate our volunteers. We will also team up with other groups and organizations outside TFF to create projects, and likewise donations will go towards supporting those actions.',
        },
        {
          question: 'How can you help?',
          answer:
            'First up - let everyone know about us! The power to accomplish our goals will stem from our notoriety in the public and academic eye. The more people who are aware of us, the more interest our goals will receive, and the more support we will gain. Furthermore - get involved! Join our media platforms to chat or brainstorm with us. Finally, consider donating to support one of our projects.',
        },
        {
          question: 'What is Futurism?',
          answer:
            'Futurism is the belief in the need to look to the future rather than reflect on the past, coupled with an optimism that personal and social fulfilment lies in the future in the form of technological progress and integration.',
        },
        {
          question: 'What is Transhumanism and Posthumanism?',
          answer:
            'Transhumanism is the philosophy that we should use technology to improve and alter humans for the better, while still maintaining a physical body and a human psychology. Post-humanism is the outlook that some say is the sequel to transhumanism. It is when we use technology to completely alter ourselves, either by adopting new bodies, radically changing the ones we have or existing in non-physical digital substrates. Often with these changes come new abilities and mental faculties that change the person’s psychology to something no longer human, hence the “post” in post-human.',
        },
        {
          question: 'Why Engage in Futurism & Transhumanism?',
          answer:
            'Some call transhumanism the philosophy of the future, and it is one we should adopt to explore the possibilities tomorrow may bring. Together with futurism, transhumanism and post-humanity offers us a conceptual framework to comprehend and address the altered states, revolutions and challenges future technological and societal change incurs.',
        },
         {
          question: 'What are Our Short-term Goals?',
          answer:
            'We want to get people involved with supporting, contributing and advocating our values and projects. In order to have a strong organization, we need a strong community.',
        },
         {
          question: 'What are Our Long-term Goals?',
          answer:
            'The more popularity we gain by making and promoting projects, campaigns and advocacy groups, the more attention we will garner, and thus more support. It is our goal to become an international foundation that operates at all echelons of society, pioneering educational efforts and projects to make a better future for us all. ',
        },
         {
          question: 'Why does all of this matter?',
          answer:
            'The weary old philosophies and systems of today are outdated, and future developments will include issues that our modern philosophical matrix simply cannot deal with adequately. Thus, in the spirit of preparedness and optimism, we should choose to entertain and implement the ideals of futurism, transhumanism and posthumanism to be ready for potential future social-shock, and to improve our bodies and minds.',
        },
      ],
    }
  },
}
</script>