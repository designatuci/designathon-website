import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import DOTImage from "@components/common/dot-image";
import { LinkedinIconFill } from "@components/icons/linkedin";
import { cubicBezier, motion } from "motion/react";
import Link from "next/link";
import { ComponentProps } from "react";

export interface Profile {
  name: string;
  position: string;
  linkedInURL: string;
  imageURL: string;
}

function Team() {
  return (
    <section className="noise flex min-h-screen flex-col items-center gap-4 bg-(--blue) py-20 lg:py-32">
      <div className="container text-white">
        <h2 className="text-center font-title text-3xl leading-tight font-bold sm:text-left sm:text-4xl lg:text-5xl xl:text-6xl">
          Meet the Team
        </h2>
        <p className="mb-8 text-center text-lg font-medium sm:text-left lg:text-2xl">
          Introducing the 2025 Design-a-thon Team!
        </p>
        <Tabs defaultValue="directors">
          <TabsList className="bg-transparent">
            <TeamTabTrigger value="directors">Directors</TeamTabTrigger>
          </TabsList>
          <TabsContent value="directors">
            <TeamSection profiles={directors} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

export default Team;

function TeamTabTrigger({
  children,
  ...props
}: ComponentProps<typeof TabsTrigger>) {
  return (
    <TabsTrigger
      className={cn(
        "rounded-full border-0 px-8 py-6 text-lg !text-white lg:text-xl",
      )}
      {...props}
    >
      {children}
    </TabsTrigger>
  );
}

type TeamSectionProps = {
  profiles: Profile[];
};

function TeamSection({ profiles }: TeamSectionProps) {
  return (
    <div className="py-8 text-white">
      <div className="grid grid-cols-2 justify-items-center gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-y-16 3xl:grid-cols-6">
        {profiles.map((profile, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
              ease: cubicBezier(0.165, 0.84, 0.44, 1),
            }}
            className="flex flex-col items-center gap-2"
          >
            <div className="relative size-32 lg:size-40">
              <DOTImage
                src={profile.imageURL}
                alt={profile.name}
                className="rounded-full border-[1px] border-white object-cover"
                sizes="25vw"
                fill
              />
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-center text-xl font-semibold">
                {profile.name}
              </h3>
              <p className="text-center text-sm text-zinc-100">
                {profile.position}
              </p>
              <Link
                href={profile.linkedInURL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex w-fit items-center justify-center gap-2 rounded-md bg-[#E8F4FFCC] px-2 py-1 text-sm font-bold text-(--blue) [&_svg]:inline-block [&_svg]:size-4 [&_svg]:fill-(--blue)"
              >
                <LinkedinIconFill />
                Linkedin
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const directors: Profile[] = [
  {
    name: "Jasmine Wu",
    position: "Design-a-thon Director",
    linkedInURL: "https://www.linkedin.com/in/jaslavie/",
    imageURL: "/images/seasons/2025/landing/team/directors/jasmine.jpg",
  },
  {
    name: "Amy Zhou",
    position: "Design Director - UI/UX",
    linkedInURL: "https://www.linkedin.com/in/yanamyzhou",
    imageURL: "/images/seasons/2025/landing/team/directors/amy.jpg",
  },
  {
    name: "Megan Deseo",
    position: "Design Director - Graphics",
    linkedInURL: "https://www.linkedin.com/in/megan-deseo/",
    imageURL: "/images/seasons/2025/landing/team/directors/megan.jpg",
  },
  {
    name: "Jerry Nguyen",
    position: "Operations Director",
    linkedInURL: "https://www.linkedin.com/in/duyjerry/",
    imageURL: "/images/seasons/2025/landing/team/directors/jerry.jpg",
  },
  {
    name: "Brandon Phan",
    position: "Marketing Director",
    linkedInURL: "https://www.linkedin.com/in/brandonphan03/",
    imageURL: "/images/seasons/2025/landing/team/directors/brandon.jpg",
  },
  {
    name: "John Daniel Norombaba",
    position: "Corporate Director",
    linkedInURL: "https://www.linkedin.com/in/norombabajd/",
    imageURL: "/images/seasons/2025/landing/team/directors/johndaniel.jpg",
  },
  {
    name: "Laila Wafaie",
    position: "Corporate Director",
    linkedInURL: "https://www.linkedin.com/in/laila-wafaie/",
    imageURL: "/images/seasons/2025/landing/team/directors/laila.jpg",
  },
  {
    name: "Tanvee Patil",
    position: "Design Director (Graphics)",
    linkedInURL: "https://www.linkedin.com/in/tanveepatil/",
    imageURL: "/images/seasons/2025/landing/team/directors/tanvee.jpg",
  },
  {
    name: "Sean Fong",
    position: "Webmaster",
    linkedInURL: "https://www.linkedin.com/in/seancfong/",
    imageURL: "/images/seasons/2025/landing/team/directors/sean.jpg",
  },
];
