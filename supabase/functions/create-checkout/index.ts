
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { blueprintId, origin } = await req.json();
    
    // Initialize Stripe
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2023-10-16",
    });

    // Map blueprint IDs to their respective prices and names
    const blueprintData: Record<number, { price: number; name: string }> = {
      2: { price: 1900, name: "Facebook Marketplace Secrets" },
      3: { price: 9700, name: "3D Blueprint: Ultimate Edition" },
      4: { price: 29700, name: "Custom Tailored 3D Blueprint" },
      5: { price: 99700, name: "Product Design Bundle" },
      6: { price: 199700, name: "Complete Business Bundle" }
    };

    const blueprint = blueprintData[blueprintId];
    if (!blueprint) {
      throw new Error("Invalid blueprint ID");
    }

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: blueprint.name,
            },
            unit_amount: blueprint.price, // Price in cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/payment-success`,
      cancel_url: `${origin}/`,
    });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
