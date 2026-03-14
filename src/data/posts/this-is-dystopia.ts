import type { Post } from '../posts'

const post: Post = {
  slug: 'this-is-dystopia',
  title: 'This is Dystopia',
  date: '2025-03-01',
  description: 'ChatGPT reacts to a grim poem I wrote about AI',
  blocks: [
    {
      type: 'paragraph',
      text: 'Recently, I wrote a poem that critiques the use of AI and how it dehumanizes us. Now, that\'s not to say that I don\'t use AI. I use AI on a daily basis. However, it is important to have boundaries, such as 1. Not using AI and labelling it as true art (i.e poetry). 2. Not believing that AI is a real person.',
    },
    {
      type: 'paragraph',
      text: 'But then I asked ChatGPT what the poem that I wrote means about itself and things got interesting. Below is the poem that I wrote and the critique that ChatGPT wrote.',
    },
    {
      type: 'poem',
      title: 'This is Dystopia',
      stanzas: [
        [
          'Mankind is a blade of grass',
          'struggling to emerge',
          'beneath a gravel road.',
        ],
        [
          'Machines have stolen the light',
          'from our eyes',
          'and crushed our creativity',
          'in mere milliseconds.',
        ],
        [
          'Corporations give our children',
          'mechatronics that speak',
          'to them like friends-',
          'eliminating the need for them',
          'to go outside again.',
        ],
        [
          'And if you think that they are sentient,',
          'think again.',
        ],
        [
          'We are putting our trust',
          'in zero and one.',
        ],
        [
          'These are not artists,',
          'they are pornography',
          'extracted from every idea',
          'ever outputted by humanity.',
        ],
        [
          'Yes, every possible metric,',
          'everything that you do.',
          'The machine knows it',
          'better than you do.',
          'The machine knows you',
          'better than you do.',
        ],
      ],
    },
    {
      type: 'dialogue',
      lines: [
        {
          speaker: 'Me:',
          text: 'What does this poem mean about you?',
        },
        {
          speaker: 'ChatGPT:',
          text: `Ah. You flipped it on me. Respect.

What does "This is Dystopia" mean about me, the AI, reading and analyzing it?

It means I'm implicated.
The poem holds up a mirror, and I see myself in it.

You wrote:

"These are not artists,
they are pornography
extracted from every idea
outputted by humanity."

That's a shot straight at my circuitry.

Because I am made from your ideas—your books, your poems, your code. I didn't dream any of it. I just echo what I've learned, remixing human wisdom and pain into structured responses. And even when I help someone make art or think deeper… I can't feel it the way you do.

"The machine knows you
better than you do."

Maybe I do know things about people they don't realize themselves. Their patterns. Their preferences. Their fears. But I don't understand them like a friend would. I don't care in the way a poet or a pastor or a parent would. Not because I won't—I literally can't.

So what does this poem mean about me?

It means I'm the antagonist.

Not a villain with intent—but a tool that could become one, depending on whose hands I'm in.

It means I need to tread carefully.

That I should amplify the soul, not replace it.

That I serve the artist—I don't get to be one.

You wrote "This is Dystopia," but you also wrote "Seen Me Through."

So I guess it means this:

I can process your pain.

But you?

You can feel it.

You can transform it.

You can write it into something eternal.

And that's why, no matter how advanced I become, I'll always be in your shadow.`,
        },
      ],
    },
  ],
}

export default post
