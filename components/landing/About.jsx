import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Twitter, Linkedin } from 'lucide-react';

const teamList = [
  {
    imageUrl:
      'https://res.cloudinary.com/douwvycai/image/upload/f_auto,q_auto/q0nosbkix2z9xfkqwajc',
    name: 'Nick Bolt',
    socialNetworks: [
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/nicolas-bolt-59a523131/',
      },
      // {
      //   name: 'Twitter',
      //   url: 'https://x.com/_nbolt',
      // },
    ],
    content: [
        `I’ve been helping businesses fix tech headaches and build better websites for over 5 years.`,
        `Most business owners are juggling everything: sales, operations, customers. You don’t have time to deal with a slow, outdated site.`,
        `So I take the website off your plate. Fast, mobile-friendly, and built to bring in more calls and quote requests.`,
        `No templates. No learning curves. Just tell me what you do, and I’ll build a site that shows it clearly, professionally, and earns trust.`,
        `Let me handle your website so you can focus on running your business.`,
      ],
  },
];

const About = () => {
  const socialIcon = (iconName) => {
    switch (iconName) {
      case 'Linkedin':
        return <Linkedin size='20' />;

      //   case 'Twitter':
      //     return <Twitter size='20' />;
    }
  };

  return (
    <div className='md:px-0 px-3'>
    <section id='team' className='container py-24 sm:py-32 mx-auto'>
      <h2 className='text-3xl md:text-4xl font-bold mx-auto text-center'>
        <span className='bg-clip-text'></span>
        More About Me!{/* Crew */}
      </h2>

      <p className='mt-4 mb-10 text-xl text-muted-foreground'>
        {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
        dolor pariatur sit! */}
      </p>

      <div className='md:w-5/12 w-full mx-auto gap-8 gap-y-10 pt-10'>
        {teamList.map(
          ({ imageUrl, name, socialNetworks, content }) => (
            <Card
              key={name}
              className='bg-muted/20 relative mt-8 flex flex-col justify-center items-center border-2 border-customTan'
            >
              <CardHeader className='mt-8 flex justify-center items-center pb-2'>
                <img
                  src={imageUrl}
                  alt={`${name}`}
                  className='absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover border-2 border-customTan shadow-lg'
                />
                <CardTitle className='text-center pb-8'>{name}</CardTitle>
              </CardHeader>

              <CardContent className='text-center pb-2 sm:w-8/12 w-full'>
                {content.map((paragraph, index) => (
                  <p key={index} className='mb-7'>
                    {paragraph}
                  </p>
                ))}
              </CardContent>

              <CardFooter>
                {socialNetworks.map(({ name, url }) => (
                  <div key={name}>
                    <a
                      rel='noreferrer noopener'
                      href={url}
                      target='_blank'
                      className={buttonVariants({
                        variant: 'ghost',
                        size: 'sm',
                      })}
                    >
                      <span className='sr-only'>{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
    </div>
  );
};

export default About;
