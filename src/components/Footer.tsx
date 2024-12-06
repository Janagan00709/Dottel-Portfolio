import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { MailIcon } from "lucide-react";
import { PhoneIcon, Linkedin } from "lucide-react";
import { InstagramLogoIcon } from "@radix-ui/react-icons";


export default function Footer() {
  // get the current time in UTC+1 time zone
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      date.setHours(date.getHours());
      setTime(
        date.toLocaleTimeString("en-US", {
          hour12: true,
          hour: "numeric",
          minute: "numeric",
        }),
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-gradient-to-t from-primary/[1%] to-transparent">
      <div className="container mx-auto flex flex-row items-center justify-between py-6">
        <span className="flex flex-row items-center space-x-4">
          <p className="text-xs text-muted-foreground">
            Made by team Dottel{" "}
            {/* <Link
              href="C:/Users/karth/OneDrive/Desktop/web prac/developer-portfolio-2/developer-portfolio-2/src/pages/index.tsx"
              target="_blank"
              passHref
              className="text-foreground transition hover:text-primary"
            >
              Dottel
            </Link> */}
          </p>
          <hr className="hidden h-6 border-l border-muted md:flex" />
          <span className="flex hidden flex-row items-center space-x-2 md:flex">
            <p className="text-xs text-muted-foreground">Local time:</p>
            <p className="text-sm font-semibold">{time} UTC+1</p>
          </span>
        </span>
        <Link
  href="https://mail.google.com/mail/?view=cm&fs=1&to=teamdottel@gmail.com&su=Client%20Call&body=I%20would%20like%20to%20discuss..."
  target="_blank"
  passHref
  className="text-xs text-muted-foreground hover:text-foreground"
>
  <Button variant={"outline"}>
    <MailIcon className="h-4 w-4 md:mr-2" />
    <span className="hidden md:flex">Gmail</span>
  </Button>
</Link>


        
        <Link
  href="https://wa.me/9751990206" 
  target="_blank"
  passHref
  className="text-xs text-muted-foreground hover:text-foreground"
>
  <Button variant={"outline"}>
    <PhoneIcon className="h-4 w-4 md:mr-2" />
    <span className="hidden md:flex">WhatsApp Call</span>
  </Button>
</Link>


<Link
          href="mailto:teamdottel@gmail.com?subject=Client Call&body=I%20would%20like%20to%20discuss..." 
          passHref
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          <Button variant={"outline"}>
            <Linkedin className="h-4 w-4 md:mr-2" />
            <span className="hidden md:flex">LinkedIN</span>
          </Button>
        </Link>



        <Link
  href="https://www.instagram.com/teamdottel/" 
  target="_blank"
  rel="noopener noreferrer"
  passHref
  className="text-xs text-muted-foreground hover:text-foreground"
>
  <Button variant={"outline"}>
    <InstagramLogoIcon className="h-4 w-4 md:mr-2" />
    <span className="hidden md:flex">Instagram</span>
  </Button>
</Link>

      </div>
      <div className="h-1 bg-[radial-gradient(closest-side,#8486ff,#42357d,#5d83ff,transparent)] opacity-50" />
    </footer>
  );
}
