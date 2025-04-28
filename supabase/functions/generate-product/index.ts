
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { RunwareService } from "./runware.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { productDetails } = await req.json()
    const apiKey = Deno.env.get('3D Blueprint Runware')
    
    if (!apiKey) {
      throw new Error('Runware API key not configured')
    }

    const runwareService = new RunwareService(apiKey)
    
    // Generate the product prompt
    const prompt = `A professional product visualization of a ${productDetails.style} ${productDetails.category} that helps ${productDetails.problem}. Show the product from multiple angles in a clean studio setting with professional lighting. The product should look premium and well-designed.`

    // Generate multiple images for different views
    const imagePromises = []
    for (let i = 0; i < 4; i++) {
      imagePromises.push(
        runwareService.generateImage({
          positivePrompt: prompt,
          seed: Math.floor(Math.random() * 1000000),
          model: "runware:100@1",
        })
      )
    }

    const generatedImages = await Promise.all(imagePromises)
    const imageUrls = generatedImages.map(img => img.imageURL)

    // Generate product name and description
    const productName = `${
      productDetails.style.charAt(0).toUpperCase() + productDetails.style.slice(1)
    } ${productDetails.category.charAt(0).toUpperCase() + productDetails.category.slice(1)}`

    const features = [
      `${productDetails.style} design aesthetic`,
      `Solves ${productDetails.problem}`,
      `Made with ${productDetails.materials.join(' and ')}`,
      `Optimized dimensions for practical use`,
      `Easy to manufacture with 3D printing`,
    ]

    return new Response(
      JSON.stringify({
        mainImage: imageUrls[0],
        images: imageUrls,
        productName,
        productDescription: `A ${productDetails.style} solution designed to ${productDetails.problem}, crafted with premium ${productDetails.materials.join(' and ')}. Perfect for those seeking both functionality and aesthetic appeal.`,
        features
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})
