
import { Card, CardContent } from "@/components/ui/card";

export const Introduction = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Tools That Match Your Products</h2>
      
      <p className="text-gray-700">
        After identifying your Product Trinity in Chapter 4, it's time to select the right production tools to bring these products to life. Too often, I see new entrepreneurs make the mistake of choosing a 3D printer first, then trying to figure out what to make with it. This approach leads to frustration when they discover their printer isn't well-suited for their intended products.
      </p>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Industry Insights</h3>
          <p className="text-gray-700">
            Every day I get asked "Aly what printer should I buy?" The new shiny and value producing toys seen all over YouTube and Instagram are tempting to obsess over. Reviews, print speed, touchscreens, open source, closed source - the debate goes on.
          </p>
          <p className="text-gray-700 mt-4">
            Here's my two cents: most of the hardware companies actually build really great machines. Considering the amount of engineering and raw material that goes into each one it's astounding they can sell it for so cheap.
          </p>
        </CardContent>
      </Card>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">A Personal Note</h3>
        <p className="text-gray-700">
          Let me let you in on a little secret. Right now it's a turf war - the biggest companies in the space are jostling for market share. This means many manufacturers are selling at or below cost just to get a printer in the hands of the prosumer.
        </p>
        <p className="text-gray-700 mt-4">
          When I started Instagram giving 3D printing advice, I got so many comments like "you're just working for the manufacturers" or "you're just an industry plant". The irony of that statement is that many of those billion dollar companies have since reached out to me - offering me high level positions, marketing contracts and consulting gigs.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3">Ease of Use</h4>
            <p className="text-gray-700">
              As 3D printing transitions away from the geek era and into the sleek, user friendliness is where the industry is heading. Get one that's easy to use and you'll thank yourself later.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3">Resale Value</h4>
            <p className="text-gray-700">
              This is something I literally never hear anyone talk about. But when you're running a business it's SO critically important! Remember that $300 printer I first bought? Well, I sold it 6 months later for $240.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Important Note</h3>
        <p className="text-gray-700">
          The internet is insanely biased. The 3D printing forums are full of grumpy middle aged men who are quick to judge and even quicker to attack. You can watch one YouTube video of someone saying how amazing a printer is and another saying it ruined their life. Take these things with a grain of salt.
        </p>
      </div>
    </div>
  );
};
