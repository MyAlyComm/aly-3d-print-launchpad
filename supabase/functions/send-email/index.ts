
import React from 'npm:react@18.3.1'
import { Resend } from 'npm:resend@4.0.0'
import { renderAsync } from 'npm:@react-email/components@0.0.22'
import { GuideEmail } from './_templates/guide-email.tsx'

const resend = new Resend(Deno.env.get('RESEND_API_KEY') as string)

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email } = await req.json()

    // TODO: Replace with actual guide download link
    const downloadLink = 'https://3dstudio.com/downloads/3d-printing-guide.pdf'

    const html = await renderAsync(
      React.createElement(GuideEmail, {
        name,
        downloadLink,
      })
    )

    const { error } = await resend.emails.send({
      from: '3D Printing Blueprint <onboarding@resend.dev>',
      to: [email],
      subject: 'Your 3D Printing Guide is Ready!',
      html,
    })

    if (error) {
      throw error
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    console.error('Error sending guide email:', error)
    return new Response(
      JSON.stringify({
        error: error.message,
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
})
