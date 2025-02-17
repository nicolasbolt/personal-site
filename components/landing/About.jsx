import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
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
    // position: 'FluentBurst Founder',
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
        `I have been solving tech and IT problems for over 5 years.`,
        `I understand how difficult and confusing it can be to handle digital marketing, web development, and IT issues while also trying to run a business.`,
        `I have built many websites for clients who have had this same problem.`,
        `This website is a great example of what I can do for you.`,
        `I can create a web interface that is easy to navigate and understand.`,
        `I can create website copy that creates an emotional connection with your audience, convinces them with logic, and builds trust.`,
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
        Here is More About Me!{/* Crew */}
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
              className='bg-muted/50 relative mt-8 flex flex-col justify-center items-center'
            >
              <CardHeader className='mt-8 flex justify-center items-center pb-2'>
                <img
                  src={imageUrl}
                  alt={`${name}`}
                  className='absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover'
                />
                <CardTitle className='text-center'>{name}</CardTitle>
              </CardHeader>

              <CardContent className='text-center pb-2'>
                {content.map((paragraph, index) => (
                  <p key={index} className='mb-4'>
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
