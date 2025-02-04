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
        `As a software engineer with four years of experience, I specialize in building scalable and efficient software solutions using Python, JavaScript, and AWS.`,
        `My expertise spans both front-end development with React and Next.js and back-end development with Node.js and Python.`,
        `I hold the AWS Certified Cloud Practitioner certification and have a strong background in designing secure, high-performing cloud architectures using services like Lambda, API Gateway, and S3.`,
        `From small-scale solutions to enterprise-level systems, I’ve successfully collaborated with cross-functional teams to develop and deploy applications that meet real-world needs.`,
        `I’m passionate about creating seamless experiences and ensuring every application is built to scale.`,
        `Whether it’s crafting efficient code or optimizing cloud infrastructure, I’m always focused on delivering reliable solutions that perform at their best.`,
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
    // <div className='bg-slate-50'>
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
    // </div>
  );
};

export default About;

