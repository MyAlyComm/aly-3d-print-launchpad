
import { Card, CardContent } from "@/components/ui/card";

export const ArbitrageIntro = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">ARBITRAGE WINDOWS - THE TIMELINES OF OPPORTUNITY</h2>
      <p className="text-gray-700">
        In business, the biggest profits don't come from being better. They come from being early.
      </p>
      <p className="text-gray-700">
        Whenever a new technology emerges, there's a golden period where supply hasn't caught up with demand. Where knowledge isn't widespread. Where the competition is minimal, and the margins are massive.
      </p>
      <p className="text-gray-700">
        I call these "Arbitrage Windows."
      </p>
      <div className="space-y-3">
        <p className="text-gray-700">An arbitrage window opens when:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>A technology becomes accessible to average people</li>
          <li>But knowledge about how to leverage it remains limited</li>
          <li>And the market hasn't yet been flooded with competitors</li>
        </ul>
      </div>
      <p className="text-gray-700">
        This creates a brief period—sometimes months, sometimes a few years—where extraordinary profits are possible for those who recognize the opportunity and act.
      </p>
    </div>
  );
};
