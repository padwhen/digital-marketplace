import Link from "next/link";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";

const perks = [
  {
    name: "Exclusive Merchandise Access",
    Icon: ArrowDownToLine,
    description: "Gain VIP status and be the first to get your hands on limited-edition K-pop merchandise, from autographed albums to exclusive concert goodies. Enjoy a premier shopping experience with access to items that true K-pop enthusiasts crave."
  },
  {
    name: "Fan Club Rewards Program",
    Icon: CheckCircle,
    description: "Join our loyalty program and unlock a world of perks! Earn points with every purchase, participate in exciting challenges, and redeem rewards like discounts, freebies, and even meet-and-greet opportunities with your favorite K-pop stars. It's our way of celebrating your devotion to the K-pop community."
  },
  {
    name: "Customized K-pop Bundles",
    Icon: Leaf,
    description: "Personalize your K-pop journey with curated bundles tailored to your bias or favorite groups. From fashion-forward apparel to must-have accessories, our customized packages ensure you receive a unique collection that mirrors your fandom passion. Embrace your individuality while celebrating the best of K-pop culture"
  },
]

export default function Home() {
  return (
    <>
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Harmony in Style, Rhythm in Fashion  
          <span className="text-blue-600"> - Your K-Pop Paradise Awaits!</span>
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">Elevate your K-pop experience with trendsetting merch and exclusive collectibles at our one-stop K-pop haven!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href='/products' className={buttonVariants()}>Browse Trending</Link>
          <Button variant='ghost'>Our quality promise &rarr; </Button>
        </div>
      </div>
    </MaxWidthWrapper>
    <section className="border-t border-gray-200 bg-gray-50">
      <MaxWidthWrapper className="py-20">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {perks.map((perk) => (
            <div key={perk.name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
              <div className="md:flex-shrink-0 flex justify-center">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                  {<perk.Icon className="w-1/3 h-1/3" />}
                </div>
              </div>
              <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                <h3 className="text-base font-medium text-gray-900">{perk.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{perk.description}</p>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
    </>
  )
}
