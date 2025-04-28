
import React from 'npm:react@18.3.1'
import { Resend } from 'npm:resend@0.0.0'
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
    const { name, email, requestType } = await req.json()

    // Get the base URL from the request origin or a configurable environment variable
    // This ensures we always use absolute URLs that match where the request came from
    const origin = req.headers.get('origin') || Deno.env.get('BASE_URL') || 'https://3dprintingblueprint.com'
    
    // Always direct people straight to the dashboard with absolute URL
    const downloadLink = `${origin}/dashboard`
    let emailSubject = 'Your 3D Printing Guide is Ready!'

    // Set email subject based on request type
    if (requestType === 'commercial_license') {
      emailSubject = 'Your Commercial License Access'
    }

    const html = await renderAsync(
      React.createElement(GuideEmail, {
        name,
        downloadLink,
        requestType,
      })
    )

    const { error } = await resend.emails.send({
      from: '3D Printing Blueprint <onboarding@resend.dev>',
      to: [email],
      subject: emailSubject,
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
